import localFont from "next/font/local";

// Font pairing locked by the Stitch design system (ai/research/design-system.md) —
// a geometric tech-forward heading face paired with a clean readable body face,
// distinct from the sans-only and serif pairings used on the other CCA sites in this batch.
export const bodyFont = localFont({
  src: [{ path: "./fonts/Inter-variable.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-body",
  display: "swap",
});

export const headingFont = localFont({
  src: [
    { path: "./fonts/Sora-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Sora-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Sora-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});
