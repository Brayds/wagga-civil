import { Archivo, IBM_Plex_Mono } from "next/font/google";

// Display + body are one superfamily: Archivo variable, with the width (wdth)
// axis loaded so the display type can run expanded (font-stretch:125%). wght is
// implicit for variable fonts — do not pass `weight`.
export const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-archivo",
});

// IBM Plex Mono is non-variable, so explicit weights are required. Used for the
// spec-sheet labels: phone numbers, service tags, fleet notes.
export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});
