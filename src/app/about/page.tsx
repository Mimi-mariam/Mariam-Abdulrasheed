import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Compass, Layers, Code2, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Me",
  description: "I'm Mariam, a Product Engineer based in Nigeria. I like being close to the whole product — moving from product thinking, design, engineering, and AI to working products.",
};

const BUILD_STEPS = [
  {
    number: "01",
    title: "Understand",
    description: "I start with the problem, the users, and what we're actually trying to achieve.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Shape",
    description: "I map the experience, define the requirements, and prototype the product before committing to implementation.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Build",
    description: "I turn the experience into a working product using modern web technologies and solid engineering practices.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Integrate",
    description: "When AI or automation can genuinely improve the product, I look for ways to integrate it thoughtfully.",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Ship",
    description: "A product isn't finished when the code works. I test, deploy, learn, and improve.",
    icon: Send,
  },
];

const BELIEFS = [
  {
    title: "Clarity over complexity.",
    description: "Good products don't need unnecessary complexity to feel powerful.",
  },
  {
    title: "Technology should solve a problem.",
    description: "I don't add AI because it's trending. I use it when it makes the product better.",
  },
  {
    title: "Design and engineering should work together.",
    description: "The best products happen when the experience and implementation are considered together.",
  },
  {
    title: "Shipping matters.",
    description: "A great idea sitting in Figma isn't a product yet.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-20 py-4 max-w-3xl mx-auto">
      {/* 1. Header & Story */}
      <section className="space-y-8">
        <span className="text-xs font-mono font-medium tracking-widest text-orange-600 uppercase">
          About Me
        </span>

        <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-8 sm:gap-12">
          <div className="space-y-6 flex-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-zinc-950 font-normal tracking-tight leading-[1.15]">
              I like being close to the whole product.
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-zinc-700 font-sans leading-relaxed">
              <p>
                I&apos;m Mariam, a Product Engineer based in Nigeria.
              </p>
              <p>
                I started with product design, learning how to understand users, think through problems, and turn ideas into clear experiences.
              </p>
              <p>
                Over time, I wanted to go further.
              </p>
              <p>
                I didn&apos;t just want to design what the product should look like. I wanted to understand how it worked, build it, connect the pieces, and see the idea become something people could actually use.
              </p>
              <p>
                That&apos;s what led me into product engineering.
              </p>
              <p className="pt-2">
                Today, I work across <strong className="text-zinc-950 font-semibold">product thinking, design, engineering, and AI</strong> &mdash; moving from an early idea to a working product without treating those stages as separate worlds.
              </p>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="shrink-0 mx-auto md:mx-0">
            <div className="relative w-44 h-56 sm:w-52 sm:h-64 rounded-2xl overflow-hidden border border-zinc-200/90 shadow-sm bg-zinc-100">
              <Image
                src="/images/mariam-profile.jpg"
                alt="Mariam Abdul-Rasheed , Product Engineer"
                fill
                sizes="(max-width: 640px) 176px, 208px"
                priority
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-zinc-200/80" />

      {/* 2. How I build */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-serif text-zinc-950 font-normal">
            How I build
          </h2>
        </div>

        <div className="space-y-4">
          {BUILD_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row sm:items-start gap-4 transition-all duration-200 hover:border-zinc-300"
              >
                <div className="flex items-center gap-3 shrink-0 sm:w-48">
                  <span className="font-mono text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">
                    {step.number}
                  </span>
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-zinc-500" />
                    <h3 className="font-serif text-lg text-zinc-950 font-normal">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed flex-1">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <hr className="border-zinc-200/80" />

      {/* 3. What I believe */}
      <section className="space-y-8">
        <h2 className="text-2xl sm:text-3xl font-serif text-zinc-950 font-normal">
          What I believe
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BELIEFS.map((belief) => (
            <div
              key={belief.title}
              className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] space-y-2 hover:border-zinc-300 transition-colors"
            >
              <h3 className="text-base font-semibold text-zinc-950">
                {belief.title}
              </h3>
              <p className="text-sm text-zinc-600 font-sans leading-relaxed">
                {belief.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-zinc-200/80" />

      {/* 4. What I'm looking for */}
      <section className="p-8 sm:p-10 rounded-3xl bg-zinc-900 text-zinc-100 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-wider text-orange-400">
            Next Opportunity
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-white font-normal">
            What I&apos;m looking for
          </h2>
        </div>

        <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-2xl">
          I&apos;m currently open to <strong className="text-white font-medium">Product Engineering opportunities</strong> where I can work closely with a team, solve meaningful problems, and help turn ideas into products.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Button href="/work" icon={<ArrowRight className="h-4 w-4" />}>
            View my work
          </Button>
          <Button
            href="/contact"
            variant="outline"
            className="bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700 hover:text-white"
            icon={<ArrowRight className="h-4 w-4" />}
          >
            Let&apos;s connect
          </Button>
        </div>
      </section>
    </div>
  );
}
