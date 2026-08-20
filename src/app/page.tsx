import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TopicsGrid } from "@/components/sections/TopicsGrid";
import { WhyThisMatters } from "@/components/sections/WhyThisMatters";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Stats } from "@/components/sections/Stats";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

const homeFAQs = [
  {
    question: "Is there a real VR training or visualization product for spray foam installers today?",
    answer:
      "No. As of this writing, no spray-foam-specific VR training or sales-visualization product operates. This site covers the real, sourced precedent from adjacent trades and lays out the honest case for where this technology could realistically go — not a product you can buy today.",
  },
  {
    question: "What's the real precedent for VR training in a trade like this?",
    answer:
      "Owens Corning's roofing division partnered with PIXO VR to deliver VR shingle-installation and safety training through Owens Corning University, using Pico 4 Ultra Enterprise headsets — a genuine, documented, currently operating program. It's roofing, not spray foam, but it's the closest real analog.",
  },
  {
    question: "What are the two real use cases for VR in the spray foam industry?",
    answer:
      "VR safety and application training for installers (respirator fit, hazard recognition, spray-gun technique) and VR sales visualization for homeowners (3D cutaway comparisons of insulated vs. uninsulated walls). Both are covered in depth on this site's Topics.",
  },
  {
    question: "Can VR replace hands-on spray foam training?",
    answer:
      "No — not with current technology. Haptic controllers can't yet replicate the weight, heat, and tactile feedback of real spray equipment. The credible model is VR for early procedural and safety training, followed by real supervised application, not a full replacement.",
  },
  {
    question: "Why does spray foam need better sales visualization at all?",
    answer:
      "Because the product disappears once it's installed — sealed behind drywall or roof decking. A homeowner comparing a spray foam quote to a fiberglass quote is comparing something invisible to something they'll never see installed, which is a real communication problem VR could help solve.",
  },
  {
    question: "How do I find out if a real spray foam VR product launches?",
    answer:
      "Use the Get Updates form on this site. We track genuine developments in this space and will report on them accurately and sourced — this page exists specifically to do that honestly, not to hype a product that doesn't exist.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <Hero
        title="Where Virtual Reality Could Take Spray Foam Training & Sales"
        subtitle="An honest look at VR's real potential in this industry — safety training for installers and 3D visualization for homeowners — grounded in real precedent from adjacent trades, not a product that doesn't exist yet."
        image="/images/hero-vr-training.jpg"
        imageAlt="Spray foam installer using VR headset training technology on a job site"
      />

      <TopicsGrid />
      <WhyThisMatters />
      <ProcessSteps />
      <Stats />
      <TrustSignals />

      <FAQ
        title="VR in Spray Foam, Answered Honestly"
        subtitle="Real questions people ask about this emerging space."
        faqs={homeFAQs}
      />

      <CTA />
      <Footer />
    </main>
  );
}
