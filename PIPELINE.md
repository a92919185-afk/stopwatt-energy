# Pipeline — How to Generate a New Landing Page

## THE RULE: Only touch /research, /data and /styles. Never touch the core.

---

## The Hybrid Model — Why It Exists

```
PROBLEM WITH PURE AI COPY:              PROBLEM WITH PURE TEMPLATES:
• Hallucinated data                     • Generic, boring copy
• Wrong cultural tone                   • No recent intelligence
• Outdated information                  • Misses what's resonating now
• No awareness of real pain points      • No competitor differentiation

SOLUTION: TWO-PHASE HYBRID
─────────────────────────────────────────────────────────────
PHASE 1 (Research):   Free exploration → rich intelligence brief
PHASE 2 (Writing):    Strict documentation + brief → JSON output

Phase 1 enriches.  Phase 2 controls.  JSON is the filter.
─────────────────────────────────────────────────────────────
```

```
CORE (IMMUTABLE)              VARIABLES (your work is here)
─────────────────             ─────────────────────────────
generator.js    ← LOCKED      data/COUNTRY-PRODUCT.json  ← CREATE THIS
templates/      ← LOCKED      styles/THEME.css           ← CREATE IF NEEDED
blocks/         ← LOCKED
styles/theme.css← LOCKED
```

---

## Profiles System — Read Before Writing Any Copy

Before writing a single word of copy, an AI agent MUST read two files:

```
profiles/countries/COUNTRY.md   ← HOW to write (tone, trust triggers, forbidden phrases)
profiles/niches/NICHE.md        ← WHAT to write about (problem, mechanism, outcomes)
```

These two files combined = the complete writing guide for any page.
Real product data (from the official page) always takes priority over examples in the profiles.

| New country needed? | Add one file to profiles/countries/ |
| New product type?   | Add one file to profiles/niches/    |
| Nothing else changes in the system. |

---

## Step-by-Step Pipeline

```
OWNER SENDS:
  • URL of official product page  ← the reference
  • Target country
       ↓
════════════════════════════════════
PHASE 1 — RESEARCH  (free exploration)
════════════════════════════════════
       ↓
[STEP 1] FETCH THE REFERENCE PAGE
  WebFetch the URL. Split what you extract into two buckets:

  BUCKET A — VISUAL (→ goes into a new .css file)
  ┌─────────────────────────────────────────────────┐
  │ • Primary color (buttons, CTAs, highlights)     │
  │ • Secondary/accent color (badges, labels)       │
  │ • Background colors (page bg, section bg)       │
  │ • Text colors (headings, body, muted)           │
  │ • Font families (heading + body)                │
  │ • Alert bar / announcement bar color            │
  └─────────────────────────────────────────────────┘

  BUCKET B — REAL DATA (→ goes into the .json file)
  ┌─────────────────────────────────────────────────┐
  │ • Product name (exact)                          │
  │ • Discount % and price (exact)                  │
  │ • Ingredients (names + dosages, exact)          │
  │ • Benefit claims and mechanisms (exact)         │
  │ • Guarantee terms (30 or 60 days?)              │
  │ • Trust badges (FDA, GMP, Non-GMO, etc.)        │
  │ • Customer testimonials (name, location, quote) │
  │ • Support email                                 │
  └─────────────────────────────────────────────────┘

  ⚠️ NEVER INVENT DATA FROM BUCKET B.
  If a field is not on the page, ask the owner or leave a note.
       ↓
[STEP 1B] DEEP RESEARCH — Fill the Research Brief
  Copy research/BRIEF_TEMPLATE.md → research/COUNTRY-PRODUCT-brief.md
  Then fill every section via WebSearch and WebFetch:

  • Ingredients: search PubMed/NIH for recent clinical evidence
    → "lutein zeaxanthin macular degeneration study 2023 2024"
    → "tongkat ali testosterone clinical trial"

  • Audience in this country: real prevalence data
    → "vision problems adults over 50 [COUNTRY] statistics"
    → "low testosterone men 40+ [COUNTRY] NHS/CDC/Health Canada"

  • Cultural/current context:
    → "[niche] trending [COUNTRY] 2024 2025"
    → "[niche] news [COUNTRY]" — any recent events making this more relevant?

  • Real pain points: search forums, Reddit, Amazon reviews
    → "r/[niche] [country]", "[problem] forum [country]"
    → What exact words do real people use?

  • Competitor landscape:
    → "[niche] supplement [country]" — what are top competitors doing?
    → What angle is NOT being taken that we can own?

  Save the completed brief to: research/COUNTRY-PRODUCT-brief.md

  ⚠️ In Phase 1, explore freely — no constraints on what to find.
  ⚠️ In Phase 2 (next), everything gets filtered through the schema.
       ↓
[STEP 1C] READ THE PROFILES
  Identify the niche from the product page content:
  • Eye/vision product      → profiles/niches/vision.md
  • Male energy/testosterone → profiles/niches/male-vitality.md
  • Weight loss/metabolism  → profiles/niches/weight-loss.md
  • Sleep/relaxation        → profiles/niches/sleep.md
  • Joint pain/mobility     → profiles/niches/joint-pain.md
  • Brain/memory/focus      → profiles/niches/cognitive.md
  • New category            → create profiles/niches/NEWNAME.md first

  Read the country profile for the target market:
  • COUNTRY.md (root level) → consolidated guide for ALL 9 markets: tone, vocabulary,
    spelling, currency, regulatory disclaimer, EFSA claims, cultural adaptation checklist
  • profiles/countries/CC.md → deeper cultural profile if available
  • New country → create profiles/countries/COUNTRYCODE.md first

  Apply BOTH profiles when writing all copy in the JSON file.
  For non-English markets (de, nl, da, sv): copy must be written in the target language.
  NEVER publish an English draft to a non-English market slug.
       ↓
════════════════════════════════════
PHASE 2 — OUTPUT  (strictly constrained)
════════════════════════════════════
  Inputs allowed in Phase 2:
  ✓ research/COUNTRY-PRODUCT-brief.md  (Phase 1 output)
  ✓ profiles/countries/COUNTRY.md      (tone + trust triggers)
  ✓ profiles/niches/NICHE.md           (problem + mechanism + copy angles)
  ✓ JSON schema from CLAUDE.md         (output structure)
  ✗ Anything not found in the above sources = flag for owner
       ↓
[STEP 2] CREATE styles/PRODUCTNAME.css
  • First line: @import url('theme.css');
  • Override :root variables with colors from BUCKET A
  • Override hero gradient, badge colors, highlight color
  • If dark background: hardcode #header { background: #COLOR; }
  • Verify contrast: navbar text, modal text, section labels
       ↓
[STEP 3] IDENTIFY LANGUAGE & TONE
  • US          → American English, bold/urgent, aggressive discount
  • UK/AU/IE    → British English, slightly softer tone
  • CA          → Neutral English (close to US)
  • DE/NL/DK/SE → Translate, factual, lead with science over emotion
       ↓
[STEP 4] CREATE data/COUNTRY-PRODUCT.json
  • slug:         "COUNTRY-PRODUCTNAME"
  • theme:        "PRODUCTNAME.css"  ← the file you created in Step 2
  • cta_url:      real affiliate URL
  • All copy:     written using our persuasive structure (see CLAUDE.md)
  • All data:     real values from BUCKET B — nothing invented
  • Legal modals: full content (Google Ads compliant — see CLAUDE.md)
       ↓
[STEP 5] GENERATE
  node generator.js COUNTRY-PRODUCT
       ↓
[STEP 6] VERIFY
  ✓ No {{placeholder}} remaining in output HTML
  ✓ Navbar visible and readable (correct contrast)
  ✓ Hero colors visually match the reference page
  ✓ All sections render correctly
  ✓ Modals open → text is readable (dark text on light bg)
  ✓ Footer has: distributor notice + FDA/MHRA/EFSA disclaimer
       ↓
[STEP 7] DELIVER
  output/SLUG/          ← upload this entire folder
  ├── index.html
  └── styles/
      ├── theme.css
      └── PRODUCTNAME.css
```

---

## What Changes Per Variation

```
NEW PRODUCT, SAME COUNTRY
  Copy the closest existing JSON
  Change: slug, product_name, meta_*, hero content, ingredients,
          benefits, science steps, reviews, FAQ, support_email,
          cta_url, hero_image, theme (if colors are different)

SAME PRODUCT, NEW COUNTRY
  Copy the existing country JSON
  Change: slug, language, meta_*, copy/tone adaptation,
          currency symbols ($→£→€→CA$→AU$), cultural expressions,
          cta_url (country-specific affiliate link if needed)

SAME PRODUCT, SAME COUNTRY — COPY VARIANT (A/B test)
  Copy JSON, change slug to add suffix (e.g., us-reticlear-v2)
  Change: headline, hero_subtext, benefits copy, CTA text
```

---

## Target Markets — ONLY These

```
✅ TIER 1:    US · UK · CA · AU
✅ TIER 2:    DE · IE · NL · DK · SE (and similar European Tier 2)
❌ NEVER:     BR · IN · and all other markets
```

---

## Google Ads Compliance Checklist (Every Page)

- [ ] Footer: independent distributor notice clearly visible
- [ ] Footer: FDA/MHRA/EFSA disclaimer
- [ ] Privacy Policy modal: includes cookies, GDPR mention for EU/UK
- [ ] Terms modal: no medical advice disclaimer, age 18+ mention
- [ ] Returns modal: exact guarantee terms (60 days, no questions)
- [ ] Contact modal: real email, response time
- [ ] No income claims (no "earn X" language)
- [ ] No disease cure claims ("treats" / "cures" / "prevents" = banned)
- [ ] Testimonials are described as individual results, not typical

---

## Generator Commands

```bash
# Single page
node generator.js us-reticlear

# All pages at once
node generator.js --all

# Help
node generator.js --help
```

---

## Folder Structure Reference

```
page-builder/
├── CLAUDE.md               ← Master instructions — READ FIRST
├── PIPELINE.md             ← This file — workflow quick reference
├── COPY.md                 ← Copy philosophy, formulas, Model D patterns
├── COUNTRY.md              ← Cultural adaptation for all 9 markets — READ for non-US
├── MODEL-B.md              ← Competitor upgrade strategy
├── MODEL-C.md              ← Mechanism hook strategy
├── MODEL-D.md              ← Social proof first strategy
├── AUDITOR.md              ← Quality audit system (run after generation)
├── REVIEWER.md             ← Holistic quality gate (run after AUDITOR)
├── DEPLOY.md               ← ⚠️ Git deploy rules — READ before any git push
├── SEO.md                  ← SEO strategy and on-page requirements
├── DESIGN.md               ← Visual DNA extraction and theme creation guide
├── STRATEGIST.md           ← Pre-writing strategy framework
│
├── generator.js            ← ⛔ CORE — DO NOT EDIT
│
├── templates/              ← ⛔ CORE — DO NOT EDIT
│   ├── base.html           ← Models A/B/C template
│   └── base-d.html         ← Model D template (different section order)
│
├── blocks/                 ← ⛔ CORE — DO NOT EDIT
│   ├── alert-bar.html
│   ├── navbar.html
│   ├── hero.html           ← Models A/B/C hero
│   ├── hero-d.html         ← Model D hero (price in hero, image left)
│   ├── trust.html
│   ├── trust-d.html        ← Model D trust (with aggregate rating)
│   ├── social-proof.html
│   ├── benefits.html
│   ├── features.html
│   ├── science.html
│   ├── reviews.html
│   ├── faq.html
│   ├── footer.html
│   ├── modals.html
│   ├── product-identity.html ← Model D "What is it?" section
│   ├── ingredients-list.html ← Model D numbered ingredients
│   ├── guarantee.html        ← Model D standalone guarantee
│   ├── benefits-list.html    ← Model D bullet benefits
│   └── final-cta.html        ← Model D closing CTA section
│
├── styles/                 ← ADD new themes here, never edit theme.css
│   ├── theme.css           ← ⛔ CORE — DO NOT EDIT
│   ├── red.css
│   ├── green.css
│   └── dark.css
│
├── profiles/               ← WRITING GUIDES — add new files, never edit core profiles
│   ├── countries/          ← One file per market (tone, culture, legal)
│   │   ├── us.md
│   │   ├── uk.md
│   │   └── ...
│   └── niches/             ← One file per product category
│       ├── vision.md
│       ├── male-vitality.md
│       └── ...
│
├── research/               ← PHASE 1 OUTPUT — one brief per page before writing
│   ├── BRIEF_TEMPLATE.md   ← Copy this for every new page
│   └── [country]-[product]-brief.md  ← Filled briefs saved here
│
├── data/                   ← PHASE 2 OUTPUT — JSON files (one per page)
│   └── [country]-[product].json
│
└── output/                 ← GENERATED — deploy this, never edit manually
    └── [slug]/
        ├── index.html
        └── styles/
```

**The flow between folders:**
```
profiles/ ──────────────────────────────────────────┐
research/BRIEF_TEMPLATE.md → research/BRIEF.md ─────┤
                                                     ↓
                                            data/JSON  →  output/HTML
```
