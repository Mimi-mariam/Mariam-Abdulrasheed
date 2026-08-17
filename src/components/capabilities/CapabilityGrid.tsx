import React from "react";
import { Compass, Layout, Code2, Sparkles } from "lucide-react";
import { CAPABILITIES_DATA } from "@/data/projects";

const PILLARS = [
  {
    key: "product" as const,
    title: "1. Product Thinking",
    subtitle: "Discovery & Strategy",
    description: "Defining clear problem statements, mapping user journeys, writing precise PRDs, and scoping achievable MVPs.",
    icon: Compass,
    color: "text-zinc-900",
    bgColor: "bg-zinc-100",
  },
  {
    key: "design" as const,
    title: "2. Design & UX",
    subtitle: "Interaction & Systems",
    description: "Crafting intuitive interfaces, accessible WCAG 2.1 AA design systems, and rapid interactive prototypes in Figma.",
    icon: Layout,
    color: "text-zinc-900",
    bgColor: "bg-zinc-100",
  },
  {
    key: "engineering" as const,
    title: "3. Modern Engineering",
    subtitle: "Frontend & Full-Stack",
    description: "Building production Next.js App Router applications with TypeScript, Tailwind CSS, PostgreSQL, and performant architectures.",
    icon: Code2,
    color: "text-zinc-900",
    bgColor: "bg-zinc-100",
  },
  {
    key: "aiAndAutomation" as const,
    title: "4. AI & Automation",
    subtitle: "Intelligent Workflows",
    description: "Integrating OpenAI tool-calling, structured LLM outputs, and dev automations that accelerate delivery without gimmicks.",
    icon: Sparkles,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

export function CapabilityGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {PILLARS.map((pillar) => {
        const Icon = pillar.icon;
        const skills = CAPABILITIES_DATA[pillar.key];

        return (
          <div
            key={pillar.key}
            className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-zinc-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2.5 rounded-xl ${pillar.bgColor}`}>
                  <Icon className={`h-5 w-5 ${pillar.color}`} />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                  {pillar.subtitle}
                </span>
              </div>

              <h3 className="font-serif text-lg text-zinc-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                {pillar.description}
              </p>
            </div>

            <div className="pt-4 border-t border-zinc-100">
              <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2.5">
                Core Capabilities
              </p>
              <ul className="space-y-1.5">
                {skills.slice(0, 5).map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-xs text-zinc-700 font-sans"
                  >
                    <span className="h-1 w-1 rounded-full bg-orange-600 shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
