import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const steps = [
  {
    number: "01",
    title: "Read the Real Precedent",
    text: "Start with what's already proven in adjacent trades &mdash; like Owens Corning and PIXO VR's roofing training program &mdash; before evaluating spray foam's case.",
  },
  {
    number: "02",
    title: "Understand the Two Real Use Cases",
    text: "VR safety/application training for installers, and VR sales visualization for homeowners, are the two applications with an actual argument behind them.",
  },
  {
    number: "03",
    title: "See the Honest Tradeoffs",
    text: "VR can't replace hands-on spray-gun feel or real material curing &mdash; we cover what it can and can't do before you take any of this as a pitch.",
  },
  {
    number: "04",
    title: "Stay Ahead of the Curve",
    text: "Tell us you're interested and we'll keep you posted as CCA tracks real movement on VR training and visualization tools in this space &mdash; no product to buy today.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How to Use This Resource</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">From Precedent to Perspective</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                <span className="text-5xl font-heading font-bold text-primary/20">{step.number}</span>
                <h3 className="mt-3 text-lg font-heading font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: step.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
