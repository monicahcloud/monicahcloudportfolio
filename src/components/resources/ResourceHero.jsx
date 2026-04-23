export default function ResourcesHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-10 md:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-60px] top-20 h-72 w-72 rounded-full border border-[#f3d8c8]/60" />
        <div className="absolute right-[-50px] top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle,#fbd9ca_0%,#f3c5d7_48%,#d8c1f2_78%,transparent_100%)] opacity-70 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-40 w-80 rounded-full bg-[radial-gradient(circle,#f5d2bf_0%,transparent_70%)] opacity-60 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f7f87]">
          Watch, Read, Listen & Grow
        </p>

        <h1 className="font-display mt-4 text-[3.2rem] leading-[0.9] text-[#155f69] sm:text-[4.4rem] lg:text-[5.6rem]">
          Resources to
          <br />
          <span className="text-[#f08f52]">Encourage Your Journey</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[760px] text-[1rem] leading-8 text-slate-600 md:text-[1.08rem]">
          A curated collection of videos, books, movies, and music to help you
          grow in faith, purpose, mindset, healing, and everyday life.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {["Faith", "Purpose", "Mindset", "Healing", "Encouragement"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#e8ddd7] bg-white/70 px-4 py-2 text-sm font-medium text-[#4b2d79]">
                {tag}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
