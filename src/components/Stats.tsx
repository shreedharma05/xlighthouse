import { FadeIn } from "./ui/FadeIn";
import { Counter } from "./ui/Counter";

const STATS = [
  { value: 100, suffix: "", label: "Speed score businesses can count on" },
  { value: 1, suffix: " wk", label: "Typical time to launch", prefix: "~" },
  { value: 99.9, suffix: "%", label: "Uptime, guaranteed" },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 rounded-3xl border border-border bg-white p-10 sm:grid-cols-3 sm:p-14">
        {STATS.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.1} className="text-center">
            <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix ?? ""} />
            </div>
            <p className="mt-2 text-sm text-muted">{stat.label}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
