import {
  certifications,
  education,
  experienceItems,
  projects,
  skillColumns,
} from "/data";
import {
  Briefcase,
  FolderOpen,
  GraduationCap,
  Award,
  Cross,
  Heart,
  Download,
} from "lucide-react";

import React from "react";

export default function ResumeContent() {
  return (
    <section className="bg-[#f8f3ee] px-4 pb-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* SUMMARY + SKILLS */}
        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="rounded-[26px] border border-[#ece2dc] bg-white/60 p-6 shadow-[0_8px_24px_rgba(80,50,120,0.03)] md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f2d9c8] bg-[#fff7f2]">
                <Briefcase className="h-5 w-5 text-[#f08f52]" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f7f87]">
                Professional Summary
              </p>
            </div>

            <h2 className="font-display text-[2rem] leading-none text-[#412279] md:text-[2.4rem]">
              AI Consultant. Developer. Strategist.
            </h2>

            <div className="mt-5 space-y-5 text-[1rem] leading-8 text-slate-600">
              <p>
                I build AI-powered solutions, data-driven systems, and digital
                experiences that solve real-world problems. My background spans
                business intelligence, frontend development, software
                engineering, education, and digital strategy.
              </p>

              <p>
                From special education and instructional technology to BI,
                frontend development, and modern web experiences, my work sits
                at the intersection of creativity, data, and impact.
              </p>

              <div className="flex items-center gap-3 pt-2 text-[#0f7f87]">
                <Heart className="h-5 w-5" />
                <p className="font-medium">
                  Faith-driven. Purpose-led. Impact-focused.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[26px] border border-[#ece2dc] bg-white/60 p-6 shadow-[0_8px_24px_rgba(80,50,120,0.03)] md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f2d9c8] bg-[#fff7f2]">
                <Award className="h-5 w-5 text-[#f08f52]" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f7f87]">
                Core Skills
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {skillColumns.map((column) => {
                const Icon = column.icon;
                return (
                  <div
                    key={column.title}
                    className={`rounded-[20px] ${column.bg} px-5 py-6`}>
                    <div className="mb-4 flex items-center gap-3">
                      <Icon className={`h-5 w-5 ${column.color}`} />
                      <h3 className="text-base font-semibold text-slate-700">
                        {column.title}
                      </h3>
                    </div>

                    <ul className="space-y-3 text-sm leading-6 text-slate-600">
                      {column.items.map((item: string) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[8px] h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="rounded-[26px] border border-[#ece2dc] bg-white/60 p-6 shadow-[0_8px_24px_rgba(80,50,120,0.03)] md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f2d9c8] bg-[#fff7f2]">
              <Briefcase className="h-5 w-5 text-[#f08f52]" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f7f87]">
              Professional Experience
            </p>
          </div>

          <div className="space-y-6">
            {experienceItems.map((item) => (
              <div
                key={`${item.years}-${item.title}`}
                className="grid gap-4 border-b border-[#eee4df] pb-6 last:border-b-0 last:pb-0 lg:grid-cols-[180px_240px_1fr]">
                <div className="text-sm font-semibold text-[#0f7f87]">
                  {item.years}
                </div>

                <div className="flex gap-4">
                  <div
                    className={`mt-1 h-11 w-11 shrink-0 rounded-full ${item.accent}`}
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#412279]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#0f7f87]">{item.subtitle}</p>
                  </div>
                </div>

                <ul className="space-y-3 text-sm leading-7 text-slate-600">
                  {item.points.map((point: string) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div className="rounded-[26px] border border-[#ece2dc] bg-white/60 p-6 shadow-[0_8px_24px_rgba(80,50,120,0.03)] md:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f2d9c8] bg-[#fff7f2]">
              <FolderOpen className="h-5 w-5 text-[#f08f52]" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f7f87]">
              Featured Projects
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-[20px] border border-[#eee4df] bg-white shadow-[0_8px_20px_rgba(80,50,120,0.04)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-700">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {project.text}
                  </p>
                  <a
                    href={project.link}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0f7f87]">
                    View Project
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATION / CERTS / PURPOSE */}
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1fr_0.9fr]">
          <div className="rounded-[26px] border border-[#ece2dc] bg-white/60 p-6 shadow-[0_8px_24px_rgba(80,50,120,0.03)] md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f2d9c8] bg-[#fff7f2]">
                <GraduationCap className="h-5 w-5 text-[#f08f52]" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f7f87]">
                Education
              </p>
            </div>

            <ul className="space-y-4 text-sm leading-7 text-slate-600">
              {education.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-[26px] border border-[#ece2dc] bg-white/60 p-6 shadow-[0_8px_24px_rgba(80,50,120,0.03)] md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f2d9c8] bg-[#fff7f2]">
                <Award className="h-5 w-5 text-[#f08f52]" />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f7f87]">
                Certifications & Training
              </p>
            </div>

            <ul className="space-y-3 text-sm leading-7 text-slate-600">
              {certifications.map((item: string) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[26px] bg-gradient-to-br from-[#43206f] to-[#5b2c8b] p-6 text-white shadow-[0_14px_34px_rgba(70,35,110,0.16)] md:p-8">
            <div className="mb-5 flex items-center gap-3">
              <Cross className="h-8 w-8 text-[#f4ba97]" />
              <Heart className="h-7 w-7 text-[#f4ba97]" />
            </div>

            <h3 className="font-display text-[2rem] leading-none text-white">
              Purpose Fuels My Work
            </h3>

            <p className="mt-5 text-sm leading-8 text-white/90">
              I believe my gifts are for building, teaching, and inspiring.
              Everything I do is to glorify God and help others walk boldly in
              their purpose.
            </p>

            <p className="mt-6 font-display text-[1.9rem] text-[#f4ba97]">
              — Monicah C.
            </p>
          </div>
        </div>

        {/* BOTTOM CTA STRIP */}
        <div className="overflow-hidden rounded-[26px] bg-gradient-to-r from-[#2f1651] via-[#2b3e88] to-[#118b96] text-white shadow-[0_16px_34px_rgba(50,25,80,0.16)]">
          <div className="grid gap-6 px-6 py-8 md:px-8 lg:grid-cols-[1.2fr_0.85fr_0.85fr_0.85fr_100px] lg:items-center">
            <div>
              <h3 className="font-display text-[2.2rem] leading-[1.05]">
                Let’s Build Something
                <br />
                Meaningful Together
              </h3>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-3">
                <Download className="h-5 w-5 text-[#f4ba97]" />
                <p className="font-semibold">Download My Resume</p>
              </div>
              <p className="text-sm text-white/80">
                Get a full overview of my experience.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-[#f4ba97]" />
                <p className="font-semibold">Work With Me</p>
              </div>
              <p className="text-sm text-white/80">
                Let’s create solutions that make an impact.
              </p>
            </div>

            <div>
              <div className="mb-2 flex items-center gap-3">
                <Heart className="h-5 w-5 text-[#f4ba97]" />
                <p className="font-semibold">Let’s Connect</p>
              </div>
              <p className="text-sm text-white/80">
                I’d love to hear from you.
              </p>
            </div>

            <div className="hidden justify-end lg:flex">
              <img
                src="/monicahlogo.png"
                alt="Monicah smiling and looking at the camera, wearing a purple top and standing in front of a purple background"
                className="h-24 w-24 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
