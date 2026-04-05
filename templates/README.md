# /templates — Page Skeleton

## ⛔ THIS FOLDER IS LOCKED — DO NOT EDIT

`base.html` is the outer shell of every generated page.
It contains the `<html>`, `<head>`, `<body>` structure,
Google Fonts link, Font Awesome link, theme CSS link,
and the `{{block:NAME}}` slots where each section is inserted.

## What AI agents do here
❌ DO NOT edit `base.html`
❌ DO NOT add new `{{block:NAME}}` entries unless explicitly requested by the owner
❌ DO NOT move or rename this file

## How it works
The generator reads `base.html`, replaces each `{{block:NAME}}`
with the rendered HTML from `/blocks/NAME.html`,
then replaces global placeholders like `{{meta_title}}`, `{{language}}`, `{{theme}}`.

## Block slot order in base.html
```html
{{block:alert-bar}}
{{block:navbar}}
{{block:hero}}
{{block:trust}}
{{block:social-proof}}
{{block:benefits}}
{{block:features}}
{{block:science}}
{{block:reviews}}
{{block:faq}}
{{block:footer}}
{{block:modals}}
```
