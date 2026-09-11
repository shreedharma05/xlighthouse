"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FadeIn, StaggerGroup, StaggerItem } from "./ui/FadeIn";

const PROJECTS = [
  {
    title: "Zenvora Interiors",
    description:
      "A studio site for an interior design & architecture practice, built to showcase their projects and win new clients.",
    tags: ["Interior Design", "Business Site"],
    image: "/projects/zenvora.png",
    href: "https://www.zenvorainteriors.com/",
  },
  {
    title: "Jeeva Labour Union",
    description:
      "A worker management system handling memberships, applications, renewals, and finance tracking for an organized labour union.",
    tags: ["Custom Web App", "Union Management"],
    image: "/projects/jeeva.png",
    href: "https://jeeva-labour-union.vercel.app/",
  },
];

export function Showcase() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-widest text-brand-violet uppercase">
          Selected Work
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          A range of projects, one standard of quality
        </h2>
      </FadeIn>

      <StaggerGroup className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <StaggerItem key={project.title}>
            <motion.a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group block cursor-pointer overflow-hidden rounded-2xl border border-border bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} website preview`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <ArrowUpRight
                  size={20}
                  className="absolute right-4 top-4 text-white drop-shadow-md transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
