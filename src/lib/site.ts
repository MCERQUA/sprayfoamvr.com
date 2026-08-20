export const site = {
  businessName: "SprayFoamVR",
  tagline: "Where Virtual Reality Could Take Spray Foam Training & Sales",
  domain: "sprayfoamvr.com",
  url: "https://www.sprayfoamvr.com",
  phone: "844-967-5247",
  phoneDigits: "+18449675247",
  email: "josh@contractorschoiceagency.com",
  address: {
    street: "12220 E Riggs Rd",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
  },
  addressFull: "12220 E Riggs Rd, Chandler, AZ 85249",
} as const;

export interface Topic {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
}

// Angle: honest emerging-tech thought-leadership, not a sales page for a product that
// doesn't exist. No spray-foam-specific VR training vendor currently operates — the
// closest real precedent is Owens Corning + PIXO VR in roofing (adjacent trade, sourced).
// Ordered: the two strongest real-world cases (safety training, sales visualization)
// first, then the supporting "why/how/what's next" pieces.
export const topics: Topic[] = [
  {
    slug: "vr-safety-training-for-spray-foam-installers",
    name: "VR Safety Training for Spray Foam Installers",
    shortName: "VR Safety Training",
    summary: "Why isocyanate exposure risk and respirator/PPE drilling make spray foam application a strong candidate for VR-based safety training — drawing on real precedent from adjacent trades.",
  },
  {
    slug: "vr-sales-visualization-tools",
    name: "VR Sales Visualization: 3D Cutaway Walls for Homeowners",
    shortName: "VR Sales Visualization",
    summary: "How a 3D cutaway VR walkthrough of insulated vs. uninsulated walls could help homeowners understand what they're actually buying — before a single can of foam is sprayed.",
  },
  {
    slug: "why-spf-application-is-a-natural-fit-for-vr",
    name: "Why Spray Foam Application Is a Natural Fit for VR Training",
    shortName: "Why SPF Fits VR",
    summary: "The specific mechanics of SPF application — spray-gun distance, pass speed, overlap, ratio awareness — are motor-skill and judgment tasks VR simulation is built to drill without wasting material.",
  },
  {
    slug: "the-technology-behind-vr-jobsite-training",
    name: "The Technology Behind VR Jobsite Training",
    shortName: "The Technology Stack",
    summary: "Headsets, haptic controllers, and photogrammetry-captured job sites — the actual hardware and software stack real VR trade-training programs are built on today.",
  },
  {
    slug: "vr-training-vs-traditional-hands-on-training",
    name: "VR Training vs. Traditional Hands-On Training",
    shortName: "VR vs. Hands-On",
    summary: "What VR simulation can and can't replace in spray foam training — an honest look at the tradeoffs, not a pitch that VR replaces the spray gun.",
  },
  {
    slug: "the-future-of-vr-in-the-spray-foam-industry",
    name: "The Future of VR in the Spray Foam Industry",
    shortName: "What Comes Next",
    summary: "A realistic adoption timeline for VR in spray foam — why it hasn't happened yet, what would need to be true for it to happen, and who's likely to build it first.",
  },
] as const;
