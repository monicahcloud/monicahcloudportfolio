import { socialLinks } from "/data";
import { Download } from "lucide-react";

export default function BottomCtaStrip() {
  return (
    <section className="overflow-hidden rounded-[26px] bg-gradient-to-r from-[#0a5f67] via-[#0f6f78] to-[#118b96] text-white shadow-[0_14px_32px_rgba(16,80,88,0.16)]">
      <div className="grid gap-6 px-6 py-8 md:px-8 lg:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr_120px] lg:items-center">
        <div>
          <h3 className="font-display text-[2.2rem] leading-[1.05]">
            Let’s Connect & Create
            <br />
            <span className="text-[#f4c29e] italic">Impact Together</span>
          </h3>
        </div>

        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10">
                <Icon className="h-5 w-5 text-[#f4c29e]" />
              </div>
              <div>
                <p className="text-sm font-semibold">{item.label}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
