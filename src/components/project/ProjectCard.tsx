import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Project } from "@/data/projects";
import { Tag } from "@/components/ui/Tag";
import { GithubIcon, BehanceIcon } from "@/components/ui/SocialIcons";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group relative flex flex-col bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:border-zinc-300 transition-all duration-300 ${
        featured ? "lg:grid lg:grid-cols-12 lg:gap-8 items-center" : ""
      }`}
    >
      {/* Project Visual Container */}
      <div
        className={`relative overflow-hidden bg-zinc-100 flex items-center justify-center border-b lg:border-b-0 border-zinc-100 ${
          featured ? "lg:col-span-6 h-64 lg:h-80 lg:border-r border-zinc-200/80" : "h-56"
        }`}
      >
        {project.image && project.image.startsWith("http") ? (
          <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-950/80 backdrop-blur-sm text-white text-[10px] font-mono tracking-wide uppercase">
              {project.category}
            </span>
          </div>
        ) : project.slug === "planora-ai-content-planner" ? (
          /* Planora Interactive UI Mockup */
          <div className="w-full h-full p-4 sm:p-6 flex items-center justify-center bg-gradient-to-br from-indigo-900/90 via-slate-900 to-zinc-950">
            <div className="w-full h-full rounded-xl bg-zinc-900/90 border border-indigo-500/30 p-4 shadow-xl flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center justify-between pb-2.5 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="h-5 w-5 rounded-md bg-indigo-600 flex items-center justify-center font-bold text-white text-[10px]">PL</span>
                  <span className="text-xs font-semibold text-white">Planora</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">AI SaaS</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono text-zinc-400">Live</span>
                </div>
              </div>

              <div className="py-2 space-y-2">
                <div className="grid grid-cols-4 gap-1.5">
                  <div className="p-1.5 rounded bg-zinc-800/80 border border-zinc-700/50">
                    <span className="text-[9px] text-zinc-400 block">Ideas</span>
                    <span className="text-xs font-bold text-white">12</span>
                  </div>
                  <div className="p-1.5 rounded bg-zinc-800/80 border border-zinc-700/50">
                    <span className="text-[9px] text-zinc-400 block">Draft</span>
                    <span className="text-xs font-bold text-white">4</span>
                  </div>
                  <div className="p-1.5 rounded bg-zinc-800/80 border border-zinc-700/50">
                    <span className="text-[9px] text-zinc-400 block">Scheduled</span>
                    <span className="text-xs font-bold text-indigo-400">3</span>
                  </div>
                  <div className="p-1.5 rounded bg-zinc-800/80 border border-zinc-700/50">
                    <span className="text-[9px] text-zinc-400 block">Published</span>
                    <span className="text-xs font-bold text-emerald-400">28</span>
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/40 space-y-1">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-zinc-300 font-medium truncate">Product Launch Teaser</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] bg-pink-500/20 text-pink-300 font-mono">Instagram</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-zinc-300 font-medium truncate">Behind the Scenes Reel</span>
                    <span className="px-1.5 py-0.5 rounded text-[9px] bg-cyan-500/20 text-cyan-300 font-mono">TikTok</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-[10px] font-mono text-zinc-400">
                <span>AI Prompt Chaining + Calendar</span>
                <span className="text-indigo-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                  Live Demo →
                </span>
              </div>
            </div>
          </div>
        ) : (
          /* Abstract Architectural Wireframe Visualizer fallback */
          <div className="w-full h-full p-8 flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200/60">
            <div className="w-full h-full rounded-xl bg-white/90 border border-zinc-200/80 p-5 shadow-sm flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-orange-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-200" />
                </div>
                <span className="text-[10px] font-mono font-medium text-zinc-400 uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <div className="py-4 space-y-2">
                <div className="h-4 w-3/4 bg-zinc-900/10 rounded-sm" />
                <div className="h-3 w-1/2 bg-orange-600/20 rounded-sm" />
                <div className="grid grid-cols-3 gap-2 pt-2">
                  <div className="h-8 bg-zinc-50 border border-zinc-100 rounded p-1.5 flex flex-col justify-center">
                    <div className="h-1.5 w-8 bg-zinc-300 rounded-sm mb-1" />
                    <div className="h-2 w-12 bg-zinc-400 rounded-sm" />
                  </div>
                  <div className="h-8 bg-zinc-50 border border-zinc-100 rounded p-1.5 flex flex-col justify-center">
                    <div className="h-1.5 w-8 bg-zinc-300 rounded-sm mb-1" />
                    <div className="h-2 w-10 bg-orange-400 rounded-sm" />
                  </div>
                  <div className="h-8 bg-zinc-50 border border-zinc-100 rounded p-1.5 flex flex-col justify-center">
                    <div className="h-1.5 w-8 bg-zinc-300 rounded-sm mb-1" />
                    <div className="h-2 w-11 bg-zinc-400 rounded-sm" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-zinc-100 text-[11px] font-mono text-zinc-500">
                <span>Role: {project.role}</span>
                <span className="text-orange-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                  Explore →
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div
        className={`p-6 sm:p-8 flex flex-col justify-between flex-1 ${
          featured ? "lg:col-span-6" : ""
        }`}
      >
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Tag variant="orange" size="sm">
              {project.category}
            </Tag>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-serif text-zinc-900 group-hover:text-orange-600 transition-colors">
              <Link href={`/work/${project.slug}`}>
                {project.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <Tag key={tech} variant="neutral" size="sm">
                {tech}
              </Tag>
            ))}
            {project.technologies.length > 4 && (
              <Tag variant="subtle" size="sm">
                +{project.technologies.length - 4} more
              </Tag>
            )}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-6 mt-6 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 group-hover:text-orange-600 transition-colors"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>Read Case Study</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="text-zinc-500 hover:text-zinc-900 transition-colors p-1"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Behance case study for ${project.title}`}
                className="text-zinc-500 hover:text-orange-600 transition-colors p-1"
                title="View Behance Case Study"
              >
                <BehanceIcon className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-orange-700 bg-orange-50 hover:bg-orange-100 rounded-md transition-colors"
              >
                <span>Live App</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
