import { BookOpenCheck, ShieldCheck, Users, MapPin } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const signals = [
  {
    icon: BookOpenCheck,
    title: "Sourced, Not Speculative",
    text: "Every real-world claim &mdash; like the Owens Corning/PIXO VR roofing program &mdash; traces to a documented, citable source.",
  },
  {
    icon: ShieldCheck,
    title: "No Fabricated Products or Vendors",
    text: "We never imply a spray-foam-specific VR product or vendor exists when it doesn't. Where the market is empty, we say so.",
  },
  {
    icon: Users,
    title: "Free to Follow, No Obligation",
    text: "Get notified as CCA tracks real developments in VR training and visualization for this trade &mdash; no cost, no sales call.",
  },
  {
    icon: MapPin,
    title: "Backed by Contractors Choice Agency",
    text: "20+ years of former-contractor experience behind the analysis, not a VR hardware or software vendor.",
  },
];

/** Real, verifiable trust markers — deliberately no fabricated star ratings or named testimonials. */
export function TrustSignals() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why Trust This Resource</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Honesty First, Hype Never</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {signals.map((signal) => (
            <StaggerItem key={signal.title}>
              <div className="p-6 rounded-xl bg-card border border-border h-full text-center">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <signal.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold">{signal.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: signal.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
