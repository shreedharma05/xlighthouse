import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./ui/FadeIn";
import { GradientOrbs } from "./ui/GradientOrbs";

export function CTASection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-10 sm:py-16">
      <FadeIn className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center sm:px-16">
        <GradientOrbs className="opacity-60" />
        <div className="relative">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Premium design, real results, and a price tag that won&apos;t make your
            accountant flinch. Tell us about your business and let&apos;s get you online.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="mailto:hello@lighthousex.dev"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Get in touch
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#work"
              className="rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See our work
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
