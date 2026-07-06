# Design System — Wagga Civil and Earthworks

## Product Context
- **What this is:** Marketing/brochure site for a merged, family-owned civil construction, earthworks and plumbing/gas contractor.
- **Who it's for:** Riverina builders, developers, rural property owners (big civil/earthworks) and homeowners/businesses (plumbing & gas).
- **Space/industry:** Local civil/earthworks + trades. Peers: Kennedy Bros, Burgess, Subterra Civil, Terracon (dated blue/template sites); Plumbing Bros, Aquafix.
- **Project type:** Marketing site (lead-gen, local SEO).

## Aesthetic Direction
- **Direction:** Hybrid — "playful concept, serious craft." Grounded/industrial base with one signature personality moment.
- **Decoration level:** Intentional — hazard/survey motif used sparingly (amber+charcoal chevron rule, uppercase signage labels, thin amber rules). Not expressive.
- **Mood:** Grounded, capable, family-owned. "Big civil jobs. Small enough to care." Credible enough for a builder handing over serious money; warm enough for a homeowner.
- **Memorable thing:** A serious, established local crew you'd trust with a big civil job — that also does the plumbing.
- **Signature device:** A **3D render of a machine on a transparent background** in the hero (client-supplied). Replaces the earlier toy-hero idea. Real job photography carries proof below.

## Typography
- **Display/Hero:** Clash Grotesk (600/700) — bold, engineered, confident; reads as infrastructure, not template. Load via Fontshare.
- **Body:** Geist (400–600) — clean, technical, already in the scaffold. Google Fonts.
- **UI/Labels:** Geist, uppercase, letter-spacing .16–.22em — site-signage / survey-marker feel for eyebrows and section labels.
- **Data/Tables:** n/a (marketing site).
- **Code:** n/a.
- **Loading:** Fontshare `clash-grotesk@500,600,700`; Google Fonts `Geist:wght@400;500;600;700`. Preconnect both.
- **Scale (px):** hero 52 / h2 34 / h3 20 / lead 18 / body 16 / small 13 / eyebrow 12. Display line-height 1.02, tracking -0.02em.

## Color
- **Approach:** Restrained — one accent (amber) + earthy neutrals. Color is meaningful, not decorative.
- **Ink (primary):** `#17150F` — bitumen/soil near-black. Text, dark sections, hero overlay.
- **Accent (amber):** `#E4711E` (hover/tint `#F08A24`) — machinery/hi-vis, used for CTAs, eyebrows, rules. Use with control; never as large flat fills.
- **Neutrals:** warm concrete off-white `#F4F1EA`, concrete `#E7E2D8`, warm grey `#6B665C`. Warm greys, NOT cool.
- **Semantic:** success `#3F7D3A`, warning `#E4711E`, error `#B23A2A`, info `#3A5A78`.
- **Dark mode:** none — one consistent light look for every visitor (a brochure site should not auto-flip).

## Spacing
- **Base unit:** 8px.
- **Density:** comfortable-to-spacious. Generous section padding (64–96px), strong vertical rhythm.
- **Scale:** 2xs(2) xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(96).

## Layout
- **Approach:** Grid-disciplined with big full-bleed photography and one editorial hero.
- **Grid:** 12-col desktop / 6-col tablet / 4-col mobile. Service cards 3-up desktop, 2-up tablet, 1-up mobile.
- **Max content width:** 1120px.
- **Border radius:** sm 8px, md 12px, lg 16px, pill 999px. Cards md; buttons pill; framed media lg.
- **Signature hero:** left = eyebrow + big Clash headline + lead + amber CTA; right = 3D machine render (transparent PNG) on a charcoal block with an amber+charcoal chevron rule along the bottom edge.

## Motion
- **Approach:** Minimal-functional → intentional. Subtle fade/translate-up on section entrance; image hover scale 1.03. Grounded, never flashy.
- **Easing:** enter ease-out, exit ease-in, move ease-in-out.
- **Duration:** micro 80ms, short 180ms, medium 300ms, long 500ms.

## Assets
- **Real job photography** (the proof): `_source/images/` (66 real WhatsApp job photos) + Prospec/Joll's scrapes. Prefer real work over stock.
- **Hero machine render:** client-supplied 3D machine on transparent background (pending). Placeholder until delivered.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-07-06 | Initial design system created (Direction C — Hybrid) | /design-consultation; user chose hybrid over grounded/full-playful. Beats dated-blue competitors; render = personality, real photos = credibility. |
| 2026-07-06 | Dropped toy hero; 3D machine render (transparent PNG) instead | User preference — keeps personality without underselling big civil jobs. |
