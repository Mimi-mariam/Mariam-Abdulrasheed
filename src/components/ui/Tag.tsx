import React from "react";
import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "neutral" | "orange" | "subtle";
  size?: "sm" | "md";
  className?: string;
}

export function Tag({
  children,
  variant = "neutral",
  size = "md",
  className,
}: TagProps) {
  const baseStyles =
    "inline-flex items-center font-mono font-medium rounded-md tracking-tight border transition-colors";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[11px]",
    md: "px-2.5 py-1 text-xs",
  };

  const variantStyles = {
    neutral: "bg-zinc-100 text-zinc-700 border-zinc-200/80",
    orange: "bg-orange-50 text-orange-800 border-orange-200/60 font-semibold",
    subtle: "bg-white/60 text-zinc-600 border-zinc-200/60",
  };

  return (
    <span
      className={cn(
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
