import React from "react";
import { Compass, Layout, Code2, Sparkles } from "lucide-react";
import { CAPABILITIES_DATA } from "@/data/projects";

const PILLARS = [
  {
    key: "product" as const,
    title: "Product",
    icon: Compass,
  },
  {
    key: "design" as const,
    title: "Design",
    icon: Layout,
  },
  {
    key: "engineering" as const,
    title: "Engineering",
    icon: Code2,
  },
  {
    key: "aiAndAutomation" as const,
    title: "AI",
    icon: Sparkles,
  },
];

export function CapabilityGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {PILLARS.map((pillar) => {
        const Icon = pillar.icon;
        const items = CAPABILITIES_DATA[pillar.key];

        return (
          <div
            key={pillar.key}
            className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-zinc-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)] transition-all duration-200 flex flex-col justify-between space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-orange-50 text-orange-600">
                <Icon className="h-4 w-4" />
              </div>
              <h3 className="font-serif text-xl text-zinc-950 font-normal">
                {pillar.title}
              </h3>
            </div>

            <p className="text-sm text-zinc-600 font-sans leading-relaxed">
              {items.join(" · ")}
            </p>
          </div>
        );
      })}
    </div>
  );
}
