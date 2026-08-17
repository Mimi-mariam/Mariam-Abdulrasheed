import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-3 mb-10",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-600 inline-block" />
          <span className="text-xs font-mono font-medium tracking-wider uppercase text-zinc-500">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-zinc-900 tracking-tight font-normal leading-[1.2]">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
