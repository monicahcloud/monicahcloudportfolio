import React from "react";
import { purposeCards, topics, growthWays } from "/data";
export default function InspirationContent() {
  return (
    <section
      id="inspiration-content"
      className="bg-[#f8f3ee] px-4 pb-16 pt-6 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* I'M HERE TO */}
        <div className="relative pt-4">
          <div className="mb-8 text-center">
            <h2 className="font-display text-[2.3rem] leading-none text-[#155f69] md:text-[3rem]">
              I’m here to...
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {purposeCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-[26px] border border-[#eee4df] bg-white/60 px-6 py-8 text-center shadow-[0_8px_24px_rgba(80,50,120,0.04)]">
                  <div
                    className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ${card.iconBg}`}>
                    <Icon className={`h-7 w-7 ${card.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#4b2d79]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* TOPICS + GROW TOGETHER */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Topics */}
          <div className="rounded-[28px] border border-[#eee4df] bg-white/55 p-6 shadow-[0_10px_28px_rgba(80,50,120,0.04)] md:p-8">
            <h3 className="font-display text-[2rem] leading-none text-[#155f69] md:text-[2.5rem]">
              Topics <span className="text-[#f08f52]">I Love to Share</span>
            </h3>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {topics.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[22px] bg-[#fbf3f8] px-5 py-6 text-center">
                    <Icon
                      className={`mx-auto mb-4 h-7 w-7 ${item.iconColor}`}
                    />
                    <h4 className="text-base font-semibold text-[#4b2d79]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Ways We Can Grow Together */}
          <div className="rounded-[28px] border border-[#eee4df] bg-white/55 p-6 shadow-[0_10px_28px_rgba(80,50,120,0.04)] md:p-8">
            <h3 className="font-display text-[2rem] leading-none text-[#155f69] md:text-[2.5rem]">
              Ways We Can Grow Together
            </h3>

            <div className="mt-6 space-y-4">
              {growthWays.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-[20px] border border-[#f0e6e1] bg-white px-4 py-4 transition hover:shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-28 rounded-xl object-cover"
                  />

                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-semibold text-[#4b2d79]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.text}
                    </p>
                  </div>

                  <span className="text-xl text-slate-400">›</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM 3 CARDS */}
        {/* <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1fr_0.95fr]">
          Quote card */}
        {/* <div className="overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0f7f87] via-[#2b5f8a] to-[#5b2c8b] p-7 text-white shadow-[0_16px_40px_rgba(59,25,91,0.16)]">
            <div className="mb-5 text-5xl text-white/90">♡</div>

            <h3 className="font-display text-[2.1rem] leading-none">
              You were created for more.
            </h3>

            <p className="mt-5 max-w-[260px] text-sm leading-7 text-white/85">
              God has a plan for your life, and He will equip you to walk it
              out. Don’t give up — your breakthrough is on the other side of
              obedience.
            </p>

            <p className="mt-6 font-display text-[1.8rem] text-[#f4c29e]">
              — Monicah C.
            </p>
          </div> */}

        {/* Join community */}
        {/* <div className="rounded-[28px] border border-[#eee4df] bg-white/60 p-7 shadow-[0_10px_28px_rgba(80,50,120,0.04)]">
            <h3 className="font-display text-[2rem] leading-none text-[#155f69]">
              Join the Community
            </h3>

            <p className="mt-4 max-w-[360px] text-sm leading-7 text-slate-600">
              Get encouragement, resources, and updates to help you grow in
              faith and purpose.
            </p>

            <form className="mt-6 flex w-full max-w-[360px] overflow-hidden rounded-full border border-[#eadfd8] bg-white">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-4 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />
              <button
                type="submit"
                className="bg-[#6b3fa0] px-5 text-sm font-semibold text-white transition hover:bg-[#5b2c8b]">
                Subscribe
              </button>
            </form>

            <div className="mt-7 flex flex-wrap gap-6">
              {miniValues.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-sm text-[#7b4bb7]">
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div> */}

        {/* Testimonial */}
        {/* <div className="relative overflow-hidden rounded-[28px] bg-[#fdeee6] p-7 shadow-[0_10px_28px_rgba(80,50,120,0.04)]">
            <div className="mb-4 text-4xl text-[#f08f52]">“</div>

            <p className="max-w-[300px] text-base leading-8 text-slate-700">
              Monicah’s words always come at the right time. She has a gift for
              encouraging, equipping, and pointing you back to God.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <img
                src="/testimonial-avatar.png"
                alt="Tasha R."
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-[#4b2d79]">
                  — Tasha R.
                </p>
                <p className="text-xs text-slate-500">Community Member</p>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-tl-full bg-[radial-gradient(circle,#f8d7c8_0%,transparent_70%)] opacity-70" />
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}
