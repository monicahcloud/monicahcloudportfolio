import { descriptorCards } from "/data";
import DownloadMini from "./DownloadMini";
export default function AboutStorySection() {
  return (
    <section className="border-t border-[#ece2dc] px-4 py-10 md:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.2fr]">
        <div className="pr-0 lg:pr-8">
          <h2 className="font-display text-[2.2rem] leading-none text-[#155f69]">
            My Story
          </h2>
          <div className="mt-3 h-[2px] w-14 bg-[#f2b38c]" />

          <div className="font-display mt-6 space-y-6 text-[1.5rem] leading-8 text-slate-600">
            <p>
              My journey started with a passion for understanding how things
              work—people, systems, and solutions. That curiosity led me from
              Business Intelligence to AI, development, and entrepreneurship.
            </p>

            <p>
              I’ve had the privilege of helping businesses and individuals turn
              ideas into smart, scalable solutions using data, design, and
              technology.
            </p>

            <p>
              But my greatest calling is to help others discover theirs. Through
              faith, I’ve learned that true success is about obedience, impact,
              and walking boldly in purpose.
            </p>

            <p>That’s the life I’m building.</p>
          </div>
          <div className=" font-display font-semibold italic mt-8 rounded-[20px] bg-[#f7f1ec] p-6 border border-[#efe3dc]">
            <p className="text-[1.05rem] leading-6 text-slate-700">
              “My life is a reflection of God’s grace — shaped by growth,
              grounded in faith, and driven by purpose.”
            </p>
          </div>
          <a
            href="#resume"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#7abcc3] px-6 text-sm font-semibold text-[#0f7f87] transition hover:bg-white">
            Download My Resume
            <DownloadMini />
          </a>
        </div>

        <div className="border-l-0 border-[#ece2dc] pt-2 lg:border-l lg:pl-10">
          <h2 className="font-display text-[2.2rem] leading-none text-[#155f69]">
            A Few Things That Describe Me
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {descriptorCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-[22px] border border-[#eee5df] bg-white/60 px-5 py-6 text-center shadow-[0_8px_20px_rgba(80,50,120,0.03)]">
                  <Icon className={`mx-auto mb-4 h-8 w-8 ${card.color}`} />
                  <h3 className="text-lg font-semibold text-slate-700">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    {card.text}
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
