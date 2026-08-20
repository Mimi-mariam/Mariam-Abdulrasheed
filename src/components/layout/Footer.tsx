import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/data/projects";
import { GithubIcon, LinkedinIcon, BehanceIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 bg-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded bg-zinc-900 text-zinc-50 flex items-center justify-center font-serif text-xs">
                M
              </span>
              <span className="font-serif text-lg text-zinc-900">
                {SITE_CONFIG.name}
              </span>
            </div>
            <p className="text-sm text-zinc-600 max-w-sm leading-relaxed">
              Product Engineer building high-impact software from initial user insight to scalable code and AI workflow integration.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for full-time product engineering & high-impact projects</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>
                <Link href="/" className="hover:text-orange-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-orange-600 transition-colors">
                  Work / Case Studies
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-600 transition-colors">
                  About & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-orange-600 transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Networks */}
          <div className="space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
              Connect
            </p>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>
                <a
                  href={SITE_CONFIG.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-orange-600 transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-orange-600 transition-colors"
                >
                  <LinkedinIcon className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.socials.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-orange-600 transition-colors"
                >
                  <BehanceIcon className="h-3.5 w-3.5" />
                  <span>Behance</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-orange-600 transition-colors font-mono text-xs block pt-1 text-zinc-800"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} {SITE_CONFIG.name}. Built with Next.js & Tailwind CSS.</p>
          <p className="font-mono text-[11px] text-zinc-400">
            Think → Design → Build → Integrate AI → Ship
          </p>
        </div>
      </div>
    </footer>
  );
}
