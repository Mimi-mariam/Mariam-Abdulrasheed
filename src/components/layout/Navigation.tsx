"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/data/projects";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer on path change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || isOpen
            ? "bg-[#fafaf9]/95 backdrop-blur-md border-b border-zinc-200/80 py-3.5 shadow-sm"
            : "bg-transparent py-4 sm:py-5"
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand identity */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus-visible:outline-none"
            aria-label="Mariam Abdul-Rasheed Homepage"
            onClick={() => setIsOpen(false)}
          >
            <span className="h-8 w-8 rounded-lg bg-zinc-900 text-zinc-50 flex items-center justify-center font-serif text-sm font-semibold tracking-tight group-hover:bg-orange-600 transition-colors shadow-sm">
              M
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-zinc-900 tracking-tight leading-none group-hover:text-orange-600 transition-colors">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[11px] font-mono text-zinc-500 tracking-tight leading-tight mt-0.5">
                {SITE_CONFIG.role}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            <div className="flex items-center gap-1 p-1 bg-white/80 backdrop-blur-sm border border-zinc-200/80 rounded-full shadow-sm">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200",
                      isActive
                        ? "bg-zinc-900 text-white shadow-sm"
                        : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/80"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-full shadow-sm transition-colors"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-xl text-zinc-800 hover:text-zinc-950 hover:bg-zinc-100/80 border border-zinc-200/80 bg-white/80 backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 active:scale-95"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-5 w-5 text-zinc-900" /> : <Menu className="h-5 w-5 text-zinc-900" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex flex-col pt-16">
          {/* Dimmed Backdrop */}
          <div
            className="fixed inset-0 bg-zinc-950/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Menu Panel */}
          <div className="relative z-50 bg-[#fafaf9] border-b border-zinc-200/80 shadow-2xl px-6 py-6 w-full">
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between",
                      isActive
                        ? "bg-orange-50 text-orange-700 font-semibold border border-orange-200/60"
                        : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive ? (
                      <span className="h-2 w-2 rounded-full bg-orange-600" />
                    ) : (
                      <span className="text-zinc-400 font-mono text-xs">→</span>
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-zinc-200/80 mt-2 space-y-2">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-orange-600 text-white font-medium text-sm hover:bg-orange-700 shadow-sm active:scale-[0.98] transition-all"
                >
                  <span>Let&apos;s Build Together</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <div className="pt-2 text-center">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-xs font-mono text-zinc-500 hover:text-orange-600 transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
