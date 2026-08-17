import React from "react";
import type { Metadata } from "next";
import { PROJECTS_DATA, SITE_CONFIG } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description: "Explore production products, design systems, and AI workflows built and shipped by Mariam Abdul-Rasheed.",
};

export default function WorkPage() {
  return (
    <div className="space-y-16 py-6">
      {/* Header */}
      <div>
        <SectionHeader
          eyebrow="Portfolio &amp; Case Studies"
          title="Engineered Products, Built to Ship."
          description="A curated index of full-stack web applications, design systems, and AI-enabled product tools. Every project demonstrates clear product thinking from problem definition to live deployment."
        />

        {/* Methodology Pill bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2 pb-8 border-b border-zinc-200/80 text-xs font-mono text-zinc-500">
          <span className="font-semibold text-zinc-700">Project Focus:</span>
          <Tag variant="orange" size="sm">Full-Stack &amp; AI</Tag>
          <Tag variant="neutral" size="sm">Design Systems</Tag>
          <Tag variant="neutral" size="sm">Web Products</Tag>
          <Tag variant="neutral" size="sm">Next.js &amp; TypeScript</Tag>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-10">
        {PROJECTS_DATA.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.06}>
            <ProjectCard project={project} featured={true} />
          </Reveal>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="p-8 rounded-2xl bg-zinc-100/70 border border-zinc-200/80 text-center max-w-xl mx-auto space-y-3">
        <p className="text-sm font-medium text-zinc-900">
          Looking for a specific live demo or repository?
        </p>
        <p className="text-xs text-zinc-600 leading-relaxed">
          I am continually shipping new experiments and product features. Check my{" "}
          <a
            href={SITE_CONFIG.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 font-semibold hover:underline"
          >
            GitHub
          </a>{" "}
          or reach out directly for private repository walkthroughs.
        </p>
      </div>
    </div>
  );
}
