import { hobbies, funFacts } from "/data";
import DownloadMini from "./DownloadMini";

export default function HobbiesAndFunFacts() {
  return (
    <section className="px-4 pb-10 md:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.95fr]">
        <div className="rounded-[26px] border border-[#ece2dc] bg-white/55 p-6 shadow-[0_8px_24px_rgba(80,50,120,0.03)] md:p-8">
          <h2 className="font-display text-[2rem] leading-none text-[#155f69]">
            Hobbies & Interests
          </h2>
          <div className="mt-3 h-[2px] w-14 bg-[#f2b38c]" />

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {hobbies.map((item) => (
              <div key={item.title} className="text-center">
                <img
                  src={item.image}
                  alt={item.title.replace(/\n/g, " ")}
                  className="h-28 w-full rounded-[14px] object-cover"
                />
                <p className="mt-3 whitespace-pre-line text-sm font-medium leading-6 text-slate-600">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[26px] border border-[#ece2dc] bg-white/55 p-6 shadow-[0_8px_24px_rgba(80,50,120,0.03)] md:p-8">
          <h2 className="font-display text-[2rem] leading-none text-[#155f69]">
            Fun Facts
          </h2>
          <div className="mt-3 h-[2px] w-14 bg-[#f2b38c]" />

          <div className="mt-6 space-y-5">
            {funFacts.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 border-b border-[#efe6e1] pb-4 last:border-b-0">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#cfe8e8] bg-white">
                    <Icon className="h-5 w-5 text-[#7abcc3]" />
                  </div>

                  <p className="pt-1 text-[0.98rem] leading-7 text-slate-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
