# /research — Research Briefs

## What this folder is

Intelligence gathered BEFORE writing copy for any landing page.
Each file is a completed research brief for one product + country combination.

## Why this folder exists

Generic copy fails. Copy that speaks to real cultural context, real current fears,
and real recent science converts. This folder is where that intelligence is captured
before it gets filtered through the JSON schema.

## The two-phase model

```
PHASE 1 — EXPLORATION (this folder)        PHASE 2 — OUTPUT (constrained)
─────────────────────────────────          ──────────────────────────────
AI researches freely:                      AI writes using ONLY:
• Official product page                    • Research brief (Phase 1 output)
• Recent ingredient studies                • profiles/countries/COUNTRY.md
• Competitor pages in that market          • profiles/niches/NICHE.md
• Cultural buyer trends                    • JSON schema (CLAUDE.md)
• Local health concerns                    • Real data from product page
• Current events relevant to niche         →
• Regulatory landscape in that country     → data/COUNTRY-PRODUCT.json
       ↓
research/COUNTRY-PRODUCT-brief.md
(filled template — saved here)
```

Phase 1 has NO constraints — gather everything potentially useful.
Phase 2 has STRICT constraints — only what fits the documented schema.

## File naming
```
COUNTRY-PRODUCTNAME-brief.md
Examples:
  us-reticlear-brief.md
  uk-vapofil-brief.md
  de-reticlear-brief.md
```

## The template
All briefs follow the same template: `BRIEF_TEMPLATE.md`
Copy it, rename it, fill it out via research, then use it to write the JSON.
