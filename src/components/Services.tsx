"use client";

import {
  Gauge,
  LayoutDashboard,
  LifeBuoy,
  ShoppingCart,
  UserRound,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerGroup, StaggerItem } from "./ui/FadeIn";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: ShoppingCart,
    title: "Online Stores",
    description:
      "Beautiful, easy-to-manage online stores built to turn visitors into customers.",
  },
  {
    icon: UserRound,
    title: "Portfolio & Personal Sites",
    description:
      "Fast, elegant personal sites that showcase your work and win opportunities.",
  },
  {
    icon: Building2,
    title: "Business & Marketing Sites",
    description:
      "Websites and landing pages designed to turn visitors into customers.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Web Apps",
    description:
      "Booking tools, dashboards, and other custom apps built to scale with your business.",
  },
  {
    icon: Gauge,
    title: "Speed & Visibility",
    description:
      "Lightning-fast pages and search-friendly setup that helps customers find you.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    description:
      "We stay on after launch to monitor, update, and improve your site over time.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-widest text-brand-violet uppercase">
          Services
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Everything you need to launch and grow
        </h2>
        <p className="mt-4 text-lg text-muted">
          Whichever kind of site your business needs, we design and engineer it
          end to end.
        </p>
      </FadeIn>

      <StaggerGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <StaggerItem key={service.title}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group h-full rounded-2xl border border-border bg-white p-7 transition-shadow hover:shadow-[0_20px_60px_-20px_rgba(108,92,231,0.25)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface transition-colors group-hover:bg-brand-violet/10">
                <service.icon size={20} className="text-brand-violet" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
