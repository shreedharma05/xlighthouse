"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { GradientOrbs } from "./ui/GradientOrbs";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
      <div className="absolute inset-0 grid-fade" />
      <GradientOrbs />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-muted"
        >
          <Sparkles size={14} className="text-brand-violet" />
          Now booking new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: easeOut }}
          className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
        >
          Websites engineered for{" "}
          <span className="text-gradient">ambitious businesses</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          XLightHouse designs and builds beautiful, lightning-fast websites for
          growing businesses — online stores, portfolios, and everything in between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: easeOut }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Link
            href="#contact"
            className="group gradient-btn flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(108,92,231,0.6)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Start a project
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#work"
            className="rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
          >
            See our work
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
