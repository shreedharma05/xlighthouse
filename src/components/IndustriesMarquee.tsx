import { Marquee } from "./ui/Marquee";

const INDUSTRIES = [
  "Ecommerce & Retail",
  "Real Estate",
  "Hospitality",
  "Healthcare",
  "Professional Services",
  "Nonprofits",
  "Startups",
  "Creators & Freelancers",
];

export function IndustriesMarquee() {
  return (
    <section className="border-y border-border bg-surface/60 py-8">
      <p className="mb-6 text-center text-xs font-medium tracking-widest text-muted uppercase">
        Trusted by businesses across every industry
      </p>
      <Marquee>
        {INDUSTRIES.map((industry) => (
          <span
            key={industry}
            className="text-lg font-semibold tracking-tight text-muted/70 whitespace-nowrap"
          >
            {industry}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
