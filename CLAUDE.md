@AGENTS.md

## Design System — "Field Notebook"
Always read DESIGN.md before making any visual or UI decisions.
Ink-on-paper, sampled from the client's excavator sketch. Fonts: Archivo (variable, `wdth` axis, display expanded) + IBM Plex Mono for labels, loaded via `app/fonts.ts`. Colours: paper #ede5d6 / ink #1b1e43 / pen-blue #373887 / hi-vis orange #ff6a13. Signature device: the hand-drawn ground line (`app/components/GroundLine.tsx`). SEO helpers in `lib/seo.ts`.
The earlier Clash Grotesk + amber "Direction C" was rejected by the client — do not reintroduce it. Do not deviate without explicit user approval.

## Client content updates
The site owners (Ethan/Angus — non-technical) update content themselves through the `update-site` skill. If the user asks to change website content (text, phone numbers, services, photos, fleet) and hasn't invoked it, invoke `/update-site` — it carries the scope rules and publish workflow. Client sessions never modify components, styles, config, or the design system; that work is Brayden's, done directly.
