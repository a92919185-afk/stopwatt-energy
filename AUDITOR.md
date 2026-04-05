# Page Auditor — Quality & Alignment System
## For Claude Code, AI Agents, and Any LLM Auditing Pages in This System

> **How to invoke this auditor:**
> When the owner asks to audit a page, or after generating any new page, run ALL 7 audit modules below.
> Output a structured report at the end using the REPORT FORMAT specified in Part 8.
> A page should not go live until it passes all mandatory checks.

---

## HOW TO RUN A FULL AUDIT

**First: identify the page model.**
Read the JSON file. Check `"page_model"` field:
- `"A"` → Run standard audit (all 8 modules below)
- `"B"` → Run standard audit + Model B additions from `MODEL-B.md` Part 9
- `"C"` → Run standard audit + Model C additions below (Part 11)
- `"D"` → Run standard audit + Model D additions below (Part 12)
- Missing → BLOCKER before audit begins: ask the owner which model this is

**Input required:**
1. The JSON data file: `data/SLUG.json`
2. The generated HTML file: `output/SLUG/index.html`
3. The target country and audience (from the JSON `slug` field and product context)
4. For Model B: the competitor's official page URL (`_competitor_url` in JSON)
5. For Model C: the official product page URL (to verify pricing and bonus accuracy)

**Steps:**
1. Read the JSON file completely — note `page_model`
2. Read the generated HTML file
3. Run each of the 8 audit modules below in order
4. If Model C, also run Part 11 checks
5. Score each module (see scoring table in Part 7)
6. Output the full audit report in the format defined in Part 8
7. Flag every BLOCKER issue (these prevent publishing)
7. Flag every WARNING issue (these should be fixed before publishing)
8. Flag SUGGESTIONS (optional improvements)

---

## MODULE 1 — STRUCTURE AUDIT

**What this checks:** Are all required sections present, in the correct order, with no missing blocks?

### 1.1 — Section Order Verification

The required order depends on the page model.

**Model A / B / C (standard):**
```
1. alert-bar
2. navbar
3. hero
4. trust
5. social-proof
6. benefits
7. reviews
8. features
9. science
10. faq
11. footer
12. modals (privacy, terms, returns, contact)
```

**Model D (social proof first):**
```
1. alert-bar
2. navbar
3. hero-d
4. trust-d
5. reviews       ← before product-identity (social proof first)
6. product-identity
7. science
8. ingredients-list
9. guarantee
10. benefits-list
11. faq
12. final-cta
13. footer
14. modals
```

**Check:** Open the HTML file and verify each `<section id="...">` appears in this exact order for the page's model.

| Check | Pass condition |
|-------|---------------|
| All 12 block types present | Every `id=` listed above exists in the HTML |
| Correct sequence | No section appears before a section that should precede it |
| No duplicate sections | Each `id=` appears exactly once |

**BLOCKER if:** Any section is missing or out of order.

### 1.2 — Placeholder Leak Check

**Check:** Search the generated HTML for any unreplaced template placeholders.

```
grep "{{" output/SLUG/index.html
```

Any match is a BLOCKER. Every `{{field}}` must have been replaced by real content.

Common causes:
- A required JSON field is missing → the generator leaves the `{{field}}` in the HTML
- A field name typo in the JSON → check exact spelling against the schema

### 1.3 — Required JSON Fields

Verify all of these exist in the JSON and are non-empty strings (not `""` or `null`):

**Core:** `slug`, `language`, `theme`, `product_name`, `company_name`, `support_email`, `support_phone`
**SEO:** `meta_title`, `meta_description`
**Content:** `headline`, `headline_highlight`, `hero_subtext_1`, `hero_subtext_2`
**Legal (BLOCKER if missing):** `distributor_notice`, `disclaimer`
**Modals (BLOCKER if missing):** All 4 modals (`privacy`, `terms`, `returns`, `contact`) with non-empty `sections` arrays

**BLOCKER if:** Any of the fields listed above is missing or empty.
**WARNING if:** Optional fields like `og_image`, `support_phone`, `company_address` are missing (should be noted but not blocking).

### 1.4 — Design Quality Audit

**What this checks:** Does the CSS theme follow the standards in `DESIGN.md`? Run after generating the page and opening the theme file.

| Check | Pass condition | Severity |
|-------|---------------|----------|
| All 10 theme layers present | No empty sections, no `______` placeholders remaining in the `.css` file | BLOCKER if `______` placeholders remain |
| No generic AI aesthetics | Font is not Inter/Roboto/Poppins without DNA Report justification; hero is not purple gradient on white | WARNING (-5) |
| Niche-appropriate typography | Font pairing matches the niche direction from `DESIGN.md` Part 3 | WARNING (-5) |
| Hero gradient | 3-stop gradient present OR justified reason for 2-stop | WARNING (-5) |
| Motion layer present | At least one motion pattern from `DESIGN.md` Part 6 is included in the theme | SUGGESTION |
| Button shape matches niche | Pill shape for friendly niches (eye, general health); sharp/squared for performance niches (male performance, energy) | WARNING (-5) |
| Feature card hover | Cards have a hover effect beyond default `translateY(-6px)` | SUGGESTION |
| Design direction documented | Theme file has a header comment stating the aesthetic direction | SUGGESTION |
| Google Fonts loaded | `base.html` loads the fonts declared in `--font-heading` and `--font-body` | WARNING (-5) |
| DNA source cited | Every HEX value in `:root` appears in the DNA Report with a source citation | WARNING (-5) |

**Score impact from design checks:**
- Each `______` placeholder remaining in theme = WARNING (-5)
- Generic AI aesthetics (Inter + white + blue/purple gradient) without DNA justification = WARNING (-5)
- Mismatched niche aesthetic = WARNING (-5)
- Missing Google Fonts load = WARNING (-5)
- No motion layer = SUGGESTION (informational, no score deduction)

---

## MODULE 2 — COPY QUALITY AUDIT

**What this checks:** Does the copy meet the quality standards defined in COPY.md?

### 2.1 — Hero Headline

| Check | Pass condition | Fail action |
|-------|---------------|------------|
| Length | Combined `headline` + `headline_highlight` ≤ 12 words | WARNING: shorten |
| Keyword present | Primary benefit or product name in the headline | BLOCKER: rewrite |
| Loss aversion or specificity | Contains a number, a specific outcome, or a clear consequence | WARNING: add specificity |
| No exclamation marks | `!` does not appear | WARNING: remove |
| No banned buzzwords | Does not contain: revolutionary, game-changing, cutting-edge, innovative | WARNING: replace |

### 2.2 — Benefits Section (The "So What?" Test)

For each of the 3 paragraphs, check:

| Paragraph | Required content | Fail if missing |
|-----------|-----------------|----------------|
| Paragraph 1 | Biological/scientific root cause with a named mechanism | WARNING: too vague |
| Paragraph 2 | Emotional/daily-life consequences — at least 2 specific daily impacts | WARNING: not agitating enough |
| Paragraph 3 | The bridge to the product — must name the product AND its differentiation | BLOCKER: no bridge |

**"Prove It" check for Paragraph 1:**
Does it name a real biological mechanism (not just "your body struggles")?
- Pass: "declining levels of lutein in the macula" ✓
- Fail: "your eyes get tired over time" ✗

### 2.3 — Feature Cards ("Which Means" Check)

For every card in `features`:
- Does the `title` match an ingredient on the official product page? (BLOCKER if not)
- Does the `description` contain a mechanism of action? (WARNING if not)
- Does the `description` contain a customer-felt benefit? (WARNING if not — "which means" bridge missing)
- Is the description ≤ 2 sentences? (WARNING if longer)

### 2.4 — Reviews Quality Check

For each review in the `reviews` array:

| Check | Pass condition | Fail action |
|-------|---------------|------------|
| Specific outcome | Contains a measurable or concrete result (not "great product!") | BLOCKER: too generic |
| Timeframe | Contains a time reference ("after 3 weeks", "within a month") | WARNING: add timeframe |
| Name + Location | `name` field contains city and country/state | WARNING: add location |
| Not polished marketing language | Sounds like a real person, not an ad copywriter | WARNING: humanize |
| Problem → outcome arc | Mentions what they struggled with AND what improved | WARNING: missing arc |

**Minimum 3 reviews required.** BLOCKER if fewer than 3.

### 2.5 — FAQ Coverage Check

Verify these 6 topics are covered (at minimum):

| Topic | Check |
|-------|-------|
| Does it work? | At least one FAQ about effectiveness |
| Is it safe? | At least one FAQ about safety/ingredients |
| How to take it | At least one FAQ about dosage/usage |
| What if it doesn't work? | At least one FAQ about the guarantee/refund |
| Subscription | At least one FAQ about recurring charges |
| Best value/which to buy | At least one FAQ about quantity or pricing |

**BLOCKER if:** Fewer than 6 FAQ items total.
**WARNING if:** Any of the 6 topics above is missing.

### 2.6 — Banned Words Scan

Search the JSON values for these terms and flag each:

**BLOCKERS (prohibited claims):**
- "cures" / "cure" / "cured"
- "treats" / "treatment" (used as a medical claim)
- "diagnoses" / "diagnostic"
- "FDA approved" (the phrase — only "FDA registered facility" is acceptable)
- "prevents disease" / "prevent any disease" in copy sections (allowed only in the footer disclaimer)

**WARNINGS (quality issues):**
- "revolutionary" / "game-changing" / "cutting-edge" / "innovative" / "world-class"
- "very" / "really" / "truly" / "quite"
- "utilize" / "facilitate" / "leverage" (use simpler words)
- "wellness journey" / "holistic wellness" / "wellness solution"
- Exclamation marks in headlines or body copy

---

## MODULE 3 — PSYCHOLOGY TRIGGER AUDIT

**What this checks:** Are the right psychological mechanisms activated in the right sections?

| Section | Required trigger | Check |
|---------|-----------------|-------|
| Alert bar | Urgency/scarcity in badge 1 | Does badge 1 communicate a limited offer or deadline? |
| Alert bar | Risk reversal in badge 2 | Does badge 2 mention the guarantee? |
| Hero | Loss aversion or present bias | Does the headline frame what they'll LOSE by not acting, OR what they gain NOW? |
| Hero | Social proof number | Does `hero_badge` contain a customer count? |
| Trust | Authority signals | Are all `trust_badges` real (GMP, FDA registered, etc.) and not invented? |
| Social proof | Specificity | Are the `stats` numbers specific (not round if possible)? |
| Benefits P2 | Agitation | Does paragraph 2 name at least 2 specific daily-life consequences? |
| Features | "Which means" bridge | Is every ingredient connected to a felt benefit? |
| Reviews | Mimetic desire | Can a target customer see themselves in at least one reviewer? |
| FAQ last Q | Anchor + value | Does the last FAQ address pricing and present the best value option? |
| Every CTA | Action + reward | Does every CTA button use an action verb that describes what the buyer GETS? |

**BLOCKER if:** Hero has no social proof number AND no loss aversion framing.
**WARNING if:** Any other trigger from the table above is missing.

### 3.1 — Anchoring Check (Pricing)

If pricing is mentioned on the page:
- Is the original/crossed-out price shown before the discounted price? (Anchoring effect)
- Does the copy use "less than [coffee / daily cost]" framing for the price? (Mental accounting)

### 3.2 — Scarcity/Urgency Authenticity Check

**BLOCKER if:** The copy uses urgency that cannot be true:
- "Only 3 bottles left" → Is this actually tracked and real? If not, remove.
- "Offer expires tonight" with no actual expiry → Remove.
- Countdown timer that resets on page reload → Never use.

**Permitted urgency:**
- "X% off — today's offer" (if the landing page does run promotions)
- "Limited-time discount" (vague but not false)
- "Current stock [number]" only if connected to a real inventory system

---

## MODULE 4 — PRODUCT ACCURACY AUDIT

**What this checks:** Does every specific claim in the copy match the official product page?

This module requires knowing the official product URL. If available, cross-check:

| Field | Must match the official page |
|-------|---------------------------|
| `product_name` | Exact name as shown on the product page |
| Ingredient names in `features` | Every ingredient must appear on the official page |
| Dosages in feature titles | Every dosage must match the official label/page |
| Guarantee duration in `faq_items` | Exact number of days (30? 60? 90?) |
| Guarantee terms in `modals.returns` | What exactly is covered — opened bottles? Shipping? |
| `stats` numbers | Rating and review count from the official page |
| Trust badges | Only badges the manufacturer actually claims |
| `support_email` | Must be a real, working email address |

**BLOCKER if:** Any ingredient name does not appear on the official product page.
**BLOCKER if:** The guarantee duration in FAQ differs from the guarantee in the returns modal.
**BLOCKER if:** Any `trust_badge` claims a certification the manufacturer does not hold.

### 4.1 — Invented Content Check

These are automatic BLOCKERs regardless of how convincing the copy sounds:

- A study percentage cited without a real study (e.g., "reduces fatigue by 47% in clinical trials" — where is this trial?)
- An ingredient listed as "[X]mg" when the dosage is not on the official page
- A testimonial that was not sourced from the official product page
- A customer count that was not taken from the official page and rounded up by more than 10%

---

## MODULE 5 — AUDIENCE ALIGNMENT AUDIT

**What this checks:** Is the copy actually written for the target country and audience?

### 5.1 — Country / Language Check

Identify the target country from the `slug` field (e.g., `uk-reticlear` → UK).

| Country | Language checks |
|---------|----------------|
| `us-*` | American English spelling. "color" not "colour". "organize" not "organise". |
| `uk-*` | British spelling throughout. "colour", "favourite", "organised". No American idioms. |
| `au-*` | British spelling. Less hyperbolic tone. No "awesome" overuse. |
| `de-*` | Full German. No Denglish. No uncompleted translation. Formal Sie in body, du in CTA if brand is casual. |
| `ca-*` | Canadian English (same as US). CAD currency. |

**BLOCKER if:** A non-English slug (`de-*`, `nl-*`, `dk-*`, `se-*`) has copy in English.
**WARNING if:** A UK/AU slug uses American spellings.

### 5.2 — Tone Alignment Check

| Country | Expected tone | Flag if |
|---------|--------------|---------|
| US | Direct, benefit-first, urgency-heavy | Copy is too cautious or soft |
| UK | Confident but not pushy, slightly dry | Copy uses American idioms or overdramatic urgency |
| AU | Matter-of-fact, anti-hype | Copy uses superlatives without proof |
| DE | Factual, rational, science-first | Copy leads with emotion over mechanism |

### 5.3 — Audience Specificity Check

Look at the product niche and verify the copy speaks to the right person:

**Eye health supplements:**
- Primary audience: adults 40–70 experiencing declining vision, screen fatigue
- Pain points: blurry near vision, eye strain after screens, floaters, light sensitivity
- Flag if: copy uses generic "health" language without specific vision references

**Male performance supplements:**
- Primary audience: men 35–60 experiencing reduced libido, energy, or vitality
- Pain points: low energy, reduced drive, body composition changes, confidence
- Flag if: copy uses clinical/medical disease language (prohibited in YMYL)

**Weight management supplements:**
- Primary audience: adults who have tried diets that failed
- Pain points: slow metabolism, cravings, plateau, emotional eating
- Flag if: copy promises specific pound/kg results without qualifying with "results vary"

**General rule:** If the target audience cannot read the hero headline and think "this is written for me," the audience alignment has failed.

---

## MODULE 6 — SEO AUDIT (Quick Pass)

**Reference:** `SEO.md` for full details. This module is a fast pass only.

| Check | Pass condition | Status |
|-------|---------------|--------|
| `meta_title` length | 50–60 characters | |
| `meta_description` length | 150–160 characters | |
| Primary keyword in title | First 40 characters contain the product/benefit | |
| Primary keyword in H1 | `headline` or `headline_highlight` contains primary keyword | |
| Primary keyword in first 100 words | `hero_subtext_1` or `benefits_paragraphs[0]` contains keyword | |
| `canonical_url` | Present ONLY if page is being deployed — NOT during content creation | |
| `og_image` | Points to a real image (not placehold.co) for production | |
| `price_amount` + `price_currency` | Real values from the official page, not placeholders | |
| `rating_value` + `rating_count` | Real values from the official page | |

**BLOCKER if:** `meta_title` is over 70 characters (Google will truncate mid-word).
**BLOCKER if:** `canonical_url` is set to a placehold.co URL or localhost.
**WARNING if:** `og_image` is still a placehold.co URL (acceptable for drafts, not for production).

---

## MODULE 7 — LEGAL & COMPLIANCE AUDIT

**Reference:** `CLAUDE.md` Legal & Google Ads Compliance section for full details.

### 7.1 — Footer Content

| Check | Pass condition |
|-------|---------------|
| `distributor_notice` | Contains the words "independent" AND "distributor" AND "not affiliated" |
| `distributor_notice` | Contains "individual results may vary" or equivalent |
| `disclaimer` | Contains the appropriate regulatory body for the target country (FDA for US, MHRA for UK, EFSA for EU) |
| `disclaimer` | Contains "not intended to diagnose, treat, cure, or prevent any disease" |
| `disclaimer` | Indicates this is a paid promotional/affiliate website |

**BLOCKER if:** Either field is a generic placeholder.
**BLOCKER if:** FDA disclaimer is used on a UK or EU page (wrong regulatory body).

### 7.2 — Modal Completeness

For each modal (`privacy`, `terms`, `returns`, `contact`):

**Privacy Policy:**
- [ ] Contains "information we collect" section
- [ ] Contains "how we use" section
- [ ] Contains "cookies" section
- [ ] Contains "third-party" section — explicitly states data is NOT sold
- [ ] Contains "your rights" section — mentions GDPR for EU/UK pages or CCPA for US
- [ ] Contains real contact email (not `[support@yourdomain.com]` placeholder)

**Terms of Service:**
- [ ] First section explicitly states "independent distributor" (BLOCKER if missing)
- [ ] Contains "no medical advice" section
- [ ] Contains "affiliate relationship disclosure" or equivalent FTC disclosure
- [ ] Contains "limitation of liability" section
- [ ] Contains real `[State/Country]` in governing law (not a placeholder)

**Returns & Refunds:**
- [ ] Contains exact number of guarantee days (not "X days")
- [ ] Contains the actual refund email address
- [ ] Contains processing timeline (number of business days)
- [ ] "Satisfaction Guarantee" section title matches guarantee days in FAQ

**Contact:**
- [ ] Contains real support email (not placeholder)
- [ ] Contains response time commitment

**BLOCKER if:** Any modal contains unreplaced `[placeholder]` text in brackets.
**BLOCKER if:** Terms of Service does not disclose the affiliate/distributor relationship.

### 7.3 — Google Ads Prohibited Content Check

Scan all JSON string values for:

| Prohibited element | Action |
|-------------------|--------|
| Countdown timer in copy | Verify it is real, not fake reset |
| "Only X left in stock" | Verify it is connected to real inventory |
| Celebrity name used as endorsement | Verify documented consent exists |
| "News" or "editorial" framing | Remove — prohibited in Google Ads health category |
| Before/after imagery claims | Images must not imply guaranteed specific results |

---

## MODULE 8 — WEB QUALITY & ACCESSIBILITY (web-design-guidelines)

**What this checks:** Does the generated HTML and theme CSS meet baseline web quality standards for accessibility, performance, animation safety, and touch interaction? Based on the `web-design-guidelines` skill — run it on `output/SLUG/index.html` for a live automated check, or use the checklist below manually.

> **How to run the skill:** Use the `web-design-guidelines` skill on the generated file. It fetches the latest rules and outputs findings in `file:line` format. Focus on findings relevant to static HTML (ignore React/hydration/form-specific rules — those don't apply here).

### 8.1 — Accessibility

| Check | Pass condition | Severity |
|-------|---------------|----------|
| All `<img>` have `alt` | Every image has `alt="description"` or `alt=""` if decorative | BLOCKER |
| Icon buttons have `aria-label` | Close buttons, hamburger menu, any icon-only interactive element has `aria-label` | WARNING (-5) |
| Decorative icons have `aria-hidden` | Font Awesome `<i>` icons not conveying meaning have `aria-hidden="true"` | WARNING (-5) |
| Heading hierarchy | Page goes h1 → h2 → h3 with no skipped levels | WARNING (-5) |
| Semantic elements | `<button>` for click actions, `<a>` for navigation — never `<div onclick>` | WARNING (-5) |

### 8.2 — Images & Performance

| Check | Pass condition | Severity |
|-------|---------------|----------|
| `<img>` has `width` and `height` | All images have explicit dimensions (prevents CLS) | WARNING (-5) |
| Lazy loading on below-fold images | `loading="lazy"` on images below the hero | WARNING (-5) |
| Hero image is prioritized | Hero `<img>` has `fetchpriority="high"` or `loading="eager"` (not lazy) | SUGGESTION |
| Google Fonts use `preconnect` | `<link rel="preconnect" href="https://fonts.googleapis.com">` in `<head>` | WARNING (-5) |
| Fonts use `font-display: swap` | Font CSS includes `&display=swap` in the Google Fonts URL | WARNING (-5) |

### 8.3 — Animation Safety

| Check | Pass condition | Severity |
|-------|---------------|----------|
| No `transition: all` in theme | Theme CSS does not use `transition: all` — properties listed explicitly | WARNING (-5) |
| Only `transform`/`opacity` animated | Animations do not animate `width`, `height`, `top`, `left`, or other layout-triggering properties | WARNING (-5) |
| `prefers-reduced-motion` honored | Theme has `@media (prefers-reduced-motion: reduce)` block that disables or reduces animations | SUGGESTION |

### 8.4 — Touch & Interaction

| Check | Pass condition | Severity |
|-------|---------------|----------|
| CTA buttons have `touch-action: manipulation` | Prevents 300ms double-tap delay on mobile; set on `.btn-primary`, `.hero-cta`, `.cta-button` | SUGGESTION |
| Modals have `overscroll-behavior: contain` | Modal/drawer scrolling does not bleed to the page behind | SUGGESTION |
| Focus states visible | Interactive elements have `:focus-visible` ring — no naked `outline: none` without a replacement | WARNING (-5) |

---

## PART 7 — SCORING SYSTEM

After completing all 8 modules, assign a score:

| Score | Label | Meaning |
|-------|-------|---------|
| 90–100 | PUBLISH READY | No blockers. Minor warnings only. Safe to go live. |
| 75–89 | NEEDS FIXES | 1–3 warnings that should be resolved. No blockers. |
| 50–74 | MAJOR REVISION | Multiple warnings or 1 blocker. Do not publish. |
| 0–49 | REJECT | Multiple blockers. Requires full revision before re-audit. |

**Scoring formula:**

Start at 100.
- Each **BLOCKER**: −15 points
- Each **WARNING**: −5 points
- Each **SUGGESTION** (not acted on): 0 points (informational only)

Minimum score to publish: **90** (zero blockers).

---

## PART 8 — AUDIT REPORT FORMAT

Output this exact structure after running all 7 modules:

```
═══════════════════════════════════════════════════════════
  PAGE AUDIT REPORT
  Page: [SLUG]
  Product: [product_name]
  Country: [target country from slug]
  Audit Date: [today's date]
═══════════════════════════════════════════════════════════

FINAL SCORE: [X]/100 — [PUBLISH READY / NEEDS FIXES / MAJOR REVISION / REJECT]

─────────────────────────────────────────────────────────
BLOCKERS (must fix before publishing) — [count]
─────────────────────────────────────────────────────────
[If none: "✓ No blockers found."]

🔴 [Module X] — [Issue description]
   Found in: [JSON field or HTML element]
   Problem:  [What exactly is wrong]
   Fix:      [Specific action to resolve]

─────────────────────────────────────────────────────────
WARNINGS (should fix before publishing) — [count]
─────────────────────────────────────────────────────────
[If none: "✓ No warnings found."]

🟡 [Module X] — [Issue description]
   Found in: [JSON field]
   Problem:  [What exactly is wrong]
   Fix:      [Specific improvement]

─────────────────────────────────────────────────────────
SUGGESTIONS (optional improvements) — [count]
─────────────────────────────────────────────────────────
[If none: "✓ No suggestions."]

💡 [Module X] — [Suggestion description]
   Consider: [What could be improved and why]

─────────────────────────────────────────────────────────
MODULE SUMMARY
─────────────────────────────────────────────────────────
Module 1 — Structure + Design: [PASS / FAIL — X issues]
Module 2 — Copy Quality:       [PASS / FAIL — X issues]
Module 3 — Psychology:         [PASS / FAIL — X issues]
Module 4 — Product Accuracy:   [PASS / FAIL — X issues]
Module 5 — Audience Alignment: [PASS / FAIL — X issues]
Module 6 — SEO:                [PASS / FAIL — X issues]
Module 7 — Legal/Compliance:   [PASS / FAIL — X issues]
Module 8 — Web Quality:        [PASS / FAIL — X issues]

─────────────────────────────────────────────────────────
NEXT STEPS
─────────────────────────────────────────────────────────
[If PUBLISH READY]:
✓ Page is ready to deploy. Remember to:
  - Add canonical_url when final domain is confirmed
  - Replace any placehold.co images with production images
  - Submit sitemap to Google Search Console after deploying

[If NEEDS FIXES / MAJOR REVISION / REJECT]:
1. Fix all BLOCKERS first (listed above)
2. Fix all WARNINGS
3. Re-run the audit
4. Do not deploy until score reaches 90+
═══════════════════════════════════════════════════════════
```

---

## PART 9 — QUICK AUDIT (FAST MODE)

When the owner says "quick audit" or "fast check", run only the BLOCKER checks from each module and skip all warnings/suggestions. Report only:

```
QUICK AUDIT — [SLUG]
Status: [CLEAR TO PUBLISH / X BLOCKERS FOUND]

[List blockers only, or "No blockers — safe to publish after standard warnings review."]
```

---

## PART 10 — WHEN TO RUN THE AUDIT

| Trigger | Audit type |
|---------|-----------|
| After generating a new page for the first time | Full audit (all 8 modules) |
| After editing an existing JSON and regenerating | Full audit |
| Owner says "is this ready to publish?" | Full audit |
| Owner says "quick check" | Quick audit (blockers only) |
| After fixing issues from a previous audit | Full audit (re-audit) |
| Routine quality review of published pages | Full audit |

**The audit is not optional before first publish.**
A page with a blocker going live is a risk to the Google Ads account, the affiliate relationship, and the domain's SEO standing.

---

## PART 11 — MODEL C ADDITIONS (run only when `page_model` = "C")

Run these checks IN ADDITION to the standard 8 modules above. Each finding uses the same BLOCKER/WARNING/SUGGESTION format and contributes to the overall score.

### 11.1 — Mechanism Block Integrity

| Check | Pass condition | Severity |
|-------|---------------|----------|
| Mechanism block renders | `#mechanism` section exists in the HTML output | BLOCKER |
| Named concept present | `mechanism_concept_name` is filled and memorable (2–4 words) | BLOCKER |
| Store/Burn Mode contrast rendered | Both mode cards appear in HTML | WARNING (-5) |
| Mechanism steps: 3–4 cards | `mechanism_steps` array has 3 or 4 items | WARNING (-5) |
| Mechanism language consistent with testimonials | Reviews mention outcomes that match the mechanism explanation | WARNING (-5) |
| No invented biology | Every biological claim (hormones, pathways) is supported by real ingredient data from the official page | BLOCKER |

### 11.2 — Pricing Block Integrity

| Check | Pass condition | Severity |
|-------|---------------|----------|
| Pricing block renders | `#pricing` section exists in the HTML output | BLOCKER |
| Exactly 3 packages | `pricing_packages` array has exactly 3 items | WARNING (-5) |
| Popular card highlighted | One package has `pricing-card--popular` class and a non-empty `popular_label` | WARNING (-5) |
| Prices match official page | Per-bottle prices verified against the official product page | BLOCKER |
| Retail price is real | `retail_per_bottle` reflects an actual previously-offered price — not invented to inflate savings | BLOCKER |
| CTA URLs are real affiliate links | No `REAL-AFFILIATE-URL` placeholders remain | BLOCKER |
| Guarantee period matches official page | `pricing_guarantee_text` states the same guarantee term as the manufacturer | BLOCKER |

### 11.3 — Bonuses Block Integrity

| Check | Pass condition | Severity |
|-------|---------------|----------|
| Bonuses conditional | If manufacturer provides no bonuses, `bonuses_headline` is absent from JSON and block does not render | BLOCKER if block renders with invented bonuses |
| Bonus names match official page | If manufacturer specifies bonus titles, they are used exactly | WARNING (-5) |
| Retail values are credible | `$49–$97` range for digital bonuses; never claim more than $97 per e-book | WARNING (-5) |
| Bonus descriptions complement mechanism | Each bonus description ties back to the product's mechanism or ingredient rationale | SUGGESTION |

### 11.4 — Sticky Bar

| Check | Pass condition | Severity |
|-------|---------------|----------|
| Sticky bar renders | `#sticky-bar` element exists in HTML | WARNING (-5) |
| Sticky urgency text is real | If "Limited-Time Offer" — there must be an actual price discount vs. retail | BLOCKER if claim is false |
| Sticky CTA matches hero CTA | Same button text for consistency | SUGGESTION |
| JavaScript scroll trigger works | `sticky-bar--visible` class is toggled correctly by scroll (verify script in HTML) | WARNING (-5) |

### 11.5 — Model C Section Order

Verify the section order for Model C specifically. The required order is:

```
1. alert-bar (optional)
2. navbar
3. hero
4. trust
5. social-proof
6. benefits
7. mechanism      ← must appear BEFORE reviews
8. reviews        ← must appear AFTER mechanism, BEFORE science
9. science
10. features
11. pricing       ← must appear AFTER features
12. bonuses       ← must appear AFTER pricing
13. faq
14. footer
15. modals
16. sticky-bar    ← must be last, after modals
```

**BLOCKER if:** `mechanism` appears after `reviews`, or `pricing` appears before `features`, or `bonuses` appears before `pricing`.

---

## PART 12 — MODEL D ADDITIONS (run only when `page_model` = "D")

Run these checks IN ADDITION to the standard 8 modules above. Apply the same BLOCKER/WARNING/SUGGESTION format.

### 12.1 — Model D Section Order

Verify the exact section order for Model D:

```
1. alert-bar
2. navbar
3. hero-d           ← hero-d block, NOT hero
4. trust-d          ← trust-d block, NOT trust
5. reviews          ← BEFORE product-identity (social proof first)
6. product-identity ← education begins here
7. science
8. ingredients-list ← NOT features
9. bonuses          ← optional
10. guarantee       ← mid-page, standalone
11. benefits-list   ← NOT benefits
12. faq
13. final-cta       ← closing CTA section
14. footer
15. modals
```

**BLOCKER if:** `reviews` appears AFTER `product-identity` (violates social-proof-first rule).
**BLOCKER if:** `hero-d` is missing (rendered `hero` block instead — wrong model).
**BLOCKER if:** `final-cta` is missing.
**BLOCKER if:** `guarantee` is missing.

### 12.2 — Hero-D Block Audit

| Check | Pass condition | Severity |
|-------|---------------|----------|
| Price conflict visible | `hero_sale_price` and `hero_original_price` both present and non-empty | BLOCKER |
| Discount badge present | `hero_discount_badge` is non-empty | WARNING (-5) |
| Exoneration hook | `hero_subtext_1` acknowledges a failed past approach (not just describes the problem) | WARNING (-5) |
| Visualization paragraph | `hero_subtext_3` starts with "Imagine" and is exactly 1–2 sentences | WARNING (-5) |
| No hero_badge field | Model D hero has no `hero_badge` pill (cleaner format) | WARNING if hero_badge present in JSON |
| No hero_tags array | Model D hero has no `hero_tags` array (cleaner format) | WARNING if hero_tags present in JSON |

### 12.3 — Trust-D Block Audit

| Check | Pass condition | Severity |
|-------|---------------|----------|
| Aggregate rating present | `trust_rating_value`, `trust_rating_count`, `trust_rating_label` all present | WARNING (-5) |
| Rating value realistic | `trust_rating_value` is between 4.5 and 5.0 | WARNING if outside range |
| Rating matches JSON-LD | `trust_rating_value` equals `rating_value` in top-level JSON | WARNING (-5) if mismatch |

### 12.4 — Reviews Block (Social-Proof-First) Audit

| Check | Pass condition | Severity |
|-------|---------------|----------|
| All reviews have images | Every item in `reviews` array has a non-empty `image` field | BLOCKER (photo reviews required for Model D) |
| Belief-reversal present | At least one review references a limiting belief that was overturned | WARNING (-5) |
| Sensory language | At least 2 reviews describe what the person SAW, FELT, or could DO | WARNING (-5) |
| Minimum 3 reviews | `reviews` array has at least 3 items | BLOCKER |

### 12.5 — Ingredients-List Block Audit

| Check | Pass condition | Severity |
|-------|---------------|----------|
| `features` array used | `ingredients-list` block renders from the same `features` array | BLOCKER if features empty |
| All ingredients real | Every item in `features.title` matches an ingredient on the official product page | BLOCKER |
| Mechanism chain in descriptions | Each `features.description` connects biology to a felt outcome | WARNING (-5) |
| `ingredients_cta_text` present | Non-empty string with discount reference | WARNING (-5) if missing |

### 12.6 — Guarantee Block Audit

| Check | Pass condition | Severity |
|-------|---------------|----------|
| Guarantee days exact | `guarantee_days` matches the manufacturer's actual guarantee period | BLOCKER |
| Guarantee days match returns modal | Same number in `guarantee_days` as in `modals.returns` sections | BLOCKER if mismatch |
| Confident tone | `guarantee_text` contains a confidence signal ("so confident", "stand behind") not just a refund procedure | WARNING (-5) |
| Guarantee image present | `guarantee_image` is a real local path (not placehold.co for production) | WARNING (-5) in production |

### 12.7 — Benefits-List Block Audit

| Check | Pass condition | Severity |
|-------|---------------|----------|
| Item count | `benefits_list_items` has 8–12 items | WARNING if outside range |
| Verb-first | Every item starts with a verb (Restores, Eliminates, Sharpens, etc.) | WARNING (-5) if any item doesn't |
| Restoration language | Uses "restores", "reclaims", "reverses", "rebuilds" — not "improves", "boosts", "supports" | WARNING (-5) if improvement language found |
| Concrete outcomes | Every item describes a felt experience, not a product feature | WARNING (-5) if any item is a feature |

### 12.8 — Final-CTA Block Audit

| Check | Pass condition | Severity |
|-------|---------------|----------|
| Price contrast present | `final_cta_original_price` and `final_cta_sale_price` both non-empty | BLOCKER |
| CTA transformation language | `final_cta_btn_text` uses transformation language, not transaction language | WARNING (-5) |
| Bottles image present | `final_cta_bottles_image` is a real local path | WARNING (-5) if missing |

### 12.9 — Model D Copy Quality Check

| Check | Pass condition | Severity |
|-------|---------------|----------|
| Exoneration in hero | `hero_subtext_1` acknowledges a failed past attempt or unknown root cause | WARNING (-5) |
| Restoration language throughout | No "improve", "boost", "support" in key sections (hero, benefits-list, product-identity) | WARNING (-5) each occurrence |
| Mechanism chains complete | Each `science_steps` item ends with a felt/observable outcome, not just biology | WARNING (-5) |
| Low-friction CTAs | No "Buy Now", "Purchase", "Order" without transformation qualifier | WARNING (-5) |
