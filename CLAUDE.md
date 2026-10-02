@AGENTS.md

## Design System — "Field Notebook"
Always read DESIGN.md before making any visual or UI decisions.
Ink-on-paper, sampled from the client's excavator sketch. Fonts: Archivo (variable, `wdth` axis, display expanded) + IBM Plex Mono for labels, loaded via `app/fonts.ts`. Signature device: the hand-drawn ground line (`app/components/GroundLine.tsx`). SEO helpers in `lib/seo.ts`.
The earlier Clash Grotesk + amber "Direction C" was rejected by the client — do not reintroduce it unless the owners ask for it. Do not deviate from the design system's *shape* (type, spacing, layout) without explicit user approval. The site owners can now change anything, including the design system — see below.

## Colour — single source of truth
Every colour on the site comes from `content/theme.ts`. `app/globals.css` contains **no colour literals**: translucent surfaces are derived with `color-mix()` from those variables, `app/layout.tsx` renders the palette into `<head>` as `:root{…}`, and `app/manifest.ts` reads the same object. The starting palette is paper #ede5d6 / ink #1b1e43 / pen-blue #373887 / hi-vis orange #ff6a13.
Never reintroduce a hex or `rgba()` into a stylesheet or component — it will silently stop tracking the palette, which is exactly the trap this replaced (the paper colour used to be hardcoded in nine extra places as `rgba(237, 229, 214, …)`).

## Pages
Purpose-built routes: `/` , `/about`, `/services`, `/services/[slug]`. Everything else is content-driven from `content/pages.ts`, rendered by `app/[slug]/page.tsx` (static segments win, `dynamicParams = false` so unknown addresses 404). The top menu comes from `mainNav` in `content/site.ts` merged with any `showInNav` page; the sitemap picks them up automatically. Adding a plain text page should never require touching a component; a page that needs its own behaviour (gallery, form) gets its own route under `app/`.

## Client content updates
The site owners (Ethan/Angus/Emily — non-technical) update the site themselves through the `update-site` skill. If the user asks to change anything on the website (text, phone numbers, services, photos, fleet, colours, pages, layout, fonts, the logo, new features) and hasn't invoked it, invoke `/update-site` — it carries the plain-English tone, the readability and visual checks, and the publish workflow.
Client sessions have full scope: content, palette, pages and images, and also components, stylesheets, routes, config and the design system. Brayden trusts them with it (decided 2026-10-02). Do not reintroduce scope restrictions or "ask Brayden" referrals into the skill.
