# Design System — Frontend Excellence for BOFU Supplement Pages
## Powered by the `frontend-design` Skill + DNA Extraction Workflow

> **How to invoke:**
> The `frontend-design` skill is installed at `.claude/skills/frontend-design`.
> It activates automatically when creating or refining theme CSS files.
> Read this document alongside `CLAUDE.md` Step 1–2 every time you create a theme.

---

## CRITICAL CONSTRAINT: CSS-ONLY DESIGN SCOPE

The HTML structure of every page is **fixed and sacred** (see `CLAUDE.md`).
The `frontend-design` skill can only influence **CSS theme files** (`styles/PRODUCTNAME.css`).

This means design excellence is achieved entirely through:
- CSS variables (`:root`)
- CSS rules that target existing class names and IDs
- `::before` / `::after` pseudo-elements
- `@keyframes` animations
- CSS `clip-path`, `backdrop-filter`, `filter`, `mix-blend-mode`
- `@media` queries for responsive refinements

**Never** attempt to add HTML elements, change class names, or alter block structure.
The design skill works within these constraints — it does not break them.

---

## PART 1 — WHERE THE SKILL FITS IN THE WORKFLOW

The `frontend-design` skill activates at **Step 2** of the page generation workflow,
immediately after the DNA extraction report is complete.

```
Step 1A: Extract competitor data (Model B) or product data (Model A)
Step 1B: Write the DNA Report (colors, typography, spacing, components)
         ↓
[DESIGN SKILL ACTIVATES HERE]
Step 2:  Create theme CSS
         Phase A — Apply DNA tokens (variables from the DNA Report)
         Phase B — Apply design direction (niche + country aesthetic)
         Phase C — Add motion layer (section reveals, hover states)
         Phase D — Contrast safety check
         ↓
Step 3–6: Rest of the standard workflow
```

**The two-phase discipline:**
- Phase A is about ACCURACY — matching the reference page exactly
- Phase B is about ELEVATION — making the page feel truly designed, not templated

Phase A without Phase B = functional but generic.
Phase B without Phase A = creative but mismatched with the brand.
Both phases together = a page that converts.

---

## PART 2 — THE ANTI-GENERIC RULES (from frontend-design skill)

The skill's most important instruction:

> "NEVER use generic AI-generated aesthetics: overused font families (Inter, Roboto, Arial,
> system fonts), cliché color schemes (purple gradients), predictable layouts,
> cookie-cutter design that lacks context-specific character."

Applied to supplement pages, "generic AI aesthetics" look like:
- Poppins everywhere (already in `theme.css` default — override it)
- Flat white backgrounds with blue buttons
- Rounded 50px pill buttons on every page
- Card grids with identical border-radius and identical shadow
- Hero that is just "dark background + left text + right image" with no visual depth

**The standard to reach:** A visitor should look at the page and immediately feel it was made for THEIR product, THEIR niche, and THEIR country — not mass-produced.

---

## PART 3 — NICHE AESTHETIC DIRECTIONS

Every supplement niche has a visual vocabulary that resonates with its audience.
Deviating from this vocabulary reduces conversion — the page feels "off" even if users can't explain why.

### Niche A — Male Performance / Vitality

**Audience:** Men 35–60. Masculine. Private about the issue. High skepticism.
**Emotional state:** Pride at stake. Want to feel capable and confident again.
**Aesthetic direction:** Dark, bold, authoritative. Power without aggression.

```
Visual DNA:
  Background:   Deep navy (#0a0f1e) or black (#0d0d0d) — dark theme
  Primary:      Gold (#d4a017) or amber (#f59e0b) or electric blue (#3b82f6)
  Accent:       Warm gold, never pink, never purple
  Text on dark: Pure white headlines, 80% white body
  Cards:        Semi-transparent dark with subtle border glow

Typography:
  Heading font: Oswald (condensed, powerful) or Barlow Condensed or Bebas Neue
  Body font:    Inter (exception to the rule — works for dense medical copy)
                OR DM Sans for a warmer, more approachable feel
  H1 size:      clamp(2.8rem, 6vw, 4.5rem) — large and commanding
  H1 weight:    700–900 — maximum authority
  Letter-spacing on H1: -0.03em (tight tracking = premium feel)

Motion:
  Hero entrance: slow fade-up (0.8s ease) — power doesn't rush
  Button hover:  slight glow pulse, not bouncy
  Cards:         subtle lift (translateY -4px) with gold border glow on hover
  NO: bouncy, playful, quick spring animations — they undermine trust

Button shape:  Slight radius (6–12px) or completely square — NOT 50px pill
               Pill buttons feel like skincare apps, not performance supplements
```

### Niche B — Eye Health / Vision Support

**Audience:** Adults 45–70. Educated. Concerned about aging. Trust clinical signals.
**Emotional state:** Quiet worry. Hoping for something that actually helps.
**Aesthetic direction:** Clean, serene, clinical warmth. Medical credibility + human care.

```
Visual DNA:
  Background:   Warm white (#fafaf8) or very light blue-gray (#f0f4f8)
  Primary:      Deep teal (#0d7a6e) or sapphire blue (#1e5fa8)
  Accent:       Warm amber/gold (#e8a020) for highlights and stars
  Cards:        Clean white with subtle drop shadows — no dark cards
  Hero:         Can be light-themed (rare in supplements — use it as a differentiator)

Typography:
  Heading font: Merriweather (serif — academic credibility) or Playfair Display
  Body font:    Source Serif 4 or Libre Baskerville for body (all-serif = clinical)
                OR Lato/Nunito for a more approachable hybrid
  H1 size:      clamp(2rem, 4vw, 3rem) — authoritative but not aggressive
  H1 weight:    700 — strong but not screaming
  Line-height on H2/H3: 1.3 — generous, calm reading experience

Motion:
  Hero entrance: gentle fade-in (1s) — calm reassurance
  Ingredient cards: very subtle scale on hover (1.02) — barely there
  Section transitions: opacity fade — nothing dramatic
  NO: dramatic zoom-ins, fast snappy animations — they feel clinical not caring

Button shape:  Medium radius (8–16px) — professional, not aggressive
```

### Niche C — Weight Management / Metabolism

**Audience:** Adults 30–55. Frustrated with past failures. Cautiously hopeful.
**Emotional state:** "I've tried everything." Needs to feel this time is different.
**Aesthetic direction:** Fresh, natural, forward-motion. Growth energy.

```
Visual DNA:
  Background:   Clean white (#ffffff) with green-tinted sections (#f0faf4)
  Primary:      Botanical green (#16a34a) or forest green (#15803d)
  Accent:       Warm orange (#f97316) for CTAs — creates energy contrast
  Cards:        White with soft green border on hover
  Hero:         Gradient from deep green to lighter green

Typography:
  Heading font: Plus Jakarta Sans (modern, forward-looking, human)
                OR DM Sans (friendly but serious)
  Body font:    Same family as heading — single font with weight variation
  H1:           Mix of weights — normal + bold — creates visual rhythm
  CTA buttons:  Orange (#f97316) background — breaks from primary green

Motion:
  Stats counter: number count-up animation (CSS counter or brief JS)
  Cards:         upward lift on hover — reinforces "progress" feeling
  Hero image:    subtle float animation (translateY ±8px, 4s ease-in-out infinite)
  CTA button:    pulsing glow to draw the eye

Button shape:  Full pill (50px radius) — approachable, friendly
```

### Niche D — Energy / Focus / Cognitive Performance

**Audience:** 25–50. Busy professionals. Want efficiency, not just health.
**Emotional state:** "I need more from my day." Performance-oriented.
**Aesthetic direction:** Dynamic, sharp, electric. Speed and precision.

```
Visual DNA:
  Background:   Dark charcoal (#111827) or pure black (#0a0a0a)
  Primary:      Electric yellow (#eab308) or neon cyan (#06b6d4) or vivid orange (#f97316)
  Accent:       Contrasting bright color — creates tension and energy
  Cards:        Dark cards (#1e2433) with bright accent border
  Hero:         Dark with diagonal gradient stripe or mesh gradient overlay

Typography:
  Heading font: Outfit (geometric, precise) or Space Grotesk (editorial tech)
                NOTE: Space Grotesk is mentioned in skill as "common" — use sparingly
                Better: Syne (ultra distinctive) or Clash Display
  Body font:    IBM Plex Sans (technical) or Mulish (clean, efficient)
  H1:           Very large (clamp(3rem, 7vw, 5rem)), tight tracking (-0.04em)
  Capitalization on labels: ALL CAPS with wide tracking

Motion:
  Hero elements: staggered reveal (each element 0.1s delay after previous)
  Numbers:       fast count-up
  CTA:           shimmer/glint animation sweeping across button
  Section enter: clip-path reveal (expand from center)

Button shape:  Sharp corners (0–4px radius) — precision and efficiency
```

### Niche E — General Health / Immune / Gut Health

**Audience:** Broad, 30–65. Health-conscious. Value natural and holistic.
**Aesthetic direction:** Warm, organic, trustworthy. Nature + science balance.

```
Visual DNA:
  Background:   Warm cream (#fefcf7) or off-white (#f9f5f0)
  Primary:      Earthy terra cotta (#c2622c) or deep olive (#5d7a3e)
  Accent:       Warm sand (#d4a96a) or sage green
  Cards:        Cream white with organic soft shadows

Typography:
  Heading font: Lora (literary warmth) or Cormorant Garamond (organic luxury)
  Body font:    Source Sans 3 or Nunito — approachable, readable
  Feel:         Warm editorial — like a premium health magazine

Motion:        Slow, organic — nothing mechanical or fast
Button shape:  Medium-large radius (16–24px)
```

---

## PART 4 — COUNTRY DESIGN SENSIBILITIES

Layer this on top of the niche direction:

| Country | Design adjustment |
|---------|-----------------|
| **US** | Maximum contrast. Large CTAs. Dense information. High urgency visual weight. Bolder typography. |
| **UK** | 10–15% more whitespace than US. Slightly smaller headlines. Understated urgency. More refined proportions. |
| **AU** | Similar to UK but slightly brighter and more open. Less formal. Friendly micro-copy. |
| **DE** | Maximum readability. Grid-perfect spacing. Sans-serif preferred (trust over style). Minimal decoration. Generous line-height. No hype in visual hierarchy. |
| **CA** | Similar to US, slightly less aggressive. |

---

## PART 5 — TYPOGRAPHY PAIRING GUIDE

The `frontend-design` skill's most important rule for fonts:
> "Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts."

### Pairing Table by Niche

| Niche | Heading Font | Body Font | Google Fonts URL fragment |
|-------|-------------|-----------|--------------------------|
| Male Performance | `Oswald:wght@400;700` | `DM+Sans:ital,wght@0,400;0,500;0,600` | `Oswald\|DM+Sans` |
| Eye Health | `Merriweather:wght@400;700;900` | `Lato:wght@300;400;700` | `Merriweather\|Lato` |
| Weight Mgmt | `Plus+Jakarta+Sans:wght@400;600;700;800` | (same) | `Plus+Jakarta+Sans:wght@400;600;700;800` |
| Energy/Focus | `Outfit:wght@400;600;700;800;900` | `IBM+Plex+Sans:wght@400;500;600` | `Outfit\|IBM+Plex+Sans` |
| General Health | `Lora:ital,wght@0,400;0,700;1,400` | `Source+Sans+3:wght@300;400;600` | `Lora\|Source+Sans+3` |

**How to apply in the theme CSS:**

```css
/* Replace the Google Fonts link in base.html via the JSON...
   Actually: override font-family in the :root and the body using @import
   or by adding a <link> via the theme file (not possible — use :root override) */

/* In styles/PRODUCTNAME.css — always after @import url('theme.css') */
:root {
  --font-heading: 'Oswald', sans-serif;
  --font-body:    'DM Sans', sans-serif;
}

/* IMPORTANT: The Google Fonts <link> in base.html loads Open Sans by default.
   When using a different font, add this note for the owner:
   "Replace the Google Fonts <link> in base.html with the correct font URL,
   or the font will fall back to system-sans." */
```

**⚠️ Font loading note:**
The `base.html` hardcodes a Google Fonts link for `Open Sans`. When a theme requires different fonts:
1. Set `--font-heading` and `--font-body` in the theme CSS
2. Note in the JSON comments that `base.html` Google Fonts link needs updating before deploy
3. Or use `@import url(...)` at the very top of the theme CSS (loads an additional HTTP request — acceptable for dev)

---

## PART 6 — MOTION LAYER (CSS-only patterns)

Add these to theme files to elevate pages from "static" to "alive."
All patterns use pure CSS — no JavaScript required (except the scroll reveal, which uses a tiny script).

### Pattern 1 — Scroll Reveal (sections fade up as user scrolls)

```css
/* Add to theme file */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Apply to sections — they animate on load since they're in viewport order */
#benefits .benefits-layout,
#features .features-grid,
#reviews .reviews-grid,
.science-inner {
  animation: fadeUp 0.7s ease both;
}

/* Stagger feature cards */
.feature-card:nth-child(1) { animation: fadeUp 0.6s 0.0s ease both; }
.feature-card:nth-child(2) { animation: fadeUp 0.6s 0.1s ease both; }
.feature-card:nth-child(3) { animation: fadeUp 0.6s 0.2s ease both; }
.feature-card:nth-child(4) { animation: fadeUp 0.6s 0.1s ease both; }
.feature-card:nth-child(5) { animation: fadeUp 0.6s 0.2s ease both; }
.feature-card:nth-child(6) { animation: fadeUp 0.6s 0.3s ease both; }
```

### Pattern 2 — Hero Entrance (staggered reveal)

```css
/* Hero elements appear in sequence */
@keyframes heroFade {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.hero-badge     { animation: heroFade 0.6s 0.1s ease both; }
.hero-text h1   { animation: heroFade 0.6s 0.25s ease both; }
.hero-subtext   { animation: heroFade 0.6s 0.4s ease both; }
.hero-tagline   { animation: heroFade 0.6s 0.5s ease both; }
.hero-cta-group { animation: heroFade 0.6s 0.65s ease both; }
.hero-guarantee { animation: heroFade 0.6s 0.75s ease both; }
.hero-img-col   { animation: heroFade 0.8s 0.3s ease both; }
```

### Pattern 3 — CTA Button Pulse (draws the eye to the main action)

```css
@keyframes ctaPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(var(--cta-pulse-color, 37,99,235), 0.4); }
  50%       { box-shadow: 0 0 0 12px rgba(var(--cta-pulse-color, 37,99,235), 0); }
}

/* Use on the primary CTA only — not every button */
.hero-cta-group .btn-primary {
  animation: ctaPulse 2.5s ease-in-out infinite;
}
```

### Pattern 4 — Trust Icon Hover (micro-interaction on trust badges)

```css
.trust-badge {
  transition: transform 0.25s ease;
}
.trust-badge:hover {
  transform: translateY(-3px);
}
.trust-icon {
  transition: background 0.25s ease, transform 0.25s ease;
}
.trust-badge:hover .trust-icon {
  background: var(--primary);
  transform: scale(1.1);
}
.trust-badge:hover .trust-icon i {
  color: #fff;
}
```

### Pattern 5 — Feature Card Accent Border on Hover

```css
.feature-card {
  position: relative;
  overflow: hidden;
}
.feature-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 4px;
  height: 0;
  background: var(--primary);
  transition: height 0.35s ease;
}
.feature-card:hover::before {
  height: 100%;
}
```

### Pattern 6 — Stats Counter Animation

```css
@keyframes countUp {
  from { opacity: 0; transform: scale(0.8) translateY(10px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

.stat-number {
  animation: countUp 0.7s ease both;
}
.stat-item:nth-child(1) .stat-number { animation-delay: 0s; }
.stat-item:nth-child(3) .stat-number { animation-delay: 0.15s; }
.stat-item:nth-child(5) .stat-number { animation-delay: 0.3s; }
```

### Pattern 7 — Hero Background Depth (add grain + gradient overlay)

```css
/* Adds a subtle noise texture over the hero gradient for depth */
#hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.4;
  z-index: 0;
}

/* Use z-index: 1 on .hero-inner to sit above the grain */
```

### Pattern 8 — Alert Bar Scroll Indicator (animated underline on badges)

```css
@keyframes alertPulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.7; }
}

/* Subtle pulse on urgency badge */
.alert-badge:first-child {
  animation: alertPulse 2s ease-in-out infinite;
}
```

### Pattern 9 — Motion Safety (always add this block to every theme)

This block is **mandatory** in every theme file. It satisfies the `web-design-guidelines` rule: *"Honor `prefers-reduced-motion`"* and prevents accessibility complaints on animated pages.

```css
/* ── MOTION SAFETY ─────────────────────────────────────── */
/* Required in every theme. Respects user's OS-level preference. */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Touch interaction — prevent 300ms double-tap delay on mobile CTAs */
.btn-primary,
.hero-cta,
.cta-button {
  touch-action: manipulation;
}

/* Modals — prevent scroll bleed to page behind */
.modal-drawer {
  overscroll-behavior: contain;
}
```

**Rules for all animations in the theme (enforced by `web-design-guidelines`):**
- Animate only `transform` and `opacity` — never `width`, `height`, `top`, `left`, `padding`
- Never use `transition: all` — always list properties explicitly (e.g. `transition: transform 0.3s ease, opacity 0.3s ease`)
- Every `@keyframes` block must be reachable by the reduced-motion override above

---

## PART 7 — SECTION-BY-SECTION DESIGN ENHANCEMENTS

For each fixed section, these CSS enhancements elevate the design without touching HTML.

### Hero Section

**Minimum:** Match the reference page colors from DNA extraction.

**Elevated:**
- Hero gradient uses 3 stops, not just 2: `linear-gradient(135deg, #DARK 0%, #MEDIUM 60%, #LIGHT_TINT 100%)`
- The `::after` pseudo-element creates a geometric shape overlay (already in `theme.css` — customize the angle and opacity to match the reference page feel)
- Product image has a radial glow: `filter: drop-shadow(0 0 60px rgba(PRIMARY, 0.3))`

```css
/* Enhanced hero product image glow — replace COLOR with primary hex */
.hero-product-img {
  filter: drop-shadow(0 32px 64px rgba(0,0,0,0.5))
          drop-shadow(0 0 80px rgba(VAR_COLOR, 0.25));
}
```

### Social Proof Strip

**Elevated for dark themes:**
```css
#social-proof {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  position: relative;
  overflow: hidden;
}
/* Geometric decoration */
#social-proof::before {
  content: '';
  position: absolute;
  top: -50%; right: -10%;
  width: 400px; height: 400px;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  pointer-events: none;
}
```

### Feature Cards

**Light theme enhancement:**
```css
.feature-card {
  background: #fff;
  position: relative;
  overflow: hidden;
}
/* Diagonal shine effect on hover */
.feature-card::after {
  content: '';
  position: absolute;
  top: -50%; left: -75%;
  width: 50%; height: 200%;
  background: linear-gradient(
    to right,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.15) 50%,
    rgba(255,255,255,0) 100%
  );
  transform: skewX(-20deg);
  transition: left 0.5s ease;
  pointer-events: none;
}
.feature-card:hover::after {
  left: 125%;
}
```

**Dark theme cards (male performance / energy niches):**
```css
.feature-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.feature-card:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(VAR_PRIMARY, 0.4);
  box-shadow: 0 0 24px rgba(VAR_PRIMARY, 0.15);
}
```

### Review Cards

**Elevated quote treatment:**
```css
.review-card {
  position: relative;
}
.review-card::before {
  content: '"';
  position: absolute;
  top: 16px; left: 20px;
  font-family: var(--font-heading);
  font-size: 5rem;
  line-height: 1;
  color: var(--primary);
  opacity: 0.12;
  pointer-events: none;
}
```

### FAQ Section

**Elevated open state:**
```css
.faq-item.open .faq-question {
  color: var(--primary);
}
/* Left accent bar on open question */
.faq-item {
  transition: padding-left 0.2s ease;
}
.faq-item.open {
  padding-left: 12px;
  border-left: 3px solid var(--primary);
}
```

---

## PART 8 — COMPLETE THEME FILE TEMPLATE

This is the master template for creating any new theme file.
Fill every `______` from the DNA Report. Add motion and niche-specific enhancements below.

```css
@import url('theme.css');

/* ============================================================
   THEME:       [Product Name]
   NICHE:       [male-performance / eye-health / weight / energy / general]
   COUNTRY:     [us / uk / au / de / ca]
   SOURCE URL:  [Reference page URL]
   DNA REPORT:  [Date of extraction]
   THEME TYPE:  [light / dark / mixed]
   DESIGN DIR:  [e.g. "Dark authority — Oswald headings, gold accents, serious motion"]
   ============================================================ */

/* ── LAYER 1: COLOR TOKENS ────────────────────────────────── */
:root {
  --primary:       #______ ; /* source: _______ */
  --primary-dark:  #______ ; /* derived: primary -15% lightness */
  --primary-light: #______ ; /* source or derived: primary at 10% opacity on white */
  --secondary:     #______ ; /* source: _______ */
  --bg:            #______ ; /* source: body background */
  --bg-alt:        #______ ; /* source: alternate section bg */
  --dark:          #______ ; /* source: h1/h2 color */
  --text:          #______ ; /* source: body text */
  --text-muted:    #______ ; /* source: caption/subtitle */
  --cta-bg:        #______ ; /* source: CTA button fill */
  --cta-text:      #______ ; /* source: text on CTA */
  --alert-bg:      #______ ; /* source: announcement bar */
  --trust-bg:      var(--bg-alt);
  --border:        #______ ; /* source: card borders */
  --star:          #f59e0b ; /* keep gold unless brand specifies otherwise */
}

/* ── LAYER 2: TYPOGRAPHY ──────────────────────────────────── */
:root {
  --font-heading: '[Font]', [stack] ;
  --font-body:    '[Font]', [stack] ;
}
/* NOTE FOR OWNER: Update Google Fonts <link> in base.html to load:
   [font 1 URL fragment] | [font 2 URL fragment] */

/* ── LAYER 3: COMPONENT SHAPE ─────────────────────────────── */
:root {
  --radius-btn:  ______px ; /* from DNA Report --btn-radius */
  --radius-card: ______px ; /* from DNA Report --card-radius */
}

/* ── LAYER 4: HERO ────────────────────────────────────────── */
#hero {
  background: linear-gradient(135deg, #______ 0%, #______ 60%, #______ 100%);
}
.hero-badge {
  background: rgba(______, 0.15);
  border-color: rgba(______, 0.4);
  color: #______ ;
}
.hero-text h1 .highlight { color: #______ ; }
.hero-tagline i,
.hero-guarantee i { color: #______ ; }

/* ── LAYER 5: ALERT BAR ──────────────────────────────────── */
#announcement-bar {
  background: var(--alert-bg);
}
.alert-badge i { color: #______ ; }

/* ── LAYER 6: CTA BUTTON SHAPE ────────────────────────────── */
.btn-primary {
  border-radius: var(--radius-btn);
  font-family: var(--font-heading);
  letter-spacing: ______em ; /* from --ls-heading */
}
.btn-primary:hover {
  box-shadow: 0 12px 32px rgba(______, 0.4); /* CTA color at 40% opacity */
}

/* ── LAYER 7: NAVBAR FIX (if dark hero) ─────────────────── */
/* Uncomment if hero bg is dark and navbar needs to match */
/* #header { background: #______; } */

/* ── LAYER 8: NICHE DESIGN DIRECTION ─────────────────────── */
/* Apply patterns from DESIGN.md Part 3 here.
   Example: Male Performance — dark cards + gold accents */

/* ── LAYER 9: MOTION LAYER ───────────────────────────────── */
/* Paste relevant patterns from DESIGN.md Part 6 here */

/* ── LAYER 10: CONTRAST SAFETY ───────────────────────────── */
/*
  [ ] Navbar text (white) on navbar bg — min 4.5:1
  [ ] CTA text on --cta-bg — min 4.5:1
  [ ] Body text on --bg — min 4.5:1
  [ ] Section labels: --primary on --secondary — readable?
  [ ] Hero text (white/light) on hero gradient — readable?
  [ ] Modal text — always dark on white (do NOT override modal-drawer)
*/

/* ── LAYER 11: MOTION SAFETY & TOUCH ────────────────────── */
/* MANDATORY — do not omit. Required by web-design-guidelines. */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.btn-primary,
.hero-cta,
.cta-button {
  touch-action: manipulation; /* removes 300ms double-tap delay on mobile */
}

.modal-drawer {
  overscroll-behavior: contain; /* prevents scroll bleed to page */
}
```

---

## PART 9 — ANTI-HALLUCINATION RULES FOR DESIGN

The `frontend-design` skill encourages bold creative choices. In this system, creativity is constrained by two rules that prevent hallucination:

**Rule 1 — Color values must come from Phase A (DNA extraction).**
Every HEX value in `:root` must appear in the DNA Report with a source citation.
If a color is derived (darkened/lightened version), note it as "derived from primary."
Never invent a color that wasn't in the reference page.

**Rule 2 — Design direction must match the niche.**
The aesthetic direction (dark/light, font choice, button shape, motion style) comes from Part 3 of this document, cross-referenced with the product's niche.
Never apply an eye-health aesthetic to a male performance product.
Never apply an energy-drink aesthetic to a general health product.

**The two-column check before saving any theme file:**

| Column A — Accuracy (from DNA) | Column B — Direction (from DESIGN.md) |
|-------------------------------|--------------------------------------|
| Every color has a source citation | Design direction matches the niche |
| Font families confirmed from page source | Typography pairing follows Part 5 |
| Button shape confirmed from CSS source | Motion layer appropriate for the niche |
| No `______` placeholders remain | No generic AI aesthetics present |

Both columns must be complete. A theme file is not done until both pass.

---

## PART 10 — DESIGN AUDIT ADDITIONS (for AUDITOR.md)

When auditing any page, add these design checks to Module 1:

**Design Quality Checks:**
- [ ] Theme file has all 10 layers present (no empty sections)
- [ ] Font is not Poppins/Inter/Roboto without justification from DNA Report
- [ ] Hero has 3-stop gradient OR a justified reason for 2-stop
- [ ] At least one motion pattern from Part 6 is present in the theme
- [ ] Button shape matches the niche direction (pill = friendly niches, sharp = performance niches)
- [ ] Feature cards have a hover effect beyond the default `translateY(-6px)`
- [ ] Page does not use purple gradient on white background (generic AI aesthetic — flag it)
- [ ] Design direction is documented in the theme file header comment
- [ ] No `______` placeholders remain in the theme file
- [ ] Google Fonts link in `base.html` loads the correct fonts for this theme (flag if still loading Open Sans for a theme that uses Oswald)

**Score impact:**
- Each unfilled `______` in the theme file = WARNING (-5)
- Generic AI aesthetics (Inter + white + blue gradient hero) without justification = WARNING (-5)
- No motion layer present = SUGGESTION (informational, -0)
- Mismatched niche aesthetic = WARNING (-5)
