# /blocks — HTML Section Components

## ⛔ THIS FOLDER IS LOCKED — DO NOT EDIT

These files are the structural core of every page.
They define the HTML layout of each section.
Content comes from `/data/*.json` via `{{placeholder}}` syntax.

## What AI agents do here
❌ DO NOT edit any existing `.html` file in this folder
❌ DO NOT change placeholder names — they must match JSON field names
✅ You MAY create a brand new block file IF the owner explicitly requests a new section type

## Block inventory
| File               | Section           | Key placeholders                              |
|--------------------|-------------------|-----------------------------------------------|
| alert-bar.html     | Top banner        | `{{#each alert_badges}}`                      |
| navbar.html        | Navigation        | `{{product_name}}`, `{{#each nav_links}}`     |
| hero.html          | Hero section      | `{{headline}}`, `{{headline_highlight}}`, CTA |
| trust.html         | Trust badges      | `{{#each trust_badges}}`                      |
| social-proof.html  | Stats bar         | `{{#each stats}}`                             |
| benefits.html      | Problem/solution  | `{{benefits_headline}}`, paragraphs           |
| features.html      | Ingredients grid  | `{{#each features}}`                          |
| science.html       | How it works      | `{{#each science_steps}}`                     |
| reviews.html       | Testimonials      | `{{#each reviews}}`                           |
| faq.html           | FAQ accordion     | `{{#each faq_items}}`                         |
| footer.html        | Footer            | `{{footer_description}}`, legal links         |
| modals.html        | Legal popups      | `{{#each modals}}` with nested `{{#each sections}}` |

## Placeholder syntax
- `{{key}}` → replaced with string/number from JSON
- `{{#each array}}...{{/each}}` → loops over array items
- `{{this}}` → used inside loops for string arrays
- `{{#if key}}...{{/if}}` → conditional rendering

## Page section order (defined in templates/base.html)
```
alert-bar → navbar → hero → trust → social-proof →
benefits → features → science → reviews → faq → footer → modals
```
