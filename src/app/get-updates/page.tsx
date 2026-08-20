import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { UpdatesForm } from "@/components/forms/UpdatesForm";
import { TrustBar } from "@/components/shared/TrustBar";
import { FadeIn } from "@/components/animations/FadeIn";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Updates",
  description: `Get notified as CCA tracks real developments in VR training and sales-visualization tools for the spray foam industry — free, no obligation.`,
};

const steps = [
  "We add you to CCA's tracking list for genuine VR-in-spray-foam developments — no spam, no daily emails.",
  "If a real vendor, pilot program, or training tool emerges in this space, you hear about it first.",
  "No product exists to sell you today — this is a notification list, not a sales funnel.",
];

export default function GetUpdatesPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-10 md:pt-44 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Free, No-Obligation Updates</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold">Stay Ahead of the Curve</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Now that you know the real precedent and the honest limitations, tell us you&apos;re
              interested and we&apos;ll keep you posted as this space actually develops.
            </p>
          </FadeIn>
        </div>
        <TrustBar />
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <FadeIn direction="left">
              <h2 className="text-2xl font-heading font-bold">What Happens Next</h2>
              <ol className="mt-6 space-y-6">
                {steps.map((step, i) => (
                  <li key={step} className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-heading font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-muted-foreground">
                Prefer to skip the form? Call{" "}
                <a href={`tel:${site.phoneDigits}`} className="text-primary font-semibold">{site.phone}</a>{" "}
                directly.
              </p>
            </FadeIn>
          </div>
          <div className="lg:col-span-3">
            <FadeIn direction="right" delay={0.1}>
              <UpdatesForm />
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
