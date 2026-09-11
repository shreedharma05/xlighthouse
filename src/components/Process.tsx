import { FadeIn } from "./ui/FadeIn";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description: "We learn your business, your goals, and your users.",
  },
  {
    number: "02",
    title: "Design",
    description: "Wireframes and high-fidelity UI, built in fast iterative loops.",
  },
  {
    number: "03",
    title: "Build",
    description: "Pixel-perfect development, with speed and reliability built in from day one.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Rigorous QA, then ship to production with zero-downtime deploys.",
  },
  {
    number: "05",
    title: "Grow",
    description: "Analytics, iteration, and support to keep improving after launch.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-surface/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-brand-violet uppercase">
            Process
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            A clear path from idea to launch
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.08} className="relative">
              <div className="text-4xl font-semibold text-border">{step.number}</div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
