# /profiles — Copy Writing Guides

## What this folder is

Writing guides for AI agents creating JSON copy files.
Every landing page copy is shaped by TWO profiles combined:

```
profiles/countries/COUNTRY.md   ← HOW to write (culture, tone, psychology)
         +
profiles/niches/NICHE.md        ← WHAT to write about (product category)
         +
Real data from official product page (ingredients, price, guarantee)
         ↓
data/COUNTRY-PRODUCT.json  ← the result
```

## Why two dimensions

| Dimension   | Controls                                      | Add when...                    |
|-------------|-----------------------------------------------|--------------------------------|
| **Country** | Tone, trust triggers, forbidden phrases,      | Entering a new market          |
|             | cultural expressions, pricing psychology      |                                |
| **Niche**   | Problem framing, mechanism language,          | A new product category appears |
|             | objection types, ingredient credibility,      |                                |
|             | before/after transformation narrative         |                                |

## Current profiles

### Countries (`/countries/`)
| File    | Market      | Language  |
|---------|-------------|-----------|
| us.md   | USA         | en        |
| uk.md   | UK          | en-GB     |
| ca.md   | Canada      | en-CA     |
| au.md   | Australia   | en-AU     |
| de.md   | Germany     | de        |
| ie.md   | Ireland     | en-IE     |
| nl.md   | Netherlands | nl        |
| se.md   | Sweden      | sv        |
| dk.md   | Denmark     | da        |

### Niches (`/niches/`)
| File             | Product Category            |
|------------------|-----------------------------|
| vision.md        | Eye health supplements      |
| male-vitality.md | Testosterone / male energy  |
| weight-loss.md   | Fat burners / metabolism    |
| sleep.md         | Sleep / relaxation          |
| joint-pain.md    | Mobility / arthritis        |
| cognitive.md     | Brain / memory / focus      |

## How to add a new country
1. Copy the closest existing country file (e.g., `uk.md` → `ie.md`)
2. Update every section for the new market
3. Add a row to the table above
4. Update `CLAUDE.md` TARGET MARKETS table

## How to add a new niche
1. Copy the closest existing niche file
2. Update: problem framing, mechanism language, objection types
3. Add a row to the table above
4. No changes needed anywhere else in the system

## How AI agents use these files
Before writing any copy in a JSON file:
1. Read `profiles/countries/COUNTRY.md`
2. Read `profiles/niches/NICHE.md`
3. Apply BOTH simultaneously when writing every section
4. Real product data (ingredients, price, guarantee) always overrides
   any example copy in the profiles — profiles are style guides, not templates
