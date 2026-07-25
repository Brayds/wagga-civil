// ============================================================
// EXTRA PAGES
// ============================================================
// Every page in this list becomes a real page on the website, at
// waggacivil.com.au/<the web address you give it>. It gets a
// heading, an intro, your paragraphs, a link in the menu, and it
// is added to the sitemap Google reads. Nothing else to do.
//
// To add a page, copy one of the blocks below (from `{` to `},`)
// and change the words. To remove a page, delete its block.
//
// The homepage, About and the Services pages are NOT in here —
// they're purpose-built. Those are a job for Brayden.
// ============================================================

import { mainNav, type NavLink } from "./site";

export type PageSection = {
  /** Optional subheading above the paragraphs. Leave it out for plain text. */
  heading?: string;
  /** One string per paragraph. */
  body: string[];
};

export type ExtraPage = {
  /** The web address, lowercase with hyphens: "safety" → /safety */
  slug: string;
  /** How it appears in the top menu. Keep it to one or two words. */
  navLabel: string;
  /** Set to false to publish the page but keep it out of the menu. */
  showInNav: boolean;
  /** The big heading at the top of the page. */
  title: string;
  /** The short paragraph directly under the heading. */
  intro: string;
  /** The blue-underlined title in Google results. Around 60 characters. */
  metaTitle: string;
  /** The grey summary in Google results. Around 155 characters. */
  metaDescription: string;
  /** The body of the page, in order. */
  sections: PageSection[];
};

export const extraPages: ExtraPage[] = [
  // No extra pages yet. To add one, copy the example below, paste it here
  // between the square brackets, and change the words to yours.
  //
  // {
  //   slug: "safety",
  //   navLabel: "Safety",
  //   showInNav: true,
  //   title: "Safety is how we stay working.",
  //   intro:
  //     "A short paragraph under the heading. Two or three lines is plenty.",
  //   metaTitle: "Safety | Wagga Civil and Earthworks",
  //   metaDescription:
  //     "The sentence that shows under the page's name in Google results.",
  //   sections: [
  //     {
  //       heading: "Before we start",
  //       body: [
  //         "First paragraph.",
  //         "Second paragraph. Add as many as you like, each in its own quotes.",
  //       ],
  //     },
  //     {
  //       heading: "On site",
  //       body: ["Another section, with its own subheading."],
  //     },
  //   ],
  // },
];

// ---- Helpers (developer-owned) -------------------------------

/** Routes that already exist as purpose-built pages. */
const RESERVED_SLUGS = ["", "about", "services"];

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// Validated at import time so a malformed page fails `npm run build` rather
// than shipping a broken route. The messages are written to be readable by a
// non-developer, because they are what /update-site will end up relaying.
for (const page of extraPages) {
  if (!SLUG_PATTERN.test(page.slug)) {
    throw new Error(
      `Page address "${page.slug}" isn't valid — use lowercase letters, numbers and hyphens only (for example "our-safety").`,
    );
  }
  if (RESERVED_SLUGS.includes(page.slug)) {
    throw new Error(
      `Page address "${page.slug}" is already used by an existing page. Pick a different one.`,
    );
  }
  if (extraPages.filter((p) => p.slug === page.slug).length > 1) {
    throw new Error(
      `There are two pages using the address "${page.slug}". Each page needs its own.`,
    );
  }
}

export function pageBySlug(slug: string): ExtraPage | undefined {
  return extraPages.find((p) => p.slug === slug);
}

export function navPages(): ExtraPage[] {
  return extraPages.filter((p) => p.showInNav);
}

/**
 * The full top menu: the fixed links from site.ts, plus any extra page that
 * asked to be in the menu and isn't already listed there by hand.
 */
export function navLinks(): NavLink[] {
  const listed = new Set(mainNav.map((n) => n.href));
  const appended = navPages()
    .filter((p) => !listed.has(`/${p.slug}`))
    .map((p) => ({ href: `/${p.slug}`, label: p.navLabel }));
  return [...mainNav, ...appended];
}
