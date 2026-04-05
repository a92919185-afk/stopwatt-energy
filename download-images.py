#!/usr/bin/env python3
"""
download-images.py — Context-aware image downloader for page-builder
Only works with Model A and Model C pages.

Usage:
  python3 download-images.py SLUG https://reference-url.com
  python3 download-images.py SLUG https://reference-url.com --slots hero,science,lab
  python3 download-images.py SLUG https://reference-url.com --list

Options:
  --slots   Comma-separated list of slots to fill. Defaults to: hero,lab,science,og-cover
            Available: hero, lab, science, og-cover
  --list    Print all images found on the page with their scores — do not download
  --min-w   Minimum image width to consider (default: 150)
  --min-h   Minimum image height to consider (default: 150)
  --quality WebP quality 1-100 (default: 85)

What it does:
  1. Reads data/SLUG.json — verifies model is A or C (refuses Model B)
  2. Fetches the reference URL and parses all <img> tags
  3. Scores each image for each slot using alt text, filename, parent element context
  4. Downloads the best match per slot
  5. Converts to WebP and saves to output/model-X/SLUG/images/

  NEVER hotlinks: all images are downloaded locally. The page HTML always
  references images/filename.webp — never an external URL.
"""

import sys
import os
import re
import json
import argparse
import urllib.parse
from io import BytesIO
from pathlib import Path

try:
    import requests
    from requests.packages.urllib3.exceptions import InsecureRequestWarning
    requests.packages.urllib3.disable_warnings(InsecureRequestWarning)
except ImportError:
    sys.exit("ERROR: 'requests' not installed. Run: pip3 install requests")

try:
    from bs4 import BeautifulSoup
except ImportError:
    sys.exit("ERROR: 'beautifulsoup4' not installed. Run: pip3 install beautifulsoup4")

try:
    from PIL import Image
except ImportError:
    sys.exit("ERROR: 'Pillow' not installed. Run: pip3 install Pillow")


# ─── Slot definitions ────────────────────────────────────────────────────────
# Each slot maps to the filename expected by the JSON data schema.
# Keywords are checked against: src filename, alt text, parent element id/class.
# Scores: high=10, medium=5, low=2, negative=-15

NEGATIVE_GLOBAL = [
    'icon', 'logo', 'badge', 'star', 'rating', 'arrow', 'check', 'flag', 'seal',
    'guarantee', 'payment', 'trust', 'sprite', 'pixel', 'tracker', 'transparent',
    'spacer', 'dot', 'bullet', 'social', 'facebook', 'twitter', 'instagram',
    'youtube', 'pinterest', 'cart', 'menu', 'hamburger', 'close', 'x-icon',
    'favicon', 'avatar', 'profile', 'user',
]

SLOTS = {
    'hero': {
        'filename': 'hero.webp',
        'description': 'Main product image (bottle, pack, primary visual)',
        'prefer_position': 'early',   # prefer images found earlier in the HTML
        'resize': (1200, None),        # max-width 1200, preserve aspect
        'keywords': {
            'high':     ['hero', 'product', 'bottle', 'supplement', 'banner', 'main-image',
                         'primary', 'pack', 'label', 'container', 'jar', 'bag'],
            'medium':   ['front', 'item', 'detail', 'featured', 'spotlight', 'cover'],
            'low':      ['image', 'photo', 'img', 'pic'],
            'negative': NEGATIVE_GLOBAL,
        },
    },
    'lab': {
        'filename': 'lab.webp',
        'description': 'Ingredients / natural / botanical image (used in benefits section)',
        'prefer_position': 'middle',
        'resize': (900, None),
        'keywords': {
            'high':     ['ingredient', 'herb', 'plant', 'botanical', 'organic', 'natural',
                         'extract', 'leaf', 'root', 'seed', 'powder', 'capsule-open',
                         'lab', 'laboratory', 'spice', 'fruit', 'vegetable'],
            'medium':   ['green', 'nature', 'garden', 'field', 'farm', 'raw', 'fresh',
                         'vitamin', 'mineral', 'source', 'pure', 'clean'],
            'low':      ['health', 'wellness', 'supplement', 'formula', 'blend'],
            'negative': NEGATIVE_GLOBAL,
        },
    },
    'science': {
        'filename': 'science.webp',
        'description': 'Science / research / mechanism image (used in how-it-works section)',
        'prefer_position': 'middle',
        'resize': (900, None),
        'keywords': {
            'high':     ['science', 'research', 'molecule', 'formula', 'clinical', 'study',
                         'laboratory', 'microscope', 'dna', 'cell', 'chemistry', 'medical',
                         'diagram', 'process', 'mechanism', 'biology', 'anatomy'],
            'medium':   ['capsule', 'pill', 'tablet', 'compound', 'bio', 'health-science',
                         'nutrition', 'metabol', 'hormone', 'enzyme'],
            'low':      ['medical', 'doctor', 'expert', 'professional'],
            'negative': NEGATIVE_GLOBAL,
        },
    },
    'og-cover': {
        'filename': 'og-cover.webp',
        'description': 'Social sharing image (1200×630px)',
        'prefer_position': 'any',
        'resize': (1200, 630),         # exact crop to OG dimensions
        'keywords': {
            'high':     ['og', 'open-graph', 'social', 'share', 'cover', 'banner',
                         'thumbnail', 'preview', 'featured'],
            'medium':   ['hero', 'product', 'main', 'primary'],
            'low':      ['image'],
            'negative': NEGATIVE_GLOBAL,
        },
    },
}

HEADERS = {
    'User-Agent': (
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
        'AppleWebKit/537.36 (KHTML, like Gecko) '
        'Chrome/124.0.0.0 Safari/537.36'
    ),
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
}

MODEL_MAP = {'A': 'model-a', 'C': 'model-c'}


# ─── Helpers ─────────────────────────────────────────────────────────────────

def log(msg, prefix='  '):
    print(f"{prefix}{msg}")

def log_ok(msg):
    print(f"  ✓  {msg}")

def log_warn(msg):
    print(f"  ⚠  {msg}")

def log_err(msg):
    print(f"  ✗  {msg}", file=sys.stderr)


def load_json(slug):
    """Load and validate the data JSON for the given slug.

    Matches by:
      1. The 'slug' field inside the JSON (authoritative)
      2. Exact filename match (data/SLUG.json)
      3. Partial filename match
    """
    base = Path(__file__).parent
    data_dir = base / 'data'
    path = None

    # Search all JSONs for a matching 'slug' field (most reliable)
    for json_file in sorted(data_dir.glob('*.json')):
        try:
            with open(json_file) as f:
                candidate = json.load(f)
            if candidate.get('slug', '').lower() == slug.lower():
                path = json_file
                break
        except (json.JSONDecodeError, OSError):
            continue

    if path is None:
        # Fallback: filename match
        exact = data_dir / f'{slug}.json'
        if exact.exists():
            path = exact
        else:
            candidates = list(data_dir.glob(f'*{slug}*.json'))
            if candidates:
                path = candidates[0]
            else:
                sys.exit(
                    f"ERROR: No JSON found for slug '{slug}' in data/\n"
                    f"  Searched by: JSON 'slug' field, filename '{slug}.json', partial match.\n"
                    f"  Available slugs: " +
                    ', '.join(
                        json.load(open(f)).get('slug', f.stem)
                        for f in sorted(data_dir.glob('*.json'))
                    )
                )

    if path is None:
        sys.exit(f"ERROR: No JSON found for slug '{slug}'")

    with open(path) as f:
        data = json.load(f)

    model = data.get('page_model', 'A').upper()
    if model not in MODEL_MAP:
        sys.exit(
            f"ERROR: Model '{model}' is not supported for image download.\n"
            f"  download-images.py only works with Model A and Model C.\n"
            f"  Model B pages must NOT copy images from competitors (legal risk)."
        )

    return data, model, path


def resolve_output_path(data, model, slug):
    """Determine and create the output images/ folder."""
    base = Path(__file__).parent
    output_slug = data.get('slug', slug)
    folder = base / 'output' / MODEL_MAP[model] / output_slug / 'images'
    folder.mkdir(parents=True, exist_ok=True)
    return folder


def make_absolute(src, base_url):
    """Convert relative image src to absolute URL."""
    if src.startswith('data:'):
        return None  # skip data URIs
    if src.startswith('//'):
        scheme = urllib.parse.urlparse(base_url).scheme
        return f"{scheme}:{src}"
    if src.startswith('http'):
        return src
    return urllib.parse.urljoin(base_url, src)


def context_string(tag):
    """Build a lowercase context string from an img tag and its ancestors."""
    parts = []

    # The src filename (strip query string and path)
    src = tag.get('src', '') or tag.get('data-src', '') or tag.get('data-lazy-src', '')
    filename = src.split('?')[0].split('/')[-1].lower()
    parts.append(filename)

    # alt text
    alt = (tag.get('alt', '') or '').lower()
    parts.append(alt)

    # id and class on the img itself
    parts.append(' '.join(tag.get('class', [])).lower())
    parts.append((tag.get('id', '') or '').lower())

    # Walk up 4 ancestor elements
    ancestor = tag.parent
    for _ in range(4):
        if ancestor is None or ancestor.name in ('html', 'body', '[document]'):
            break
        parts.append(' '.join(ancestor.get('class', [])).lower())
        parts.append((ancestor.get('id', '') or '').lower())
        ancestor = ancestor.parent

    return ' '.join(parts)


def score_image(ctx, slot_keywords):
    """Score a context string against a slot's keyword lists."""
    score = 0
    weights = {'high': 10, 'medium': 5, 'low': 2, 'negative': -15}

    for level, kws in slot_keywords.items():
        for kw in kws:
            if kw.lower() in ctx:
                score += weights[level]

    return score


def declared_size(tag):
    """Return (width, height) from tag attributes, or (0, 0) if absent."""
    try:
        w = int(tag.get('width', 0))
    except (ValueError, TypeError):
        w = 0
    try:
        h = int(tag.get('height', 0))
    except (ValueError, TypeError):
        h = 0
    return w, h


def fetch_page(url):
    """Fetch HTML and return (html_text, final_url)."""
    try:
        import certifi
        verify = certifi.where()
    except ImportError:
        verify = False  # fallback: skip SSL verification (WSL/Windows cert stores)

    try:
        r = requests.get(url, headers=HEADERS, timeout=20,
                         allow_redirects=True, verify=verify)
        r.raise_for_status()
        return r.text, r.url
    except requests.RequestException as e:
        # Retry without SSL verification if cert check failed
        try:
            r = requests.get(url, headers=HEADERS, timeout=20,
                             allow_redirects=True, verify=False)
            r.raise_for_status()
            return r.text, r.url
        except requests.RequestException:
            sys.exit(f"ERROR: Could not fetch {url}\n  {e}")


def collect_images(html, base_url, min_w, min_h):
    """
    Parse all <img> tags and <meta property="og:image">.
    Returns a list of dicts:
      { 'url': str, 'context': str, 'declared_w': int, 'declared_h': int, 'position': int }
    """
    soup = BeautifulSoup(html, 'html.parser')
    images = []

    # Meta og:image first (position = -1, treated as special)
    og = soup.find('meta', property='og:image')
    if og and og.get('content'):
        url = make_absolute(og['content'], base_url)
        if url:
            images.append({'url': url, 'context': 'og open-graph social share cover',
                           'declared_w': 1200, 'declared_h': 630, 'position': -1})

    # All <img> tags (including lazy-loaded variants)
    for pos, tag in enumerate(soup.find_all('img')):
        src = (tag.get('src') or tag.get('data-src') or
               tag.get('data-lazy-src') or tag.get('data-original') or '')

        if not src or src.startswith('data:'):
            continue

        url = make_absolute(src, base_url)
        if not url:
            continue

        # Skip obvious non-content images based on URL pattern
        url_lower = url.lower()
        skip_patterns = ['pixel', 'tracker', 'beacon', '1x1', 'spacer', 'blank.gif',
                         'transparent.png', '.svg', 'favicon']
        if any(p in url_lower for p in skip_patterns):
            continue

        w, h = declared_size(tag)
        # Filter by declared size only if both dimensions are explicitly given
        if w > 0 and h > 0:
            if w < min_w and h < min_h:
                continue

        ctx = context_string(tag)
        images.append({'url': url, 'context': ctx, 'declared_w': w,
                       'declared_h': h, 'position': pos})

    return images


def rank_for_slot(images, slot_name, slot_cfg):
    """Score all images for a given slot and return them ranked best-first."""
    scored = []
    kws = slot_cfg['keywords']
    prefer_early = slot_cfg.get('prefer_position') == 'early'

    for img in images:
        base_score = score_image(img['context'], kws)

        # Bonus for larger declared dimensions (signals a content image, not an icon)
        size_bonus = min((img['declared_w'] + img['declared_h']) // 100, 5)

        # Bonus for position (earlier in page = higher likelihood of being a hero image)
        pos = img['position']
        if prefer_early and pos >= 0:
            pos_bonus = max(0, 10 - pos // 5)
        else:
            pos_bonus = 0

        # og:image gets +20 bonus for og-cover slot
        og_bonus = 20 if (pos == -1 and slot_name == 'og-cover') else 0

        total = base_score + size_bonus + pos_bonus + og_bonus
        scored.append((total, img))

    scored.sort(key=lambda x: x[0], reverse=True)
    return scored


def download_image(url):
    """Download image bytes. Returns PIL Image or None on failure."""
    try:
        import certifi
        verify = certifi.where()
    except ImportError:
        verify = False

    def _try_get(v):
        return requests.get(url, headers=HEADERS, timeout=20, verify=v)

    try:
        try:
            r = _try_get(verify)
        except requests.exceptions.SSLError:
            r = _try_get(False)
        r.raise_for_status()
        img = Image.open(BytesIO(r.content))
        img.load()  # force decode to catch corrupt files
        return img
    except Exception as e:
        log_warn(f"Failed to download {url}: {e}")
        return None


def resize_image(img, target_w, target_h):
    """
    Resize/crop image to target dimensions.
    - If only target_w given (target_h=None): scale to width preserving aspect ratio.
    - If both given: crop-center to exact dimensions.
    """
    # Convert to RGB (handles RGBA, P, L modes for WebP)
    if img.mode not in ('RGB', 'RGBA'):
        img = img.convert('RGBA' if img.mode == 'RGBA' else 'RGB')

    orig_w, orig_h = img.size

    if target_h is None:
        # Scale to max width, preserve ratio
        if orig_w <= target_w:
            return img  # already small enough
        ratio = target_w / orig_w
        new_h = int(orig_h * ratio)
        return img.resize((target_w, new_h), Image.LANCZOS)

    else:
        # Crop-center to exact dimensions
        scale = max(target_w / orig_w, target_h / orig_h)
        scaled_w = int(orig_w * scale)
        scaled_h = int(orig_h * scale)
        img = img.resize((scaled_w, scaled_h), Image.LANCZOS)

        left = (scaled_w - target_w) // 2
        top = (scaled_h - target_h) // 2
        return img.crop((left, top, left + target_w, top + target_h))


def save_webp(img, dest_path, quality):
    """Save PIL Image as WebP. Returns file size in KB."""
    # Flatten RGBA to RGB for WebP compatibility (no transparency needed for BOFU pages)
    if img.mode == 'RGBA':
        background = Image.new('RGB', img.size, (255, 255, 255))
        background.paste(img, mask=img.split()[3])
        img = background
    elif img.mode != 'RGB':
        img = img.convert('RGB')

    img.save(str(dest_path), 'WEBP', quality=quality, method=4)
    size_kb = dest_path.stat().st_size // 1024
    return size_kb


# ─── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(
        description='Download and convert images from a reference URL for page-builder.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    parser.add_argument('slug', help='Page slug (must match a file in data/)')
    parser.add_argument('url', help='Reference URL to fetch images from')
    parser.add_argument('--slots', default='hero,lab,science,og-cover',
                        help='Comma-separated slots to fill (default: hero,lab,science,og-cover)')
    parser.add_argument('--list', action='store_true',
                        help='List found images with scores, do not download')
    parser.add_argument('--min-w', type=int, default=150, help='Minimum image width (default: 150)')
    parser.add_argument('--min-h', type=int, default=150, help='Minimum image height (default: 150)')
    parser.add_argument('--quality', type=int, default=85, help='WebP quality 1-100 (default: 85)')
    args = parser.parse_args()

    requested_slots = [s.strip() for s in args.slots.split(',')]
    unknown = [s for s in requested_slots if s not in SLOTS]
    if unknown:
        sys.exit(f"ERROR: Unknown slot(s): {', '.join(unknown)}\n"
                 f"  Available: {', '.join(SLOTS.keys())}")

    print()
    print(f"  PAGE BUILDER — Image Downloader")
    print(f"  Slug  : {args.slug}")
    print(f"  Source: {args.url}")
    print(f"  Slots : {', '.join(requested_slots)}")
    print()

    # 1. Load and validate JSON
    data, model, json_path = load_json(args.slug)
    log_ok(f"Model {model} confirmed ({json_path.name})")

    # 2. Resolve output folder
    output_folder = resolve_output_path(data, model, args.slug)
    log_ok(f"Output folder: {output_folder}")

    # 3. Fetch reference page
    log(f"Fetching {args.url} …")
    html, final_url = fetch_page(args.url)
    log_ok(f"Page fetched ({len(html):,} bytes, final URL: {final_url})")

    # 4. Collect all images
    images = collect_images(html, final_url, args.min_w, args.min_h)
    log_ok(f"Found {len(images)} candidate image(s) after filtering")
    print()

    if not images:
        sys.exit("No usable images found on that page. Try a different URL or lower --min-w/--min-h.")

    # ── LIST mode ────────────────────────────────────────────────────────────
    if args.list:
        print("  ── ALL CANDIDATE IMAGES (ranked by hero score) ──")
        scored = rank_for_slot(images, 'hero', SLOTS['hero'])
        for score, img in scored[:30]:
            pos_label = 'og-meta' if img['position'] == -1 else f"pos#{img['position']}"
            dims = f"{img['declared_w']}×{img['declared_h']}" if img['declared_w'] else "unknown size"
            print(f"  [{score:+4d}] {pos_label:10s} {dims:12s}  {img['url'][:80]}")
        print()
        print("  Run without --list to download. Use --slots to select specific slots.")
        return

    # ── DOWNLOAD mode ────────────────────────────────────────────────────────
    used_urls = set()
    results = {}

    for slot_name in requested_slots:
        slot_cfg = SLOTS[slot_name]
        dest = output_folder / slot_cfg['filename']

        print(f"  ── Slot: {slot_name} ({slot_cfg['description']}) ──")

        ranked = rank_for_slot(images, slot_name, slot_cfg)

        # Pick best image that hasn't been used yet
        chosen_img = None
        chosen_score = None
        for score, img in ranked:
            if score <= 0:
                log_warn(f"No confident match found for slot '{slot_name}' (best score: {score})")
                log_warn("Skipping. Try --list to inspect available images, then re-run.")
                break
            if img['url'] not in used_urls:
                chosen_img = img
                chosen_score = score
                break

        if chosen_img is None:
            print()
            continue

        log(f"Selected (score {chosen_score:+d}): {chosen_img['url'][:70]}")
        log(f"Downloading…")

        pil_img = download_image(chosen_img['url'])
        if pil_img is None:
            log_warn(f"Download failed — skipping slot '{slot_name}'")
            print()
            continue

        orig_size = pil_img.size
        target_w, target_h = slot_cfg['resize']

        pil_img = resize_image(pil_img, target_w, target_h)
        size_kb = save_webp(pil_img, dest, args.quality)

        used_urls.add(chosen_img['url'])
        results[slot_name] = dest

        log_ok(f"Saved: {dest.relative_to(dest.parent.parent.parent.parent)}")
        log(f"   Original size : {orig_size[0]}×{orig_size[1]}px")
        log(f"   Output size   : {pil_img.size[0]}×{pil_img.size[1]}px")
        log(f"   File size     : {size_kb} KB  (WebP q{args.quality})")
        print()

    # ── Summary ──────────────────────────────────────────────────────────────
    print()
    print("  ══ SUMMARY ══")
    if results:
        for slot, path in results.items():
            print(f"  ✓  {SLOTS[slot]['filename']:20s}  →  {path}")

    skipped = [s for s in requested_slots if s not in results]
    if skipped:
        for s in skipped:
            print(f"  ✗  {SLOTS[s]['filename']:20s}  →  NOT downloaded (no confident match)")

    print()
    if results:
        print(f"  Images saved to: {output_folder}")
        print()
        print("  NEXT STEP: Verify images look correct, then update your JSON if needed:")
        for slot, path in results.items():
            field_map = {
                'hero':     'hero_image',
                'lab':      'benefits_image',
                'science':  'science_image',
                'og-cover': 'og_image',
            }
            field = field_map.get(slot, slot)
            fname = SLOTS[slot]['filename']
            print(f"    \"{field}\": \"images/{fname}\"")

    print()
    print("  ⚠  NEVER set image src to the original URL in HTML.")
    print("     All images are now local — the page references images/filename.webp only.")
    print()


if __name__ == '__main__':
    main()
