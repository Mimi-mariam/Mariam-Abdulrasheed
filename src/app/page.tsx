import React from "react";
import Link from "next/link";
import Image from "next/image";
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
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-xs mb-8">
          <div className="relative h-6 w-6 rounded-full overflow-hidden shrink-0 border border-orange-200 bg-zinc-100">
            <Image
              src="/images/mariam-profile.jpg"
              alt="Mariam Abdul-Rasheed"
              fill
              sizes="24px"
              className="object-cover object-top"
            />
          </div>
          <span className="h-2 w-2 rounded-full bg-orange-600 animate-pulse" />
          <span className="text-xs font-mono font-medium text-zinc-800 tracking-tight">
            Product Engineer &middot; Open to Full-time Roles
          </span>
        </div>

        {/* Hero Title & Positioning */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-zinc-950 font-normal tracking-tight leading-[1.15] mb-6">
          I turn ideas into{" "}
          <span className="italic font-serif text-orange-600">
            digital products people can actually use.
          </span>
        </h1>

        {/* Value Proposition */}
        <p className="text-lg sm:text-xl text-zinc-600 font-sans leading-relaxed max-w-2xl mb-10">
          I&apos;m <span className="font-semibold text-zinc-900">{SITE_CONFIG.name}</span>. I combine product strategy, UX design, engineering, and AI to take ideas from concept to launch.
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
            description="Products I've designed and built from idea to launch."
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
            description="I combine product thinking, design, engineering, and AI to turn ideas into working digital products."
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
              My approach
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-normal text-white leading-snug">
            Build the right thing, then build it well.
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
            I don&apos;t believe product engineering starts with writing code. It starts with understanding the problem.
          </p>
          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
            I work across the product lifecycle — from defining the problem and designing the experience to building, integrating AI, and shipping the final product.
          </p>
          <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
            The goal isn&apos;t to add more technology. It&apos;s to build something useful.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Button
              href="/about"
              variant="outline"
              className="bg-zinc-800/80 text-white border-zinc-700 hover:bg-zinc-700 hover:text-white"
              icon={<ArrowRight className="h-4 w-4" />}
            >
              More about me
            </Button>
            <Link
              href="/resume"
              className="text-xs font-mono text-zinc-400 hover:text-white underline-offset-4 hover:underline transition-colors"
            >
              View my resume →
            </Link>
          </div>
        </div>
      </section>
      </Reveal>

      {/* 5. CONTACT / CALL TO ACTION */}
      <section className="text-center max-w-2xl mx-auto space-y-6 py-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-mono font-medium">
          <Sparkles className="h-3 w-3 text-orange-600" />
          <span>Let&apos;s build something.</span>
        </span>

        <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950 font-normal">
          Have an idea, product challenge, or team that needs a Product Engineer?
        </h2>

        <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
          I&apos;m open to full-time opportunities and interesting product projects.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button href="/contact" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
            Get in touch
          </Button>
        </div>
      </section>
    </div>
  );
}
