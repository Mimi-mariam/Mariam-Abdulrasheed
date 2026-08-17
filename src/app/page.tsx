import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, Layers } from "lucide-react";
import { PROJECTS_DATA, SITE_CONFIG } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import { CapabilityGrid } from "@/components/capabilities/CapabilityGrid";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export default function HomePage() {
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 max-w-4xl">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/60 mb-8">
          <span className="h-2 w-2 rounded-full bg-orange-600 animate-pulse" />
          <span className="text-xs font-mono font-medium text-orange-900 tracking-tight">
            Product Engineer &middot; Open to Full-time &amp; High-Impact Roles
          </span>
        </div>

        {/* Hero Title & Positioning */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-zinc-950 font-normal tracking-tight leading-[1.15] mb-6">
          I turn ideas into{" "}
          <span className="italic font-serif text-orange-600">
            products.
          </span>
        </h1>

        {/* Value Proposition */}
        <p className="text-lg sm:text-xl text-zinc-600 font-sans leading-relaxed max-w-2xl mb-10">
          I&apos;m <span className="font-semibold text-zinc-900">{SITE_CONFIG.name}</span>, a Product Engineer who combines product thinking, design, engineering, and AI to take products from idea to production.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Button href="/work" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Explore Selected Work
          </Button>
          <Button href="/contact" variant="outline" size="lg" icon={<ArrowUpRight className="h-4 w-4 text-zinc-400" />}>
            Get in Touch
          </Button>
        </div>

        {/* Core Process Strip */}
        <div className="mt-14 pt-8 border-t border-zinc-200/70 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-900">01.</span>
            <span>Product Discovery</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-900">02.</span>
            <span>Design &amp; Prototyping</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-900">03.</span>
            <span>Next.js &amp; TypeScript</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-orange-600">04.</span>
            <span>AI &amp; Deployment</span>
          </div>
        </div>
      </section>

      {/* 2. SELECTED WORK SECTION */}
      <section id="work" className="space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <SectionHeader
            eyebrow="Selected Work"
            title="Engineered Products &amp; Systems"
            description="Real software projects built from the ground up, highlighting product architecture, technical execution, and verifiable results."
            className="mb-0"
          />
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-orange-600 hover:text-orange-700 transition-colors shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Featured Project Cards */}
        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06}>
              <ProjectCard project={project} featured={true} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. CAPABILITIES / METHODOLOGY SECTION */}
      <Reveal>
        <section className="space-y-10">
          <SectionHeader
            eyebrow="Capabilities"
            title="How I Bring Products to Life"
            description="A multidisciplinary approach that combines user empathy with technical rigor across the full product development lifecycle."
          />
          <CapabilityGrid />
        </section>
      </Reveal>

      {/* 4. ABOUT PREVIEW SECTION */}
      <Reveal delay={0.05}>
        <section className="p-8 sm:p-12 rounded-3xl bg-zinc-900 text-zinc-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none hidden md:block">
          <Layers className="h-64 w-64 text-zinc-100" />
        </div>

        <div className="max-w-2xl space-y-6 relative z-10">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            <span className="text-xs font-mono uppercase tracking-wider text-orange-400">
              Product Philosophy
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-white leading-snug">
            Engineering isn&apos;t just writing syntax&mdash;it&apos;s building the right solution to a high-value problem.
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
            As a Product Engineer, I refuse to work in isolated silos. I collaborate across the entire spectrum: synthesizing user pain points, testing interaction prototypes in Figma, architecting resilient Next.js backends, and automating workflows using AI.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Button
              href="/about"
              variant="outline"
              className="bg-zinc-800/80 text-white border-zinc-700 hover:bg-zinc-700 hover:text-white"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              Read More About My Approach
            </Button>
            <Link
              href="/resume"
              className="text-xs font-mono text-zinc-400 hover:text-white underline-offset-4 hover:underline transition-colors"
            >
              View Full Resume →
            </Link>
          </div>
        </div>
      </section>
      </Reveal>

      {/* 5. CONTACT / CALL TO ACTION */}
      <section className="text-center max-w-2xl mx-auto space-y-6 py-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono font-medium">
          <Sparkles className="h-3 w-3 text-orange-600" />
          <span>Let&apos;s Build Something Meaningful</span>
        </span>

        <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950 font-normal">
          Have a product in mind, or looking for a Product Engineer?
        </h2>

        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
          I am always excited to discuss new opportunities, technical scoping, and high-impact digital products.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Start a Conversation
          </Button>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-mono text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-lg transition-colors border border-zinc-200"
          >
            {SITE_CONFIG.email}
          </a>
        </div>
      </section>
    </div>
  );
}
