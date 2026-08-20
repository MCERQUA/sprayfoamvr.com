import { Glasses, ShieldCheck, BookOpenCheck, BadgeCheck } from "lucide-react";

const items = [
  { icon: Glasses, label: "Emerging-Tech, Not Sales-First" },
  { icon: ShieldCheck, label: "Backed by 20+ Years Contractor Experience" },
  { icon: BookOpenCheck, label: "Every Claim Sourced or Labeled Speculative" },
  { icon: BadgeCheck, label: "Free Updates, No Obligation" },
];

export function TrustBar() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2.5 justify-center md:justify-start">
          <item.icon className="w-5 h-5 text-primary shrink-0" />
          <span className="text-sm font-medium text-foreground">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
