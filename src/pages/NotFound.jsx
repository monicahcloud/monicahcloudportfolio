import { ArrowLeft, Home, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f3ee] px-4 py-12">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* left rings */}
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full border border-[#f3d8c8]/60" />
        <div className="absolute -left-8 top-32 h-56 w-56 rounded-full border border-[#f3d8c8]/40" />

        {/* right glow */}
        <div className="absolute right-[-120px] top-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,#ffd8c5_0%,#f5bfd7_45%,#d8c0f4_78%,transparent_100%)] opacity-70 blur-3xl" />

        {/* teal glow */}
        <div className="absolute bottom-[-100px] left-1/3 h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,#bce9ea_0%,transparent_70%)] opacity-60 blur-3xl" />

        {/* dots */}
        <div className="absolute right-12 top-44 hidden grid-cols-5 gap-2 opacity-70 md:grid">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#0f7f87]" />
          ))}
        </div>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-3xl rounded-[34px] border border-[#ece2dc] bg-white/75 p-8 text-center shadow-[0_20px_60px_rgba(80,50,120,0.08)] backdrop-blur-xl md:p-14">
        {/* icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fff3eb]">
          <Sparkles className="h-9 w-9 text-[#f08f52]" />
        </div>

        {/* 404 */}
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-[#0f7f87]">
          Page Not Found
        </p>

        <h1 className="font-display mt-4 text-[5rem] leading-none text-[#155f69] sm:text-[6rem] md:text-[7rem]">
          404
        </h1>

        <h2 className="font-display mt-3 text-[2rem] leading-none text-[#412279] md:text-[2.8rem]">
          Looks like you took a wrong turn.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-600">
          The page you’re looking for may have moved, no longer exists, or
          perhaps this is simply your reminder to pause, breathe, and head back
          home.
        </p>

        {/* buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/"
            className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl bg-[#0f7f87] px-7 text-sm font-semibold text-white transition hover:bg-[#0c6a71]">
            <Home className="h-4 w-4" />
            Back Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="inline-flex h-13 items-center justify-center gap-2 rounded-2xl border border-[#dccfc8] bg-white px-7 text-sm font-semibold text-[#4b2d79] transition hover:bg-[#fffaf7]">
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        {/* scripture */}
        <div className="mt-12 rounded-[24px] border border-[#f1e6df] bg-[#fffaf7] p-6">
          <p className="font-display text-[1.2rem] italic leading-8 text-slate-600">
            “Trust in the Lord with all your heart and lean not on your own
            understanding.”
          </p>

          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#f08f52]">
            Proverbs 3:5
          </p>
        </div>
      </div>
    </main>
  );
}
