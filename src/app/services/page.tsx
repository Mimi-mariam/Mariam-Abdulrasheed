import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ShoppingBag,
  Bot,
  Globe,
  Compass,
  Palette,
  Code2,
  Rocket,
  MessageSquare,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { type Project, PROJECTS_DATA, SITE_CONFIG } from "@/data/projects";
import {
  CORE_SERVICES,
  BUILD_CAPABILITIES,
  PROCESS_STEPS,
  PRICING_TIERS,
} from "@/data/services";

export const metadata: Metadata = {
  title: "Services & Studio Offerings",
  description:
    "Product engineering services by Mariam Abdul-Rasheed. High-performance websites, full-featured e-commerce storefronts, and AI business automation built from idea to deployment.",
  openGraph: {
    title: "Services & Pricing | Mariam Abdul-Rasheed , Product Engineer",
    description:
      "I design, build, and ship digital products that people can actually use. Websites, e-commerce, and AI automation.",
    url: `${SITE_CONFIG.meta.url}/services`,
  },
};

export default function ServicesPage() {
  const selectedProjectSlugs = [
    "marizhaircastle-ecommerce",
    "planora-ai-content-planner",
    "medvive-telehealth-platform",
  ] as const;

  const selectedProjects = selectedProjectSlugs
    .map((slug) => PROJECTS_DATA.find((p) => p.slug === slug))
    .filter((project): project is Project => project !== undefined);

  return (
    <div className="pt-24 pb-20 sm:pt-32 sm:pb-28">
      {/* SECTION 01 , HERO */}
      <section className="relative overflow-hidden pb-16 sm:pb-24 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-mono mb-6">
                <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                <span>Product Engineering & Studio Services</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-zinc-900 tracking-tight leading-[1.15] mb-6">
                Have an idea? <br className="hidden sm:inline" />
                <span className="italic font-normal text-zinc-800">
                  I can turn it into a real product.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="text-lg sm:text-xl text-zinc-600 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl">
                I design, build, and ship websites, e-commerce experiences, and
                AI-powered digital products for businesses and founders.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-700 text-white font-medium text-sm hover:bg-orange-800 shadow-sm shadow-orange-700/20 hover:shadow-orange-700/30 transition-all duration-200"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-zinc-800 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 font-medium text-sm transition-all duration-200"
                >
                  <span>View My Work</span>
                  <ArrowRight className="h-4 w-4 text-zinc-500 rotate-90" />
                </a>
              </div>
            </Reveal>

            {/* Quick credibility markers */}
            <Reveal delay={0.26}>
              <div className="mt-12 pt-8 border-t border-zinc-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-zinc-500 font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>Zero handoff friction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>Production-ready code</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>AI workflow integration</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 02 , SERVICES (3 Core Offerings) */}
      <section id="services" className="py-20 sm:py-28 border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16">
            <Reveal>
              <p className="text-xs font-mono uppercase tracking-widest text-orange-700 font-semibold mb-2">
                Services
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-zinc-900 tracking-tight">
                What I can build for you
              </h2>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Focused, high-impact offerings designed around business outcomes,
                frictionless user journeys, and technical execution.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service, idx) => {
              const Icon =
                idx === 0
                  ? Globe
                  : idx === 1
                  ? ShoppingBag
                  : Bot;

              return (
                <Reveal key={service.id} delay={idx * 0.1} className="h-full">
                  <div className="h-full flex flex-col justify-between bg-white rounded-2xl border border-zinc-200/80 p-6 sm:p-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-zinc-300 hover:shadow-[0_12px_24px_rgba(0,0,0,0.04)] transition-all duration-300 group">
                    <div>
                      {/* Top Bar */}
                      <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
                        <div className="h-10 w-10 rounded-xl bg-orange-50 border border-orange-200/60 flex items-center justify-center text-orange-600">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="font-mono text-xs text-zinc-500 font-semibold">
                          SERVICE {service.number}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div className="mt-6 mb-4">
                        <h3 className="text-xl sm:text-2xl font-serif text-zinc-900 group-hover:text-orange-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-xs text-orange-700 font-medium">
                          {service.tagline}
                        </p>
                      </div>

                      <p className="text-sm text-zinc-600 leading-relaxed mb-5">
                        {service.description}
                      </p>

                      {/* Best For , compact inline line */}
                      <p className="mb-5 text-xs text-zinc-700">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mr-2">
                          For
                        </span>
                        {service.bestFor}
                      </p>

                      {/* Top 3 Deliverables */}
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                          Includes
                        </span>
                        <ul className="space-y-2">
                          {service.deliverables.slice(0, 3).map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-xs text-zinc-600"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-orange-600 mt-1.5 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-6 mt-8 border-t border-zinc-100 flex items-center justify-between">
                      {service.exampleProjectSlug ? (
                        <Link
                          href={`/work/${service.exampleProjectSlug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-orange-600 transition-colors"
                        >
                          <span>See Example Project</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                      ) : (
                        <span className="text-xs text-zinc-500">Custom Built</span>
                      )}

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-orange-700 hover:text-orange-800 group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>Inquire</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Capabilities , folded into Services */}
          <div className="mt-16 pt-16 border-t border-zinc-100">
            <Reveal>
              <div className="max-w-2xl mb-10">
                <p className="text-xs font-mono uppercase tracking-widest text-orange-700 font-semibold mb-2">
                  Capabilities
                </p>
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-zinc-900 tracking-tight">
                  Backed by these capabilities
                </h3>
                <p className="mt-3 text-base text-zinc-600 leading-relaxed">
                  Every build pulls from a focused toolkit , from high-conversion
                  customer touchpoints to internal workflow utilities.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {BUILD_CAPABILITIES.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.05}>
                  <div className="h-full p-5 rounded-xl bg-white border border-zinc-200/80 hover:border-zinc-300 hover:shadow-sm transition-all duration-200 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-orange-700 font-medium block mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-base font-serif font-medium text-zinc-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 , HOW I WORK (Advantage + Process) */}
      <section className="py-20 sm:py-28 bg-[#fafaf9] border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-100 text-[11px] font-mono uppercase tracking-wider">
                  <Sparkles className="h-3.5 w-3.5 text-orange-400" />
                  <span>How I work</span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="text-3xl sm:text-4xl font-serif font-normal text-zinc-900 tracking-tight leading-tight">
                  Design isn&apos;t the handoff. <br />
                  <span className="italic font-normal text-zinc-700">
                    It&apos;s the beginning.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    I don&apos;t just design screens and pass them to a developer.
                  </p>
                  <p>
                    I can take a product from{" "}
                    <strong className="text-zinc-900 font-semibold">
                      idea → UX → interface → code → deployment.
                    </strong>
                  </p>
                  <p>
                    That means fewer handoffs, faster iteration, and a product that&apos;s
                    designed with implementation in mind from the start.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 hover:text-orange-800"
                  >
                    <span>Let&apos;s build together</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Flow Visualization */}
            <div className="lg:col-span-7">
              <div className="space-y-3 sm:space-y-4">
                {PROCESS_STEPS.map((step, idx) => {
                  const Icon =
                    idx === 0
                      ? Compass
                      : idx === 1
                      ? Palette
                      : idx === 2
                      ? Code2
                      : Rocket;

                  return (
                    <Reveal key={step.step} delay={idx * 0.08}>
                      <div className="p-5 sm:p-6 bg-white rounded-xl border border-zinc-200/80 shadow-sm hover:border-orange-300 transition-colors flex items-start gap-4">
                        <div className="h-10 w-10 rounded-lg bg-zinc-900 text-white flex items-center justify-center flex-shrink-0 font-mono text-xs font-bold">
                          <Icon className="h-5 w-5 text-orange-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-[11px] uppercase tracking-wider font-semibold text-orange-700">
                              STEP {step.step}
                            </span>
                          </div>
                          <h3 className="text-base font-serif font-medium text-zinc-900">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                            {step.detail}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 , SELECTED WORK (Top 3 Proof Points) */}
      <section id="work" className="py-20 sm:py-28 bg-[#fafaf9] border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4">
            <div>
              <Reveal>
                <p className="text-xs font-mono uppercase tracking-widest text-orange-700 font-semibold mb-2">
                  Proof of Work
                </p>
                <h2 className="text-3xl sm:text-4xl font-serif font-normal text-zinc-900 tracking-tight">
                  Selected Projects & Case Studies
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-900 hover:text-orange-600 transition-colors"
              >
                <span>View all projects</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Reveal>
          </div>

          <div className="border border-zinc-200/80 rounded-2xl bg-white overflow-hidden divide-y divide-zinc-100">
            {selectedProjects.map((project, idx) => (
              <Reveal key={project.id} delay={idx * 0.08}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex items-center justify-between gap-4 px-5 sm:px-8 py-5 hover:bg-zinc-50 transition-colors"
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <span className="font-mono text-xs text-zinc-500 font-semibold hidden sm:inline">
                      0{idx + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-serif text-zinc-900 group-hover:text-orange-700 transition-colors truncate">
                        {project.title}
                      </h3>
                      <p className="text-xs text-zinc-600 mt-0.5 truncate">
                        {project.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-700 shrink-0">
                    <span className="hidden sm:inline">Read case study</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 , PRICING */}
      <section id="pricing" className="py-20 sm:py-28 bg-[#fafaf9] border-b border-zinc-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-16">
            <Reveal>
              <p className="text-xs font-mono uppercase tracking-widest text-orange-700 font-semibold mb-2">
                Investment
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-zinc-900 tracking-tight">
                Transparent starting rates
              </h2>
              <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                Clear pricing benchmarks so you know what to expect. Final pricing depends on project scope, timeline, and custom integrations.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, idx) => (
              <Reveal key={tier.id} delay={idx * 0.1} className="h-full">
                <div
                  className={`h-full flex flex-col justify-between rounded-2xl p-6 sm:p-8 bg-white border transition-all duration-300 ${
                    tier.popular
                      ? "border-orange-500 shadow-[0_8px_24px_rgba(234,88,12,0.08)] relative"
                      : "border-zinc-200/80 shadow-sm hover:border-zinc-300"
                  }`}
                >
                  <div>
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-orange-700 text-white text-[10px] font-mono uppercase tracking-wider font-semibold">
                        Most Requested
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-serif font-medium text-zinc-900">
                        {tier.serviceName}
                      </h3>
                      <span className="text-[11px] font-mono text-zinc-500">
                        {tier.timelineEstimate}
                      </span>
                    </div>

                    <div className="mb-4">
                      <span className="text-xs text-zinc-600 font-mono block">
                        Starting from
                      </span>
                      <span className="text-3xl sm:text-4xl font-serif font-normal text-zinc-900">
                        {tier.startingPrice}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-600 leading-relaxed mb-6 pb-6 border-b border-zinc-100">
                      {tier.description}
                    </p>

                    <div className="space-y-3">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                        Key Deliverables
                      </span>
                      <ul className="space-y-2.5">
                        {tier.features.map((feat) => (
                          <li
                            key={feat}
                            className="flex items-start gap-2 text-xs text-zinc-600"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-zinc-100">
                    <Link
                      href="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold transition-all duration-200 ${
                        tier.popular
                          ? "bg-orange-700 text-white hover:bg-orange-800 shadow-sm"
                          : "bg-zinc-900 text-white hover:bg-zinc-800"
                      }`}
                    >
                      <span>Start with {tier.serviceName}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Custom Scope Footer Note */}
          <Reveal delay={0.3}>
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <h4 className="text-base font-serif font-medium text-zinc-900">
                    Need something custom or a phased roadmap?
                  </h4>
                </div>
                <p className="text-xs text-zinc-600">
                  Final pricing depends on scope and complexity. We can tailor a build plan to fit your exact milestones.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold transition-colors shrink-0"
              >
                <span>Need something custom? Let&apos;s talk</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 06 , FINAL CTA */}
      <section className="pt-20 sm:pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
          <Reveal>
            <div className="relative rounded-3xl bg-zinc-900 text-white p-8 sm:p-12 lg:p-16 overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-orange-600/20 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs font-mono mb-6">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for high-impact projects</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-tight mb-4">
                  Have something you want to build?
                </h2>

                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8 max-w-xl">
                  Tell me what you&apos;re working on. I&apos;ll help you figure out what it needs and how we can bring it to life.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-700 text-white font-medium text-sm hover:bg-orange-800 shadow-lg shadow-orange-700/30 transition-all duration-200"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-800 text-zinc-200 hover:bg-zinc-700 text-xs font-medium transition-colors"
                  >
                    <MessageSquare className="h-4 w-4 text-zinc-400" />
                    <span>Email Directly</span>
                    <ArrowUpRight className="h-4 w-4 text-zinc-500" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

