# SEO Documentation — Static BOFU Page Generator
## For Claude Code, AI Agents, and Any LLM Working on This Project

> **Read this before writing any JSON data file.**
> Every decision in this document is designed to make pages rank, pass Google's quality review,
> and survive the YMYL (Your Money or Your Life) scrutiny applied to health supplement content.

---

## WHY SEO MATTERS MORE THAN USUAL HERE

These pages live in two high-risk Google categories simultaneously:

1. **YMYL (Your Money or Your Life)** — health supplement content. Google applies its strictest quality standards. A page with thin content, unverifiable claims, or missing authoritativeness signals will not rank, even if technically perfect.

2. **Paid Traffic Landing Pages** — pages promoted via Google Ads. The landing page quality score affects ad cost and eligibility. Low-quality pages raise CPC and risk account suspension.

**This means:** SEO is not optional. It is the mechanism that keeps organic traffic alive and ad accounts healthy simultaneously.

---

## PART 1 — PROGRAMMATIC SEO STRATEGY

### 1.1 — The Page Matrix

This system generates pages using the **Locations × Personas** playbook combination:

```
Product (persona-level specificity)
    × Country (location-level specificity)
    = One targeted landing page per combination
```

Examples:
- `us-reticlear` → Eye supplement for US buyers
- `uk-reticlear` → Same product, UK cultural adaptation
- `de-reticlear` → Same product, German language, German pain points

This is programmatic SEO. The risk is the same as any pSEO project: **thin content at scale.**

### 1.2 — The Non-Negotiable Rule: Each Page Must Have Unique Value

Google's definition of thin content for pSEO pages:
> "Pages that exist only to capture a search query but offer nothing beyond what the template provides."

For this system, a page is **not thin** when it has:

| Signal | Requirement |
|--------|------------|
| Product data | Real ingredient names, dosages, and mechanisms from the official page |
| Cultural copy | Pain points and language specific to the target country — not translated US copy |
| Real testimonials | Actual customer quotes from the product page, not invented |
| Real guarantee terms | Exact number of days, exactly what is covered |
| Real pricing | Actual discount and price, not placeholder |

A page is **thin** (do not publish) when:
- Any ingredient is invented or approximated
- Reviews are fabricated or generic
- The benefits copy is identical to the US version with only a country name swapped
- The CTA URL is a placeholder

**If you cannot fill the page with real data → do not generate it. Wait for real data.**

### 1.3 — URL and Slug Architecture

```
output/SLUG/index.html
       ↓
Deployed as: yourdomain.com/SLUG/
```

Slug rules:
- Format: `COUNTRY-PRODUCTNAME` (e.g., `us-reticlear`, `uk-vapofil`)
- Always lowercase, hyphen-separated — no underscores, no uppercase
- Keep it short and descriptive — avoid parameters, avoid version suffixes
- **Never change a slug after publishing** — that URL is the canonical and any backlinks point to it

### 1.4 — Hub and Spoke (Scale Without Orphans)

Every programmatic page needs to be connected to the site. Isolated pages ("orphan pages") are not crawled efficiently and do not accumulate authority.

**Minimum requirement — each page must link to:**
- The main index/root of the site (navbar links already handle this)
- Related country variants of the same product (if they exist)
- The official product page (the CTA affiliate link)

**If you manage multiple products on one domain:**
Create a hub page (e.g., `/supplements/`) that links to all product landing pages.
Each product page links back to the hub.
Related products cross-link to each other.

Hub structure example:
```
yourdomain.com/                     ← Root
yourdomain.com/supplements/         ← Hub (list all products)
yourdomain.com/us-reticlear/        ← Spoke
yourdomain.com/uk-reticlear/        ← Spoke (links to us-reticlear as related)
yourdomain.com/us-vapofil/          ← Spoke
```

### 1.5 — When to Noindex a Page

Some variants should not be indexed:
- A page where no cultural adaptation was done (identical copy to another variant)
- A page with placeholder data still in it
- A page for a product where the affiliate offer is no longer active

To noindex: add `<meta name="robots" content="noindex, follow" />` manually after generation.
Do NOT noindex a page that has real traffic — delist only before it accumulates ranking.

---

## PART 2 — ON-PAGE SEO REQUIREMENTS

Every field in the JSON that affects a rendered HTML element has SEO implications. This section documents the requirements for each.

### 2.1 — Title Tag (`meta_title`)

```
Formula: [Primary Benefit] + [Product Name] + [Trust Signal] | [Brand]
Length:  50–60 characters (hard limit — Google truncates at ~60)
```

Rules:
- Primary keyword must appear in the first 40 characters
- Include the year only if the product changes frequently (e.g., "2026 Formula")
- Do not stuff keywords — one primary, one supporting maximum
- Each page must have a **unique** title — never copy across country variants

Good examples:
```
Restore Clear Vision Naturally | RetiClear™ Eye Support
RetiClear™ — Eye Health Supplement for Adults Over 40
Clearer Vision in 30 Days | RetiClear™ Official Offer
```

Bad examples:
```
RetiClear - Buy RetiClear - RetiClear Eye Supplement - Best RetiClear  ← stuffed
RetiClear™ Eye Supplement                                               ← too short, no benefit
Buy Now - 50% Off - Limited Time - RetiClear Eye Health Supplement     ← ad copy, not title
```

### 2.2 — Meta Description (`meta_description`)

```
Length: 150–160 characters
Formula: [Pain point] → [Product benefit] → [Trust signal] → [CTA]
```

Rules:
- Include the primary keyword naturally once
- Include a soft CTA ("See how it works", "Learn more", "Claim your discount")
- Do not use ALL CAPS or excessive punctuation — Google may rewrite it
- Unique per page — never copy across variants

Good example:
```
Struggling with blurry vision and eye fatigue? RetiClear™ uses 6 clinically-studied
ingredients to support eye health. GMP certified. 60-day guarantee. See how it works.
```
(157 characters)

### 2.3 — H1 Headline (`headline` + `headline_highlight`)

The H1 is the most important on-page ranking signal after the title tag.

Rules:
- One H1 per page — the generator already enforces this via the hero block
- Must contain the primary keyword or a close variant
- Must match the search intent of the page (informational? commercial? transactional?)
- The highlighted span adds visual emphasis — make sure the keyword is in the non-highlighted OR highlighted portion, not split awkwardly

For BOFU supplement pages, the intent is **commercial/transactional**:
- Target phrases like "best [benefit] supplement", "[product name] review", "[product] for [audience]"
- The H1 should feel like the answer to someone searching for that phrase

### 2.4 — Content Depth

Google's quality rater guidelines for health content require **E-E-A-T**:

| Signal | How this system provides it |
|--------|---------------------------|
| **Experience** | Real customer testimonials with specific outcomes, from real people with locations |
| **Expertise** | Named ingredients with dosages, mechanism of action, scientific terminology |
| **Authoritativeness** | Trust badges (GMP, FDA registered, Made in USA), real stats, real ratings |
| **Trustworthiness** | Complete legal pages, distributor disclosure, FDA disclaimer, real contact info |

**YMYL health pages specifically require:**
- No unverifiable claims ("this will cure your condition")
- No implied medical diagnosis
- Every benefit claim backed by an ingredient name + mechanism
- Visible disclaimer that content is not medical advice
- Real business identity (company name, email)

### 2.5 — Keywords in Content (First 100 Words)

The primary keyword (or close variant) must appear in:
1. The title tag
2. The H1
3. The first paragraph of body copy (`hero_subtext_1` or `benefits_paragraphs[0]`)
4. At least one H2 (section headline)
5. The meta description

Density: aim for **1–2% density** — for a 1,500-word page, the keyword should appear ~15–30 times naturally, including variations. Never force it.

### 2.6 — Image SEO (`hero_image`, `benefits_image`, `science_image`, `og_image`)

| Requirement | Rule |
|-------------|------|
| Format | Always `.webp` for production (20–30% smaller than JPEG with same quality) |
| Filename | Descriptive: `reticlear-eye-supplement-bottle.webp` not `image1.webp` |
| Alt text | The `alt` attribute in blocks must describe the image for screen readers and crawlers |
| Dimensions | Always specify `width` and `height` attributes to prevent CLS (Cumulative Layout Shift) |
| Size | Compress to under 150KB for hero images, under 80KB for section images |
| og:image | Must be exactly **1200×630px** for correct social preview rendering |

**Current gap:** The block templates use `src="{{hero_image}}"` but the `alt` attribute should also come from the JSON. When writing JSON, set image paths with descriptive names.

### 2.7 — Schema Markup (JSON-LD)

The `base.html` already generates three JSON-LD schemas. Make sure the data fields that feed them are accurate:

**Product schema** (always present):
- `product_name` → `"name"`
- `meta_description` → `"description"`
- `og_image` → `"image"` (use a real image URL for production, not placehold.co)
- `price_amount` + `price_currency` → `"offers.price"` + `"offers.priceCurrency"`
- `cta_url` → `"offers.url"` (the affiliate link)
- `rating_value` + `rating_count` → `"aggregateRating"` (use real data from the product page)

**Organization schema** (always present):
- `company_name` → `"name"`
- `support_email` → `"email"`

**WebSite schema** (only when `canonical_url` is set):
- Appears only after the page is deployed to its final domain

**Critical:** Fake or placeholder values in schema markup are a Google policy violation. `rating_value: "4.8"` and `rating_count: "50000"` must reflect real aggregate data from the product page.

---

## PART 3 — TECHNICAL SEO REQUIREMENTS

The generator produces static HTML — this gives us a natural advantage on several technical signals.

### 3.1 — Core Web Vitals Targets

Static HTML has excellent baseline performance. Protect it:

| Metric | Target | Risk in this system |
|--------|--------|-------------------|
| LCP (Largest Contentful Paint) | < 2.5s | Hero image loading unoptimized |
| INP (Interaction to Next Paint) | < 200ms | External scripts (Font Awesome CDN) |
| CLS (Cumulative Layout Shift) | < 0.1 | Images without width/height attributes |

**Actions to protect Core Web Vitals:**
- Always include `width` and `height` on `<img>` tags
- Use `loading="lazy"` on all images below the fold (benefits, science, reviews)
- Use `fetchpriority="high"` on the hero image (it is the LCP element)
- Font Awesome is loaded from CDN — if performance is critical, self-host it

### 3.2 — Canonical and Hreflang Strategy

This is already implemented in `base.html` conditionally. The rules:

**When to add `canonical_url`:**
- Only when the page is being deployed to its final domain
- Format: always with trailing slash → `https://yourdomain.com/us-reticlear/`
- Must be the HTTPS version, never HTTP
- Must match the actual URL exactly (case-sensitive)

**Hreflang (for country variants of the same product):**
The current system generates the `hreflang` tag for the page's own URL + language.
For full hreflang implementation across variants, each page should also reference its sibling variants. Example for a product with US + UK + DE variants:

```html
<link rel="alternate" hreflang="en-US" href="https://domain.com/us-reticlear/" />
<link rel="alternate" hreflang="en-GB" href="https://domain.com/uk-reticlear/" />
<link rel="alternate" hreflang="de"    href="https://domain.com/de-reticlear/" />
<link rel="alternate" hreflang="x-default" href="https://domain.com/us-reticlear/" />
```

This is not yet automated by the generator — add it manually in a post-processing step when deploying multiple variants of the same product.

### 3.3 — Robots.txt and Sitemap

When deploying to GitHub Pages or any static host, these files must exist at the root:

**`robots.txt` (minimum):**
```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

**`sitemap.xml` (generate for all active pages):**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://yourdomain.com/us-reticlear/</loc>
    <lastmod>2026-03-31</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en-US" href="https://yourdomain.com/us-reticlear/"/>
    <xhtml:link rel="alternate" hreflang="en-GB" href="https://yourdomain.com/uk-reticlear/"/>
  </url>
  <!-- one <url> block per published page -->
</urlset>
```

Submit the sitemap to Google Search Console after deploying.

### 3.4 — URL Hygiene

- All internal links must use relative paths (already handled by the block templates)
- No redirect chains — if a slug changes, set up a proper 301 redirect at the host level
- No mixed content (HTTP assets on HTTPS pages) — all CDN links in `base.html` already use HTTPS
- No broken links — verify the `cta_url` affiliate link is live before publishing

### 3.5 — Page Speed Checklist

Before deploying any page, verify:
- [ ] Hero image is `.webp`, under 150KB, has `width` + `height` + `fetchpriority="high"`
- [ ] All other images are `.webp`, under 80KB, have `loading="lazy"` + `width` + `height`
- [ ] No render-blocking scripts in `<head>` (Font Awesome uses CDN with `crossorigin` — acceptable)
- [ ] CSS is a single file (`styles/THEME.css` imports `theme.css`) — no multiple CSS requests beyond Google Fonts
- [ ] No unused JavaScript — the only JS on the page is the FAQ accordion + modal system in `base.html`

---

## PART 4 — E-E-A-T FOR HEALTH SUPPLEMENT PAGES (YMYL)

Health supplement pages are reviewed under Google's most stringent quality standards. Standard keyword optimization is not enough — the page must demonstrate **Experience, Expertise, Authoritativeness, and Trustworthiness** through its content and structure.

### 4.1 — Experience Signals

| Element | How to implement |
|---------|-----------------|
| Real customer testimonials | Use quotes from the official product page, with real names and real locations |
| Specific outcomes | Each testimonial must mention a concrete result ("lost 12 lbs in 6 weeks", "energy back after 2 weeks") — not "great product!" |
| Real usage context | Testimonials that mention how the product was used, not just that it was used |

### 4.2 — Expertise Signals

| Element | How to implement |
|---------|-----------------|
| Named ingredients | Every ingredient must be identified by its scientific/common name — never "a proprietary blend" without naming what's in it |
| Dosages | Include the exact dosage (mg/mcg) when available from the official page |
| Mechanism of action | Each ingredient description must explain *why* it works biologically — not just *what* it does |
| Science section | The 3-step mechanism section must be logically coherent — step 1 causes step 2 causes step 3 |

### 4.3 — Authoritativeness Signals

| Element | How to implement |
|---------|-----------------|
| Trust badges | Only use badges that are true: GMP Certified means the facility is GMP certified, FDA Registered means the facility is registered — not the same as FDA approved |
| Real statistics | Review counts and ratings must come from the official page — do not invent 50,000 reviews if the real number is 4,200 |
| Manufacturer credibility | If the manufacturer has certifications, awards, or years in business — include them |

### 4.4 — Trustworthiness Signals (Most Critical for YMYL)

These are non-negotiable. Missing any of these will trigger a quality downgrade:

| Element | Status |
|---------|--------|
| Complete Privacy Policy | Required — with GDPR/CCPA sections |
| Complete Terms of Service | Required — with medical disclaimer and affiliate disclosure |
| Returns & Refunds policy | Required — with real guarantee terms |
| Real contact information | Required — real email address, real response commitment |
| Distributor disclosure | Required — visible in footer, not buried |
| FDA/FTC disclaimer | Required — visible in footer without clicking |
| HTTPS | Required — all static hosts support this by default |
| Copyright year (current) | Required — outdated copyright = low trust signal |

---

## PART 5 — SEO AUDIT CHECKLIST (PRE-PUBLISH)

Run this checklist against the generated `output/SLUG/index.html` before deploying.

### Technical Layer

- [ ] No `{{placeholder}}` strings remaining in the HTML (`grep -r "{{" output/SLUG/`)
- [ ] `<title>` is 50–60 characters, contains primary keyword
- [ ] `<meta name="description">` is 150–160 characters, contains CTA
- [ ] One `<h1>` on the page (verify in browser dev tools)
- [ ] `<link rel="canonical">` is present only if `canonical_url` was set in JSON
- [ ] All images have `alt`, `width`, and `height` attributes
- [ ] All images are `.webp` format (not `.jpg`, `.png`)
- [ ] `og:image` is 1200×630px
- [ ] JSON-LD Product schema has no placeholder values
- [ ] No mixed content warnings (all resources HTTPS)
- [ ] Page loads under 3 seconds on a 4G connection (test with PageSpeed Insights)
- [ ] CLS score under 0.1 (images must have explicit dimensions)

### Content Layer

- [ ] Primary keyword appears in: title, H1, first 100 words of body, at least one H2
- [ ] Each ingredient has a real name, real dosage (if available), and biological mechanism
- [ ] At least 3 testimonials with specific outcomes, real names, real locations
- [ ] Guarantee duration matches the official product page exactly
- [ ] Pricing/discount matches the official product page
- [ ] No prohibited phrases: "cures", "treats", "diagnoses", "FDA approved" (≠ "FDA registered")
- [ ] All claims end with or are covered by the footer disclaimer

### Legal / Trust Layer

- [ ] Distributor notice is complete (not a placeholder)
- [ ] FDA/FTC disclaimer is complete and country-appropriate
- [ ] Privacy Policy: all 10 sections present, no `[placeholders]` remaining
- [ ] Terms of Service: all 11 sections present, affiliate disclosure included
- [ ] Returns modal: exact guarantee days filled in, real support email
- [ ] Contact modal: real support email, real response time
- [ ] `company_name` is a real legal entity name
- [ ] `support_email` is a real, monitored address
- [ ] Copyright year is the current year

### Programmatic SEO Layer

- [ ] Page provides unique value vs. other country variants (not identical copy with country name swapped)
- [ ] Cultural adaptation is real: language, pain points, tone, currency all match the target country
- [ ] Slug is lowercase, hyphen-separated, matches the `slug` field in JSON exactly
- [ ] Page is NOT an orphan: it is reachable from at least one other page on the domain
- [ ] If deploying multiple variants of the same product: hreflang cross-references are in place
- [ ] Sitemap has been updated to include this URL

---

## PART 6 — POST-LAUNCH MONITORING

After publishing, track these signals weekly for the first 30 days, then monthly:

### Indexation

Use Google Search Console:
- Submit the sitemap after deploying
- Check "Coverage" report for any "Excluded" pages
- Verify the canonical URL is indexed (not a variant)
- Watch for "Soft 404" errors on country variant pages

### Rankings

Track these keyword patterns per page:
- `[product name] review`
- `[product name] + country` (e.g., "reticlear uk")
- `[primary benefit] supplement + country` (e.g., "eye health supplement usa")
- `[product name] + discount / buy / order`

### Quality Signals

Watch for these Google Search Console alerts:
- **Manual action** → "Unnatural links" or "Thin content" — immediate action required
- **Core algorithm update** → YMYL pages are first affected; audit E-E-A-T signals
- **Page experience** → Core Web Vitals failures mean image optimization is needed

### Conversion

Even if the goal is affiliate traffic, track:
- Bounce rate and time on page (low engagement = Google sees low quality)
- Scroll depth (do users reach the CTA sections?)
- CTA click rate to the affiliate link

---

## PART 7 — COUNTRY-SPECIFIC SEO NOTES

### United States (`en`, `en-US`)
- Primary regulatory authority: FDA (for disclaimers), FTC (for affiliate/endorsement disclosure)
- Schema `priceCurrency`: `USD`
- `og_locale`: `en_US`
- Title tag style: Direct, benefit-first. "Restore Your Vision Naturally | RetiClear™"

### United Kingdom (`en-GB`, `en-IE`)
- Regulatory: MHRA (Medicines and Healthcare products Regulatory Agency), ASA (ad standards)
- Replace "FDA registered" with "Manufactured in an FDA-registered facility" or "GMP certified"
- Schema `priceCurrency`: `GBP`
- `og_locale`: `en_GB`
- Language: British spelling — "colour", "favourite", "organised", "ageing"
- Tone: slightly less hyperbolic than US — "proven effective" not "AMAZING RESULTS"

### Australia / New Zealand (`en-AU`)
- Regulatory: TGA (Therapeutic Goods Administration)
- "Complementary medicine" not "dietary supplement"
- Schema `priceCurrency`: `AUD`
- `og_locale`: `en_AU`

### Germany (`de`)
- Regulatory: BfArM, EFSA for health claims
- EFSA-approved claims only — no unregistered health claims
- Schema `priceCurrency`: `EUR`
- `og_locale`: `de_DE`
- Full translation required — not translated-from-English German
- Tone: factual, scientific, no hyperbole — "studies indicate" not "PROVEN RESULTS"
- GDPR cookie notice required if using any tracking

### Canada (`en-CA`)
- Regulatory: Health Canada, Natural Health Products Directorate
- Products must be labelled as "Natural Health Product" (NHP)
- Schema `priceCurrency`: `CAD`
- `og_locale`: `en_CA`

---

## PART 8 — WHAT NOT TO DO (COMMON MISTAKES)

| Mistake | Why it's harmful | What to do instead |
|---------|-----------------|-------------------|
| Swapping only the country name in copy | Thin content — Google detects duplicate content across URLs | Write country-specific pain points, testimonials, and urgency copy |
| Fake or rounded-up statistics | E-E-A-T failure — "50,000 customers" with no evidence | Use real numbers from the official product page |
| Invented testimonials | FTC violation + E-E-A-T failure | Use only testimonials from the real product page |
| Publishing without canonical | Multiple variants compete with each other | Add `canonical_url` at deployment time |
| Generating pages with placeholder data | Thin content + broken schema | Block publication until real data is available |
| Changing a published slug | Loses all accumulated ranking signals | Keep slugs permanent once deployed |
| Fake countdown timers | Google Ads policy violation + trust signal damage | Only use real deadlines |
| Copying legal modals from one product to another without adaptation | Product-specific info (guarantee days, email) will be wrong | Each product needs its own legal content with real data |
| Setting `og:image` to placehold.co on a live page | Looks unprofessional in social shares, signals low quality | Replace all placeholder images before going live |
| Missing `robots.txt` on deployment | Crawlers may have issues; no sitemap reference | Always deploy with `robots.txt` + `sitemap.xml` |
