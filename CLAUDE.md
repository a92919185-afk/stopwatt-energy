# Static HTML Page Generator — Master Instructions

## ⚠️ CORE IS SACRED — DO NOT TOUCH

```
PROTECTED (read-only):
  generator.js · templates/base.html · templates/base-c.html
  blocks/*.html · styles/theme.css · styles/model-c-base.css
  styles/model-t-base.css ← Model T structural CSS (do not edit)

SAFE TO MODIFY:
  data/*.json            ← one per product/country
  styles/*.css           ← new theme files only (never edit theme.css or model-t-base.css)
  templates/base-d.html  ← Model D review template (safe to edit)
  templates/base-t.html  ← Model T listicle template (safe to edit)
```

---

## PAGE MODELS

| Model | When | Strategy | Docs |
|-------|------|----------|------|
| **A** | You HAVE affiliation | Direct BOFU. Keyword: [Product] + buy/discount/order | This file + SEO.md + COPY.md |
| **B** | Competitor has volume, no affiliation | Target competitor keyword, present your product as upgrade | MODEL-B.md |
| **C** | Affiliation + strong visual proof assets | Evidence-first: proof before pitch. Keyword: [Product] + review/legit | MODEL-C.md |
| **D** | Affiliation + review keyword has volume | Editorial review article. Keyword: [Product] + review/scam/does it work | MODEL-D.md |
| **T** | Affiliation + competitor/niche keyword has volume | Top 5 Listicle — editorial authority portal. Keyword: top [niche] / [competitor] + review | MODEL-T.md |

`"page_model": "A"/"B"/"C"/"D"/"T"` is **REQUIRED** in every JSON. Ask if missing.

**Model D requires 2-line generator.js update** (one-time setup — see MODEL-D.md).
**Model T is fully integrated** — no extra setup needed. See MODEL-T.md.

---

## COMPANION DOCUMENTS

| File | When to read |
|------|-------------|
| `STRATEGIST.md` | **Before any copy.** Creates `research/SLUG-strategy.md` (psychographic profile, JTBD, trigger map, emotional arc). Skills: `copywriting` + `marketing-psychology`. |
| `SEO.md` | Before writing JSON. SEO strategy, E-E-A-T, YMYL rules, technical checklist. |
| `COPY.md` | Before writing copy fields. BOFU philosophy, section formulas, 7-sweep, psychology triggers, voice by country. |
| `DESIGN.md` | Before creating any CSS. DNA extraction process, niche aesthetics, typography guide, full theme template. |
| `AUDITOR.md` | After generating. 8-module audit, score ≥ 90 required. |
| `REVIEWER.md` | After AUDITOR ≥ 90. 6-test human-quality gate. Final step before publish. |
| `MODEL-B.md` | Before any Model B page. |
| `MODEL-C.md` | Before any Model C page. Full JSON schema + image slots. |
| `MODEL-D.md` | Before any Model D page. Review template, JSON schema, copy formulas, SEO notes. |
| `MODEL-T.md` | Before any Model T page. Top 5 Listicle template, full JSON schema (products array, portal identity, survey box), compliance checklist, copy formulas per section. |
| `COUNTRY.md` | Before any non-US page or audit. Cultural adaptation, EFSA claims, translation standards. |
| `DEPLOY.md` | Every time owner says push/upload/subir. |

---

## WORKFLOW

```
PHASE 0 — STRATEGY   → STRATEGIST.md → research/SLUG-strategy.md
PHASE 1 — RESEARCH   → WebFetch official page → research/COUNTRY-PRODUCT-brief.md
PHASE 2 — BUILD      → Steps 1–5 (CSS + JSON + generate + images)
PHASE 3 — QUALITY    → AUDITOR (≥90) → REVIEWER (PUBLISH READY) → deploy
```

**Rule:** No copy until Strategy Brief is complete. No invention — only documented facts.

---

## STEP 1 — Visual DNA + Real Data Extraction

`WebFetch` the reference URL. Read full HTML/CSS source. **Never guess.**

**Category A — Visual DNA** → becomes the CSS theme file. See **DESIGN.md** for the full token extraction guide (colors, typography, spacing, components) and the mandatory DNA Report format.

**Category B — Real Data** → goes into JSON:
- Exact product name, price, discount %
- Exact ingredients + dosages
- Exact guarantee terms
- Trust badges (FDA registered? GMP? Made in USA? Non-GMO?)
- Customer testimonials (name, location, exact quote)
- Support email

**⚠️ NEVER INVENT DATA.** Missing field = descriptive placeholder + note to owner.

---

## STEP 2 — Create the Theme CSS

File: `styles/PRODUCTNAME.css`

```css
@import url('theme.css');
/* THEME: [Product] | Source: [URL] | [Date] | [light/dark/mixed] */

/* Layer 1: Color tokens */
:root {
  --primary: #______; --primary-dark: #______; --primary-light: #______;
  --secondary: #______; --bg: #______; --bg-alt: #______; --dark: #______;
  --text: #______; --text-muted: #______; --cta-bg: #______; --cta-text: #______;
  --alert-bg: #______; --alert-text: #______; --border: #______; --trust-bg: var(--bg-alt);
}
/* Layer 2: Typography */
:root { --font-heading: 'Font', sans-serif; --font-body: 'Font', sans-serif; }
/* Layer 3: Hero bg */
#hero { background: #______; } /* or linear-gradient(...) */
/* Layer 4: Component overrides (buttons, cards, badges) */
/* Layer 5: Contrast fixes */
```

See **DESIGN.md** for the complete 10-layer template and contrast safety checklist.

**Rules:** First line always `@import url('theme.css');`. Every value must come from the DNA Report. No `____` placeholders in the final file. Never edit `theme.css`.

---

## STEP 3 — Country / Language
Owner specifies. See TARGET MARKETS below.

---

## STEP 4 — Create JSON Data File
File: `data/COUNTRY-PRODUCTNAME.json` — See JSON SCHEMA below.

---

## STEP 5 — Generate
```bash
node generator.js COUNTRY-PRODUCTNAME
```

## STEP 5B — Download Images (Models A and C)
```bash
python3 download-images.py SLUG https://official-page.com
python3 download-images.py SLUG https://official-page.com --list   # preview
python3 download-images.py SLUG https://official-page.com --slots hero,og-cover
```

| Slot | File | JSON field | Size |
|------|------|-----------|------|
| hero | images/hero.webp | `hero_image` | 1200px |
| lab | images/lab.webp | `benefits_image` | 900px |
| science | images/science.webp | `science_image` | 900px |
| og-cover | images/og-cover.webp | `og_image` | 1200×630px |

**Rules:** Blocked for Model B. Never set JSON image field to external URL. Always `images/filename.webp`.

---

## STEP 6 — Verify Output

- Search HTML for `{{` — any remaining = missing JSON field
- Navbar visible, hero colors match reference, modals open with dark text
- Run `web-design-guidelines` skill on the output HTML

**Google Ads pre-publish checklist:**
- [ ] Distributor notice complete (not a placeholder)
- [ ] Country-correct disclaimer (FDA/FTC, MHRA, or EFSA)
- [ ] All 4 modals complete — no placeholders
- [ ] No prohibited claims: "FDA approved", "cures", "treats disease"
- [ ] Real support email, real company name, current year
- [ ] CTA URL is the real affiliate link

---

## STEP 7 — Holistic Review
Open `REVIEWER.md`. Run 6 tests with `copy-editing` + `copywriting` + `marketing-psychology`.
Only proceed to deploy after `PUBLISH READY` verdict.

---

## DEPLOYMENT (canonical URL)
Only when owner provides final domain:
1. Add `"canonical_url": "https://yourdomain.com/slug/"` to JSON
2. Regenerate. Confirm `<link rel="canonical">` appears in HTML.
**Never add canonical_url before owner provides the real domain.**

---

## ⚠️ GIT / DEPLOY — CRITICAL RULES

**ONLY deploy via `deploy.sh`:**
```bash
./deploy.sh SLUG /path/to/target-repo [branch]
```

**What gets pushed:**
```
index.html + images/ + styles/theme.css + styles/PRODUCT.css
```

**NEVER pushed:** `generator.js · templates/ · blocks/ · data/ · *.md · research/ · output/ (other slugs)`

**Before running — confirm with owner:**
1. Which SLUG?
2. Path to target repo (separate repo — not page-builder folder)?
3. Which branch?

**Hard rules:**
- NEVER `git add .` or `git add -A` anywhere in this project
- NEVER assume the target repository
- NEVER push from page-builder directory to a live site repo
- If in doubt, stop and ask

---

## TARGET MARKETS

| Code | Country | Language | Currency |
|------|---------|----------|---------|
| us | USA | en | USD |
| uk | UK | en-GB | GBP |
| ca | Canada | en-CA | CAD |
| au | Australia | en-AU | AUD |
| de | Germany | de | EUR |
| ie | Ireland | en-IE | EUR |
| nl | Netherlands | nl | EUR |
| dk | Denmark | da | DKK |
| se | Sweden | sv | SEK |

**NEVER:** Brazil, India, or any low-purchasing-power market.

**Tone:** US = bold/urgent. UK/AU/IE = slightly softer. DE/NL/DK/SE = factual, science-led.

---

## JSON SCHEMA

```json
{
  "page_model": "A",
  "slug": "COUNTRY-PRODUCTNAME",
  "language": "en",
  "theme": "PRODUCTNAME.css",
  "product_name": "ProductName",
  "company_name": "Your Company LLC",
  "support_phone": "+1 (800) 000-0000",   // ⚠️ REQUIRED — omitting leaves {{support_phone}} in HTML
  "company_address": "...",               // optional
  "meta_title": "...",
  "meta_description": "...",
  "og_image": "images/og-cover.webp",     // optional
  "og_locale": "en_US",
  "price_amount": "49.00",
  "price_currency": "USD",
  "rating_value": "4.8",
  "rating_count": "50000",
  // canonical_url: DEPLOYMENT-ONLY — omit until owner provides final domain
  "cta_text": "Order Now",
  "cta_url": "https://REAL-AFFILIATE-URL",
  "year": "2026",

  "alert_badges": [
    { "icon": "fa-solid fa-fire", "text": "Urgency" },
    { "icon": "fa-solid fa-shield-halved", "text": "Guarantee" },
    { "icon": "fa-solid fa-truck-fast", "text": "Shipping" }
  ],
  "nav_links": [
    { "href": "#benefits", "label": "Benefits" },
    { "href": "#features", "label": "Ingredients" },
    { "href": "#reviews",  "label": "Reviews" },
    { "href": "#faq",      "label": "FAQ" }
  ],

  "hero_badge": "Trusted by X+ customers",
  "headline": "Main headline ",
  "headline_highlight": "highlighted part",
  "hero_subtext_1": "...", "hero_subtext_2": "...",
  "hero_tags": [{ "icon": "fa-solid fa-ICON", "text": "Tag" }],
  "hero_cta_text": "...", "hero_guarantee_text": "...",
  "hero_image": "images/hero.webp",

  "trust_badges": [
    { "icon": "fa-solid fa-certificate",   "title": "GMP Certified",  "subtitle": "..." },
    { "icon": "fa-solid fa-shield-halved", "title": "FDA Registered", "subtitle": "..." },
    { "icon": "fa-solid fa-leaf",          "title": "100% Natural",   "subtitle": "..." },
    { "icon": "fa-solid fa-flag-usa",      "title": "Made in USA",    "subtitle": "..." },
    { "icon": "fa-solid fa-ban",           "title": "Non-GMO",        "subtitle": "..." }
  ],
  "stats": [
    { "value": "50,000+", "label": "Happy Customers" },
    { "value": "4.8★",    "label": "Average Rating" },
    { "value": "96%",     "label": "Would Recommend" }
  ],

  "benefits_label": "...", "benefits_headline": "...",
  "benefits_paragraphs": ["Problem agitation", "Emotional pain", "Bridge to product"],
  "urgency_text": "...", "benefits_cta_text": "...",
  "benefits_image": "images/lab.webp",

  "features_label": "...", "features_headline": "...",
  "features_subheadline": "...", "features_cta_text": "...",
  "features": [{ "icon": "fa-solid fa-ICON", "title": "Ingredient (dosage)", "description": "..." }],

  "science_label": "...", "science_headline": "How It Works: [Mechanism]",
  "science_subheadline": "...", "science_image": "images/science.webp",
  "science_title": "...",
  "science_steps": [{ "step": "1. Title:", "text": "..." }],
  "science_result": "...", "science_cta_text": "...",

  // SHIPPING — optional. Omit entirely unless owner requests it.
  // Include only if: multi-country physical product + owner explicitly asks.
  // "shipping_label": "...", "shipping_headline": "...", "shipping_subheadline": "...",
  // "shipping_features": [{ "icon": "...", "title": "...", "desc": "..." }],
  // "shipping_countries": [{ "name": "USA", "flag": "https://flagcdn.com/w80/us.png", "url": "#order" }],
  // "shipping_note": "...",

  "reviews_label": "...", "reviews_headline": "...", "reviews_subheadline": "...",
  "reviews": [{ "body": "...", "name": "First Last, City, State", "verified_text": "Verified Customer" }],
  "review_stats": [
    { "value": "4.8★", "label": "Average Rating" },
    { "value": "50,000+", "label": "Verified Customers" },
    { "value": "96%", "label": "Would Recommend" }
  ],

  "faq_label": "...",
  "faq_headline": "Everything You Need to Know Before You Order",
  "faq_items": [{ "question": "...", "answer": "..." }],

  "footer_description": "Distributor business description (NOT the product).",
  "support_email": "support@yourdomain.com",
  "footer_nav_title": "Navigate", "footer_legal_title": "Legal",
  "legal_links": [
    { "modal": "privacy",  "label": "Privacy Policy" },
    { "modal": "terms",    "label": "Terms of Service" },
    { "modal": "returns",  "label": "Returns & Refunds" },
    { "modal": "contact",  "label": "Contact Us" }
  ],

  "distributor_notice": "<strong>Independent Distributor Notice:</strong> This website is operated by an independent authorized distributor and is not affiliated with, endorsed by, or operated by the manufacturer or brand owner of [Product Name]. All product names and trademarks belong to their respective owners. Results depicted in testimonials are not typical. Nothing on this page constitutes medical advice.",

  // US: "* These statements have not been evaluated by the FDA. [Product] is not intended to diagnose, treat, cure, or prevent any disease. Individual results vary. Paid promotion."
  // UK: "* Not evaluated by MHRA. Food supplement. Should not replace a balanced diet. Individual results vary. Paid promotion by independent distributor."
  // EU: "* Food supplement. Not evaluated by EFSA. Not intended to diagnose/treat/cure/prevent any disease. Individual results vary. Paid promotion."
  "disclaimer": "...",

  "copyright_text": "All rights reserved.",

  // ⚠️ ALL 4 MODALS REQUIRED — complete content, no placeholders.
  // Required sections per modal:
  //   privacy (10): Info collected · How used · Cookies · 3rd-party sharing · Retention ·
  //                 Security · Your rights (CCPA/GDPR) · Children · Changes · Contact
  //   terms (11):   Distributor disclosure · Acceptance · Age (18+) · No medical advice ·
  //                 Product claims · No results guarantee · Affiliate disclosure ·
  //                 Liability limit · IP · Governing law · Changes · Contact
  //   returns (6):  Guarantee period · How to request · Eligibility · Timeline ·
  //                 Damaged items · Important note
  //   contact (5):  Support email · Response time · Business hours · Order inquiries · Distributor note
  "modals": [
    {
      "id": "privacy", "title": "Privacy Policy",
      "intro": "Effective date: [Month DD, YYYY]. ...",
      "sections": [{ "heading": "1. Information We Collect", "content": "..." }]
    },
    {
      "id": "terms", "title": "Terms of Service",
      "intro": "Last updated: [Month DD, YYYY]. ...",
      "sections": [{ "heading": "1. Independent Distributor Disclosure", "content": "..." }]
    },
    {
      "id": "returns", "title": "Returns & Refunds Policy",
      "intro": "...",
      "sections": [{ "heading": "Satisfaction Guarantee", "content": "[X]-day money-back guarantee..." }]
    },
    {
      "id": "contact", "title": "Contact Us",
      "intro": "...",
      "sections": [{ "heading": "Customer Support Email", "content": "support@yourdomain.com" }]
    }
  ]
}
```

---

## COPY RULES

**Voice:** Direct (no passive) · Empathetic (pain first) · Evidence-based (name the mechanism) · Urgent but plausible.

| Section | Formula |
|---------|---------|
| Alert bar | 3 badges: discount + guarantee + shipping |
| Hero headline | `[Main text] [HIGHLIGHTED OUTCOME]` — highlight = most emotionally resonant phrase |
| Benefits | P1: biological root cause → P2: emotional daily-life consequences → P3: bridge to product |
| Features | Each card = 1 ingredient. Title = Name (dosage). Description = mechanism + what customer feels. |
| Science | Max 3 steps. Each = 1 mechanism. End with bold result. |
| Reviews | Min 3. Each = specific outcome + name + location. |
| FAQ | Min 6: Does it work? Is it safe? How to take? If it doesn't work? Subscription? Best value? |

---

## LEGAL & GOOGLE ADS — NON-NEGOTIABLE

**Prohibited on every page:**
- "FDA approved" (use "FDA registered facility" only)
- "cures", "treats", "diagnoses", "prevents disease"
- Fake countdown timers that reset
- Celebrity endorsements without documented consent

**Required on every page:**
- Distributor notice in footer (visible without scrolling far)
- Country-correct disclaimer (FDA/FTC, MHRA, or EFSA) — visible without modal click
- Working Privacy Policy, Terms, Returns, Contact modals
- Real support email + current copyright year

**UK/EU extras:** No "clinically proven" without published RCT (UK). EFSA-approved claims only (EU). GDPR cookie consent banner required.

---

## TEMPLATE ENGINE

| Syntax | Behavior |
|--------|---------|
| `{{key}}` | Replaced with `data["key"]` |
| `{{#each array}}...{{/each}}` | Loop — use `{{field}}` or `{{this}}` |
| `{{#if key}}...{{/if}}` | Renders if `data["key"]` truthy |
| `{{block:NAME}}` | Inserts block HTML (base.html only) |

`{{#each}}` supports one level of nesting. Remaining `{{` in output = missing JSON field.

---

## IMAGES — ⚠️ NO HOTLINKING EVER

Never use external URLs in JSON image fields — Google Ads suspends for CDN hotlinking.
Always `images/filename.webp` (local).

Drafts: `https://placehold.co/WxH/BG/FG?text=LABEL` — replace before AUDITOR.

| Field | File | Max size |
|-------|------|---------|
| `hero_image` | images/hero.webp | 1200px wide |
| `benefits_image` | images/lab.webp | 900px wide |
| `science_image` | images/science.webp | 900px wide |
| `og_image` | images/og-cover.webp | 1200×630px exact |

---

## SECTION ORDER — LOCKED, NEVER REORDER

```
alert-bar → navbar → hero → trust → social-proof → benefits → reviews → features → science → faq → footer → modals
```

Why: trust + social-proof after hero = credibility before copy-heavy sections. FAQ last = captures final objections. This order is not negotiable.

---

## FILE NAMING

| Type | Pattern | Example |
|------|---------|---------|
| Data file | `COUNTRY-PRODUCT.json` | `us-reticlear.json` |
| Theme | `DESCRIPTOR.css` | `veluna.css` |
| Output (A) | `output/model-a/SLUG/` | `output/model-a/reticlear-us/` |
| Output (B) | `output/model-b/SLUG/` | |
| Output (C) | `output/model-c/SLUG/` | |
| Output (D) | `output/model-d/SLUG/` | `output/model-d/veluna-us-review/` |
| Output (T) | `output/model-t/SLUG/` | `output/model-t/en-bluesalt-testosterone/` |

Output routing is automatic via `page_model` field. Never move pages manually between model folders.

---

## QUICK REFERENCE

| Task | Action |
|------|--------|
| New page (new product) | Fetch page → new `data/us-PRODUCT.json` → run generator |
| Country variant | Copy JSON → change slug/language/cta_url/currency/copy → regenerate |
| Change colors | Change `"theme"` field → regenerate |
| Copy update | Edit JSON fields → regenerate |
| New block type | Create `blocks/NEWBLOCK.html` → add JSON fields → add `{{block:NEWBLOCK}}` to `base.html` |
