import logoImg from "/monicahlogo.png";
import ArrowMini from "./ArrowMini";

export default function AboutCtaBanner() {
  return (
    <section className="px-4 pb-14 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-r from-[#0b6c73] via-[#0f7f87] to-[#0c6f76] text-white shadow-[0_20px_45px_rgba(16,80,88,0.16)]">
        <div className="grid items-center gap-6 px-8 py-10 lg:grid-cols-[1.1fr_1fr_140px]">
          <div>
            <h2 className="font-display text-[2.3rem] leading-[1.05] md:text-[3rem]">
              Let’s build, inspire,
              <br />
              and leave a legacy — together.
            </h2>
          </div>

          <div>
            <p className="max-w-[420px] text-[1rem] leading-8 text-white/90">
              I’m always open to meaningful connections, collaborations, and
              kingdom opportunities.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#f4ba97] px-6 text-sm font-semibold text-slate-900 transition hover:bg-[#efac85]">
              Let’s Connect
              <ArrowMini />
            </a>
          </div>

          <div className="hidden justify-end lg:flex">
            <img
              src={logoImg}
              alt="Monicah Cloud logo"
              className="h-auto w-28 object-contain opacity-95"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
