import { ArrowRight } from "lucide-react";
import { serviceCards } from "/data";

export default function WhatIDo() {
  return (
    <section className="pt-2">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f7f87]">
          What I Do
        </p>
        <h2 className="font-display mt-2 text-[2.3rem] leading-none text-[#155f69] md:text-[3rem]">
          Solutions <span className="text-[#f08f52]">I Build</span>
        </h2>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {serviceCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              className="rounded-[24px] border border-[#ece2dc] bg-white/60 px-6 py-8 text-center shadow-[0_8px_24px_rgba(80,50,120,0.03)]">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#e8dfd9] bg-white">
                <Icon className="h-7 w-7 text-[#7abcc3]" />
              </div>

              <h3 className="text-xl font-semibold text-slate-700">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {card.text}
              </p>

              <a
                href="#"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0f7f87]">
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
