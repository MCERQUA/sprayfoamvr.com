import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { Stats } from "@/components/sections/Stats";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { site } from "@/lib/site";
import { BookOpenCheck, ShieldCheck, ScanSearch } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.businessName} is a thought-leadership resource on virtual reality's potential in the spray foam industry, backed by Contractors Choice Agency.`,
};

const values = [
  {
    icon: BookOpenCheck,
    title: "We Say What Doesn't Exist Yet",
    text: "No spray-foam-specific VR training or visualization product operates today. We say that plainly, instead of writing around it.",
  },
  {
    icon: ScanSearch,
    title: "Precedent Over Speculation",
    text: "Every real-world claim traces to a sourced program &mdash; like Owens Corning and PIXO VR's roofing training partnership &mdash; not an invented case study.",
  },
  {
    icon: ShieldCheck,
    title: "Backed by Former-Contractor Experience",
    text: "Written with 20+ years of Contractors Choice Agency's contractor-side experience behind it, not a VR hardware vendor's marketing department.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              A Thought-Leadership Page, Not a Product Page
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Search &ldquo;spray foam VR&rdquo; and you won&apos;t find a real product &mdash; because
              one doesn&apos;t exist yet. {site.businessName} exists to explore, honestly, where
              virtual reality could realistically go in this industry: safety and application
              training for installers, and 3D cutaway sales visualization for homeowners &mdash;
              grounded in real precedent from adjacent trades like roofing, not manufactured hype.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We&apos;re backed by Contractors Choice Agency, bringing over 20 years of
              former-contractor experience to the analysis. When something real emerges in this
              space, we&apos;ll say so &mdash; and you can get on our list to hear about it first.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/about-credibility.jpg" alt={`${site.businessName} thought-leadership resource`} fill className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">How We Write</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-8 rounded-xl bg-card border border-border h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: value.text }} />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <Stats />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Backed by a Nationwide Contractor Network</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contractors Choice Agency works with spray foam contractors across the country today
              &mdash; whatever VR becomes in this trade, CCA is positioned to watch it happen from
              inside the industry, not from outside it.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
