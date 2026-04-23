import React from "react";

export default function ResumeHero() {
  return (
    <section className="px-4 pt-10 pb-5 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl grid items-center gap-10 lg:grid-cols-2">
        {/* LEFT */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#0f7f87]">
            My Resume
          </p>

          <h1 className="font-display text-[3.5rem] leading-[0.9] text-[#155f69] sm:text-[4.5rem]">
            My <span className="text-[#f08f52]">Resume</span>
          </h1>

          <p className="mt-6 max-w-[480px] text-[1.05rem] leading-8 text-slate-600">
            A snapshot of my experience, skills, and the impact I bring through
            technology, education, strategy, and purpose.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="rounded-full bg-[#0f7f87] px-6 py-3 text-white font-medium hover:opacity-90">
              Download PDF Resume
            </a>

            <a
              href="/contact"
              className="rounded-full border border-[#dcd2cc] px-6 py-3 font-medium">
              Let’s Connect
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative w-[380px] sm:w-[460px] md:w-[540px]">
            <img
              src="/professionalmonicah.png"
              alt="Monicah"
              className="rotate-[0deg] object-contain"
            />

            {/* QUOTE */}
            <div className="absolute bottom-6 right-0 bg-[#5b2c8b] text-white font-display p-5 rounded-[20px] max-w-[260px] shadow-lg">
              <p className="text-md leading-6">
                I build solutions that create impact and inspire transformation.
              </p>
              <p className="mt-3 text-[#f4ba97] text-md">— Monicah C.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
