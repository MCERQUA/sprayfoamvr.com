import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.businessName}.`,
};

export default function TermsPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />
      <section className="pt-36 pb-24 md:pt-44">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-heading font-bold mb-8">Terms of Service</h1>
          <div className="post-prose">
            <p>Last updated: 2026-08-20</p>
            <h2>Use of This Website</h2>
            <p>
              This website provides thought-leadership and educational content on virtual reality&apos;s
              potential applications in the spray foam insulation industry. It is offered for general
              informational purposes. No product, vendor, or service described as speculative or
              emerging on this site is currently available for purchase through {site.businessName}.
            </p>
            <h2>Updates List</h2>
            <p>
              Submitting a form constitutes a request to be contacted and does not create a binding
              agreement for any product or service.
            </p>
            <h2>Contact</h2>
            <p>Questions about these terms can be directed to {site.email} or {site.phone}.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
