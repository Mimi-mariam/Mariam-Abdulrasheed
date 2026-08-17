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
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#fafaf9]/90 backdrop-blur-md border-b border-zinc-200/60 py-3.5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)]"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand identity */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-visible:outline-none"
          aria-label="Mariam Abdul-Rasheed Homepage"
          onClick={() => setIsOpen(false)}
        >
          <span className="h-7 w-7 rounded-md bg-zinc-900 text-zinc-50 flex items-center justify-center font-serif text-sm font-medium tracking-tight group-hover:bg-orange-600 transition-colors">
            M
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-zinc-900 tracking-tight leading-none group-hover:text-orange-600 transition-colors">
              {SITE_CONFIG.name}
            </span>
            <span className="text-[11px] font-mono text-zinc-500 tracking-tight leading-tight">
              {SITE_CONFIG.role}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
          <div className="flex items-center gap-1 p-1 bg-white/70 backdrop-blur-sm border border-zinc-200/70 rounded-full shadow-xs">
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
                      ? "bg-zinc-900 text-white shadow-xs"
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
            className="ml-3 inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-full shadow-xs transition-colors"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 border border-zinc-200/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600"
          aria-expanded={isOpen}
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5 text-zinc-800" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#fafaf9]/95 backdrop-blur-lg border-b border-zinc-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
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
                    "px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between",
                    isActive
                      ? "bg-orange-50 text-orange-700 font-semibold"
                      : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-zinc-200 mt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-orange-600 text-white font-medium text-sm hover:bg-orange-700 shadow-sm"
              >
                <span>Let&apos;s Build Together</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
