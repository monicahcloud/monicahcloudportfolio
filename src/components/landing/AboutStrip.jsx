import { ArrowRight } from "lucide-react";
import ValueItem from "./ValueItem";
import { Cross, Heart, Users } from "lucide-react";

export default function AboutStrip() {
  return (
    <section className="grid gap-6 border-t border-[#ece2dc] pt-10 lg:grid-cols-[1fr_0.95fr_0.9fr]">
      <div className="pr-0 lg:pr-6">
        <h2 className="font-display text-[2rem] leading-none text-[#155f69] md:text-[2.5rem]">
          About Me
        </h2>
        <div className="mt-3 h-[2px] w-14 bg-[#f2b38c]" />

        <div className="mt-6 max-w-[420px] space-y-4 text-[1rem] leading-8 text-slate-600">
          <p>
            I blend technology, creativity, and strategy to build meaningful
            digital experiences that solve real problems and create impact.
          </p>
          <p>
            With a background in Business Intelligence and a passion for
            innovation, I specialize in AI-powered tools, web applications, and
            data solutions that drive results.
          </p>
        </div>

        <a
          href="/about"
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#7abcc3] px-6 text-sm font-semibold text-[#0f7f87] transition hover:bg-white">
          Read My Story
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-5 border-l-0 border-[#ece2dc] pt-2 lg:border-l lg:px-8">
        <ValueItem
          icon={Cross}
          title="Faith-Driven"
          text="Everything I do starts with purpose."
          color="text-[#7abcc3]"
        />
        <ValueItem
          icon={Heart}
          title="Purpose-Led"
          text="I build with intention to create impact."
          color="text-[#f2b38c]"
        />
        <ValueItem
          icon={Users}
          title="People-Focused"
          text="I believe in empowering others to grow."
          color="text-[#7abcc3]"
        />
      </div>

      <div className="rounded-[28px] bg-[#0f7f87] p-7 text-white shadow-[0_16px_34px_rgba(16,80,88,0.14)]">
        <div className="mb-3 text-4xl leading-none text-white/80">“</div>
        <h3 className="font-display text-[2rem] leading-none">My Mission</h3>
        <p className="mt-4 text-[1rem] leading-8 text-white/90">
          To use my God-given gifts to build, inspire, and empower others to
          walk boldly in their purpose.
        </p>
        <p className="mt-6 text-[2rem] font-['Parisienne'] text-[#f4c29e]">
          Monicah C.
        </p>
      </div>
    </section>
  );
}
