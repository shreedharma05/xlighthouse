"use client";

import { motion } from "framer-motion";
import { Armchair, Coffee, Printer, Laptop, Sparkles } from "lucide-react";
import { FadeIn, StaggerGroup, StaggerItem } from "./ui/FadeIn";

const COMPARISONS = [
  { icon: Armchair, label: "A new office sofa", price: "₹25,000" },
  { icon: Coffee, label: "An office coffee machine", price: "₹18,000" },
  { icon: Printer, label: "A decent office printer", price: "₹22,000" },
  { icon: Laptop, label: "A website that sells for you, 24/7", price: "₹20,000", highlight: true },
];

export function ValueSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-widest text-brand-violet uppercase">
          Pricing, simplified
        </p>
        <h2 className="text-balance mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          A premium website shouldn&apos;t cost more than your{" "}
          <span className="text-gradient">office sofa</span>
        </h2>
        <p className="mt-4 text-lg text-muted">
          Big-brand design and speed, without the big-brand price tag. Sites start at
          just ₹20,000 — less than a lot of things already sitting in your office.
        </p>
      </FadeIn>

      <StaggerGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {COMPARISONS.map((item) => (
          <StaggerItem key={item.label}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`relative h-full rounded-2xl border p-6 text-center ${
                item.highlight
                  ? "border-transparent bg-ink text-white shadow-[0_20px_60px_-20px_rgba(108,92,231,0.5)]"
                  : "border-border bg-white"
              }`}
            >
              {item.highlight && (
                <span className="gradient-btn absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white">
                  <Sparkles size={12} className="mr-1 inline -mt-0.5" />
                  Best value
                </span>
              )}
              <div
                className={`mx-auto flex h-12 w-12 items-center justify-center rounded-xl ${
                  item.highlight ? "bg-white/10" : "bg-surface"
                }`}
              >
                <item.icon size={22} className={item.highlight ? "text-white" : "text-brand-violet"} />
              </div>
              <p className={`mt-4 text-2xl font-semibold tracking-tight ${item.highlight ? "text-white" : ""}`}>
                {item.price}
              </p>
              <p className={`mt-1 text-sm ${item.highlight ? "text-white/70" : "text-muted"}`}>
                {item.label}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
