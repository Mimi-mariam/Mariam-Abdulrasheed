import React from "react";
import type { Metadata } from "next";
import { Download, MapPin } from "lucide-react";
import { RESUME_DATA } from "@/data/resume";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Resume , Mariam Abdul-Rasheed",
  description: "Comprehensive resume of Mariam Abdul-Rasheed , Product Engineer with expertise in Product Discovery, Design Systems, Next.js/TypeScript, and AI Workflows.",
};

export default function ResumePage() {
  return (
    <div className="space-y-12 py-6 max-w-3xl mx-auto">
      {/* Resume Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200">
        <div>
          <span className="text-xs font-mono font-medium text-orange-600 uppercase tracking-wider block mb-1">
            Curriculum Vitae
          </span>
          <h1 className="text-3xl font-serif text-zinc-950 font-normal">
            {RESUME_DATA.name}
          </h1>
          <p className="text-base font-medium text-zinc-900 mt-1">
            {RESUME_DATA.title}
          </p>
          {RESUME_DATA.pillars && (
            <p className="text-xs font-mono text-orange-600 mt-0.5">
              {RESUME_DATA.pillars}
            </p>
          )}
          <p className="text-xs text-zinc-500 font-sans mt-0.5">
            {RESUME_DATA.location}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            href="/resume.pdf"
            external
            size="md"
            icon={<Download className="h-4 w-4" />}
          >
            Download PDF
          </Button>
        </div>
      </div>

      {/* Structured Resume Canvas */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-10 font-sans">
        {/* Header / Contact summary inside sheet */}
        <div className="space-y-4 pb-6 border-b border-zinc-100">
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-zinc-950 font-normal">
              {RESUME_DATA.name}
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-1">
              <span className="text-base font-medium text-zinc-900">
                {RESUME_DATA.title}
              </span>
              {RESUME_DATA.pillars && (
                <>
                  <span className="text-xs text-zinc-300">&bull;</span>
                  <span className="text-xs font-mono text-orange-600 font-medium">
                    {RESUME_DATA.pillars}
                  </span>
                </>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-600">
            <div className="flex items-center gap-1.5 font-mono">
              <MapPin className="h-3.5 w-3.5 text-zinc-400" />
              <span>{RESUME_DATA.location}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${RESUME_DATA.contact.email}`}
                className="hover:text-orange-600 transition-colors font-mono"
              >
                {RESUME_DATA.contact.email}
              </a>
              {RESUME_DATA.contact.phone && (
                <a
                  href={`tel:${RESUME_DATA.contact.phone}`}
                  className="hover:text-orange-600 transition-colors font-mono text-zinc-500"
                >
                  {RESUME_DATA.contact.phone}
                </a>
              )}
              <a
                href={RESUME_DATA.contact.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition-colors"
              >
                Behance
              </a>
              <a
                href={RESUME_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={RESUME_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-600 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="space-y-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
            Professional Summary
          </h3>
          <div className="space-y-3 text-sm text-zinc-700 leading-relaxed">
            {RESUME_DATA.summary.split("\n\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </section>

        {/* Skills Matrix */}
        <section className="space-y-4 pt-6 border-t border-zinc-100">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
            Core Competencies &amp; Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {RESUME_DATA.skills.map((skillGroup) => (
              <div key={skillGroup.category} className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 space-y-2">
                <span className="text-xs font-mono font-semibold text-zinc-900 block">
                  {skillGroup.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded bg-white text-zinc-700 text-[11px] font-mono border border-zinc-200/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="space-y-6 pt-6 border-t border-zinc-100">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
            Experience
          </h2>

          <div className="space-y-8">
            {RESUME_DATA.experience.map((job, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-950">
                      {job.role}
                    </h3>
                    <p className="text-xs font-mono text-zinc-600">
                      {job.company} {job.location && `• ${job.location}`} {job.type && `• ${job.type}`}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-medium text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200/60 self-start sm:self-auto">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-2 pt-1 text-xs sm:text-sm text-zinc-700">
                  {job.achievements.map((achieve, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                      <span className="leading-relaxed">{achieve}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        {RESUME_DATA.projects && RESUME_DATA.projects.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-zinc-100">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              Projects
            </h2>

            <div className="space-y-8">
              {RESUME_DATA.projects.map((project, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-baseline justify-between gap-1">
                    <div>
                      <h3 className="text-base font-semibold text-zinc-950">
                        {project.name}
                      </h3>
                      {project.description && (
                        <p className="text-xs font-mono text-zinc-600">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 pt-1 text-xs sm:text-sm text-zinc-700">
                    {project.achievements.map((achieve, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                        <span className="leading-relaxed">{achieve}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {RESUME_DATA.certifications && RESUME_DATA.certifications.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-zinc-100">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {RESUME_DATA.certifications.map((cert, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-semibold text-zinc-900">{cert.title}</h3>
                    <p className="text-[11px] font-mono text-zinc-500">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-400">{cert.year}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        <section className="space-y-4 pt-6 border-t border-zinc-100">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
            Education
          </h2>
          <div className="space-y-4">
            {RESUME_DATA.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 p-4 rounded-xl bg-zinc-50/50 border border-zinc-100">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-950">
                    {edu.degree}
                  </h3>
                  <p className="text-xs text-zinc-600">{edu.institution} {edu.location && `• ${edu.location}`}</p>
                  {edu.details && (
                    <p className="text-xs text-zinc-500 mt-1">{edu.details}</p>
                  )}
                </div>
                <span className="text-xs font-mono text-zinc-400 shrink-0">{edu.period}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
