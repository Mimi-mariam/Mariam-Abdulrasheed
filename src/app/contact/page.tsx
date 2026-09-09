"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon, BehanceIcon } from "@/components/ui/SocialIcons";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(SITE_CONFIG.email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = SITE_CONFIG.email;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-12 py-6 max-w-3xl mx-auto">
      {/* Header */}
      <div>
        <SectionHeader
          eyebrow="Contact &amp; Connect"
          title="Let's build something exceptional."
          description="Whether you have an upcoming project, a full-time role, or want to discuss product engineering, AI workflows, or design systems,I'd love to hear from you."
        />
      </div>

      {/* Main Contact Card */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-8">
        {/* Direct Email Action */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400">
            Primary Email
          </span>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex-1 px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 font-mono text-sm sm:text-base hover:border-orange-500 transition-colors flex items-center gap-2.5"
            >
              <Mail className="h-4 w-4 text-orange-600 shrink-0" />
              <span className="truncate">{SITE_CONFIG.email}</span>
            </a>

            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={handleCopyEmail}
              icon={copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4 text-zinc-500" />}
              className="shrink-0"
            >
              {copied ? "Copied to Clipboard" : "Copy Email"}
            </Button>
          </div>
        </div>

        {/* Professional Profiles */}
        <div className="pt-6 border-t border-zinc-100 space-y-4">
          <span className="text-xs font-mono font-medium uppercase tracking-wider text-zinc-400">
            Professional Networks
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href={SITE_CONFIG.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-zinc-200/80 hover:border-zinc-300 hover:bg-zinc-50/70 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <GithubIcon className="h-4 w-4 text-zinc-700 group-hover:text-orange-600 transition-colors" />
                <span className="text-xs font-medium text-zinc-900">GitHub</span>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
            </a>

            <a
              href={SITE_CONFIG.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-zinc-200/80 hover:border-zinc-300 hover:bg-zinc-50/70 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <LinkedinIcon className="h-4 w-4 text-zinc-700 group-hover:text-orange-600 transition-colors" />
                <span className="text-xs font-medium text-zinc-900">LinkedIn</span>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
            </a>

            <a
              href={SITE_CONFIG.socials.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl border border-zinc-200/80 hover:border-zinc-300 hover:bg-zinc-50/70 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-2.5">
                <BehanceIcon className="h-4 w-4 text-zinc-700 group-hover:text-orange-600 transition-colors" />
                <span className="text-xs font-medium text-zinc-900">Behance</span>
              </div>
              <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
            </a>
          </div>
        </div>

        {/* Location and Availability */}
        <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Currently available for full-time Product Engineering roles</span>
          </div>
          <span className="font-mono">Location: Nigeria (Open to Remote)</span>
        </div>
      </div>
    </div>
  );
}
