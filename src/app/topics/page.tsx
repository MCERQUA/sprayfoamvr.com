import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { site, topics } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Topics",
  description:
    "Six honest topics on virtual reality's real and potential applications in spray foam: safety training, sales visualization, the technology stack, and an honest look at what VR can't replace.",
};

const topicImages: Record<string, string> = {
  "vr-safety-training-for-spray-foam-installers": "/images/topic-safety-training.jpg",
  "vr-sales-visualization-tools": "/images/topic-sales-visualization.jpg",
  "why-spf-application-is-a-natural-fit-for-vr": "/images/topic-application-skill.jpg",
  "the-technology-behind-vr-jobsite-training": "/images/topic-headset-tech.jpg",
  "vr-training-vs-traditional-hands-on-training": "/images/hero-application-still.jpg",
  "the-future-of-vr-in-the-spray-foam-industry": "/images/topic-future-adoption.jpg",
};

export default function TopicsIndexPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-16 md:pt-44 md:pb-20 bg-muted/40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The Topics</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold">VR in Spray Foam, Explained Honestly</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Six in-depth topics covering the real applications, real precedent, and real
              limitations of virtual reality in spray foam &mdash; including where the market is
              genuinely empty today.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {topics.map((topic) => (
              <StaggerItem key={topic.slug}>
                <Link href={`/topics/${topic.slug}`} className="group block h-full">
                  <article className="rounded-xl overflow-hidden bg-card border border-border group-hover:border-primary/40 transition-colors h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={topicImages[topic.slug]} alt={topic.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">{topic.name}</h2>
                      <p className="mt-2 text-sm text-muted-foreground flex-grow">{topic.summary}</p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        Read more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
