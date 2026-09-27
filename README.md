# Orbit

A reusable, fast Astro marketing/landing page starter. Design system inspired by the
open-wa.org landing page (big editorial type, one accent colour, grid background,
subtle motion, light + dark themes). All markup, CSS and JS here are written fresh.

Repository: https://github.com/rishabh0282/orbit

## Run
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview
```
Requires Node 18.20+ (Node 20 LTS recommended).

## Reuse for a new project
1. **Content** — edit `src/site.config.ts` (name, hero text, features, FAQ, links…).
2. **Brand** — edit `src/styles/tokens.css`: change `--accent`, `--accent-strong`, `--on-accent`. Dark mode follows.
3. **Logo** — replace `public/logo.svg` (and add `public/og.png`, 1200×630).
4. **Sections** — reorder/remove in `src/pages/index.astro`.
5. **Domain** — set `site` in `astro.config.mjs` and `url` in the config.

## What's inside
| Path | Purpose |
|---|---|
| `src/site.config.ts` | All text, links, section data |
| `src/styles/tokens.css` | Colours, fonts, type scale, spacing, motion, dark theme |
| `src/styles/global.css` | Base styles, buttons, section layout, reveal animation |
| `src/components/` | Navbar, Hero (animated orbit diagram), Stats, Features, Compare, Quickstart (tabs + copy), TechStack, FAQ, CTA, Footer, Icon |
| `src/scripts/main.ts` | Theme toggle, sticky nav + scroll progress, mobile menu, reveal on scroll, stat count-up, tabs, copy, GitHub stars |

## Notes
- Zero framework JS: one small bundled script. Add React/Vue islands with `npx astro add react` if needed.
- Respects `prefers-reduced-motion` and `prefers-color-scheme`; theme choice is saved.
- Fonts (Plus Jakarta Sans, JetBrains Mono) come from Fontsource (OFL licensed).
- Deploys to any static host: Netlify, Vercel, Cloudflare Pages, GitHub Pages, nginx.
