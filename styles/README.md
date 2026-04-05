# /styles — CSS Theme Files

## What this folder is
Color and font themes. Each file controls the entire visual identity of a page.
One theme can be shared across many products and countries.

## What AI agents do here
✅ CREATE new `.css` theme files when a product has different colors/fonts
❌ NEVER edit `theme.css` — it is the base that all themes inherit from
❌ NEVER put product data or copy here
❌ NEVER add layout rules — only color/font variable overrides

## How themes work
Every theme file starts with:
```css
@import url('theme.css');
```
Then overrides ONLY the CSS variables in `:root { }` and
any element-specific color rules needed for that color scheme.

## When to create a new theme
The owner will send a reference URL. From that page, extract:
- Primary color (buttons, links, highlights)
- Secondary/accent color (badges, section labels)
- Background colors
- Text colors
- Font family (heading + body)

Then create a new file following this pattern:
```
styles/DESCRIPTORNAME.css

Examples:
  red.css          ← Red primary (urgency/health)
  green.css        ← Green primary (natural/wellness)
  dark.css         ← Dark background (premium/luxury)
  orange.css       ← If a product uses orange
  purple.css       ← If a product uses purple
```

## Existing themes
| File       | Primary Color | Best For                    |
|------------|--------------|------------------------------|
| theme.css  | Blue #2563eb | Default / trusted / clinical |
| red.css    | Red #dc2626  | Urgency / energy / male      |
| green.css  | Green #16a34a| Natural / wellness / organic |
| dark.css   | Purple #a78bfa| Premium / luxury / tech     |

## ⚠️ Contrast rules — always verify after creating a theme
- Navbar uses `background: var(--dark)` → if `--dark` is light, hardcode navbar background
- Modal text is hardcoded in `theme.css` (not CSS vars) — modals are always light bg
- If using a dark theme: add `#header { background: DARKCOLOR; }` override
- Check: section labels (`--secondary` bg + `--primary` text), CTA button text, hero text
