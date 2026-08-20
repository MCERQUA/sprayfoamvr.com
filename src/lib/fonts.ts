import { Sora, Inter } from "next/font/google";

// Font pairing locked by the Stitch design system (ai/research/design-system.md) —
// a geometric tech-forward heading face paired with a clean readable body face,
// distinct from the sans-only and serif pairings used on the other CCA sites in this batch.
export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});
