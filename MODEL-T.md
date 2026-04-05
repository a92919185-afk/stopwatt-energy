# Model T — Top 5 Listicle / Editorial Authority Portal

## What Is Model T?

Model T is an **editorial listicle** format: a "Top 5 [niche] products" ranking page that targets a competitor's brand keyword (or a high-volume niche keyword), establishes authority through a journalistic editorial voice, and positions the owner's affiliate product as the clear #1 choice.

It mimics the editorial authority of a health journalism portal — not a product sales page. This framing makes it Google Ads policy-friendly as a **comparison/editorial** page rather than a direct product page.

**Format at a glance:**
- Site header with editorial logo + "last updated" date
- Hero with editorial headline + trust bar
- Editorial prose (problem + authority framing)
- Methodology / criteria section with warning box
- Ranked product cards (#1 through #5)
- Survey box (shown only under #1)
- Final CTA card
- Social-style review testimonials
- Full legal footer + 4 modals

---

## When to Use Model T

| Condition | Decision |
|-----------|----------|
| Competitor has brand keyword volume | Use Model T — target "[competitor]" or "[competitor] review" |
| Niche has "[top X] + [product category]" volume | Use Model T |
| You have affiliate link for your #1 product | Required — no affiliation = no #1 product |
| You want editorial E-E-A-T signals | Model T provides strongest authority framing |
| Direct-response sales page needed | Use Model A or C instead |
| You have strong image/visual assets for one product | Consider Model C |

---

## SEO Strategy

**Primary keyword targets:**
- `[competitor name] review` (e.g., "blue salt trick boost review")
- `[competitor name] alternative` (e.g., "blue salt trick boost alternative")
- `best [category] supplement [year]` (e.g., "best testosterone booster 2026")
- `top 5 [category]` (e.g., "top 5 male enhancement supplements")

**E-E-A-T signals built into the template:**
- Author byline via `site_name` (organization schema)
- `last_updated` date shown in header and JSON-LD
- `dateModified` in Article schema
- Editorial criteria section (methodology transparency)
- Warning box (balanced, non-advertorial framing)
- Pros AND cons for every product (including #1)
- `rel="nofollow sponsored"` on all affiliate links

**Google Ads compliance built in:**
- `rel="nofollow sponsored"` on every CTA link
- No "FDA Approved" language (only "FDA Registered Facility")
- Working modals (privacy, terms, returns, contact)
- Distributor notice in footer
- Country-correct disclaimer
- Editorial disclosure in footer (discreet — see note below)

> **⚠️ EDITORIAL DISCLOSURE — PLACEMENT RULE**
> The FTC/ASA affiliate disclosure text lives **in the footer, inside the disclaimer block**, rendered in small muted text. It reads:
> *"Editorial Disclosure: This site contains paid affiliate links. We may earn a commission when you purchase through our links, at no extra cost to you. Rankings reflect our editorial judgment. Full Disclosure"*
>
> **Do NOT move it to a banner at the top of the page.** It must stay discrete in the footer alongside the FDA/FTC disclaimer. This is intentional — the editorial format relies on the page feeling like an organic journalism portal. A prominent disclosure bar breaks that framing and reduces conversion. The footer placement is legally sufficient under FTC guidelines when combined with the `rel="nofollow sponsored"` attribute and the Terms of Service modal.

---

## File Structure

```
templates/base-t.html          ← Template (DO NOT modify)
styles/model-t-base.css        ← Structural CSS (DO NOT modify)
styles/[portal-name].css       ← Theme file (CREATE per portal)
data/[slug].json               ← Data file (CREATE per page)
output/model-t/[slug]/         ← Auto-generated output
```

---

## Step-by-Step Build Guide

### Phase 0 — Strategy
Before building, run STRATEGIST.md to create `research/SLUG-strategy.md`.
Key questions for Model T:
- What is the competitor keyword? (the traffic source)
- What is the #1 affiliate product? (the conversion target)
- What is the niche pain point?
- What are the 5 products to rank?

### Phase 1 — Research
`WebFetch` the competitor's page + the #1 affiliate product page.
- Collect real product names, brands, claimed ingredients
- Note the competitor's weak points (your #1's strong points)
- Collect real customer reviews for the review section

### Phase 2 — Build

**Step 1 — Create theme CSS**

```css
/* styles/[portal-name].css */
/* THEME: [Portal Name] | Model T | [niche] editorial
   Source: [reference URL]
   Date: [date] | Mode: light/editorial */

@import url('model-t-base.css');

:root {
  /* Override any model-t-base.css variables here */
  --t-color-primary: #1B4332;
  --t-color-accent:  #C7782A;
  /* Additional overrides as needed */
}
```

**Step 2 — Create JSON data file**

File: `data/[slug].json`
See full JSON schema below.

**Step 3 — Generate**

```bash
node generator.js [slug]
```

Output: `output/model-t/[slug]/index.html`

**Step 4 — Verify**

```bash
# Check for missing fields
grep -o '{{[^}]*}}' output/model-t/[slug]/index.html

# Should return empty. Any {{field}} remaining = missing JSON key.
```

**Step 5 — Quality Gate**

Run AUDITOR.md (score ≥ 90 required).
Run REVIEWER.md (PUBLISH READY verdict required).

---

## JSON Schema — Complete Field Reference

```json
{
  "page_model": "T",
  "slug": "en-competitor-keyword",
  "language": "en",
  "theme": "portal-name.css",
  "year": "2026",
  "og_locale": "en_US",
  "og_image": "images/og-cover.webp",

  // ── Site Identity ────────────────────────────────────────
  "site_name": "Men's Pro Health",
  "site_name_prefix": "Men's Pro",
  "site_name_highlight": "Health",
  "site_tagline": "Evidence-Based Men's Health Reviews",
  "category_tag": "Men's Health",
  "last_updated": "April 4, 2026",

  // ── SEO ──────────────────────────────────────────────────
  "meta_title": "Blue Salt Trick Boost vs. Top 5 Alternatives (2026 Review)",
  "meta_description": "We tested 5 male performance supplements head-to-head. Here's the honest ranking, including whether Blue Salt Trick Boost makes the cut.",
  // canonical_url: DEPLOYMENT-ONLY — omit until owner provides final domain

  // ── Legal / Company ──────────────────────────────────────
  "product_name": "Boostaro",              // #1 affiliate product (used in modals)
  "company_name": "MensProHealth LLC",
  "support_email": "support@mensprohealth.com",
  "support_phone": "+1 (800) 000-0000",

  // ── Utility Bar ──────────────────────────────────────────
  "utility_badge": "Editorial Standard",
  "utility_left_text": "Independent reviews, no manufacturer influence",
  "utility_right_1": "Last updated: April 4, 2026",
  "utility_right_2": "5 products tested",

  // ── Hero ─────────────────────────────────────────────────
  "hero_eyebrow": "2026 Ranking",
  "hero_headline": "Top 5 Male Performance Supplements: Ranked & Reviewed",
  "hero_subheadline": "We spent 90 days evaluating the most-searched men's health supplements...",
  "hero_trust_1": "Independent editorial — no brand influence",
  "hero_trust_2": "All claims cross-referenced with published research",
  "hero_trust_3": "Rankings updated quarterly",
  "hero_image": "images/hero.webp",       // optional, omit if no image

  // ── Editorial Prose ──────────────────────────────────────
  "prose_paragraphs": [
    "Opening paragraph that names the problem...",
    "Second paragraph that deepens the pain..."
    // 3–5 paragraphs total. Ends with the bait product critique.
  ],

  // ── Prose Image 1 — placed AFTER prose_paragraphs, BEFORE pull_quote ──
  // Strategic position: visual rest after the bait product critique.
  // Shows after the dense opening paragraphs. Reader needs a breath.
  // Ideal content: skeptical man examining a supplement bottle,
  //                product label close-up, "promise vs reality" concept.
  // OPTIONAL — omit field entirely if no image available.
  "prose_image_1":         "images/editorial-1.webp",
  "prose_image_1_alt":    "Man reviewing supplement label — skeptical research moment",
  "prose_image_1_caption": "One-line editorial caption describing the image context.",

  "pull_quote": "A compelling pull quote that captures the editorial thesis...",
  "prose_bridge_text": "Bridge sentence from problem to solution...",
  "prose_problem_headline": "The Real Problem With Most [Category] Products",

  // ── Prose Image 2 — placed AFTER prose_problem_headline h3, BEFORE first problem paragraph ──
  // Strategic position: opens the "problem section" visually — like a
  // magazine feature photo at the start of a major article chapter.
  // Ideal content: man showing the pain point (fatigue, low energy, etc.),
  //                clinical chart showing the problem (e.g. T-decline by decade).
  // OPTIONAL — omit field entirely if no image available.
  "prose_image_2":         "images/editorial-2.webp",
  "prose_image_2_alt":    "Middle-aged man looking fatigued — low testosterone affects daily life",
  "prose_image_2_caption": "One-line editorial caption with a data point or observation.",

  "prose_problem_paragraphs": [
    "Problem paragraph 1...",
    "Problem paragraph 2..."
  ],
  "prose_cta_text": "Jump to our rankings to see which products actually work.",

  // ── Methodology ──────────────────────────────────────────
  "criteria_headline": "How We Ranked These Products",
  "criteria": [
    { "title": "Ingredient Transparency", "desc": "Full label disclosure, no proprietary blends..." },
    { "title": "Dosage Efficacy",         "desc": "Clinical doses, not token inclusions..." },
    { "title": "Safety Profile",          "desc": "Third-party tested, no banned substances..." },
    { "title": "Customer Evidence",       "desc": "Verified purchase reviews only..." },
    { "title": "Value for Money",         "desc": "Cost per dose vs. competitors..." },
    { "title": "Company Credibility",     "desc": "Years in market, transparency, guarantees..." }
  ],
  "warning_headline": "Red Flags We Found in This Category",
  "warning_items": [
    { "num": "1", "title": "Proprietary Blends", "text": "..." },
    { "num": "2", "title": "Underdosed Ingredients", "text": "..." },
    { "num": "3", "title": "No Money-Back Guarantee", "text": "..." }
  ],

  // ── Rankings Section ─────────────────────────────────────
  "rankings_headline": "2026 Rankings: Best Male Performance Supplements",
  "rankings_intro": "After 90 days of evaluation, here is our final ranking...",

  // ── Products Array ───────────────────────────────────────
  // One object per product. EXACTLY 5 products recommended.
  // rank_class must match CSS modifiers: rank-1, rank-2, rank-3, rank-lower
  "products": [
    {
      "rank": "#1",
      "rank_num": "1",
      "rank_class": "rank-1",
      "rank_label": "BEST OVERALL — OUR TOP PICK",
      "name": "Boostaro",
      "brand": "Boostaro Inc.",
      "grade": "A+",
      "votes": "9,847",
      "image": "images/product-1.webp",
      "pros": [
        "Full ingredient transparency",
        "Clinically studied dosages",
        "180-day money-back guarantee",
        "Made in FDA Registered Facility"
      ],
      "cons": [
        "Only available on official website",
        "Premium price point"
      ],
      "bottom_line_paragraphs": [
        "First analysis paragraph...",
        "Second paragraph with specific detail...",
        "Third paragraph bridging to CTA..."
      ],
      "cta_url": "https://REAL-AFFILIATE-URL",
      "cta_text": "Check Official Price",
      "cta_class": "primary",
      "cta_note": "Currently offering discount for new customers",
      "cta_disclaimer": "Affiliate link — we may earn a commission at no cost to you",

      // Survey box — show for #1 only
      "survey_class": "",
      "survey_headline": "What Customers Are Saying About Boostaro",
      "survey_items": [
        "89% reported noticeable improvement within 30 days",
        "92% said they would recommend to a friend",
        "4.8 average rating across 9,847 verified reviews"
      ],
      "survey_main_text": "Survey of 500 verified customers conducted Q1 2026...",
      "survey_note": "* Survey results are self-reported. Individual results vary."
    },
    {
      "rank": "#2",
      "rank_num": "2",
      "rank_class": "rank-2",
      "rank_label": "RUNNER UP",
      "name": "Blue Salt Trick Boost",
      "brand": "Unknown Manufacturer",
      "grade": "C+",
      "votes": "1,243",
      "image": "images/product-2.webp",
      "pros": ["Widely available", "Lower price point"],
      "cons": [
        "Proprietary blend — doses hidden",
        "No clinical evidence for 'blue salt' mechanism",
        "Only 30-day refund window",
        "No FDA Registered Facility disclosed"
      ],
      "bottom_line_paragraphs": [
        "Analysis of the competitor...",
        "Why it falls short vs. #1..."
      ],
      "cta_url": "#rank-1",
      "cta_text": "See Our #1 Pick Instead",
      "cta_class": "secondary",
      "cta_note": "",
      "cta_disclaimer": "No affiliate link for this product",

      // Survey box hidden for ranks 2-5
      "survey_class": "hidden",
      "survey_headline": "",
      "survey_items": [],
      "survey_main_text": "",
      "survey_note": ""
    }
    // ... products 3, 4, 5 follow same structure
  ],

  // ── Final CTA ────────────────────────────────────────────
  "target_grade": "A+",
  "target_votes": "9,847",
  "final_headline": "After evaluating every major product in this category...",
  "final_cta_url": "https://REAL-AFFILIATE-URL",
  "final_cta_text": "Get Boostaro — Official Site",
  "final_product_image": "images/final.webp",

  // ── Reviews (Social Style) ───────────────────────────────
  "reviews_headline": "What Real Users Are Saying",
  "reviews": [
    {
      "initials": "MR",
      "handle": "@mike_r_fitness",
      "time": "2 days ago",
      "text": "Switched from [competitor] to Boostaro two months ago...",
      "likes": "284",
      "comments": "31"
    }
    // Min 3 reviews recommended
  ],

  // ── Legal ────────────────────────────────────────────────
  "distributor_notice": "<strong>Independent Distributor Notice:</strong> This website is operated by an independent affiliate and is not affiliated with, endorsed by, or operated by any manufacturer. All product names are trademarks of their respective owners. Rankings reflect editorial judgment. Results depicted are not typical. Nothing on this page constitutes medical advice.",
  "disclaimer": "* These statements have not been evaluated by the FDA. Products are not intended to diagnose, treat, cure, or prevent any disease. Individual results vary. This site contains paid affiliate links.",

  // ── Modals (all 4 required) ──────────────────────────────
  "modals": [
    {
      "id": "privacy",
      "title": "Privacy Policy",
      "intro": "Effective date: April 1, 2026. ...",
      "sections": [
        { "heading": "1. Information We Collect", "content": "..." },
        { "heading": "2. How We Use Your Information", "content": "..." },
        { "heading": "3. Cookies & Tracking", "content": "..." },
        { "heading": "4. Third-Party Sharing", "content": "..." },
        { "heading": "5. Data Retention", "content": "..." },
        { "heading": "6. Security", "content": "..." },
        { "heading": "7. Your Rights (CCPA/GDPR)", "content": "..." },
        { "heading": "8. Children's Privacy", "content": "..." },
        { "heading": "9. Changes to This Policy", "content": "..." },
        { "heading": "10. Contact", "content": "..." }
      ]
    },
    {
      "id": "terms",
      "title": "Terms of Service",
      "intro": "Last updated: April 1, 2026. ...",
      "sections": [
        { "heading": "1. Affiliate Disclosure",           "content": "..." },
        { "heading": "2. Acceptance of Terms",            "content": "..." },
        { "heading": "3. Age Requirement",                "content": "..." },
        { "heading": "4. No Medical Advice",              "content": "..." },
        { "heading": "5. Editorial Independence",         "content": "..." },
        { "heading": "6. No Results Guarantee",           "content": "..." },
        { "heading": "7. Affiliate Link Disclosure",      "content": "..." },
        { "heading": "8. Limitation of Liability",        "content": "..." },
        { "heading": "9. Intellectual Property",          "content": "..." },
        { "heading": "10. Governing Law",                 "content": "..." },
        { "heading": "11. Changes to Terms",              "content": "..." }
      ]
    },
    {
      "id": "returns",
      "title": "Returns & Refunds Policy",
      "intro": "...",
      "sections": [
        { "heading": "Affiliate Publisher Notice", "content": "We are an independent affiliate publisher and do not process orders or refunds directly. Purchases made through our links are subject to each manufacturer's return policy." },
        { "heading": "Boostaro Return Policy",     "content": "Boostaro offers a 180-day money-back guarantee on purchases made through their official website. Contact their support team directly for return instructions." },
        { "heading": "Contact for Returns",        "content": "Visit the official product website for return instructions specific to your purchase." }
      ]
    },
    {
      "id": "contact",
      "title": "Contact Us",
      "intro": "We welcome questions about our editorial process and affiliate relationships.",
      "sections": [
        { "heading": "Editorial Inquiries",   "content": "support@mensprohealth.com" },
        { "heading": "Response Time",         "content": "Within 2 business days." },
        { "heading": "Affiliate Disclosure",  "content": "We are an independent affiliate and do not represent any manufacturer." }
      ]
    }
  ]
}
```

---

## Copy Formulas

### Hero Headline
Formula: `[Year] + [Niche] + [Format] + [Implied promise]`
Example: `"2026 Ranking: Top 5 Male Performance Supplements — Tested & Ranked"`

### Editorial Prose Opening
Formula: Problem → Scale → Why This Comparison Matters
- P1: Name the frustration ("The men's health supplement market is flooded with products that...")
- P2: Establish scale ("We evaluated 23 products before narrowing to the top 5...")
- P3: Bridge to methodology ("Here's the exact framework we used...")

### Product Card — Bottom Line (for #1)
Formula: Strength → Mechanism → Social Proof → Urgency
- P1: "Boostaro stands apart from every other product in this category because..."
- P2: Name the specific ingredient/mechanism that makes it work
- P3: Anchor with review stats or customer evidence
- P4 (optional): Scarcity/availability note

### Product Card — Bottom Line (for competitors)
Formula: Fair acknowledgment → Specific shortcoming → Redirect
- P1: Acknowledge one genuine positive
- P2: Name the specific reason it doesn't rank higher (doses, transparency, policy)
- P3: Redirect toward #1 without being aggressive ("If [X] is your primary concern, our #1 pick addresses this directly")

### Warning Box
Write 3 red flags that are genuinely true across the category.
The #1 product should not have any of these red flags.
This creates an implicit contrast without explicit comparison.

### Survey Box (shown for #1 only)
Report survey data as percentages and ratings. Must include:
- A "would recommend" stat
- A "noticed results by X days" stat
- The verified review count / average rating
Always add the disclaimer note about individual results.

---

## Image Slots

| Slot | File | JSON field | Position | Notes |
|------|------|-----------|----------|-------|
| Hero | images/hero.webp | `hero_image` | Below trust bar | Optional. 1200px wide |
| **Editorial 1** | images/editorial-1.webp | `prose_image_1` | **After prose_paragraphs, before pull_quote** | Optional. 900px wide. Bait-product-critique visual |
| **Editorial 2** | images/editorial-2.webp | `prose_image_2` | **After prose_problem_headline h3, before problem paragraphs** | Optional. 900px wide. Pain-point visual |
| Product 1 | images/product-1.webp | `products[0].image` | Card left column | 400×400px |
| Product 2 | images/product-2.webp | `products[1].image` | Card left column | 400×400px |
| Product 3 | images/product-3.webp | `products[2].image` | Card left column | 400×400px |
| Product 4 | images/product-4.webp | `products[3].image` | Card left column | 400×400px |
| Product 5 | images/product-5.webp | `products[4].image` | Card left column | 400×400px |
| Final CTA | images/final.webp | `final_product_image` | Final CTA card | 600×600px |
| OG Cover | images/og-cover.webp | `og_image` | Social share | 1200×630px exact |

All image paths must be local (`images/filename.webp`). Never use external URLs.

### Editorial Image Placement Logic

```
HERO IMAGE (above fold)
│
├── prose_paragraphs[0–N]   — bait product opening + critique
│
│   ◉ prose_image_1         — visual rest after critique block
│                              best: man examining supplement, skeptical research scene
│
├── pull_quote              — editorial thesis blockquote
├── prose_bridge_text       — transition to solution
├── prose_problem_headline  — h3 opens the "problem" section
│
│   ◉ prose_image_2         — visual chapter opener
│                              best: pain-point photo, clinical chart, before/after concept
│                              distance from Image 1: ~3 text elements (enough breathing room)
│
├── prose_problem_paragraphs[0–N]
└── prose_cta_text (bold)
```

**Psychology:** Two images in ~800 words of prose is the editorial sweet spot.
One image = page feels text-heavy. Three+ images = feels like a listicle blog, loses authority.
These two positions create a rhythm: read → breathe → read → breathe → rankings.

---

## Google Ads Compliance Checklist

Before submitting to Google Ads, confirm:

- [ ] Editorial disclosure present in footer (small text, inside `.t-footer-disclaimer` block)
- [ ] All CTA links have `rel="nofollow sponsored"` and `target="_blank"`
- [ ] No "FDA Approved" anywhere — only "FDA Registered Facility"
- [ ] No "cures", "treats", "diagnoses", "prevents disease"
- [ ] Competitor products represented fairly (pros + cons, not just attacked)
- [ ] `distributor_notice` present in footer
- [ ] `disclaimer` present in footer (FDA/FTC for US, MHRA for UK, EFSA for EU)
- [ ] All 4 modals complete with real content (no `...` placeholders)
- [ ] Real `support_email` in contact modal
- [ ] Current `year` in copyright
- [ ] `cta_url` for #1 is a real affiliate link

---

## Notes for Non-US Markets

See COUNTRY.md for full cultural adaptation rules.

**UK:** Add "Independent editorial review" disclaimer. Replace FDA language with MHRA. Replace FTC with ASA/CAP.
**EU (DE/NL/DK/SE):** Use EFSA-approved claim language only. More cautious editorial voice. Add GDPR cookie consent banner.

The `og_locale` field should match the market:
- US: `en_US`
- UK: `en_GB`
- DE: `de_DE`
- NL: `nl_NL`
