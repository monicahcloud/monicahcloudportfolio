import { Download, Play } from "lucide-react";

export default function BookAndVlogRow() {
  return (
    <section className="grid gap-5 lg:grid-cols-[1.55fr_0.95fr]">
      {/* Book block */}
      <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-[#075d66] via-[#0b6f7a] to-[#0d7e88] text-white shadow-[0_16px_40px_rgba(20,70,90,0.14)]">
        <div className="grid items-center gap-4 px-6 py-6 md:px-7 lg:grid-cols-[1.05fr_180px_0.85fr] lg:gap-5 lg:px-8">
          {/* LEFT */}
          <div className="max-w-[320px]">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f4c29e]">
              My Book
            </p>

            <h3 className="font-display text-[2.4rem] leading-[0.92] text-white">
              Shameless <span className="text-[#f4c29e]">Persistence.</span>
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/90">
              A guide to keep showing up, rising stronger, and walking in your
              purpose without apology.
            </p>

            <ul className="mt-5 space-y-2 text-sm leading-6 text-white/90">
              <li>• Faith-filled motivation</li>
              <li>• Practical strategies</li>
              <li>• Real-life lessons</li>
            </ul>
          </div>

          {/* CENTER BOOK */}
          <div className="flex justify-center lg:justify-center">
            <img
              src="/bookcover.png"
              alt="Shameless Persistence book"
              className="h-auto w-[150px] object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.18)] sm:w-[165px] lg:w-[185px]"
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start lg:pl-2">
            <p className="max-w-[250px] text-[1.02rem] font-medium leading-8 text-white/95">
              You were never meant to give up. You were meant to persist on
              purpose.
            </p>

            <a
              href="/resources"
              className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#f4ba97] px-5 text-sm font-semibold text-slate-900 transition hover:bg-[#efac85]">
              Get Your Copy
              <Download className="h-4 w-4" />
            </a>

            <div className="mt-6 ml-2 h-8 w-12 rounded-full border-b-2 border-r-2 border-[#f4c29e]/70 opacity-70" />
          </div>
        </div>
      </div>

      {/* Vlog promo */}
      <div className="relative overflow-hidden rounded-[28px] border border-[#ece2dc] bg-[#fff3eb] shadow-[0_10px_24px_rgba(80,50,120,0.04)]">
        {/* IMAGE BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/monicahvlog.png"
            alt="Monicah vlog"
            className="absolute right-0 top-0 h-full w-[85%] object-cover object-[20%_top] scale-[1.15]"
          />

          {/* fade into background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff3eb] via-[#fff3eb]/90 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 px-6 py-7 md:py-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#f08f52]">
            New on the Vlog
          </p>

          <h3 className="font-display text-[2rem] leading-none text-[#155f69]">
            Faith. Purpose.
            <br />
            Mindset. Life.
          </h3>

          <p className="mt-4 max-w-[300px] text-sm leading-7 text-slate-600">
            Real conversations, encouragement, and behind-the-scenes of my
            journey.
          </p>

          <a
            href="/vlog"
            className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#111827] px-5 text-sm font-semibold text-white">
            <Play className="h-4 w-4 fill-current" />
            Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
