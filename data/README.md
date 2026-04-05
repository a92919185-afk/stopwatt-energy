# /data — Product Data Files

## What this folder is
One JSON file per landing page variation (product + country).
This is the ONLY place where content, copy, and product information live.

## What AI agents do here
✅ CREATE new `.json` files for new products or country variants
✅ EDIT existing `.json` files to update copy, prices, or URLs
❌ NEVER create subfolders here
❌ NEVER put HTML, CSS, or JS here

## Naming convention
```
COUNTRY-PRODUCTNAME.json

Examples:
  us-reticlear.json      ← RetiClear, United States
  uk-vapofil.json        ← VapoFil, United Kingdom
  ca-reticlear.json      ← RetiClear, Canada
  de-vapofil.json        ← VapoFil, Germany
```

## How to create a new file
1. Copy the closest existing `.json` as a starting point
2. Change `slug`, `language`, `theme`, `cta_url` and all copy fields
3. Fill with REAL data from the official product page — never invent data
4. Run: `node generator.js COUNTRY-PRODUCTNAME`

## Full field schema
→ See `CLAUDE.md` section "JSON SCHEMA — Full Reference"
