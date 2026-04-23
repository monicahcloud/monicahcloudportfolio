import { Heart } from "lucide-react";

export default function ResourcesCta() {
  return (
    <section className="px-4 pb-14 pt-2 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-r from-[#0a5f67] via-[#0f6f78] to-[#118b96] text-white shadow-[0_14px_32px_rgba(16,80,88,0.16)]">
        <div className="grid gap-6 px-8 py-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-[2.3rem] leading-[1.05] md:text-[3rem]">
              Keep Growing.
              <br />
              Stay Encouraged.
            </h2>
          </div>

          <div>
            <p className="max-w-[460px] text-[1rem] leading-8 text-white/90">
              These are resources that have inspired, challenged, and
              strengthened me. I hope they do the same for you.
            </p>

            <a
              href="/contact"
              className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#f4ba97] px-6 text-sm font-semibold text-slate-900 transition hover:bg-[#efac85]">
              Share a Recommendation
              <Heart className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
