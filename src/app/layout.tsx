import type { Metadata } from "next";
import { headingFont, bodyFont } from "@/lib/fonts";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { StickyMobileCTA } from "@/components/shared/StickyMobileCTA";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.businessName} — Where Virtual Reality Could Take Spray Foam Training & Sales`,
    template: `%s | ${site.businessName}`,
  },
  description:
    "An honest look at what virtual reality could mean for the spray foam insulation industry — VR safety training for installers and 3D cutaway sales visualization for homeowners, grounded in real precedent from adjacent trades.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.businessName,
    title: `${site.businessName} — Where Virtual Reality Could Take Spray Foam Training & Sales`,
    description:
      "An honest look at what virtual reality could mean for spray foam training and sales — grounded in real precedent, not a product that doesn't exist.",
    images: [
      {
        url: "/images/hero-vr-training.jpg",
        width: 1200,
        height: 630,
        alt: site.businessName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} — Where Virtual Reality Could Take Spray Foam Training & Sales`,
    description:
      "An honest look at what virtual reality could mean for spray foam training and sales.",
    images: ["/images/hero-vr-training.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.businessName,
  description:
    "Thought-leadership and emerging-technology resource on virtual reality's potential applications in the spray foam insulation industry — training and sales visualization — backed by Contractors Choice Agency.",
  url: site.url,
  telephone: site.phoneDigits,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: "US",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScroll>
          {children}
          <StickyMobileCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
