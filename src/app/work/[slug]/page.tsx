import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles, CheckCircle2, Code2, Layers } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { GithubIcon, BehanceIcon } from "@/components/ui/SocialIcons";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Product Case Study`,
      description: project.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="space-y-16 py-6 max-w-4xl mx-auto">
      {/* Back to Work Link */}
      <div>
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-500 hover:text-orange-600 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to all projects</span>
        </Link>
      </div>

      {/* Case Study Header */}
      <header className="space-y-6 pb-10 border-b border-zinc-200">
        <div className="flex flex-wrap items-center gap-2">
          <Tag variant="orange" size="sm">
            {project.category}
          </Tag>
          <span className="text-xs font-mono text-zinc-400">&bull;</span>
          <span className="text-xs font-mono text-zinc-500">
            Timeline: {caseStudy.overview.timeline}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-zinc-950 font-normal leading-[1.2]">
          {project.title}
        </h1>

        <p className="text-lg text-zinc-600 font-sans leading-relaxed">
          {project.tagline}
        </p>

        {/* Live Project Quick Actions */}
        <div className="flex flex-wrap items-center gap-3 pt-4">
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              external
              size="md"
              icon={<ArrowUpRight className="h-4 w-4" />}
            >
              Open Live Product
            </Button>
          )}
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              external
              variant="outline"
              size="md"
              icon={<GithubIcon className="h-4 w-4" />}
            >
              View Repository
            </Button>
          )}
          {project.behanceUrl && (
            <Button
              href={project.behanceUrl}
              external
              variant="outline"
              size="md"
              icon={<BehanceIcon className="h-4 w-4" />}
            >
              Behance Case Study
            </Button>
          )}
        </div>
      </header>

      {/* Project Meta Details Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl bg-zinc-100/70 border border-zinc-200/80 text-xs">
        <div>
          <span className="font-mono text-zinc-400 uppercase tracking-wider block mb-1">
            My Role
          </span>
          <span className="font-semibold text-zinc-900 font-sans">{caseStudy.overview.role}</span>
        </div>
        <div>
          <span className="font-mono text-zinc-400 uppercase tracking-wider block mb-1">
            Timeline
          </span>
          <span className="font-semibold text-zinc-900 font-sans">{caseStudy.overview.timeline}</span>
        </div>
        <div className="col-span-2">
          <span className="font-mono text-zinc-400 uppercase tracking-wider block mb-1">
            Technologies &amp; Tools
          </span>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {caseStudy.overview.technologies.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded bg-white text-zinc-700 font-mono text-[11px] border border-zinc-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Cover Hero Image (if available from Behance/CDN) */}
      {project.image && project.image.startsWith("http") && (
        <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        </div>
      )}

      {/* Narrative Sections (Problem → Approach → Design → Build → AI → Outcome) */}
      <article className="space-y-16 text-zinc-800">
        {/* 1. Problem Statement */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              01. The Problem
            </h2>
          </div>
          <h3 className="text-2xl font-serif text-zinc-950 font-normal">
            Addressing Core Friction Points
          </h3>
          <p className="text-base text-zinc-600 leading-relaxed">
            {caseStudy.problem.statement}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {caseStudy.problem.painPoints.map((point, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-sm space-y-1.5"
              >
                <span className="text-xs font-mono font-semibold text-orange-600">
                  Pain Point 0{index + 1}
                </span>
                <p className="text-xs text-zinc-700 leading-relaxed font-sans">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Target Users & Context */}
        <section className="space-y-4 pt-8 border-t border-zinc-200/80">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              02. Users &amp; Context
            </h2>
          </div>
          <h3 className="text-2xl font-serif text-zinc-950 font-normal">
            Who was this built for?
          </h3>
          <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3">
            <p className="text-sm text-zinc-700">
              <strong className="text-zinc-950 font-medium">Target Audience: </strong>
              {caseStudy.usersAndContext.targetAudience}
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed">
              <strong className="text-zinc-950 font-medium">Context &amp; Environment: </strong>
              {caseStudy.usersAndContext.context}
            </p>
          </div>
        </section>

        {/* 3. Product & Design Approach */}
        <section className="space-y-4 pt-8 border-t border-zinc-200/80">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              03. Strategic Approach
            </h2>
          </div>
          <h3 className="text-2xl font-serif text-zinc-950 font-normal">
            Deconstructing the Solution
          </h3>
          <p className="text-base text-zinc-600 leading-relaxed">
            {caseStudy.approach.strategy}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            {caseStudy.approach.keyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-zinc-200 space-y-2"
              >
                <span className="text-xs font-mono font-semibold text-zinc-900 block">
                  Pillar {idx + 1}: {pillar.title}
                </span>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Product Decisions & Tradeoffs */}
        <section className="space-y-4 pt-8 border-t border-zinc-200/80">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              04. Architectural &amp; Product Decisions
            </h2>
          </div>
          <h3 className="text-2xl font-serif text-zinc-950 font-normal">
            Why It Was Built This Way
          </h3>

          <div className="space-y-4 pt-2">
            {caseStudy.productDecisions.map((decision, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3"
              >
                <h4 className="text-base font-semibold text-zinc-900 font-sans">
                  {decision.title}
                </h4>
                <p className="text-sm text-zinc-700 leading-relaxed">
                  <strong className="text-zinc-950 font-medium">Rationale: </strong>
                  {decision.rationale}
                </p>
                {decision.tradeoff && (
                  <p className="text-xs text-zinc-500 font-mono bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                    <strong>Tradeoff evaluated:</strong> {decision.tradeoff}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 5. Design & Engineering / Implementation */}
        <section className="space-y-6 pt-8 border-t border-zinc-200/80">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              05. Design &amp; Implementation
            </h2>
          </div>
          <h3 className="text-2xl font-serif text-zinc-950 font-normal">
            {project.category === "Full Stack & AI" || project.slug === "marizhaircastle-ecommerce"
              ? "Execution in Next.js & Design Systems"
              : "Design System Architecture & Developer Handoff"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Design side */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3">
              <div className="flex items-center gap-2 text-zinc-900 font-medium">
                <Layers className="h-4 w-4 text-orange-600" />
                <span>Design System &amp; UX</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {caseStudy.design.description}
              </p>
              <ul className="space-y-2 pt-2 text-xs text-zinc-700">
                {caseStudy.design.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Build side */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 space-y-3">
              <div className="flex items-center gap-2 text-zinc-900 font-medium">
                <Code2 className="h-4 w-4 text-orange-600" />
                <span>
                  {project.category === "Full Stack & AI" || project.slug === "marizhaircastle-ecommerce"
                    ? "Full-Stack Build"
                    : "Specification & Tokens"}
                </span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {caseStudy.build.architecture}
              </p>
              <ul className="space-y-2 pt-2 text-xs text-zinc-700">
                {caseStudy.build.technicalHighlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. AI Integration / Automation (if present) */}
        {caseStudy.aiAndAutomation && (
          <section className="p-6 sm:p-8 rounded-2xl bg-orange-50/70 border border-orange-200/70 space-y-4">
            <div className="flex items-center gap-2 text-orange-950 font-semibold">
              <Sparkles className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-mono uppercase tracking-wider">
                Concrete AI &amp; Automation Integration
              </span>
            </div>
            <p className="text-sm text-orange-950 leading-relaxed">
              {caseStudy.aiAndAutomation.implementation}
            </p>
            <div className="pt-2 border-t border-orange-200/60 text-xs font-mono text-orange-900">
              <strong>Measured Impact: </strong>
              {caseStudy.aiAndAutomation.impact}
            </div>
          </section>
        )}

        {/* 7. Outcome & Achievements */}
        <section className="space-y-4 pt-8 border-t border-zinc-200/80">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-zinc-500">
              06. Outcome &amp; Impact
            </h2>
          </div>
          <h3 className="text-2xl font-serif text-zinc-950 font-normal">
            Shipped and Verified
          </h3>
          <p className="text-base text-zinc-600 leading-relaxed">
            {caseStudy.outcome.summary}
          </p>

          <div className="space-y-2 pt-2">
            {caseStudy.outcome.achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-zinc-200/80 text-xs text-zinc-800"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="font-medium">{achievement}</span>
              </div>
            ))}
          </div>
        </section>
      </article>

      {/* Case Study Footer Navigation */}
      <div className="pt-12 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-zinc-600 hover:text-orange-600 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to All Projects</span>
        </Link>
        <Button href="/contact" size="sm">
          Discuss This Project With Mariam
        </Button>
      </div>
    </div>
  );
}
