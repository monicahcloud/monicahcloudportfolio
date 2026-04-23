import { ArrowRight } from "lucide-react";
import { featuredProjects, latestVideos } from "/data";

export default function ProjectsVlogInspiration() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr_0.9fr]">
      {/* Projects */}
      <div className="rounded-[26px] border border-[#ece2dc] bg-white/60 p-6 shadow-[0_8px_24px_rgba(80,50,120,0.03)]">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f7f87]">
              Featured Projects
            </p>
            <h3 className="font-display mt-2 text-[2rem] leading-none text-[#155f69]">
              Turning Ideas <span className="text-[#f08f52]">Into Impact</span>
            </h3>
          </div>

          <a
            href="#projects"
            className="text-sm font-semibold text-[#0f7f87] whitespace-nowrap">
            View All Projects →
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-[18px] border border-[#eee4df] bg-white">
              <img
                src={project.image}
                alt={project.title}
                className="h-28 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="text-base font-semibold text-slate-700">
                  {project.title}
                </h4>
                <p className="mt-2 text-xs leading-6 text-slate-500">
                  {project.text}
                </p>
                <a
                  href="#"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0f7f87]">
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest videos */}
      <div className="rounded-[26px] border border-[#ece2dc] bg-white/60 p-6 shadow-[0_8px_24px_rgba(80,50,120,0.03)]">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f7f87]">
              Vlog
            </p>
            <h3 className="font-display mt-2 text-[2rem] leading-none text-[#155f69]">
              Latest Videos
            </h3>
          </div>

          <a
            href="#vlog"
            className="text-sm font-semibold text-[#0f7f87] whitespace-nowrap">
            View All →
          </a>
        </div>

        <div className="space-y-4">
          {latestVideos.map((video) => (
            <div key={video.title} className="flex gap-3">
              <img
                src={video.image}
                alt={video.title}
                className="h-16 w-20 rounded-xl object-cover"
              />

              <div className="min-w-0">
                <h4 className="text-sm font-semibold text-slate-700">
                  {video.title}
                </h4>
                <p className="mt-1 text-xs text-slate-500">{video.text}</p>
                <p className="mt-1 text-xs text-slate-400">{video.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inspiration */}
      <div className="rounded-[26px] border border-[#ece2dc] bg-white/60 p-6 shadow-[0_8px_24px_rgba(80,50,120,0.03)]">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f7f87]">
          Inspiration
        </p>

        <h3 className="font-display mt-2 text-[2rem] leading-none text-[#155f69]">
          Encouragement for Your Journey
        </h3>

        <div className="mt-5 rounded-[22px] bg-[#fbefe8] p-5">
          <div className="mb-3 text-3xl text-[#f08f52]"></div>
          <p className="text-md italic font-serif leading-7 text-slate-600">
            I can do all things through
            <br />
            <span className="font-semibold text-slate-700">
              Christ who strengthens me.
            </span>
          </p>
          <p className="mt-3 text-sm font-semibold text-[#f08f52]">
            Philippians 4:13
          </p>
        </div>

        <a
          href="/inspiration"
          className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-[#7abcc3] px-5 text-sm font-semibold text-[#0f7f87] transition hover:bg-white">
          More Inspiration
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
