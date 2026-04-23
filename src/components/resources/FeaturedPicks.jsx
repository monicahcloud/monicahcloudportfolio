import { ArrowRight, Sparkles } from "lucide-react";
import { featuredPicks } from "/data";
export default function FeaturedPicks() {
  return (
    <section className="px-4 pb-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-[#f08f52]" />
          <h2 className="font-display text-[2rem] leading-none text-[#155f69] md:text-[2.5rem]">
            Featured Picks
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredPicks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                className="overflow-hidden rounded-[24px] border border-[#ece2dc] bg-white/60 shadow-[0_8px_24px_rgba(80,50,120,0.03)] transition hover:-translate-y-1">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-44 w-full object-cover"
                />

                <div className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${item.color}`} />
                    <span className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0f7f87]">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-700">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0f7f87]">
                    Explore
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
