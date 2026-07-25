// ============================================================
// THE WEBSITE'S COLOURS
// ============================================================
// This is the ONE place every colour on the website comes from.
// Change a colour here and it updates everywhere it's used —
// the header, the buttons, the dark bands, the footer, the lot.
//
// To change a colour, replace the code in quotes (e.g. "#ff6a13")
// with a new one. Keep the quotes and the comma. Don't rename or
// delete any of the lines — the website needs all of them.
//
// The four brand colours are the ones worth playing with. The
// supporting tones underneath them are fine to leave alone.
// ============================================================

export const theme = {
  // ---- The four brand colours ------------------------------

  /** Page background — the notebook-paper colour behind everything. */
  paper: "#ede5d6",

  /** Main text colour, and the dark "Get a quote" button. */
  ink: "#1b1e43",

  /** The ballpoint blue — small labels, the hand-drawn ground line. */
  pen: "#373887",

  /** Safety orange — highlights, hover effects, the main call-to-action. */
  hivis: "#ff6a13",

  // ---- Supporting tones ------------------------------------

  /** A slightly deeper paper: hovered rows, the service-page sidebar. */
  paperDeep: "#e4dac7",

  /** The darkest shade, used for the "Why us" band and the footer. */
  inkDeep: "#141733",

  /** Off-white used for text sitting on top of the dark bands. */
  paperTint: "#f4eee2",

  /** Quieter grey-brown for secondary body text. */
  stone: "#7c7566",

  /** Slightly softened ink for intro paragraphs. */
  lead: "#33345a",

  // ---- Text on the dark bands ------------------------------
  // Five steps from brightest to faintest. These sit on the dark
  // "Why us" band, the contact block and the footer.

  /** Headings on a dark band. */
  onDarkStrong: "#ffffff",
  /** Normal text on a dark band. */
  onDark: "#c7c6de",
  /** Small labels on a dark band. */
  onDarkSoft: "#b9b8d4",
  /** Footer body text. */
  onDarkMuted: "#9a99b8",
  /** The fine print at the very bottom. */
  onDarkFaint: "#8887a8",
} as const;

// ---- Wiring (developer-owned) --------------------------------
// Maps the names above onto the CSS custom properties the
// stylesheet uses. Adding a colour above does nothing until it is
// wired up here, so leave this to Brayden.

const CSS_VARS: Record<string, string> = {
  "--paper": theme.paper,
  "--ink": theme.ink,
  "--pen": theme.pen,
  "--hivis": theme.hivis,
  "--paper-2": theme.paperDeep,
  "--ink-deep": theme.inkDeep,
  "--paper-tint": theme.paperTint,
  "--stone": theme.stone,
  "--lead": theme.lead,
  "--on-dark-strong": theme.onDarkStrong,
  "--on-dark": theme.onDark,
  "--on-dark-soft": theme.onDarkSoft,
  "--on-dark-muted": theme.onDarkMuted,
  "--on-dark-faint": theme.onDarkFaint,
};

/**
 * The palette as a `:root { ... }` rule, rendered into <head> by the root
 * layout. Every other colour in globals.css is derived from these with
 * color-mix(), so this is the only place raw colour values exist.
 */
export function themeCss(): string {
  const decls = Object.entries(CSS_VARS)
    .map(([name, value]) => `${name}:${value}`)
    .join(";");
  return `:root{${decls}}`;
}
