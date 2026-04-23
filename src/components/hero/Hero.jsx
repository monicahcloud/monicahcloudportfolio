import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import heroImg from "/fullerbody.png";
import bibleImg from "/bible.png";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f8f3ee] px-4 pb-8 pt-4 md:px-6 md:pb-10 md:pt-6 lg:px-8">
      <HeroBackground />

      <div className="relative mx-auto max-w-7xl px-0 sm:px-4 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="pt-4 text-center lg:pt-10 lg:text-left">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f08f52] sm:text-sm sm:tracking-[0.22em]">
              Walking Boldly in Purpose, Fueled by Faith.
            </p>

            <h1 className="font-display text-[2.7rem] leading-[0.92] tracking-[-0.04em] text-[#155f69] sm:text-[3.8rem] lg:max-w-[700px] lg:text-[6rem]">
              Inspire. Equip.
              <br />
              <span className="text-[#412279]">Empower.</span>
              <span className="ml-3 inline-block align-middle text-[0.56em] text-[#f08f52]">
                ♡
              </span>
            </h1>

            <div className="font-display mt-5 space-y-3 text-[1.2rem] leading-7 text-slate-700 sm:mx-auto sm:max-w-[620px] sm:text-[1.05rem] sm:leading-[1.8] lg:mx-0">
              <p>
                I’m called to use my God-given gifts to build, teach, and
                encourage others to walk boldly in their purpose.
              </p>
              <p>
                Through faith, wisdom, and real-life experience, I help people
                grow spiritually, mentally, and practically.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:mx-auto sm:max-w-[460px] sm:flex-row lg:mx-0">
              <a
                href="#about"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#0f7f87] px-6 text-sm font-semibold text-white transition hover:bg-[#0c6a71] sm:h-14 sm:px-8 sm:text-base">
                My Story
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>

              <a
                href="#resources"
                className="inline-flex h-12 items-center justify-center gap-3 rounded-2xl border border-[#6e53b6] bg-transparent px-6 text-sm font-semibold text-[#4c2d8a] transition hover:bg-white/70 sm:h-14 sm:px-8 sm:text-base">
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                Download Encouragement Guide
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end">
            <div className="relative flex h-[340px] w-full max-w-[420px] items-center justify-center sm:h-[470px] sm:max-w-[560px] lg:h-[640px] lg:max-w-[680px]">
              {/* Outer soft glow */}
              <div className="absolute right-1/2 top-1/2 h-[360px] w-[360px] translate-x-[54%] -translate-y-[44%] rounded-full bg-[radial-gradient(circle,#ffe1d2_0%,#f6c8dc_45%,#dcc6f3_75%,transparent_100%)] opacity-80 blur-3xl sm:h-[560px] sm:w-[560px] lg:h-[860px] lg:w-[860px]" />

              {/* Mid halo */}
              <div className="absolute right-1/2 top-1/2 h-[270px] w-[270px] translate-x-[54%] -translate-y-[44%] rounded-full bg-white/20 blur-2xl sm:h-[430px] sm:w-[430px] lg:h-[680px] lg:w-[680px]" />

              {/* Main circle */}
              <div className="absolute right-1/2 top-1/2 h-[300px] w-[300px] translate-x-[54%] -translate-y-[42%] rounded-full border border-[#b8e3e4] bg-[radial-gradient(circle_at_32%_30%,#8ee5e6_0%,#58d6dc_16%,#f6c7b6_52%,#efc5df_76%,#d8b9f1_100%)] shadow-[0_25px_60px_rgba(121,86,151,0.12)] sm:h-[470px] sm:w-[470px] lg:h-[720px] lg:w-[720px]" />

              {/* Soft inner haze */}
              <div className="absolute right-1/2 top-1/2 h-[220px] w-[220px] translate-x-[54%] -translate-y-[42%] rounded-full bg-white/18 blur-2xl sm:h-[340px] sm:w-[340px] lg:h-[520px] lg:w-[520px]" />

              {/* Portrait */}
              <div className="relative z-10 w-[75%] max-w-[320px] translate-y-2 sm:max-w-[380px] lg:max-w-[480px]">
                <img
                  src={heroImg}
                  alt="Monicah smiling"
                  className="h-auto w-full object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.08)] saturate-[1.02] brightness-[1.02]"
                />
              </div>

              {/* Quote card */}
              <div className="absolute bottom-2 right-1 z-20 max-w-[190px] rounded-[20px] border border-white/35 bg-white/20 px-4 py-3 text-[#44237f] shadow-[0_18px_35px_rgba(92,58,130,0.14)] backdrop-blur-md sm:bottom-8 sm:right-[6px] sm:max-w-[240px] sm:px-5 sm:py-4 lg:right-[-6px] font-display italic font-semibold">
                <div className="text-2xl leading-none text-[#6b3fa0]/70 sm:text-3xl">
                  “
                </div>

                <p className="text-md font-medium leading-[1.5] text-[#4b2d79]  sm:leading-[1.65]">
                  Create in me a clean heart, O God and renew a right spirit
                  within me.
                </p>

                <p className="mt-2 text-md font-semibold tracking-[0.01em] text-[#f08f52] sm:mt-3 sm:text-md">
                  Psalm 51:10
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mt-6 overflow-hidden rounded-[24px] bg-gradient-to-r from-[#2b173e] via-[#3e2670] to-[#0c8891] shadow-[0_20px_50px_rgba(35,20,60,0.14)] sm:mt-8 sm:rounded-[28px]">
          <div className="grid items-stretch md:grid-cols-[260px_1fr_120px] lg:grid-cols-[340px_1fr_150px]">
            <div className="min-h-[180px] md:min-h-[220px]">
              <img
                src={bibleImg}
                alt="Open Bible"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center px-5 py-6 text-white sm:px-6 sm:py-8 md:px-10">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f2a25f] sm:mb-3 sm:text-sm sm:tracking-[0.22em]">
                God is the Center
              </p>

              <h2 className="font-display text-[1.9rem] leading-[1] sm:text-[2.25rem] md:text-[3.2rem]">
                Everything I do starts with Him.
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/90 sm:mt-4 sm:text-base sm:leading-relaxed md:text-[1.05rem]">
                My life is rooted in a relationship with Jesus Christ. He is my
                source, my strength, and my why. Every word I share and every
                life I touch is for His glory.
              </p>
            </div>

            <div className="hidden items-center justify-center md:flex">
              <div className="text-[90px] leading-none text-[#f2a25f] lg:text-[120px]">
                ✞
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
