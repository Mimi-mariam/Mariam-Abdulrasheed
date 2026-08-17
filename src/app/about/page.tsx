import React from "react";
import type { Metadata } from "next";
import { ArrowRight, Compass, Code2, Sparkles, Terminal, FileText } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Mariam Abdul-Rasheed",
  description: "Product Engineer based in Nigeria — bridging product strategy, accessible design systems, Next.js engineering, and AI integration.",
};

export default function AboutPage() {
  return (
    <div className="space-y-16 py-6 max-w-3xl mx-auto">
      {/* Header */}
      <div>
        <SectionHeader
          eyebrow="About Me"
          title="Product Thinking. Clean Code. Real Delivery."
          description="I am a Product Engineer based in Nigeria. I believe great software happens at the intersection of deep user understanding, meticulous interface craft, and sound technical architecture."
        />
      </div>

      {/* Main Narrative */}
      <article className="space-y-8 text-base text-zinc-700 font-sans leading-relaxed">
        <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-sm space-y-4">
          <h3 className="text-xl font-serif text-zinc-950 font-normal">
            Why Product Engineering?
          </h3>
          <p>
            Traditional handoffs between product managers, UI designers, and software engineers often result in lost nuance, delayed timelines, and misaligned user experiences.
          </p>
          <p>
            As a <strong className="text-zinc-950 font-medium">Product Engineer</strong>, I work end-to-end. I don&apos;t just take a spec and start writing code—I validate the user problem, prototype and stress-test the UI in Figma, engineer the application using <strong className="text-zinc-950 font-medium">Next.js and TypeScript</strong>, and integrate AI to automate repetitive workflows.
          </p>
        </div>

        {/* 4 Steps of My Workflow */}
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-serif text-zinc-950 font-normal">
            How I Approach Building Products
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-white border border-zinc-200 space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 font-medium text-sm">
                <Compass className="h-4 w-4 text-orange-600" />
                <span>1. Think &amp; Scope</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Deconstruct the problem, understand the user pain points, define measurable goals, and write concise technical PRDs.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-zinc-200 space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 font-medium text-sm">
                <Terminal className="h-4 w-4 text-orange-600" />
                <span>2. Design &amp; Prototype</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Build high-fidelity, accessible interfaces in Figma, validating interactions and establishing reusable design tokens.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-zinc-200 space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 font-medium text-sm">
                <Code2 className="h-4 w-4 text-orange-600" />
                <span>3. Build with Rigor</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Implement production-ready code with Next.js (App Router), strict TypeScript type safety, and Tailwind CSS.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-zinc-200 space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 font-medium text-sm">
                <Sparkles className="h-4 w-4 text-orange-600" />
                <span>4. AI &amp; Automation</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Incorporate structured LLM pipelines and automation to supercharge product capabilities and developer velocity.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Philosophy */}
        <div className="p-6 rounded-2xl bg-zinc-100/70 border border-zinc-200/80 space-y-3">
          <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-zinc-700">
            Principles I Build By
          </h4>
          <ul className="space-y-2 text-xs sm:text-sm text-zinc-700">
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
              <span><strong>Clarity over complexity:</strong> The best architecture is the simplest one that solves the user&apos;s problem reliably.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
              <span><strong>Accessibility by default:</strong> Accessible software is not an afterthought; keyboard navigation and contrast matter.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-600 mt-2 shrink-0" />
              <span><strong>Real AI capabilities:</strong> Use AI to solve real customer bottlenecks with strict structured outputs, not gimmicks.</span>
            </li>
          </ul>
        </div>
      </article>

      {/* Call to Actions */}
      <div className="pt-8 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-4">
        <Button href="/resume" variant="outline" icon={<FileText className="h-4 w-4" />}>
          View Resume &amp; Experience
        </Button>
        <Button href="/contact" icon={<ArrowRight className="h-4 w-4" />}>
          Let&apos;s Connect
        </Button>
      </div>
    </div>
  );
}
