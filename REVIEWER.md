# REVIEWER — Holistic Page Quality Evaluation
## The Final Eyes Before Publishing

> **What this is NOT:**
> The AUDITOR.md checks compliance, structure, and legal requirements — checklist by checklist.
> The REVIEWER reads the page like a human. It asks: "Would I be convinced by this?"
>
> **What this IS:**
> A holistic quality evaluation that runs AFTER the AUDITOR passes.
> It uses three skills together: `copy-editing` · `copywriting` · `marketing-psychology`
> It compares the page against the Strategy Brief from STRATEGIST.md.
> It outputs a judgment, not a score — and specific rewrites where needed.

---

## WHEN TO RUN THE REVIEWER

| Trigger | Action |
|---------|--------|
| After AUDITOR passes (score ≥ 90) | Run full Reviewer before publishing |
| Owner says "does this actually feel good?" | Run full Reviewer |
| Owner says "something feels off but I can't name it" | Run full Reviewer |
| After rewriting copy based on AUDITOR warnings | Run Reviewer to confirm the fix landed |
| Before running Google Ads for the first time | Mandatory Reviewer run |

**The Reviewer does not replace the AUDITOR. They run in sequence:**
```
Generate page → Run AUDITOR (compliance + structure) → Fix blockers → Run REVIEWER (quality + persuasion) → Publish
```

---

## HOW TO RUN THE REVIEWER

**Required inputs:**
1. `output/SLUG/index.html` — The generated page
2. `research/SLUG-strategy.md` — The Strategy Brief from STRATEGIST.md
3. `data/SLUG.json` — The data file

**Step 1:** Activate the three skills:
- Use `copy-editing` to run the 7-sweep framework on the full copy
- Use `copywriting` to evaluate structure, clarity, and CTA strength
- Use `marketing-psychology` to verify the psychological architecture

**Step 2:** Run the 6 Reviewer Tests below in order.

**Step 3:** Output the Reviewer Report (format at end of this document).

---

## TEST 1 — THE "WOULD I BUY?" TEST

> Skill in play: `marketing-psychology`

Read the page from top to bottom as if you are the specific person described in STRATEGIST.md Part 2.1.
Use their exact profile: their moment, their fear, their prior failed solutions.

Answer these 5 questions honestly — as that person, not as the copywriter:

```
Q1: "Did the hero make me feel understood — or did it feel like every other supplement ad?"
    PASS condition: The hero mentions a specific pain point using the audience's real language.
    FAIL signal: Generic headlines ("Experience the Difference", "Transform Your Life")

Q2: "Was there a moment in the benefits section where I thought 'yes, exactly — that's me'?"
    PASS condition: At least one sentence in benefits uses language from Phase 1C research (real reviews/Reddit).
    FAIL signal: Clinical language describing the problem from the outside rather than from inside the experience.

Q3: "Do the testimonials look like people I could actually be?"
    PASS condition: At least one reviewer matches the target audience profile (age range, situation, outcome desired).
    FAIL signal: Reviews that say "great product!" or are demographic outliers for this audience.

Q4: "Did the FAQ answer the question I was actually asking — or the question it was convenient to answer?"
    PASS condition: The guarantee question is answered with complete specificity (number of days, what's covered, how to claim).
    FAIL signal: FAQ answers that contain "typically", "generally", or "may vary" without concrete details.

Q5: "When I got to the CTA, did I feel like clicking — or did I feel like I needed more?"
    PASS condition: The CTA follows a complete objection-resolution. All 5 objections from the brief are addressed.
    FAIL signal: Any objection from STRATEGIST.md Part 2.4 that was not resolved before the final CTA.
```

**If 3 or more questions fail → the page needs a copy rewrite before publishing.**
**If 1–2 questions fail → rewrite the failing sections only.**
**If all 5 pass → proceed to Test 2.**

---

## TEST 2 — THE VOICE TEST

> Skill in play: `copy-editing` (Sweep 2: Voice and Tone)

Read every section aloud. The page must sound like one person — a knowledgeable, direct friend making a recommendation. Not a salesperson. Not a robot. Not an academic.

Check for these 6 voice failures:

```
FAILURE 1 — The Tonal Shift
  Signal: Page sounds bold and direct in the hero, then stiff and clinical in the features section,
          then casual again in the reviews.
  Fix: Identify the dominant voice of the page. Rewrite outlier sections to match.

FAILURE 2 — The Marketing Voice
  Signal: Sentences no real person would say out loud.
  Test: Read it aloud. If you feel embarrassed saying it, a real person would too.
  Examples: "Unlock your true potential." / "Experience the synergy of nature and science."
  Fix: Rewrite in direct, conversational English. One idea per sentence.

FAILURE 3 — The Passive Voice Infection
  Signal: "Results have been shown to..." / "It has been reported that..."
  Why it fails: Passive voice signals uncertainty and generic AI output.
  Fix: Make every sentence active. Name the agent of every action.

FAILURE 4 — The Buzzword Cluster
  Signal: More than 2 banned words from COPY.md Part 7 in any single section.
  Fix: Replace each banned word with a specific, verifiable claim.

FAILURE 5 — The Country Voice Mismatch
  Signal: US-style aggressive urgency on a UK/AU page. German formal language on a US page.
  Fix: Apply COPY.md Part 6 country voice rules. Rewrite the mismatched sections.

FAILURE 6 — The Robot Fingerprint
  Signal: Sentences with perfect parallel structure throughout. No sentence variation. No conversational asides.
  Why it fails: Real copy has rhythm variation — long sentences followed by short ones.
               "That's it." / "Full stop." / "No subscriptions. No tricks."
  Fix: Introduce sentence length variation. Add one conversational aside per section.
```

**Any voice failure found → fix before proceeding to Test 3.**

---

## TEST 3 — THE COHERENCE TEST

> Skill in play: `copywriting` (Page Structure check)

Read the page as a complete narrative — not section by section, but as a single story.
The page must have ONE clear point of view and ONE consistent promise.

Ask these 3 questions:

```
Q1: "What is this page's ONE THING?"
    Every great page can be summarized in one sentence: the belief it's trying to create.
    Can you summarize this page's ONE THING? Write it:
    "This page argues that __________."
    
    If you cannot complete that sentence clearly in under 15 words, the page lacks coherence.
    The fix is not adding copy — it is removing everything that doesn't support the ONE THING.

Q2: "Does every section advance the same argument?"
    Read the flow: Hero → Benefits → Features → Science → Reviews → FAQ.
    Is there a section that feels like it belongs to a different page?
    (Common failure: science section explains a mechanism that the features section doesn't support)
    Fix: Align all sections to the belief shift defined in STRATEGIST.md Part 2.5.

Q3: "Does the last thing the visitor reads before the CTA directly address their single biggest objection?"
    The section before the final CTA should be the FAQ — specifically the guarantee answer.
    The visitor's last thought before clicking must be: "Even if it doesn't work, I get my money back."
    Fix: If the FAQ is thin on guarantee language, rewrite Q4 (What if it doesn't work for me?).
```

---

## TEST 4 — THE PSYCHOLOGY ARCHITECTURE TEST

> Skill in play: `marketing-psychology`

Compare the page against the Psychology Trigger Map from STRATEGIST.md Part 3.

For each section, confirm the correct trigger is activated:

```
Verify each row from the trigger map:
✓ Alert bar: Scarcity/urgency trigger present AND real (not fake)?
✓ Hero: Loss aversion activated (names cost of inaction, not just benefit of action)?
✓ Benefits P2: Regret aversion activated (emotional consequence of the problem named)?
✓ Social proof: Bandwagon numbers are specific (not rounded off to nearest 10,000)?
✓ Features: At least one "which means" bridge per ingredient?
✓ Reviews: Mimetic desire activated (reviewer profile matches target audience)?
✓ FAQ: Uncertainty fully reduced (Q4 — guarantee — answers every possible follow-up question)?
✓ CTA: Zero risk language present (guarantee period + what's covered + how to claim)?
```

**Scoring:**
- 8/8 present → PASS
- 6–7 present → WARNING — note which are missing, fix before publishing
- Under 6 → FAIL — rewrite the failing sections

---

## TEST 5 — THE 7-SWEEP EDIT

> Skill in play: `copy-editing` (all 7 sweeps)

Run the complete 7-sweep framework from `copy-editing` skill on the full page copy.
The 7 sweeps are: Clarity → Voice → So What → Prove It → Specificity → Emotion → Zero Risk.

For this system, pay particular attention to these high-risk areas:

```
Sweep 3 (So What) — High risk areas:
  - Feature card descriptions: does every one have a "which means" bridge?
  - Hero subtext 2: does it go beyond naming the product to explaining WHY it works?
  - Science steps: does each step connect the mechanism to the felt experience?

Sweep 4 (Prove It) — High risk areas:
  - Benefits section: every claim must trace back to an ingredient or real testimonial
  - Hero badge: "X+ customers" must be a real number from the product page
  - FAQ answers: no unsubstantiated claims about safety, results, or comparisons

Sweep 5 (Specificity) — High risk areas:
  - Social proof stats: should be specific numbers (47,832) not round numbers (50,000)
    unless the product page only shows round numbers
  - Reviews: "lost X lbs" / "energy by 9 AM" / "within 3 weeks" — specific outcomes
  - Alert bar: specific percentage off, specific guarantee days

Sweep 6 (Emotion) — High risk areas:
  - Benefits P2 (agitation): must name a specific daily-life consequence, not a generic one
  - Reviews: must include at least one sentence of emotional language per review
  - Science result: must end with a felt outcome in customer language, not clinical language
```

**After running all 7 sweeps:** List every edit made. If the same type of edit was made 3+ times across sections, it signals a systemic copy problem — go back to the Strategy Brief and fix the copy direction in Part 5, then rewrite.

---

## TEST 6 — THE BRIEF FIDELITY TEST

> Compares the page against the Strategy Brief

Pull up `research/SLUG-strategy.md`. For each commitment made in Part 7 (Quality Commitment), verify the page delivered:

```
Commitment 1: "The hero headline makes the target audience say __________."
  → Does the current headline deliver this? Yes / No / Partially
  → If no: Rewrite direction: __________

Commitment 2: "The benefits section references __________."
  → Is this reference present in the copy? Yes / No
  → If no: Rewrite direction: __________

Commitment 3: "Every feature card answers 'which means __________'."
  → Check each card. Any missing the bridge? List them.

Commitment 4: "At least one review mirrors __________."
  → Does any review match the specific profile committed to?

Commitment 5: "FAQ Q__ is answered with __________."
  → Read that FAQ answer. Does it meet the standard committed to?

Commitment 6: "The CTA includes __________."
  → Is the exact language present?
```

**Any failed commitment = rewrite that specific element.**
**If STRATEGIST.md brief does not exist:** Note this as a WARNING. Run the brief before the next version of this page.

---

## REVIEWER REPORT FORMAT

Output this report after completing all 6 tests:

```
╔══════════════════════════════════════════════════════════════════
  PAGE REVIEWER REPORT
  Page: [SLUG]
  Model: [A / B / C]
  Reviewer ran: [date]
  Strategy Brief: [present / missing]
══════════════════════════════════════════════════════════════════

VERDICT: [PUBLISH READY / REWRITE REQUIRED / MINOR POLISH NEEDED]

─────────────────────────────────────────────────────────────────
TEST 1 — "WOULD I BUY?" TEST       [PASS / FAIL]
─────────────────────────────────────────────────────────────────
Q1 (Understood?):         [PASS / FAIL]  → [Finding]
Q2 ("Yes, exactly"?):     [PASS / FAIL]  → [Finding]
Q3 (Mirror reviews?):     [PASS / FAIL]  → [Finding]
Q4 (Real FAQ?):           [PASS / FAIL]  → [Finding]
Q5 (CTA readiness?):      [PASS / FAIL]  → [Finding]

─────────────────────────────────────────────────────────────────
TEST 2 — VOICE TEST                [PASS / FAIL]
─────────────────────────────────────────────────────────────────
[List any voice failures found with section and line reference]
[If none: "✓ Consistent voice throughout."]

─────────────────────────────────────────────────────────────────
TEST 3 — COHERENCE TEST            [PASS / FAIL]
─────────────────────────────────────────────────────────────────
ONE THING summary: "[The page argues that __________.]"
Coherence issues: [List if any. If none: "✓ Clear narrative arc."]

─────────────────────────────────────────────────────────────────
TEST 4 — PSYCHOLOGY ARCHITECTURE   [X/8]
─────────────────────────────────────────────────────────────────
[List any missing triggers. If all present: "✓ All 8 triggers activated."]

─────────────────────────────────────────────────────────────────
TEST 5 — 7-SWEEP EDIT RESULTS      [PASS / ISSUES FOUND]
─────────────────────────────────────────────────────────────────
Sweep 1 Clarity:     [Clean / X issues]
Sweep 2 Voice:       [Clean / X issues]
Sweep 3 So What:     [Clean / X issues]
Sweep 4 Prove It:    [Clean / X issues]
Sweep 5 Specificity: [Clean / X issues]
Sweep 6 Emotion:     [Clean / X issues]
Sweep 7 Zero Risk:   [Clean / X issues]

[List specific edits recommended with section + line reference]

─────────────────────────────────────────────────────────────────
TEST 6 — BRIEF FIDELITY            [X/6 commitments met]
─────────────────────────────────────────────────────────────────
[List any failed commitments with rewrite direction]
[If brief missing: ⚠️ No Strategy Brief found — run STRATEGIST before next revision]

─────────────────────────────────────────────────────────────────
REQUIRED REWRITES (do these before publishing)
─────────────────────────────────────────────────────────────────
[List each rewrite in format:]
SECTION → FIELD → Current text → Suggested direction (not the final copy — the direction)

[If none: "✓ No rewrites required."]

─────────────────────────────────────────────────────────────────
OPTIONAL IMPROVEMENTS
─────────────────────────────────────────────────────────────────
[List suggestions that would improve quality but are not blocking publish]
[If none: skip this section]

══════════════════════════════════════════════════════════════════
FINAL VERDICT
══════════════════════════════════════════════════════════════════
[PUBLISH READY]:
  All 6 tests passed. Page is ready for the final AUDITOR pass and deployment.
  
[MINOR POLISH NEEDED]:
  1–3 non-blocking issues found. Apply optional improvements then publish.
  
[REWRITE REQUIRED]:
  Required rewrites listed above. Apply all, then re-run REVIEWER before publishing.
  Do not publish with required rewrites outstanding.
╚══════════════════════════════════════════════════════════════════
```
