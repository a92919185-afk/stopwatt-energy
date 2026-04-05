# Model D — Review Page

**Keyword strategy:** `[Product name] + review`, `[Product] + legit`, `[Product] + scam or not`, `[Product] + does it work`

**Intent:** Informational → purchase. Visitor is skeptical, mid-funnel. They want an honest third-party opinion before buying. The page must earn trust before selling.

**When to use:** You have affiliation AND the review keyword has search volume. The page reads as a personal review article, not a sales page.

---

## GENERATOR SETUP (one-time)

`generator.js` needs 2 lines updated to route Model D pages:

**Line 397** — add `D` template:
```js
// BEFORE:
const baseTemplateFile = data.page_model === 'C' ? 'base-c.html' : 'base.html';
// AFTER:
const baseTemplateFile = data.page_model === 'C' ? 'base-c.html' : data.page_model === 'D' ? 'base-d.html' : 'base.html';
```

**Line 471** — add `D` to model map:
```js
// BEFORE:
const modelMap = { 'B': 'model-b', 'C': 'model-c' };
// AFTER:
const modelMap = { 'B': 'model-b', 'C': 'model-c', 'D': 'model-d' };
```

Output will go to `output/model-d/SLUG/`.

---

## THEME CSS FOR MODEL D

File: `styles/PRODUCTNAME-review.css`

```css
@import url('theme.css');
/* THEME: [Product] Review | Model D | [Date] */

:root {
  /* Header / nav / accent — pick ONE: */
  --d-accent:       #1a3a5c;   /* Deep navy  → authority, science */
  /* --d-accent:    #0D47A1;   Blue          → clinical, trust     */
  /* --d-accent:    #1e3a2f;   Forest green  → natural, wellness   */
  /* --d-accent:    #4a1d96;   Purple        → premium             */

  --d-accent-dark:  color-mix(in srgb, var(--d-accent) 80%, #000);
  --d-accent-light: color-mix(in srgb, var(--d-accent) 70%, #fff);

  /* CTA button — always high contrast vs background */
  --d-cta:          #16a34a;
  --d-cta-hover:    #15803d;
  --d-cta-text:     #ffffff;

  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body:    'Inter', system-ui, sans-serif;
}
```

`base-d.html` imports its own Google Fonts and Font Awesome. No additional imports needed.

---

## SECTION ORDER (locked)

```
Sticky Nav → Hero (+ Author Bar) → Assessment → What Is It? →
How It Works → Scientific Refs* → Results Timeline → Real Stories →
Ingredients → Pros & Cons → FAQ → Buy Safe / Scam Warning →
Final Verdict → Footer → Modals → Sticky CTA Bar

* Optional: include science_refs array only if product has documented research.
```

---

## JSON SCHEMA

```json
{
  "page_model": "D",
  "slug": "COUNTRY-PRODUCTNAME-review",
  "language": "en",
  "theme": "PRODUCTNAME-review.css",
  "product_name": "ProductName",
  "company_name": "Your Company LLC",
  "support_phone": "+1 (800) 000-0000",
  "support_email": "support@yourdomain.com",
  "price_amount": "49.00",
  "price_currency": "USD",
  "rating_value": "4.8",
  "rating_count": "50000",

  "meta_title": "[Product] Review (2026): I Tried It for 30 Days — Here's What Happened",
  "meta_description": "My honest [Product] review after 30 days. What I found, what the science says, and whether it's worth your money. Real results, no fluff.",
  "og_image": "images/og-cover.webp",
  "og_locale": "en_US",

  "cta_text": "Visit Official Website",
  "cta_url": "https://REAL-AFFILIATE-URL",
  "year": "2026",

  "reviewer_name": "Sarah Mitchell",
  "reviewer_age": "43",
  "reviewer_location": "Austin, TX",
  "reviewer_photo": "images/reviewer.webp",
  "reviewer_title": "Health & Wellness Contributor",
  "editorial_team": "Health Editorial Team",
  "review_date": "March 15, 2026",
  "review_updated": "April 1, 2026",
  "review_date_iso": "2026-03-15",
  "review_updated_iso": "2026-04-01",

  "verdict_score": "4.8",
  "verdict_label": "HIGHLY RECOMMENDED",

  "nav_links": [
    { "href": "#what-is",     "label": "What Is It?" },
    { "href": "#ingredients", "label": "Ingredients" },
    { "href": "#reviews",     "label": "Real Stories" },
    { "href": "#pros-cons",   "label": "Pros & Cons" },
    { "href": "#faq",         "label": "FAQ" }
  ],

  "hero_eyebrow": "Independent Review · Affiliate Disclosure Inside",
  "headline": "My Honest [Product] Review:",
  "headline_highlight": "30 Days, Real Results, Zero Fluff",
  "hero_subtext": "I was skeptical. Then I tried it for a full month. Here's everything I found — the good, the not-so-good, and whether it's actually worth your money.",

  "review_intro": [
    "I want to start with full transparency: I'm an affiliate for [Product], which means I earn a small commission if you buy through my links. But I tested it myself before ever recommending it — and I'll give you the same honest assessment I'd give a close friend.",
    "After 30 days of daily use, tracking my progress, and digging into the research behind each ingredient, here's what I genuinely think."
  ],

  "what_is_headline": "So What Exactly Is [Product]?",
  "what_is_paragraphs": [
    "[Product] is a [category] supplement made by [Company]. It contains [X] active ingredients and comes in [form] form.",
    "Unlike a lot of supplements that throw in a dozen underdosed ingredients to look impressive on the label, [Product] focuses on [X] clinically relevant compounds at doses that actually match what the research uses.",
    "The official website claims [specific claim]. I set out to find out whether that's marketing or reality."
  ],
  "hero_image": "images/hero.webp",

  "how_works_headline": "How Does [Product] Actually Work?",
  "how_works_paragraphs": [
    "The mechanism is straightforward: [Product] works by [primary mechanism]. This matters because [why it matters physiologically].",
    "When you take [Product], [key ingredient] does [specific action]. Meanwhile, [second ingredient] supports [secondary mechanism]. The result is [expected outcome] — but only if the dosing is right.",
    "I checked the label against the research. Most formulas use [typical underdose]. [Product] uses [dose] — which is [comparison to research threshold]."
  ],
  "benefits_image": "images/lab.webp",

  "science_headline": "What Does the Research Actually Say?",
  "science_intro": "I pulled the published research on each key ingredient. Here's what the evidence shows — and how [Product]'s formulation holds up:",
  "science_refs": [
    {
      "compound": "Ingredient A (Xmg)",
      "finding": "A 2023 randomized trial found that [X]mg daily for 8 weeks resulted in [measured outcome] in adults aged 35–55."
    },
    {
      "compound": "Ingredient B (Xmg)",
      "finding": "Research published in [journal] shows [mechanism]. The effective dose in studies is [X]–[X]mg — [Product] includes [X]mg."
    },
    {
      "compound": "Ingredient C (Xmg)",
      "finding": "Multiple meta-analyses confirm [benefit]. No serious adverse effects reported at doses below [X]mg."
    }
  ],

  "timeline_headline": "My Results: A Week-by-Week Breakdown",
  "timeline_intro": "I committed to a full 30 days before writing this. No cherry-picking — here's exactly what happened:",
  "results_timeline": [
    {
      "week": "Week 1",
      "title": "Not Much to Report Yet",
      "text": "The first week was unremarkable. I noticed [minor observation] but nothing I'd attribute confidently to the supplement. That's normal — most compounds need time to build up."
    },
    {
      "week": "Week 2",
      "title": "First Real Signs",
      "text": "By day 10, I noticed [first observable change]. It was subtle, but consistent. I was [specific description of how it felt/looked]."
    },
    {
      "week": "Week 3",
      "title": "Noticeable Progress",
      "text": "This is where things got interesting. [Specific progress]. I was starting to feel [emotional/physical description]. My [metric] improved noticeably."
    },
    {
      "week": "Week 4",
      "title": "Solid, Consistent Results",
      "text": "By the end of week 4, [summary of cumulative results]. Not a dramatic transformation — but real, measurable progress that I'm confident came from the product."
    }
  ],
  "science_image": "images/science.webp",

  "reviews_headline": "What Other People Are Saying",
  "reviews_subheadline": "I'm not the only one. Here are verified customers who shared their experiences:",
  "reviews": [
    {
      "photo": "images/reviewer-1.webp",
      "body": "I noticed a real difference after about two weeks. [Specific result]. I've tried a lot of supplements and this is one of the few I actually re-ordered.",
      "name": "Jennifer R., 47, Chicago, IL",
      "verified_text": "Verified Purchase"
    },
    {
      "photo": "images/reviewer-2.webp",
      "body": "Was skeptical at first because of the price, but [specific outcome]. My [metric] went from [X] to [Y] in a month. Worth it.",
      "name": "Marcus T., 52, Austin, TX",
      "verified_text": "Verified Purchase"
    },
    {
      "photo": "images/reviewer-3.webp",
      "body": "[Specific problem they had]. Started [Product] and within [timeframe] I felt [specific change]. My only complaint is [honest con].",
      "name": "Amanda K., 39, London, UK",
      "verified_text": "Verified Purchase"
    }
  ],
  "review_stats": [
    { "value": "4.8★",    "label": "Average Rating" },
    { "value": "50,000+", "label": "Verified Customers" },
    { "value": "96%",     "label": "Would Recommend" }
  ],

  "features_headline": "A Closer Look at the Formula",
  "features_subheadline": "Here's what's actually inside [Product] and what the research says each ingredient does:",
  "features": [
    {
      "icon": "fa-solid fa-leaf",
      "title": "Ingredient A (Xmg)",
      "description": "The workhorse of the formula. [Mechanism of action]. At this dose, clinical studies show [specific benefit] in [timeframe]."
    },
    {
      "icon": "fa-solid fa-flask",
      "title": "Ingredient B (Xmg)",
      "description": "[What it does]. What makes this notable is the dose — most formulas use Xmg, [Product] uses Xmg (matching research protocol)."
    },
    {
      "icon": "fa-solid fa-shield-halved",
      "title": "Ingredient C (Xmg)",
      "description": "Synergistic with Ingredient A. [How they interact]. Studies show [combined benefit] when taken together."
    }
  ],

  "proscons_headline": "Pros & Cons: My Honest Take",
  "pros": [
    { "text": "Clinically dosed ingredients — matches actual research protocols" },
    { "text": "Noticeable results by week 3 in my personal experience" },
    { "text": "Money-back guarantee removes financial risk" },
    { "text": "Manufactured in FDA-registered, GMP-certified facility" },
    { "text": "No proprietary blends — full label transparency" }
  ],
  "cons": [
    { "text": "Only available on the official website (no Amazon)" },
    { "text": "Premium price point — not the cheapest option" },
    { "text": "Results take 2–4 weeks; not an overnight fix" }
  ],

  "faq_headline": "Your Questions, Honestly Answered",
  "faq_items": [
    {
      "question": "Does [Product] actually work?",
      "answer": "In my experience, yes — with caveats. I saw [specific results] after 30 days of consistent use. The formula uses doses that match published research, which gives me confidence in the mechanism. But it's not magic: you need consistency and patience."
    },
    {
      "question": "Is [Product] safe?",
      "answer": "The ingredients are well-studied with strong safety profiles at these doses. It's manufactured in an FDA-registered, GMP-certified facility in the USA. As always, if you're on medication or have a health condition, check with your doctor first."
    },
    {
      "question": "How long until I see results?",
      "answer": "In my case, subtle changes by week 2, more noticeable by week 3–4. Most users in reviews report similar timelines. I wouldn't judge it before 3–4 weeks of consistent daily use."
    },
    {
      "question": "What if it doesn't work for me?",
      "answer": "[Product] comes with a [X]-day money-back guarantee. If you don't see results, you can request a full refund — no questions asked. That policy takes most of the risk out of trying it."
    },
    {
      "question": "Is there a subscription? Can I get a one-time order?",
      "answer": "Yes, you can order a one-time purchase with no subscription required. The multi-bottle bundles offer the best per-unit price and include free shipping."
    },
    {
      "question": "Where is the best place to buy [Product]?",
      "answer": "Only through the official website. I verified that Amazon and third-party sellers carry counterfeits — the pricing looks similar but the formula is different. The guarantee is also void if purchased elsewhere."
    },
    {
      "question": "Is [Product] a scam?",
      "answer": "No — but the counterfeit market is real. The genuine product has a transparent ingredient label, published manufacturing standards, and a money-back guarantee. What you want to avoid is buying from unauthorized resellers who sell fake versions without the guarantee."
    }
  ],

  "scam_headline": "Avoiding Fakes: This Is Important",
  "scam_warning_title": "Counterfeits Are a Real Problem",
  "scam_warning_body": "Multiple users have reported buying what they thought was [Product] on Amazon or eBay, only to receive a product with a different formula and no money-back guarantee. The manufacturer has issued warnings about this.",
  "scam_paragraphs": [
    "I verified this myself: the 'official' Amazon listings are not authorized by the manufacturer. The prices are similar, which makes it easy to fall for. The real [Product] is exclusively sold through the official website — where you also get the full money-back guarantee.",
    "If you see [Product] on any third-party site other than the official one, assume it's counterfeit. It's not worth the risk — both financially and in terms of what you're actually putting in your body."
  ],
  "buy_safe_cta_text": "Get [Product] from the Official Website (With Guarantee)",

  "verdict_headline": "The Bottom Line: Is [Product] Worth It?",
  "verdict_summary": "After 30 days of personal use and deep research into the formula, I think [Product] is one of the more legitimately formulated [category] supplements on the market. The doses match the research, the results were real for me, and the money-back guarantee means the downside is limited.",
  "verdict_paragraphs": [
    "Is it perfect? No — the price is premium and it's only available through the official website. But those are minor complaints when the product actually delivers.",
    "If you're seriously considering [Product], my honest recommendation is to start with the [X-bottle bundle] — it gives you enough time to see real results and costs less per bottle. And if it doesn't work, the guarantee covers you."
  ],
  "verdict_final": "My rating: {{verdict_score}}/5 — {{verdict_label}}.",

  "sticky_cta_subtext": "{{rating_count}}+ verified customers · {{guarantee}}-day guarantee",

  "footer_description": "Independent review site operated by an affiliate distributor. We earn a commission on purchases made through our links.",
  "footer_nav_title": "Sections",
  "footer_legal_title": "Legal",
  "legal_links": [
    { "modal": "privacy",  "label": "Privacy Policy" },
    { "modal": "terms",    "label": "Terms of Service" },
    { "modal": "returns",  "label": "Returns & Refunds" },
    { "modal": "contact",  "label": "Contact Us" }
  ],
  "distributor_notice": "<strong>Affiliate Disclosure:</strong> This review is written by an independent affiliate. We earn a commission if you purchase through our links at no extra cost to you. This is a material connection as defined by FTC guidelines (16 CFR § 255). Results depicted in testimonials are individual experiences and are not typical.",
  "disclaimer": "* These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results vary. Always consult a healthcare professional before starting any supplement.",
  "copyright_text": "All rights reserved.",
  "modals": []
}
```

> **Note:** `modals` array is not needed — leave as `[]`. The generator auto-creates all 4 modals from `company_name`, `support_email`, `support_phone`, `year`, and `product_name`.

---

## IMAGE SLOTS

Same as Model A + optional reviewer photo:

| Slot | File | JSON field | Purpose |
|------|------|-----------|---------|
| hero | images/hero.webp | `hero_image` | Product shot (What Is It section) |
| lab | images/lab.webp | `benefits_image` | How It Works visual |
| science | images/science.webp | `science_image` | Results section visual |
| og | images/og-cover.webp | `og_image` | Social share / JSON-LD |
| reviewer | images/reviewer.webp | `reviewer_photo` | Author photo in hero bar |
| customer 1–3 | images/reviewer-1.webp | `reviews[].photo` | Testimonial photos |

---

## COPY FORMULAS FOR MODEL D

### Hero Headline
Pattern: `[Personal Narrative]: [Outcome They Wanted]`
- "My Honest [Product] Review: 30 Days, Real Results, Zero Fluff"
- "The Sceptic's [Product] Review: I'd Accepted [Problem]... I Was Wrong"
- "I Tried [Product] for 60 Days — Here's My Unfiltered Opinion"
- "[Product] Review 2026: What Nobody Tells You (I Tested It Myself)"

### Verdict Badge
Score maps to label:
- 4.8–5.0 → "HIGHLY RECOMMENDED"
- 4.5–4.7 → "RECOMMENDED"
- 4.0–4.4 → "WORTH TRYING"
- below 4.0 → "MIXED VERDICT"

### Pros & Cons (balance rule)
Minimum 4 pros, 2–3 cons. Cons must be real but minor — never weaponize them. Example of a good con: "Only available online." Bad con: "Expensive and doesn't work."

### FAQ (minimum 7 items)
Must include: Does it work? · Is it safe? · How long? · Guarantee? · Subscription? · Where to buy? · Scam or not?

### Scam/Buy-Safe Section
Always present. Frame as protection, not fear. Show you're being transparent. The goal is to funnel to the official site while demonstrating you're on the reader's side.

### Verdict Summary (callout box)
Format: State the verdict → name the key strengths → acknowledge the weak points → close with the guarantee removing risk.

---

## WORKFLOW

```
PHASE 0 — STRATEGY   → STRATEGIST.md → research/SLUG-strategy.md
PHASE 1 — RESEARCH   → WebFetch official page → research/COUNTRY-PRODUCT-brief.md
PHASE 2 — BUILD
  Step 1: Extract Visual DNA → DESIGN.md
  Step 2: Create styles/PRODUCTNAME-review.css (--d-accent = brand color)
  Step 3: Create data/COUNTRY-PRODUCTNAME-review.json
  Step 4: node generator.js COUNTRY-PRODUCTNAME-review
  Step 5: python3 download-images.py SLUG https://official-page.com
PHASE 3 — QUALITY    → AUDITOR (≥90) → REVIEWER (PUBLISH READY) → deploy
```

---

## SEO NOTES FOR REVIEW PAGES

**Primary keyword:** `[product name] review` — put in H1, title tag, meta description, URL slug
**Secondary keywords:** `[product] [legit/scam]`, `[product] does it work`, `[product] ingredients`, `[product] side effects`

**Schema:** base-d.html generates both `Review` and `Article` schemas automatically. This enables star ratings to appear in Google SERP for review searches.

**E-E-A-T signals built into the template:**
- Author name + photo + title + location
- "Fact-checked by editorial team" badge
- Review date + updated date
- Scientific references section
- Affiliate disclosure (transparent, not buried)
- Balanced pros/cons (not all positive)
