# Design System — Wagga Civil and Earthworks

## Product Context
- **What this is:** Marketing/brochure site for a merged, family-owned civil construction, earthworks and plumbing/gas contractor.
- **Who it's for:** Riverina builders, developers, rural property owners (big civil/earthworks) and homeowners/businesses (plumbing & gas).
- **Its job:** A trust-check. Trades like this win on referrals; the site exists so someone who got the name can verify these are the real deal. Lead with proof (real machines, real jobs, real local facts), not sales copy.
- **Project type:** Marketing site (lead-gen, local SEO). Pillar-and-spoke: `/services` hub + one page per service.

## Aesthetic Direction — "Field Notebook"
- **Direction:** Editorial, ink-on-paper. The site is built like a civil contractor's field notebook. This is the deliberate escape from the templated Tailwind look that was rejected.
- **Thesis:** The hero is the client's hand-drawn blue-ballpoint sketch of a Kobelco excavator on a Riverina field. The whole palette and paper tone are sampled from that scan, so the page and the drawing are literally the same ink and paper.
- **Mood:** Grounded, crafted, human (family business) but precise and engineered (takes big contracts). "Big civil jobs. Small enough to care."
- **Signature device:** A hand-drawn ink **ground line** (the horizon from the sketch) that threads down the page as the section divider — dipping into a cut, rising into a fill. Earthworks, literally drawn. Component: `app/components/GroundLine.tsx`.
- **Proof, not polish:** Real job photos are shown as "field records" — mounted with a thin ink frame + IBM Plex Mono caption, lightly graded to sit with the illustration. Never stock-styled cards.

## Palette (sampled from the sketch)
- `--paper: #ede5d6` — warm cream, the sketchbook paper.
- `--paper-2: #e4dac7` — deeper mat / alternating band.
- `--ink: #1b1e43` — body ink (deepened from the pen blue for AA contrast).
- `--ink-deep: #141733` — dark surfaces (about band, contact, footer).
- `--pen: #373887` — the ballpoint blue itself; used for the ground line, labels, hairlines.
- `--hivis: #ff6a13` — safety orange, the trade's own colour. The single spark: primary CTAs and accents only. **Not** terracotta.
- `--stone: #7c7566` — warm secondary text.
- One light look for every visitor. No dark-mode flip.

## Typography
- **Display + body are one superfamily: Archivo** (variable, loaded with the `wdth` axis). Display runs expanded via `font-stretch: 125%` for an engineered/signage feel; body is regular width. Loaded via `next/font/google` in `app/fonts.ts` → `--font-archivo`.
- **Labels: IBM Plex Mono** (`--font-mono`) — spec-sheet feel for phone numbers, service tags (S–01…S–07), fleet notes, captions, eyebrows.
- No serifs. No Inter/Roboto/system defaults. The type stays quiet so the illustration carries the personality.

## Layout & motion
- Editorial, left-aligned, generous. Content max-width 1220px; hero can be near-full-bleed.
- Numbered devices (S–01…) are real indices, not decoration.
- Motion is one restrained scroll-reveal (`app/components/Reveal.tsx`), progressive-enhancement and fail-safe: content ships visible, `prefers-reduced-motion` respected.

## Assets
- Hero: `public/images/hero-sketch.jpg` (client's ink drawing).
- Real job photos treated and stored in `public/images/work/` (see `scratchpad/photos.py` recipe: light desaturate + warm paper tint, consistent crops).

## SEO
- `lib/seo.ts` centralises metadata + JSON-LD (`GeneralContractor` LocalBusiness, `Service`, `WebSite`, `BreadcrumbList`).
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`. Every page sets canonical + Open Graph.

## Guardrail
This system replaced the earlier "Direction C" (Clash Grotesk + amber/charcoal, chevron rule, pending 3D machine render), which the client rejected as templated. Do not reintroduce it. Do not deviate from the Field Notebook system without explicit user approval.

## Decisions Log
- 2026-07-06: Client rejected Direction C as templated ("if I gave this to my client, I would be fired").
- 2026-07-06: New direction "Field Notebook" approved from a one-page mockup built on the client's excavator sketch. Full site built on it: homepage, `/services` hub, 7 SEO service pages, `/about`, full metadata + JSON-LD + sitemap/robots.
