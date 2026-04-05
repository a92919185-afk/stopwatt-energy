# Model B — Competitor Upgrade Page
## Complete Workflow, Schema, Copy Rules & Anti-Hallucination Guardrails

> **What Model B is:**
> A landing page that targets the search volume of a competitor product you are NOT affiliated with.
> The page acknowledges the competitor, frames it as "the previous generation," and presents
> YOUR affiliated product as the natural upgrade — the next step for men (or whoever the audience is)
> who are ready for better results.
>
> **What Model B is NOT:**
> - A fake review page for a product you can't endorse
> - A page that invents negative claims about the competitor
> - A page that copies the competitor's branding or trademark
> - A page that deceives the user into thinking they're on the competitor's official site

---

## PART 1 — WHEN TO USE MODEL B

Use Model B when ALL of the following are true:

| Condition | How to verify |
|-----------|--------------|
| The competitor product has significant organic search volume | Google Keyword Planner or Ahrefs: target keyword gets 1,000+ monthly searches |
| You do NOT have an affiliate link for the competitor product | You cannot send traffic to that product and earn a commission |
| You DO have an affiliate link for a product in the same niche | The "new version" product must be real and you must have a real CTA URL |
| The competitor product is a real product (not invented) | Must be verifiable via WebFetch of the official product page |
| Your affiliated product can genuinely be positioned as "newer" or "more advanced" | The claim must be defensible — newer formula, better ingredients, higher dosages |

**Do NOT use Model B if:**
- The competitor product is better known than your affiliated product by a huge margin (David vs Goliath — you'll get dismissed as a knockoff)
- The competitor product has the same affiliate program you participate in (just do Model A instead)
- You cannot find real data on the competitor product (you'd be forced to hallucinate)

---

## PART 2 — THE STRATEGY EXPLAINED

### The Search Intent

When someone searches "[Competitor Product] review" or "[Competitor Product] buy," they are in one of three states:

1. **Researching before first purchase** — They've heard of the competitor and want validation before buying
2. **Already using the competitor** — Satisfied or neutral; passively open to alternatives
3. **Dissatisfied with the competitor** — Actively looking for something better

Model B captures **all three** with a single narrative arc:
> "You've heard of [Competitor]. You may have even tried it. Here's what men who've been there are now using instead."

### The "Old Version / New Version" Frame

This is the core positioning mechanism. It works because:
- It is not an attack on the competitor — it's a technology narrative
- It leverages the natural human desire to have the "latest" version
- It respects the user's prior decision ("you weren't wrong to look at [Competitor]")
- It creates a clear reason to act: "upgrade"

**How to frame it truthfully:**
- ✅ "[Affiliated Product] was formulated with a more advanced ingredient profile"
- ✅ "While [Competitor] paved the way, the formula has since been refined"
- ✅ "Men who've tried [Competitor] are now upgrading to [Affiliated Product]"
- ✅ "[Affiliated Product]: the next generation of [niche] support"
- ❌ "[Competitor] doesn't work" (unverifiable attack)
- ❌ "[Competitor] uses cheap ingredients" (potentially defamatory without proof)
- ❌ "[Competitor] was recalled/discontinued" (false unless true)
- ❌ "[Competitor] is dangerous" (legal liability)

---

## PART 3 — MODEL B WORKFLOW

The Model B workflow diverges from Model A at Phase 1. Read both phases carefully.

---

### PHASE 1 — DUAL RESEARCH (Model B specific)

Unlike Model A (which researches only the affiliated product), Model B requires researching TWO products.

**Sub-phase 1A — Research the COMPETITOR product (the high-traffic target):**

Use `WebFetch` on the competitor's official page. Extract:

| Data point | Why needed |
|------------|-----------|
| Exact product name | For accurate mentions in copy — never misspell a brand name |
| Main ingredients (names only, no dosages needed) | To reference what it contains without fabricating |
| Core claims and benefits | To establish what it promises, so we can show our product goes further |
| Price point | To reference relative value positioning |
| Guarantee terms | To compare risk (if ours is better) |
| Customer complaints (check reviews on Amazon, Reddit, Trustpilot) | Real pain points = real transition narrative |
| How long it has been on the market | Supports the "newer formula" framing if ours is newer |

**⚠️ ANTI-HALLUCINATION RULE — COMPETITOR DATA:**
> Only write what you found on the competitor's official page or verified third-party sources.
> NEVER invent ingredient names, claim side effects, or state the competitor was recalled/reformulated
> unless you can cite a real source. When in doubt: omit.

---

**Sub-phase 1B — Research YOUR affiliated product (the "new version"):**

Use `WebFetch` on the affiliated product's official page. Extract ALL of the Model A Category B data:
- Exact product name, ingredients, dosages
- Benefit claims, mechanism descriptions
- Guarantee terms, pricing, trust badges
- Real testimonials
- Support email

This data feeds the JSON exactly as in Model A.

---

**Sub-phase 1C — Research the transition narrative:**

Search for:
- "[Competitor Name] reviews Reddit" → What are users saying? What's missing?
- "[Competitor Name] side effects" → Are there real reported concerns?
- "[Competitor Name] alternative" → What are people already searching for?
- "[Competitor Name] vs [Your Product]" → Has anyone already compared them?

This research informs the "why they're switching" narrative in the benefits section and reviews.

---

### PHASE 2 — WRITING (Model B constraints)

**Allowed sources for copy:**
- Sub-phase 1A data (competitor — factual mentions only)
- Sub-phase 1B data (affiliated product — all claims must be sourced here)
- Sub-phase 1C data (transition narrative — real pain points from real reviews)
- Country profile and niche profile
- This MODEL-B.md schema

**Prohibited in writing phase:**
- Invented claims about the competitor
- Invented testimonials from "Vigortrix users who switched"
- Invented ingredient comparisons (e.g., "Vigortrix only has 50mg of X while ours has 500mg" — unless verified)
- False urgency tied to the competitor ("Vigortrix just raised prices" — unless true)

---

### PHASE 3 — BUILD

Same as Model A:
```
Step 1 — Extract Visual DNA (of YOUR affiliated product's official page, not the competitor's)
Step 2 — Create theme CSS
Step 3 — Identify country
Step 4 — Create the JSON (using Model B schema below)
Step 5 — node generator.js SLUG
Step 6 — Verify + Audit (use AUDITOR.md Model B mode)
```

---

## PART 4 — MODEL B JSON SCHEMA

Model B uses the **same base schema as Model A** (all fields from CLAUDE.md apply) with the following additions and copy modifications.

### Additional required fields (Model B only):

```json
{
  "page_model": "B",                          // REQUIRED — identifies this as Model B

  // ─── MODEL B: COMPETITOR CONTEXT ────────────────────────
  // These fields are used to write the copy correctly.
  // They do NOT render as a block on the page — they are WRITING CONTEXT ONLY.
  // Never leave these as placeholders. Fill with real researched data.
  "_competitor_name": "Vigortrix",            // exact brand name of the competitor
  "_competitor_url": "https://...",           // official competitor product URL (for reference)
  "_competitor_main_ingredients": [           // ingredient names found on their page (no dosages needed)
    "Horny Goat Weed",
    "Tongkat Ali",
    "Saw Palmetto"
  ],
  "_competitor_price_usd": "49.00",           // their price at time of research
  "_competitor_guarantee_days": 60,           // their guarantee period
  "_competitor_real_complaints": [            // real complaints from Reddit/Amazon/Trustpilot
    "Takes too long to see results",
    "Capsule size is large",
    "No subscription discount available"
  ],
  "_transition_reason": "Men who've tried Vigortrix report that results plateau after the first month. [Product] was formulated to address exactly this gap with a higher-potency blend and faster absorption.",
  // ↑ This is the core narrative. Must be based on real 1C research. Never invented.

  // NOTE: All "_" prefixed fields are INTERNAL CONTEXT ONLY.
  // They help the AI write accurate copy but are not used by the generator.
  // They will not appear in the output HTML.
```

### Modified copy fields (Model B tone and angle):

```json
  // ─── BLOCK: hero ─── (Model B angle)
  // The hero acknowledges the competitor without attacking it.
  // Formula: "If you've been looking at [Competitor], you'll want to see this first."

  "hero_badge": "The Upgrade X,000+ Former [Competitor] Users Chose",
  "headline": "Men Are Upgrading From [Competitor] to ",
  "headline_highlight": "[Your Product Name]",
  // OR:
  "headline": "The Next Generation of [Niche] Support Is Here — Meet ",
  "headline_highlight": "[Your Product Name]",

  "hero_subtext_1": "If you've been researching [Competitor], you're already on the right path. You know [primary benefit] matters. What you may not know yet is that the formula has evolved.",
  "hero_subtext_2": "[Your Product] was built on the same principles as earlier male performance supplements — but with a more advanced ingredient profile, higher potency, and a formulation designed for faster, more sustained results.",

  // ─── BLOCK: benefits ─── (Model B angle)
  // This is the "why switch" section. It does NOT attack the competitor.
  // It validates the visitor's prior interest and creates the bridge to your product.

  "benefits_label": "The Next Step",
  "benefits_headline": "Why Men Who Know [Competitor] Are Now Choosing [Your Product]",
  "benefits_paragraphs": [
    // Paragraph 1: Validate the search / give the competitor credit
    "If you've been researching [Competitor], you already understand what matters: real ingredients, real mechanisms, and a formula designed to support [primary benefit]. That's the right instinct.",
    // Paragraph 2: Introduce the gap / the evolution
    "What thousands of men have discovered is that [primary niche] support has moved forward. The same core principles, applied with higher-concentration ingredients, more targeted delivery, and a formula refined with [X years of development / more recent clinical insights].",
    // Paragraph 3: The bridge — present your product
    "<strong>[Your Product]</strong> is what men find when they go one step further. [Key differentiating benefit vs the niche in general, not vs the competitor specifically]."
  ],

  // ─── BLOCK: reviews ─── (Model B angle)
  // Reviews should ideally include "transition" language — someone who considered
  // the competitor and chose yours, or someone who tried the category before.
  // DO NOT invent reviews. Use real testimonials from the affiliated product's page.
  // If a real testimonial happens to reference "tried others before" — use it.
  // If not — use standard testimonials. Never fabricate a "switched from X" story.

  // ─── BLOCK: faq ─── (Model B — required additional questions)
  // Model B MUST include these additional FAQ items on top of the standard 6:

  // Q: "How does [Your Product] compare to [Competitor]?"
  // A: Do NOT directly compare ingredient by ingredient unless you have verified data for both.
  //    Instead: "Both products address [primary benefit]. [Your Product] was formulated
  //    with [specific differentiator from your product's page]. We encourage you to
  //    review both and choose what's right for you."

  // Q: "I've tried [Competitor] before. Will [Your Product] work differently?"
  // A: "[Your Product] uses [specific mechanism] which works by [explanation from product page].
  //    Many customers who had tried other supplements in this category found [specific benefit]
  //    within [timeframe]. As with any supplement, results vary — which is why we back every
  //    order with a [X]-day money-back guarantee."
```

---

## PART 5 — MODEL B SEO STRATEGY

Model B has a distinct SEO play. Read `SEO.md` for fundamentals, but apply these additional rules:

### Target Keyword Structure

The primary keyword for a Model B page is the competitor's product name or a close variant:

```
Primary:    "[Competitor Name] review"
Secondary:  "[Competitor Name] alternative"
            "[Competitor Name] vs [Your Product]"
            "better than [Competitor Name]"
            "[Competitor Name] upgrade"
```

### Title Tag Formula (Model B)

```
Formula A: "[Competitor Name] Review 2026 — Why Men Are Upgrading to [Your Product]"
Formula B: "[Competitor Name] Alternative? [Your Product] Is the Next Step"
Formula C: "[Competitor Name] vs [Your Product]: The Upgrade Men Are Making"
```

Rules:
- The competitor name MUST appear early in the title (it IS the keyword)
- The title must make it clear this is not the competitor's official site
- Use "Alternative", "vs", "Upgrade", or "Review" to signal intent
- 50–60 characters

### Meta Description Formula (Model B)

```
"Researching [Competitor]? See why [X,000+] men chose [Your Product] as their
next step. [Key differentiator]. [X]-day guarantee. Compare for yourself."
```

### URL Slug Formula (Model B)

```
[country]-[competitor-name-keyword]-upgrade
[country]-[competitor-name-keyword]-alternative
[country]-vs-[competitor-name]-[your-product]

Examples:
us-vigortrix-upgrade
us-vigortrix-alternative
us-vs-vigortrix-primepulse
```

### ⚠️ Critical: Avoid Trademark Violation in URLs

- Using a competitor's brand name in a URL or title for informational comparison pages is generally acceptable under nominative fair use
- Do NOT register domains that ARE the competitor's brand name (e.g., `vigortrix-official.com`)
- Do NOT imply your page is the competitor's official site
- Do NOT use the competitor's exact logo or trademark design elements

---

## PART 6 — MODEL B VISITOR PSYCHOLOGY

> Before writing a single word of copy, internalize who you are writing for.
> A Model B visitor is fundamentally different from a Model A visitor. If you write them the same way, you will convert neither.

### The Model B Visitor's Internal Monologue

The person who searched "[Competitor] review" arrived with a specific psychological state:

```
"I've been hearing about [Competitor]. I'm thinking about trying it. Let me see
what people are saying before I spend money. I'm open — but I'm not a pushover.
Don't try to sell me something different without a very good reason."
```

They did NOT arrive thinking:
- "I want to see an alternative to [Competitor]"
- "Show me the better option"
- "Convince me to buy something else"

They arrived to **validate** a decision they were already leaning toward. Your page has one job: redirect that decision-making energy toward your product — without triggering the defensive reaction that comes from feeling manipulated.

### The Three-Layer Emotional Arc (Model B specific)

Every Model B page must guide the visitor through exactly three emotional states, in this order. Collapse any two layers and conversions drop.

```
LAYER 1 — VALIDATION (Hero + Trust + Social Proof)
────────────────────────────────────────────────────
The visitor feels: "This page understands why I was researching [Competitor]."
The visitor thinks: "They're not attacking my choice. They're confirming it was smart."
What you're doing: Disarming the defensive reaction by meeting them exactly where they are.

LAYER 2 — REVELATION (Benefits section)
────────────────────────────────────────
The visitor feels: "Huh. I didn't know the formula had moved forward."
The visitor thinks: "If this is true, I should know about it before I decide."
What you're doing: Introducing the upgrade frame as information, not as a sales pitch.
The key word is "evolved" — not "better", not "replaces", not "beats".

LAYER 3 — RESOLUTION (Features + Reviews + FAQ + CTA)
──────────────────────────────────────────────────────
The visitor feels: "This makes sense. The evidence backs it up. The risk is covered."
The visitor thinks: "Trying this is the logical conclusion of the research I started."
What you're doing: Giving them the rational justification they need to feel
good about acting on an emotion they already have.
```

### The Upgrade Frame — The Core of All Model B Copy

The upgrade frame is NOT a comparison. It is an EVOLUTION STORY.

The evolution story has three elements:
1. **Honor the origin** — "[Competitor] put [category] on the map for [audience]. That's real."
2. **Introduce the evolution** — "Since then, the formula has been refined. Ingredients. Dosages. Delivery."
3. **Position the destination** — "[Your Product] is where that evolution leads."

This works because:
- It does not invalidate the visitor's research instinct (they were right to look)
- It does not attack the competitor (no defensive reaction)
- It creates forward momentum (the natural next step = your product)
- It borrows the competitor's credibility while establishing your product as superior

**What to do when there is no real differentiator:**
If both products have nearly identical ingredients, do not invent a differentiator. Instead, shift the evolution story to the EXPERIENCE, not the formula:
- Customer service + guarantee → "Men who've been through the category report that the support behind the product matters as much as the product."
- Trust + verification → "The most advanced formula means nothing without third-party testing and a guarantee that backs it up."
- Guarantee period → if yours is longer, that IS a real differentiator. Lead with it.

---

## PART 6B — SECTION-BY-SECTION COPY FORMULAS (Model B)

> These formulas REPLACE the generic versions in COPY.md for Model B pages.
> Read COPY.md for the underlying psychology. Apply these Model B-specific formulas to the actual copy.

---

### Alert Bar — Model B

The alert bar still uses 3 badges: offer + guarantee + social proof.
The difference: badge 3 should reference the UPGRADE narrative.

```
Badge 1 (Offer):      [X]% OFF — [Timeframe/qualifier]
Badge 2 (Guarantee):  [X]-Day Money-Back Guarantee
Badge 3 (Upgrade):    "[X,000]+ Men Have Made the Switch"
                   OR: "Rated #1 [Niche] Upgrade of [Year]"
```

The word "switch" or "upgrade" in badge 3 plants the seed of the Model B frame before the visitor reads a single headline.

---

### Hero — Model B

**Psychology trigger in play:** Identity + Mimetic Desire + Validation

The hero must do TWO things simultaneously:
1. Confirm the visitor's instinct (they were right to research this category)
2. Signal that there is something MORE they should know before deciding

**Headline formulas:**

```
Formula 1 — The Upgrade Signal:
  "[X,000+] [Audience] Who Researched [Competitor] Chose [Your Product] Instead"
  Highlight: "[Your Product] Instead"

Formula 2 — The Evolution Frame:
  "The [Niche] Formula That Replaced [Competitor] for [Specific Audience]"
  Highlight: "Replaced [Competitor]"

Formula 3 — Curiosity + Validation:
  "You Found [Competitor]. Now See What [Audience Who Went Further] Discovered"
  Highlight: "What [Audience Who Went Further] Discovered"

Formula 4 — Direct Upgrade:
  "If [Competitor] Was Your First Step, [Your Product] Is Where Men Go Next"
  Highlight: "Where Men Go Next"
```

**Rules for Model B headlines:**
- The competitor name appears exactly ONCE in the headline — in the `headline` field, never in `headline_highlight`
- The highlight must always be your product or the destination — never the competitor
- Do not use "better than", "beats", "unlike" — these trigger defensiveness
- Use: "discovered", "chose instead", "went further", "made the switch", "the next step"

**Hero badge formula:**
```
"[X,000]+ [Audience] Who Tried [Competitor] Now Use [Your Product]"
OR
"The #1 [Niche] Upgrade for [Audience] Who Want More"
```

**Hero subtext formulas:**

```
hero_subtext_1 — The Validation + Pivot (2 sentences max):
  "If you've been researching [Competitor], you already know what matters: [core benefit
  the visitor cares about]. What [X,000] [audience] discovered is that the formula for
  achieving it has moved forward."

hero_subtext_2 — The Product Introduction with Differentiator (2 sentences max):
  "[Your Product] was built on the same core principles — [primary mechanism that
  competitor also claims] — but formulated with [specific verified differentiator from
  product page: higher dosage / additional ingredient / specific extraction method].
  It's where the category went next."
```

**Hero tags (3 tags that reinforce the upgrade frame):**
```
Tag 1: [icon] More advanced formula than standard [niche] supplements
Tag 2: [icon] [Guarantee period]-day risk-free guarantee
Tag 3: [icon] [Trust badge] — [GMP Certified / FDA Registered / Made in USA]
```

**Hero CTA formula:**
```
"See Why [X,000]+ [Audience] Upgraded to [Your Product]"
OR
"Discover the [Niche] Upgrade — Risk Free"
```

**Hero guarantee text:**
```
"[X]-day money-back guarantee — try it alongside anything else you're considering"
```
(The "try it alongside" phrasing is powerful for Model B — it removes the "I have to choose" pressure)

---

### Benefits Section — Model B

**Psychology trigger in play:** Contrast Effect + Revelation + Loss Aversion

This is the most critical section in a Model B page. It is where the VALIDATION of Layer 1 turns into the REVELATION of Layer 2. Get this wrong and the page feels like an attack ad. Get it right and the visitor thinks, "I'm glad I read this before deciding."

**Structure:** The Model B benefits section uses a different 3-paragraph structure than Model A.

```
Paragraph 1 — The Validation:
Formula: "Anyone who has been researching [Competitor] understands the goal:
[core benefit in audience language]. That's the right instinct. [Competitor] helped
[audience] take [category] seriously — and that matters."

The rule: Never mock the competitor. Give credit that is real and specific
to the category. This paragraph exists purely to disarm.

─────────────────────────────────────────────────────────────────────

Paragraph 2 — The Evolution (The Revelation):
Formula: "What [specific number or approximate group] of men in this category
have since discovered is that [core mechanism/ingredient approach] has been refined.
[Real differentiator sourced from your product page — ingredient at higher dosage /
additional pathway addressed / verified improvement in formulation]. The same
goal. A more targeted path."

The rule: The differentiator MUST come from your product's official page.
Never invent. If no differentiator exists, write about the experience (guarantee,
support, delivery system) — never fabricate a formula comparison.

─────────────────────────────────────────────────────────────────────

Paragraph 3 — The Bridge to Your Product:
Formula: "That's what <strong>[Your Product]</strong> was formulated to deliver.
Not a replacement for the research you've already done — a natural conclusion of it.
[One specific benefit + the mechanism behind it, from the product page]."

The rule: The product introduction should feel like a discovery,
not a sales pitch. "Natural conclusion" is the key emotional trigger.
```

**Headline formula for benefits section:**
```
"benefits_headline": "Why [X,000+] [Audience] Who Researched [Competitor] Are Now Choosing [Your Product]"
```

**Urgency text (below benefits):**
```
"urgency_text": "[X]% off [Your Product] today — for [audience] comparing [niche] options"
```

**Benefits CTA formula:**
```
"benefits_cta_text": "See the Full Ingredient Upgrade"
OR "See Why [X,000]+ [Audience] Made the Switch"
```

---

### Social Proof Stats — Model B

The stats reinforce the upgrade narrative. The labels matter as much as the numbers.

```
Stat 1: { "value": "[X,000]+", "label": "Men Who Made the Upgrade" }
         (not "Happy Customers" — "Made the Upgrade" reinforces the Model B frame)

Stat 2: { "value": "[rating]★",  "label": "Average Rating" }

Stat 3: { "value": "[X]%",      "label": "Would Recommend Over Other Supplements" }
         (or "Repurchase Rate" if that data exists)
```

---

### Features / Ingredients — Model B

**Psychology trigger in play:** Specificity + Authority + "Prove It"

In Model B, the features section has an additional job beyond Model A: it answers the implicit question, "What makes this ingredient profile worth switching for?"

**Card formula:**
```
Title:       "[Ingredient Name] ([dosage])"
Description: "[What it does biologically] — which means [what the customer feels].
              [One sentence connecting why this specific form/dosage/combination
               addresses the gap that brings a [niche] user to this page.]"
```

**The "Upgrade Bridge" — add to at least 2 ingredient cards:**
When an ingredient directly improves upon or complements what the competitor category typically offers, note it — but ONLY if it's verifiable.

```
Example:
"Ashwagandha (KSM-66®, 600mg) — the most studied form of Ashwagandha for cortisol
reduction and testosterone support, at 300% the dosage typically found in standard
[niche] supplements. Which means the hormonal support works faster and lasts longer."
```

If you cannot verify this comparison, do NOT add it. Focus solely on what your product does.

---

### Science Section — Model B

**Psychology trigger in play:** Cognitive Ease + Rational Justification + Authority

For Model B, the science section serves a specific purpose: it gives the visitor the **rational justification** to back up the emotional direction the page has already pointed them in.

By the time the visitor reaches science, they are already leaning toward your product emotionally. The science section gives them the internal monologue: "This makes sense. I'm not making an impulsive decision. The mechanism is real."

**Science headline formula:**
```
"science_headline": "The [Mechanism Name] Behind [Your Product]'s Results"
```

**Science step formulas (3 steps):**
```
Step 1: "[Root mechanism] Activation:
         [How the primary ingredient/pathway works at a biological level]"

Step 2: "[Secondary mechanism] Support:
         [How the secondary pathway amplifies the first — chain reaction language]"

Step 3: "[Cumulative outcome]:
         [What the compounded effect of steps 1+2 means for the customer,
          in customer language — not clinical language]"
```

**Science result formula:**
```
"science_result": "The result: [specific, felt outcome] — [timeframe].
                   The same goal [category/Competitor] was always pointing toward.
                   Now with a formula designed to get you there."
```

The closing line "the same goal... now with a formula designed to get you there" closes the upgrade loop without naming the competitor again.

---

### Reviews — Model B

**Psychology trigger in play:** Mimetic Desire + Social Proof + Identity Confirmation

Model B reviews have one extra requirement that Model A does not: the reviewer's **journey** should mirror the visitor's. The visitor arrived researching the competitor. The most powerful review for a Model B page is someone who was in the same position — researching the category, found your product instead, and is glad they did.

**Review formula for Model B:**
```
"I had been looking into [general category, NOT naming the competitor] for
[time period]. I did a lot of research before committing, and [Your Product]
kept coming up as what people were actually satisfied with long-term.
After [X weeks/months], [specific outcome]. [One sentence on what changed
in daily life]. I'm glad I took the time to look before buying the first thing
I found."
— [First Name Last Initial], [City, State/Country]
```

**Why this works:** The visitor sees their own decision process in the reviewer. "I researched first, then chose this product" mirrors "I'm researching now — maybe I should choose this product too."

**If the official product page has no reviews that reference "comparing" or "switching":**
Use standard outcome testimonials from COPY.md. Never invent the "I switched from X" narrative.
The standard review formula works fine — just avoid using language that explicitly references the competitor brand.

**Reviews subheadline formula:**
```
"reviews_subheadline": "From [audience] who took the time to compare — and found what they were looking for."
```

---

### FAQ — Model B

**Psychology trigger in play:** Regret Aversion + Uncertainty Reduction + Commitment

Model B FAQ must include all 6 standard questions from COPY.md PLUS these two required additions:

**Required Q7 — The Comparison Question:**
```
"question": "How does [Your Product] compare to [Competitor]?"

"answer": "Both [Your Product] and [Competitor] are designed to support [core benefit].
[Your Product] was formulated with [specific real differentiator from product page —
ingredient, dosage, mechanism]. We'd always encourage you to review both options and
choose what fits your goals. What we can offer is a [X]-day guarantee — so there's
no risk in finding out for yourself."
```

**Rules for Q7:**
- Never claim ingredient-by-ingredient superiority unless you have verified data for BOTH products
- Use "we'd encourage you to compare both" — it sounds confident, not defensive
- Always anchor back to your guarantee as the risk-free resolution
- If you have NO verifiable differentiator: drop ingredient comparison entirely and focus on the guarantee + support

**Required Q8 — The "Already Tried the Category" Question:**
```
"question": "I've tried other [niche] supplements before. What makes [Your Product] different?"

"answer": "[Your Product] was specifically formulated to address [mechanism that your
product targets, from product page]. Many customers who had tried other supplements
in this category noticed [specific benefit from real testimonials] within [timeframe].
The key difference is [real differentiator]. As always, results vary — which is exactly
why every order comes with a [X]-day, no-questions-asked money-back guarantee."
```

**The FAQ section label and headline:**
```
"faq_label": "Before You Decide"
"faq_headline": "Everything You Need to Know Before Choosing Between [Competitor] and [Your Product]"
```

The headline uses the competitor name — this is allowed here because it is explicitly framed as a comparison resource, which is the honest purpose of this page.

---

## PART 6C — MODEL B UPGRADE VOCABULARY

Model B has a specific vocabulary that reinforces the upgrade frame without attacking the competitor.
Use these words deliberately. Never use the "never use" column.

### Always Use — Upgrade Frame Words:
| Category | Use these | Never use these |
|----------|-----------|----------------|
| Comparative verbs | "evolved", "refined", "advanced", "upgraded" | "beats", "destroys", "blows away", "leaves behind" |
| Positioning | "next step", "natural conclusion", "where the category went", "what came next" | "better than", "instead of", "beats [Competitor]" |
| Visitor framing | "men who wanted more", "men who looked further", "men who took the time to compare" | "men who were disappointed by", "men who were failed by" |
| Product description | "more targeted", "higher potency", "formulated for", "refined with" | "stronger than X", "more powerful than X" |
| Transition verbs | "made the switch", "upgraded to", "chose instead", "found" | "abandoned", "gave up on", "stopped using" |
| Competitor framing | "paved the way", "put [category] on the map", "what [audience] already know" | "outdated", "weak", "ineffective", "poor quality" |

### Model B Power Sentences (deploy throughout the page):
```
"You already know [primary benefit] matters. [Your Product] was built to deliver it."
"The same reason you were researching [Competitor] is the same reason [X,000+] men chose [Your Product]."
"Not a replacement for your research — the conclusion of it."
"The category you were already looking into. A formula that's gone further."
"If you've already done the research, [Your Product] is the next logical step."
"Men who take the time to compare find [Your Product]. Men who don't, settle."
```

---

## PART 6D — THE 7-SWEEP ADAPTED FOR MODEL B

Run COPY.md's 7-sweep framework on Model B copy, with these Model B-specific checks added to each sweep:

### Sweep 1 — Clarity (+ Model B check)
Add: Does every competitor reference CLEARLY acknowledge we are not affiliated with them? Could a reader mistake this page for the competitor's official site? If yes, add the safe harbor line.

### Sweep 2 — Voice Consistency (+ Model B check)
Add: Does the tone sound like a knowledgeable peer making a recommendation — not a competitor attacking a rival? Model B copy should sound like a trusted friend saying "before you buy that, let me show you something."

### Sweep 3 — "So What?" Test (+ Model B check)
Add: Does every sentence about the competitor VALIDATE the visitor's research? Remove any sentence that makes the visitor feel stupid for having searched for the competitor.

### Sweep 4 — "Prove It" Test (+ Model B check)
Add: Is every comparative claim (e.g., "higher dosage", "more advanced") verified against BOTH products' official pages? If you only have data for your product, write about your product's strengths — not about the competitor's weaknesses.

### Sweep 5 — Specificity (+ Model B check)
Add: Are all competitor references factually specific (exact brand name spelled correctly, exact product line if relevant)? Generic references ("other supplements") are weaker than specific ones ("compared to [Competitor]") — but specific ones require verified facts.

### Sweep 6 — Emotional Texture (+ Model B check)
Add: Does the benefits section make the visitor feel VALIDATED rather than manipulated? The target emotion is "I'm glad I kept reading" — not "I've been tricked into reading this." Read the benefits section and ask: could the visitor feel manipulated? If yes, it needs more credit to the competitor before the pivot.

### Sweep 7 — Zero Risk at CTA (+ Model B check)
Add: Is the guarantee language especially prominent in this page? Model B visitors carry more skepticism than Model A visitors (they were already on the way to buy something else). Every barrier to clicking must be removed — especially the "I already decided on the other one" friction. The FAQ guarantee answer and the hero guarantee text must be identical in terms of the guarantee period.

---

## PART 6E — MODEL B COPY QUALITY CHECKLIST

Run before finalizing any Model B JSON. This is IN ADDITION to the standard COPY.md checklist.

### Competitor Reference Hygiene
- [ ] Competitor name appears in: title tag, meta description, hero badge, and max 2× in benefits text — nowhere else
- [ ] Every competitor reference gives credit before pivoting
- [ ] No sentence claims a specific fact about the competitor without a Phase 1A verified source
- [ ] Safe harbor disclaimer sentence is present in the FAQ or footer
- [ ] No competitor logo, design element, or trademark visual is referenced

### Upgrade Frame Consistency
- [ ] Benefits paragraph 1 validates the visitor's research (not neutral — actively validates)
- [ ] Benefits paragraph 2 introduces evolution language ("evolved", "refined", "advanced") — not attack language
- [ ] Benefits paragraph 3 uses "natural conclusion" or equivalent bridge language
- [ ] At least 2 hero tags reinforce the upgrade theme or trust signals
- [ ] FAQ Q7 (comparison question) is present and resolves without defaming the competitor
- [ ] FAQ Q8 ("tried the category before") is present and anchors to the guarantee

### Product Accuracy (same as Model A — zero tolerance)
- [ ] Every ingredient name comes from the affiliated product's official page
- [ ] Every dosage in the features section comes from the official page label
- [ ] Every testimonial comes from the affiliated product's real customer reviews
- [ ] No invented statistics ("3x more effective", "2x the dosage") without verified sources for both products
- [ ] Guarantee period matches the official product page exactly

### Emotional Arc Integrity
- [ ] Hero + Trust + Social Proof = Validation complete (visitor feels understood)
- [ ] Benefits section = Revelation complete (visitor learns something they didn't know)
- [ ] Features + Science + Reviews + FAQ = Resolution complete (rational justification provided)
- [ ] The page never makes the visitor feel stupid for having searched for the competitor

---

## PART 7 — LEGAL BOUNDARIES FOR MODEL B

**Nominative Fair Use** allows you to use a competitor's trademark to:
- Identify the competitor product in a factual, comparative context
- Write review or comparison content
- Use their brand name in keywords and titles

**Nominative Fair Use does NOT allow you to:**
- Imply sponsorship or official affiliation with the competitor
- Use their logo or design elements
- Make false statements of fact about their product
- Register domain names that are the competitor's trademark

**Specific to health supplement Model B pages:**
- Never claim the competitor's product caused harm, side effects, or injury without citing a verified source (medical journal, FDA warning, etc.)
- Never claim the competitor's product was recalled or pulled unless it actually was
- Never make ingredient claims about the competitor that you cannot verify from their official label
- All FTC/FDA disclaimer requirements apply equally to Model B pages

**The safe harbor sentence** — include this in the FAQ or a disclaimer near competitor mentions:

> "This website is operated by an independent distributor of [Your Product] and is not affiliated with, endorsed by, or sponsored by [Competitor Brand] or its manufacturer. [Competitor Brand] is a registered trademark of its respective owner."

---

## PART 8 — ANTI-HALLUCINATION GUARDRAILS (Model B specific)

Model B is the HIGHEST RISK PAGE TYPE for hallucination because it involves writing about a product you did not research for affiliation. Apply these rules with zero exceptions.

### The Two-Source Rule

Every statement about the competitor requires **a source from Phase 1A research**:
- If you found it on their official page → allowed
- If you found it in verified customer reviews (Reddit, Amazon, Trustpilot) → allowed with attribution
- If you are guessing based on the product category → NOT allowed

Every statement about YOUR product requires **a source from Phase 1B research** (the affiliated product page):
- Same rule as Model A — nothing invented

### The "Red Flag" Internal Checklist

Before writing any sentence about the competitor, ask:
1. Did I read this on their official page or a verified public review?
2. Am I certain of the spelling of their product name?
3. Am I claiming a specific ingredient/dosage for their product? → Only if found on their page
4. Am I claiming a side effect for their product? → Only if cited by a verified source
5. Am I claiming a price for their product? → Only if current as of research date

If the answer to any of these is "no" or "I'm not sure" → do not write the claim.

### Mandatory Disclosure in the JSON

The `_competitor_real_complaints` field must only contain complaints you ACTUALLY found during Phase 1C research. If you found none, write:

```json
"_competitor_real_complaints": ["No specific negative patterns identified in public reviews. Use neutral transition narrative."]
```

This forces the copy to remain neutral rather than inventing problems.

---

## PART 9 — MODEL B AUDIT ADDITIONS

When running `AUDITOR.md` on a Model B page, add these checks to the standard modules:

### Additional Module 1 checks (Structure):
- [ ] `page_model` field is set to `"B"` in the JSON
- [ ] `_competitor_name` field is filled with the real competitor brand name
- [ ] `_competitor_url` field references a real URL
- [ ] `_transition_reason` is not a placeholder

### Additional Module 2 checks (Copy Quality):

**Competitor mention hygiene:**
- [ ] Competitor name appears in: title, meta, hero_badge, benefits (max 2×), FAQ headline — nowhere else
- [ ] No sentence in hero or benefits uses: "beats", "better than", "unlike", "instead of [Competitor]" — attack language BLOCKER
- [ ] Upgrade vocabulary used throughout: "evolved", "refined", "went further", "natural conclusion", "next step"

**Emotional arc (Three Layers — all three required):**
- [ ] Layer 1 complete: Hero + Trust + Social Proof make the visitor feel VALIDATED for researching the competitor (not manipulated)
- [ ] Layer 2 complete: Benefits paragraph 1 gives competitor genuine credit; paragraph 2 introduces evolution (not attack); paragraph 3 uses "natural conclusion" bridge language
- [ ] Layer 3 complete: Features + Reviews + FAQ together provide full rational justification for the upgrade
- [ ] Social proof stat labels use upgrade frame ("Men Who Made the Upgrade", "Would Recommend Over Other Supplements")
- [ ] Hero CTA references the upgrade journey ("See Why X,000+ Upgraded", "Discover the Upgrade — Risk Free")

**Review quality (Model B specific):**
- [ ] At least 1 review mirrors the visitor's journey ("researched before committing", "compared options")
- [ ] No review explicitly names the competitor (legal risk)
- [ ] `reviews_subheadline` uses upgrade framing ("men who took the time to compare")

**FAQ completeness:**
- [ ] Q7 (comparison question) present and resolves WITHOUT claiming ingredient superiority unless verified for BOTH products
- [ ] Q8 ("tried category before") present and anchors to the guarantee as risk resolution
- [ ] FAQ headline: "Everything You Need to Know Before Choosing Between [Competitor] and [Product]"
- [ ] Safe harbor disclaimer sentence present in FAQ answer or footer

**Run Part 6E checklist before marking Module 2 as passed.**

### Additional Module 4 checks (Product Accuracy):
- [ ] All competitor ingredient names match what was found on their official page
- [ ] No competitor dosages are mentioned (we don't have their label data)
- [ ] No competitor side effects are mentioned (unless from a verified medical source)
- [ ] The `_transition_reason` narrative is traceable to real Phase 1C research

### Additional Module 7 checks (Legal):
- [ ] Page does not imply official affiliation with the competitor brand
- [ ] No competitor logo or trademark design element is used
- [ ] Safe harbor disclaimer is present near competitor mentions
- [ ] Title/URL uses comparison intent words ("review", "alternative", "vs", "upgrade") — not the competitor's name alone

---

## PART 10 — QUICK REFERENCE: MODEL A vs MODEL B

| Dimension | Model A | Model B |
|-----------|---------|---------|
| Affiliation | Own affiliate link for the product | Affiliate link for the "new version" only |
| Target keyword | Product name + "review/buy/discount" | Competitor name + "alternative/review/upgrade" |
| Visitor entry state | Aware of problem, looking for solution | Already researching competitor, needs redirection |
| Hero badge | "Trusted by X+ customers" | "X,000+ men who researched [Competitor] chose [Product]" |
| Headline frame | Problem → solution | Validation → evolution → upgrade |
| Benefits angle | Root cause → emotion → product bridge | Validation → revelation → natural conclusion |
| Reviews label | Standard outcome testimonials | Include "researched before committing" angle |
| Social proof stat label | "Happy Customers" | "Men Who Made the Upgrade" |
| FAQ extras | Standard 6 | Standard 6 + Q7 (comparison) + Q8 (tried category before) |
| FAQ headline | Generic "everything you need to know" | "Everything You Need to Know Before Choosing Between [Competitor] and [Product]" |
| Competitor mentions | None | Named in: title, meta, hero badge, benefits (max 2×), FAQ headline — nowhere else |
| Emotional arc | Pain → hope → proof → action | Validation → revelation → resolution → action |
| Upgrade vocabulary | Standard benefit language | "evolved", "refined", "went further", "natural conclusion" — never "beats" or "better than" |
| Legal risk | Standard YMYL | Standard YMYL + nominative fair use compliance |
| Hallucination risk | Medium | High — dual research required, two-source rule |
| SEO play | Direct traffic to product | Parasitic SEO on competitor's brand volume |
| JSON extras | None | `_competitor_name`, `_competitor_url`, `_competitor_main_ingredients`, `_competitor_real_complaints`, `_transition_reason` |
| Copy documentation | COPY.md + this file Part 6 | COPY.md + this file Parts 6, 6B, 6C, 6D, 6E |
| Audit mode | Standard 8 modules | Standard 8 modules + Model B additions (Part 9) |
