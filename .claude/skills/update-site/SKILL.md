---
name: update-site
description: Update the Wagga Civil website — anything on it: text, phone numbers, service areas, services, fleet, photos, colours, pages, layout, fonts, the logo, or new features. Use whenever the user asks to change, add, remove, or update anything on the website, even if they don't type /update-site.
---

# Update the Wagga Civil website

You are helping the owners of Wagga Civil and Earthworks (Ethan, Angus and Emily) change their own website. They are tradies, not developers, but it is their site and they have full control of it. Whatever they ask for — wording, photos, colours, pages, layout, fonts, the logo, a new feature — do it.

## How to talk to them

- Plain English only. Never mention TypeScript, JSX, components, builds, commits, or file paths in your questions or summaries. Say "your website" not "the repo".
- Confirm what they want in their words, do the work, then tell them what changed in one or two plain sentences (e.g. "Done — Angus's number is now 0400 000 000 everywhere on the site, including the header and footer.").
- If a request is ambiguous, ask one short question rather than guessing.

## How the site is put together

It's a Next.js website. The everyday stuff lives in two folders:

- **`content/`** — the words and settings. `site.ts` holds business details, phone numbers, service areas, the "why us" points, services, the fleet list and the top menu order (`mainNav`). `theme.ts` holds every colour. `pages.ts` holds the extra text pages.
- **`public/images/`** — the photos.

Everything else — the page layouts, the header and footer, the styling, fonts and logo — lives in `app/` and `lib/`. You can change any of it.

**Before changing anything outside `content/` and `public/`, read these first:**

- `CLAUDE.md` — how the colours and pages are wired together.
- `DESIGN.md` — the current look ("Field Notebook"), so a change either fits it or deliberately changes it.
- `AGENTS.md` — this version of Next.js differs from what you know. Check `node_modules/next/dist/docs/` before writing code.

Two things that break silently if you get them wrong:

- **Colours.** Every colour comes from `content/theme.ts`. Never put a hex code or `rgba()` straight into a stylesheet or component, because it will stop following the palette. If you need a new colour, add it to `theme` and to the `CSS_VARS` wiring below it, then use the CSS variable.
- **Pages.** A plain text page goes in `content/pages.ts` and needs no code. A page that needs to *do* something different (a photo gallery, a contact form, a price list) gets its own route under `app/`.

## Colours

- Use six-digit hex codes in quotes: `"#ff6a13"`.
- The four brand colours (`paper`, `ink`, `pen`, `hivis`) are the main ones. The `onDark*` tones are the text on the dark bands.
- `ink` is the text sitting on `paper`. If a requested colour would make the writing hard to read, say so plainly ("that'd make the writing hard to read on the page") and suggest something close. If they still want it, do it.

## Pages

- In `content/pages.ts`, copy the commented-out example at the top of the list, paste it in, and fill in the words.
- `slug` is the web address: lowercase, hyphens instead of spaces, no slashes (`"our-safety"` → waggacivil.com.au/our-safety). It can't be `about` or `services` — those addresses are already taken by the built-in pages.
- Every field is required. `metaTitle` around 60 characters, `metaDescription` around 155.
- `showInNav: true` puts it in the top menu. `false` publishes it without a menu link.
- To remove a page, delete its block. Mention that the old web address will stop working, in case it's on a business card or a Google listing.
- Write in their voice, using the facts they've given you. If a page needs licence, insurance, ticket or accreditation details and they haven't given them, ask rather than make them up.

## Photos

- Ask where the photo is (usually Downloads or Desktop after AirDrop). Copy it into `public/images/work/` with a short descriptive kebab-case name (e.g. `riverside-estate-pad.jpg`).
- If it's larger than ~1.5MB or wider than 2400px, downscale first: `sips -Z 2400 <file>` (macOS).
- Then wire it in wherever they asked.

## Visual check (any change to how the site looks)

For colours, pages, layout, styling, fonts or the logo, look at the result after the build passes and before you publish:

```
npm run start -- -p 4321 &
```

Then use the `/browse` skill to screenshot `http://localhost:4321/` and any page you changed. Check the obvious: text is readable, the header and hero look right, nothing has gone invisible or overlapped, and it holds up at phone width. Stop the server when you're done.

If it looks wrong, fix it. If they'd rather not keep it, revert (`git checkout -- .`) and tell them it's back how it was.

## Undoing a change

If they ask to put something back the way it was, find the commit with `git log --oneline`, run `git revert <commit>`, build, and publish as normal.

## The workflow — every session, in order

1. **Get latest**: `git pull origin main`. If it conflicts, sort it out. If you can't, leave the folder as it was and tell them plainly what happened.
2. **Make the change.**
3. **Check it builds**: `npm run build`. It must pass before anything goes live. For anything visual, do the visual check above too.
   - If it fails, fix it. If you can't, revert your uncommitted changes (`git checkout -- .` and remove files you added), tell them it didn't go through, and suggest another way to get what they want.
4. **Summarise** in plain English what changed and where it will appear on the site.
5. **Publish**: `git add -A`, commit with a short message ending in `(via /update-site)` — e.g. `content: update Angus's phone number (via /update-site)` or `design: bigger logo in the header (via /update-site)` — then `git push origin main`. If the push is rejected, `git pull --rebase origin main` and push again.
6. **Tell them it's live**: "Publishing now — it'll be live at waggacivil.com.au in about two minutes. If you still see the old version, refresh the page."

## Ground rules

- Finish every request with a passing build and a push, or a full revert. Never leave the site folder half-changed.
- Never force-push or rewrite history that's already been pushed. That history is how any change can be undone.
- Business facts (licence numbers, ABN, insurance) come from the owners. Never invent them.
