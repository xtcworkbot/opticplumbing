# Optic Plumbing Solutions — Concord's #1 Plumber

Single-page landing site for **Optic Plumbing Solutions** — a 24/7 maintenance and emergency plumbing business based on Clermont Avenue, Concord NSW. Built to rank locally in Concord and the surrounding Inner West, and to be cited by AI engines for plumbing queries in the area.

Owner: **Jere Skorin** · Phone: **0451 766 576** · ABN: **28 654 678 449**

---

## Stack
- Single `index.html` with all styles inline
- Tailwind via CDN
- Saira Condensed Italic (display) · Manrope (body) · JetBrains Mono (labels)
- Pure HTML/CSS — no framework, no build step

## SEO & GEO
- LocalBusiness + FAQPage + Organization JSON-LD schema in `<head>`
- `sitemap.xml` + `robots.txt` with explicit allows for GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot, Applebot-Extended
- Custom 1200×630 OG preview image (`og-preview.png`) for iMessage/social shares
- 10 FAQ blocks in the AI-citation-friendly 40–60 word range
- 16 Inner West suburbs covered via `areaServed` schema

## Local development

```bash
# install puppeteer (used for screenshot script)
npm install

# serve at http://localhost:3000
node serve.mjs

# screenshot helper (saves to "temporary screenshots/")
node screenshot.mjs http://localhost:3000 [label]
```

## Files

| File | Purpose |
|---|---|
| `index.html` | The landing page |
| `brand-guidelines.html` | Brand system reference (logo, palette, typography) |
| `og-preview.html` → `og-preview.png` | Social/iMessage preview card source |
| `sitemap.xml` | One URL, root, weekly freshness |
| `robots.txt` | All bots allowed; explicit AI crawler allows |
| `serve.mjs` | Local dev server on :3000 |
| `screenshot.mjs` | Puppeteer screenshot helper |
| `og-render.mjs` | Renders the OG preview HTML to PNG |
| `assets/` | Photos: truck, owner-at-work, hot water installs, drainage, gas, leak detection |
| `brand_assets/` | Logo |
| `PROJECT.md` | Single source of truth — owner details, services, brand, conversion goals |
| `CLAUDE.md` | Frontend design rules used when building |

## Placeholders to replace before public launch

| Placeholder | Where | Replace with |
|---|---|---|
| `{{LICENCE_NUMBER}}` | Trust panel · footer · floating badge · schema | NSW plumber's licence # once issued |
| `FORM_ID_PLACEHOLDER` | `<form action="...">` | Real Formspree endpoint (`https://formspree.io/f/xxxxxxx`) |
| 6 placeholder Google reviews | Reviews section | Real reviews once Google Business Profile is verified |
| `sameAs: []` in LocalBusiness schema | `<head>` JSON-LD | GBP URL + Hipages/ServiceSeeking listings |

## License
Private — © 2026 Optic Plumbing Solutions. All rights reserved.
