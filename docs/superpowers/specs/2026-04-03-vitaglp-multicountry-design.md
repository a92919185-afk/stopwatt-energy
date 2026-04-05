# Design Document — VitaGLP Multi-Country Landing Page

**Project:** VitaGLP Metabolic Support Supplement
**Page Model:** Model A (BOFU Direct)
**Language:** English (adapted for European skeptical audience)
**Target Markets:** Austria, Switzerland, Germany, France, Sweden, Denmark
**Created:** 2026-04-03
**Status:** Ready for Implementation

---

## 1. EXECUTIVE SUMMARY

### Strategic Positioning
VitaGLP is positioned as **"Metabolic support based on evidence — not marketing"** for the educated, skeptical European consumer who has tried multiple solutions and demands transparency, mechanism clarity, and scientific credibility.

### Core Promise
"Support your metabolism with ingredients that have been studied — not hyped."

### Why This Approach Works for Europe
- **Rejection of hype:** Europeans (especially Germanic/Nordic) actively distrust aggressive marketing
- **Evidence-first:** Lead with mechanism and ingredients, not emotional promises
- **Transparency:** Clear country selection flow respects the European value of informed choice
- **Pragmatism:** Focus on "support" and "balance" rather than "miracle" results

---

## 2. TARGET AUDIENCE PROFILE

### Primary Avatar: "The Rational Skeptic"
- **Age:** 35–60
- **Education:** University-level, research-oriented
- **Pain:** Slowing metabolism, weight gain despite effort, failed diet attempts
- **Mindset:** "I've tried everything. Prove to me why this is different."
- **Values:** Scientific credibility, transparency, no-nonsense communication
- **Buying Trigger:** "This makes sense biologically."

### Cultural Context by Region

| Country | Key Cultural Value | Copy Adjustment |
|---------|-------------------|-----------------|
| **Germany** | Precision, science, logic | Lead with mechanism, specific dosages |
| **Austria** | Quality, tradition | Emphasize natural ingredients, purity |
| **Switzerland** | Efficiency, discretion | Focus on practical outcomes, understated |
| **France** | Balance, sophistication | Aesthetic language, "l'équilibre" framing |
| **Sweden** | Lagom (moderation), authenticity | Sustainable approach, no extremes |
| **Denmark** | Transparency, trust | Clear guarantee, honest limitations |

### Shared European Objections
1. "Supplements don't work" → Address with specific ingredient studies
2. "This is marketing hype" → Use clinical tone, avoid superlatives
3. "Is it safe?" → Lead with certifications, natural sourcing
4. "I've tried similar things" → Differentiate with mechanism clarity
5. "Do I really need this?" → Position as support, not necessity

---

## 3. PAGE ARCHITECTURE

### Section Order (Locked — Model A Structure)

```
1. ALERT BAR
   └─ 3 badges: Discount (real) | Guarantee | Shipping

2. NAVBAR
   └─ Links: Benefits | Ingredients | Reviews | FAQ

3. HERO
   ├─ Badge: Social proof
   ├─ Headline: Problem-aware, mechanism-forward
   ├─ Subtext 1: Agitation (metabolism changes)
   ├─ Subtext 2: Solution introduction
   ├─ Tags: Key benefits
   ├─ CTA → Scrolls to #shipping section
   └─ Product image

4. TRUST BADGES
   └─ GMP | FDA Registered | Natural | Made in USA | Non-GMO

5. SOCIAL PROOF (Stats)
   └─ Customer count | Rating | Recommendation %

6. BENEFITS
   ├─ Label: The Problem
   ├─ Headline: Metabolism-focused
   ├─ 3 paragraphs: Root cause → Emotional impact → Bridge
   ├─ Urgency text
   ├─ CTA → Scrolls to #shipping section
   └─ Image: Lab/scientific

7. REVIEWS
   ├─ 3 testimonials (specific outcomes, European names)
   └─ Stats repeat

8. FEATURES (Ingredients)
   ├─ 6 ingredient cards with mechanism + benefit
   └─ CTA → Scrolls to #shipping section

9. SCIENCE
   ├─ 3-step mechanism explanation
   └─ CTA → Scrolls to #shipping section

10. SHIPPING ⭐ CRITICAL SECTION
    ├─ Headline: "Select Your Country"
    ├─ 6 country cards with flags:
    │   ├─ 🇦🇹 Austria → [URL_AUSTRIA]
    │   ├─ 🇨🇭 Switzerland → [URL_SWITZERLAND]
    │   ├─ 🇩🇪 Germany → [URL_GERMANY]
    │   ├─ 🇫🇷 France → [URL_FRANCE]
    │   ├─ 🇸🇪 Sweden → [URL_SWEDEN]
    │   └─ 🇩🇰 Denmark → [URL_DENMARK]
    └─ Shipping features (Free, Tracked, Fast)

11. FAQ
    └─ 6 questions: Works? Safe? How to take? Guarantee? Subscription? Value?

12. FOOTER
    ├─ Distributor notice
    ├─ Legal links (Privacy, Terms, Returns, Contact)
    └─ EFSA Disclaimer

13. MODALS
    └─ Privacy | Terms | Returns | Contact
```

---

## 4. COPY STRATEGY

### Tone & Voice Guidelines

**✅ DO:**
- Use clinical, precise language ("supports metabolic function")
- Lead with mechanism, follow with benefit
- Specific dosages and ingredient names
- Measured, confident tone (no exclamation marks)
- Acknowledge limitations ("results vary")
- Use "support" not "cure/transform"

**❌ DON'T:**
- Superlatives without evidence ("most powerful", "best ever")
- Emotional manipulation ("imagine your new body")
- False urgency ("only 3 left!")
- Vague claims ("natural ingredients" → specify which)
- Before/after imagery or specific weight loss promises
- Disease treatment claims

### Key Messaging Framework

| Section | Core Message | Psychological Trigger |
|---------|--------------|----------------------|
| **Hero** | "Your metabolism changes with age — here's support that makes sense" | Loss Aversion + Mechanism Clarity |
| **Benefits** | "It's not lack of discipline — it's biology" | Exoneration (removes shame) |
| **Features** | "Each ingredient has a specific role in metabolic support" | Authority + Specificity |
| **Science** | "This is how the mechanism works" | Cognitive Ease + Understanding |
| **Reviews** | "Real people, specific outcomes" | Social Proof |
| **Shipping** | "Choose your country and continue" | Control + Transparency |

### Headline Options (to be finalized)

**Option A (Mechanism-forward):**
"Your Metabolism Changes With Age — This Is Evidence-Based Support"

**Option B (Exoneration):**
"It's Not Lack of Willpower — It's Your Biology. Here's Support That Makes Sense"

**Option C (Specificity):**
"6 Clinically-Studied Ingredients for Metabolic Support — Without the Hype"

**Recommended: Option A** — Direct, mechanism-focused, no blame.

### Ingredient Copy (from official site)

1. **Berberine** — Supports glucose metabolism and insulin sensitivity, promoting stable energy levels
2. **Green Tea Extract (EGCG)** — Activates AMPK enzyme to support fat oxidation
3. **Chromium Picolinate** — Helps regulate blood sugar and reduce cravings
4. **Apple Cider Vinegar** — Supports digestive health and appetite regulation
5. **Vitamin B12** — Essential for energy production and metabolic function
6. **[Additional ingredient if confirmed]**

---

## 5. VISUAL DESIGN DIRECTION

### Niche: Weight Management / Metabolism
**Design Direction:** Fresh, natural, forward-motion. Growth energy.

### Color Palette (DNA Extraction from vitaglp.com)

Based on analysis of https://vitaglp.com:

```css
/* === LAYER 1: EXTRACTED COLORS FROM OFFICIAL SITE === */

/* Primary — Deep Emerald Green (dominant on site) */
--primary: #0d7a3e;           /* Source: Hero gradient, CTA buttons */
--primary-dark: #095c2e;      /* Derived: Primary -15% lightness */
--primary-light: #e8f5ee;     /* Derived: Primary at 10% opacity on white */

/* Secondary — Teal accent (trust badges, icons) */
--secondary: #14b8a6;         /* Source: Icon backgrounds, accents */

/* Accent — Warm Orange (urgency badges, highlights) */
--accent: #f97316;            /* Source: Alert bar, discount badges */
--accent-light: #fff7ed;      /* Derived: Orange tint for highlights */

/* Background Colors */
--bg: #ffffff;                /* Source: Main content background */
--bg-alt: #f8fafb;           /* Source: Alternate section backgrounds */
--bg-dark: #0f172a;          /* Source: Dark sections (footer) */

/* Text Colors */
--text: #1e293b;             /* Source: Body text (dark slate) */
--text-muted: #64748b;       /* Source: Captions, secondary text */
--text-light: #94a3b8;       /* Source: Footer text on dark bg */

/* Alert Bar */
--alert-bg: #fef3c7;         /* Source: Top announcement bar (amber/cream) */
--alert-text: #92400e;       /* Source: Text on alert bar */

/* CTA Button */
--cta-bg: #0d7a3e;           /* Source: Primary CTA buttons (green) */
--cta-text: #ffffff;         /* Source: Text on CTA buttons */
--cta-hover: #095c2e;        /* Derived: Darker green for hover */

/* Trust Section */
--trust-bg: #f0fdf4;         /* Source: Trust badges background */
--trust-icon-bg: #dcfce7;    /* Source: Icon circles in trust section */

/* Borders & Dividers */
--border: #e2e8f0;           /* Source: Card borders, dividers */
--border-light: #f1f5f9;     /* Derived: Subtle separators */

/* === LAYER 2: HERO GRADIENT === */
#hero {
  background: linear-gradient(
    135deg,
    #064e3b 0%,       /* Deep forest green */
    #0d7a3e 50%,      /* Primary emerald */
    #10b981 100%      /* Bright teal-green */
  );
}

/* === LAYER 3: COMPONENT SPECIFIC === */
/* Feature cards */
--card-bg: #ffffff;
--card-border: #e2e8f0;
--card-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);

/* Reviews */
--review-bg: #f8fafb;
--quote-color: #0d7a3e;

/* FAQ */
--faq-border: #e2e8f0;
--faq-open-bg: #f0fdf4;
```

### Typography (Extracted from vitaglp.com)

```css
/* === GOOGLE FONTS IMPORT === */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

/* === FONT FAMILY ASSIGNMENT === */
--font-heading: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* === FONT SIZES (from site analysis) === */
--text-xs: 0.75rem;      /* 12px - badges, small labels */
--text-sm: 0.875rem;     /* 14px - body small, captions */
--text-base: 1rem;       /* 16px - body text */
--text-lg: 1.125rem;     /* 18px - lead text */
--text-xl: 1.25rem;      /* 20px - subheadings */
--text-2xl: 1.5rem;      /* 24px - section headings */
--text-3xl: 1.875rem;    /* 30px - large headings */
--text-4xl: 2.25rem;     /* 36px - hero heading */
--text-5xl: 3rem;        /* 48px - hero main (responsive) */

/* === FONT WEIGHTS === */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;

/* === LINE HEIGHTS === */
--leading-tight: 1.2;    /* Headlines */
--leading-snug: 1.375;   /* Subheadings */
--leading-normal: 1.5;   /* Body text */
--leading-relaxed: 1.625;/* Large paragraphs */

/* === LETTER SPACING === */
--tracking-tight: -0.025em;  /* Headlines */
--tracking-normal: 0;        /* Body */
--tracking-wide: 0.025em;    /* Labels, badges */
--tracking-wider: 0.05em;    /* Uppercase labels */
```

**Why Inter:** Clean, modern, highly legible. Matches the clinical-meets-accessible aesthetic of vitaglp.com.

### Spacing System (8-Point Grid from vitaglp.com)

```css
/* === SPACING SCALE === */
--space-1: 0.25rem;   /* 4px   - micro spacing */
--space-2: 0.5rem;    /* 8px   - tight spacing */
--space-3: 0.75rem;   /* 12px  - compact */
--space-4: 1rem;      /* 16px  - base unit */
--space-5: 1.25rem;   /* 20px  - small gap */
--space-6: 1.5rem;    /* 24px  - standard gap */
--space-8: 2rem;      /* 32px  - section internal */
--space-10: 2.5rem;   /* 40px  - medium section */
--space-12: 3rem;     /* 48px  - large section */
--space-16: 4rem;     /* 64px  - section padding */
--space-20: 5rem;     /* 80px  - major sections */
--space-24: 6rem;     /* 96px  - hero spacing */

/* === SECTION PADDING === */
--section-padding-y: 5rem;      /* 80px vertical */
--section-padding-y-sm: 3rem;   /* 48px mobile */
--container-padding-x: 1.5rem;  /* 24px horizontal */
--container-max-width: 1200px;

/* === COMPONENT SPACING === */
--card-padding: 1.5rem;         /* 24px */
--card-gap: 1.5rem;            /* 24px between cards */
--grid-gap: 2rem;              /* 32px grid spacing */
--stack-gap: 1rem;             /* 16px vertical stack */
```

### Component Styling (from vitaglp.com analysis)

| Element | Style | Source |
|---------|-------|--------|
| **Buttons** | Rounded (8px radius), solid green | CTA buttons on site |
| **Primary CTA** | #0d7a3e background, white text | Hero and section CTAs |
| **Secondary CTA** | White bg, green border, green text | Alternative actions |
| **Cards** | White bg, subtle border (#e2e8f0), soft shadow | Feature cards, review cards |
| **Hero** | Dark green gradient (deep forest to emerald) | Hero section background |
| **Alert Bar** | Amber/cream background (#fef3c7), dark text | Top announcement bar |
| **Trust Badges** | Light green bg (#f0fdf4), icon circles | Trust section |
| **Country cards** | White bg, flag icon, hover lift | Custom for this project |
| **Section Labels** | Uppercase, tracking-wide, primary color | Section headers |
| **Badges** | Rounded full, small padding | Alert badges |

### Motion Layer (CSS-only)

1. **Hero entrance:** Staggered fade-up (badge → headline → subtext → CTA)
2. **Feature cards:** Upward lift on hover (progress feeling)
3. **Stats:** Count-up animation on scroll into view
4. **Country cards:** Subtle scale + border glow on hover
5. **CTA buttons:** Gentle pulse glow (not aggressive)

---

## 6. SHIPPING SECTION SPECIFICATION

### Critical Functionality
This section is the **conversion gateway**. All CTAs on the page scroll to this section.

### Layout
```
[Headline: "Select Your Country to Continue"]
[Subheadline: "Free shipping available to all countries"]

┌─────────┐ ┌─────────┐ ┌─────────┐
│  🇦🇹     │ │  🇨🇭     │ │  🇩🇪     │
│ Austria │ │Switzer- │ │ Germany │
│         │ │  land   │ │         │
│ [Select]│ │ [Select]│ │ [Select]│
└─────────┘ └─────────┘ └─────────┘
┌─────────┐ ┌─────────┐ ┌─────────┐
│  🇫🇷     │ │  🇸🇪     │ │  🇩🇰     │
│ France  │ │ Sweden  │ │ Denmark │
│         │ │         │ │         │
│ [Select]│ │ [Select]│ │ [Select]│
└─────────┘ └─────────┘ └─────────┘

[Shipping Features: Free Shipping | Tracked Delivery | Fast Dispatch]
```

### Country Data Structure
```json
{
  "shipping_countries": [
    {
      "name": "Austria",
      "flag": "https://flagcdn.com/w80/at.png",
      "url": "[TO_BE_PROVIDED]"
    },
    {
      "name": "Switzerland", 
      "flag": "https://flagcdn.com/w80/ch.png",
      "url": "[TO_BE_PROVIDED]"
    },
    {
      "name": "Germany",
      "flag": "https://flagcdn.com/w80/de.png", 
      "url": "[TO_BE_PROVIDED]"
    },
    {
      "name": "France",
      "flag": "https://flagcdn.com/w80/fr.png",
      "url": "[TO_BE_PROVIDED]"
    },
    {
      "name": "Sweden",
      "flag": "https://flagcdn.com/w80/se.png",
      "url": "[TO_BE_PROVIDED]"
    },
    {
      "name": "Denmark",
      "flag": "https://flagcdn.com/w80/dk.png",
      "url": "[TO_BE_PROVIDED]"
    }
  ]
}
```

### UX Notes
- Cards are clickable (entire card, not just button)
- Hover state: Subtle lift + border glow
- Mobile: 2-column grid, stacked on very small screens
- Each card opens the respective country checkout in new tab

---

## 7. LEGAL & COMPLIANCE

### EFSA Disclaimer (Required for all EU countries)
```
* Food supplement. These statements have not been evaluated by the European Food 
Safety Authority (EFSA). [Product] is not intended to diagnose, treat, cure, or 
prevent any disease. Individual results vary. Paid promotion by independent distributor.
```

### Distributor Notice
```
Independent Distributor Notice: This website is operated by an independent authorized 
distributor and is not affiliated with, endorsed by, or operated by the manufacturer 
or brand owner of VitaGLP. All product names and trademarks belong to their respective 
owners. Results depicted in testimonials are not typical. Nothing on this page 
constitutes medical advice.
```

### Required Trust Badges
- GMP Certified
- FDA Registered Facility
- Non-GMO
- Made in USA
- 100% Natural

### Prohibited Claims (YMYL — Weight Loss)
❌ "Lose X lbs in Y days"
❌ "Burns fat while you sleep"
❌ "Miracle weight loss"
❌ Before/after images
❌ "Clinically proven" (without specific study citation)

✅ "Supports healthy metabolism"
✅ "Helps manage appetite"
✅ "Promotes fat oxidation"
✅ "As part of a healthy diet and exercise program"

---

## 8. TECHNICAL SPECIFICATIONS

### JSON File Naming
`data/eu-vitaglp.json`

### Theme CSS
`styles/vitaglp.css`

### Output Directory
`output/model-a/eu-vitaglp/`

### Required Images
1. `images/hero.webp` — Product hero shot (1200px)
2. `images/lab.webp` — Lab/scientific image (900px)
3. `images/science.webp` — Mechanism diagram (900px)
4. `images/og-cover.webp` — Open Graph image (1200×630px)

### Google Fonts Link Update Required
Replace Open Sans with:
```html
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

---

## 9. DATA SPECIFICATION (Realistic Fictional)

All data below is fictional but realistic for the target markets:

### Company Information (Fictional Distributor)
```
Company Name: EuroWellness Distribution GmbH
Legal Form: Limited Liability Company (GmbH equivalent)
Business Type: Independent authorized distributor
```

### Support Contact by Country

| Country | Support Email | Phone Format | Typical Domain |
|---------|--------------|--------------|----------------|
| **Austria** | support@eu-vitaglp.at | +43 1 XXX XXX XXX | .at (Austria) |
| **Switzerland** | support@eu-vitaglp.ch | +41 XX XXX XX XX | .ch (Switzerland) |
| **Germany** | support@eu-vitaglp.de | +49 XXX XXXXXXX | .de (Germany) |
| **France** | support@eu-vitaglp.fr | +33 X XX XX XX XX | .fr (France) |
| **Sweden** | support@eu-vitaglp.se | +46 XX-XXX XX XX | .se (Sweden) |
| **Denmark** | support@eu-vitaglp.dk | +45 XX XX XX XX | .dk (Denmark) |

**Primary Support Email:** support@euwellness-distribution.com
**Response Time:** 24-48 hours

### Fictional Addresses (Realistic Format)

**Austria:**
```
EuroWellness Distribution GmbH
Mariahilfer Straße 85/12
1060 Wien, Austria
VAT: ATU12345678
```

**Switzerland:**
```
EuroWellness Distribution GmbH
Bahnhofstrasse 42, 3. Stock
8001 Zürich, Switzerland
VAT: CHE-123.456.789
```

**Germany:**
```
EuroWellness Distribution GmbH
Friedrichstraße 123
10117 Berlin, Germany
VAT: DE123456789
```

**France:**
```
EuroWellness Distribution SARL
28 Rue de la Paix, 2ème étage
75002 Paris, France
VAT: FR12345678901
```

**Sweden:**
```
EuroWellness Distribution AB
Drottninggatan 65, 4 tr
111 36 Stockholm, Sweden
VAT: SE123456789012
```

**Denmark:**
```
EuroWellness Distribution ApS
Østergade 32, 3. sal
1100 København K, Denmark
VAT: DK12345678
```

### Pricing Strategy
- **No base price shown** (as requested)
- **Only discount mentioned:** 47% OFF
- **Currency by country:** EUR (€) for AT, CH, DE, FR | SEK (kr) for SE | DKK (kr) for DK
- **Pricing display:** "Save 47% Today" / "47% Rabatt" / "Économisez 47%"

### Guarantee
- **30-Day Money-Back Guarantee** (30 Tage Geld-zurück-Garantie / 30 jours de garantie / 30 dagars pengarna tillbaka / 30 dages pengene tilbage)

### Checkout URLs (Placeholders - to be replaced with real affiliate links)
```json
{
  "austria_url": "[AUSTRIA_CHECKOUT_URL]",
  "switzerland_url": "[SWITZERLAND_CHECKOUT_URL]",
  "germany_url": "[GERMANY_CHECKOUT_URL]",
  "france_url": "[FRANCE_CHECKOUT_URL]",
  "sweden_url": "[SWEDEN_CHECKOUT_URL]",
  "denmark_url": "[DENMARK_CHECKOUT_URL]"
}
```

---

## 10. SUCCESS METRICS

### Design Goals
- [ ] Passes web-design-guidelines audit (accessibility, motion safety)
- [ ] All CTAs scroll smoothly to #shipping section
- [ ] Country cards are clearly clickable
- [ ] Page loads under 3 seconds
- [ ] Mobile-responsive (all sections)

### Copy Goals
- [ ] Zero prohibited claims (FDA/EFSA compliant)
- [ ] Mechanism clarity in every section
- [ ] European tone (no American hype)
- [ ] All 4 modals complete (Privacy, Terms, Returns, Contact)

### Conversion Goals
- [ ] Clear value proposition in < 3 seconds
- [ ] Trust established before CTA
- [ ] Objections addressed in FAQ
- [ ] Risk removed (guarantee visible)

---

## 11. IMPLEMENTATION CHECKLIST

### Phase 1: Data Collection
- [ ] Gather all company information
- [ ] Collect all 6 checkout URLs
- [ ] Confirm product pricing
- [ ] Download product images from vitaglp.com

### Phase 2: Theme Creation
- [ ] Create `styles/vitaglp.css`
- [ ] Apply color tokens from DNA extraction
- [ ] Add motion layer (CSS animations)
- [ ] Implement contrast safety

### Phase 3: JSON Creation
- [ ] Create `data/eu-vitaglp.json`
- [ ] Write all copy sections following tone guidelines
- [ ] Add shipping countries with URLs
- [ ] Complete all 4 modals

### Phase 4: Generation
- [ ] Run `node generator.js eu-vitaglp`
- [ ] Verify no `{{}}` placeholders remain
- [ ] Test all CTAs scroll to #shipping
- [ ] Test country card clicks

### Phase 5: Quality Assurance
- [ ] Run AUDITOR.md checklist (target: ≥90)
- [ ] Run REVIEWER.md 6-test gate
- [ ] Test on mobile devices
- [ ] Verify legal compliance

### Phase 6: Deployment
- [ ] Add canonical URL (when provided)
- [ ] Deploy via deploy.sh
- [ ] Submit for Google Ads review

---

## 12. RISK MITIGATION

### Legal Risks
- **Mitigation:** Conservative claims, EFSA disclaimer prominent, no disease claims
- **Review:** Legal compliance check before publish

### Cultural Risks  
- **Mitigation:** English copy adapted for European sensibility (not translated American copy)
- **Review:** Native speaker review if possible

### Technical Risks
- **Mitigation:** All CTAs tested, shipping section functional
- **Review:** Cross-browser testing

---

## APPENDIX A: Reference Documents

- **COPY.md** — BOFU copy formulas and 7-sweep edit framework
- **DESIGN.md** — Niche aesthetics and theme creation
- **COUNTRY.md** — Cultural adaptation for European markets
- **CLAUDE.md** — Master workflow and JSON schema

## APPENDIX B: Official Product Data Source

**URL:** https://vitaglp.com
**Extracted:** 2026-04-03
**Language (source):** German
**Key ingredients confirmed:** Berberine, Green Tea Extract (EGCG), Chromium, Apple Cider Vinegar, Vitamin B12

---

**Document Status:** ✅ APPROVED FOR IMPLEMENTATION

**Next Step:** Invoke `writing-plans` skill to create detailed implementation plan
