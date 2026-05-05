import React from "react";

export default function ResumeHero() {
  return (
    <section className="bg-[#f8f3ee] px-4 pb-8 pt-8 md:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-10">
        {/* TEXT / MOBILE FLOW */}
        <div className="text-center lg:text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#0f7f87] sm:text-sm">
            My Resume
          </p>

          <h1 className="font-display text-[3rem] leading-[0.92] text-[#155f69] sm:text-[4.2rem] lg:text-[5rem]">
            My <span className="text-[#f08f52]">Resume</span>
          </h1>

          {/* MOBILE IMAGE directly under h1 */}
          <div className="mt-6 flex justify-center lg:hidden">
            <div className="relative flex w-full max-w-[360px] items-center justify-center sm:max-w-[430px]">
              {/* Soft background glow */}
              <div className="absolute bottom-6 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,#ffd8c5_0%,#f4c8dc_46%,#d9c3f2_78%,transparent_100%)] opacity-70 blur-3xl sm:h-[380px] sm:w-[380px]" />

              {/* Portrait */}
              <img
                src="/professionalmonicah.png"
                alt="Monicah"
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.10)]"
              />
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-[520px] text-[1rem] leading-8 text-slate-600 sm:text-[1.2rem] lg:mx-0">
            A snapshot of my experience, skills, and the impact I bring through
            technology, education, strategy, and purpose.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="/books/MONICAHCLOUDRESUME.pdf"
              download
              className="inline-flex h-12 items-center justify-center rounded-full bg-[#0f7f87] px-7 text-sm font-semibold text-white transition hover:opacity-90 sm:h-14 sm:px-8 sm:text-base">
              Download PDF Resume
            </a>

            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-[#dcd2cc] bg-white/60 px-7 text-sm font-semibold text-[#4b2d79] transition hover:bg-white sm:h-14 sm:px-8 sm:text-base">
              Let’s Connect
            </a>
          </div>
        </div>

        {/* DESKTOP IMAGE ONLY */}
        <div className="relative hidden justify-center lg:flex">
          <div className="relative flex w-full max-w-[620px] items-center justify-center">
            {/* Soft glow */}
            <div className="absolute bottom-10 h-[520px] w-[520px] bg-[radial-gradient(circle,#ffd8c5_0%,#f4c8dc_46%,#d9c3f2_78%,transparent_100%)] opacity-70 blur-3xl" />

            {/* Portrait */}
            <img
              src="/professionalmonicah.png"
              alt="Monicah"
              className="relative z-10 h-auto w-[560px] object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.12)]"
            />

            {/* Quote Card */}
            <div className="absolute bottom-8 right-0 z-20 max-w-[260px] rounded-[24px] border border-white/30 bg-white/25 p-5 font-display text-[#4b2d79] shadow-[0_18px_35px_rgba(92,58,130,0.14)] backdrop-blur-md">
              <p className="text-md leading-7">
                I build solutions that create impact and inspire transformation.
              </p>

              <p className="mt-3 text-sm font-semibold text-[#f08f52]">
                — Monicah C.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
