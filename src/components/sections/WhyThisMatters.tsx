import { Glasses, ShieldAlert, ScanSearch, Users } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const points = [
  {
    icon: Glasses,
    title: "Real Precedent, Honestly Cited",
    text: "Owens Corning's roofing division partnered with PIXO VR for shingle-installation training &mdash; a real, sourced program in an adjacent trade, not a hypothetical.",
  },
  {
    icon: ShieldAlert,
    title: "We Say When Something Doesn't Exist Yet",
    text: "No spray-foam-specific VR training vendor operates today. We say that plainly instead of implying a product exists when it doesn't.",
  },
  {
    icon: ScanSearch,
    title: "Grounded in the Actual Risk Profile",
    text: "Isocyanate exposure, respirator fit, and proportioner ratio judgment are real, specific hazards &mdash; the case for VR training starts there, not with hype.",
  },
  {
    icon: Users,
    title: "Backed by Former-Contractor Experience",
    text: "Written with 20+ years of Contractors Choice Agency's contractor-side experience behind it &mdash; not a VR vendor's marketing department.",
  },
];

export function WhyThisMatters() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why This Resource Exists</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">This Is Thought Leadership, Not a Sales Page</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div className="p-8 rounded-xl bg-card border border-border h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: point.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
