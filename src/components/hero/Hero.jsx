import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import heroImg from "/fullerbody.png";
import bibleImg from "/bible.png";
import HeroBackground from "./HeroBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f8f3ee] px-4 pb-10 pt-6 md:px-6 lg:px-8">
      <HeroBackground />

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-9xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="pt-6 lg:pt-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.22em] text-[#f08f52]">
              Walking Boldly in Purpose, Fueled by Faith.
            </p>

            <h1 className="font-display max-w-[700px] text-[3.5rem] leading-[0.9] tracking-[-0.04em] text-[#155f69] sm:text-[4.5rem] lg:text-[6.3rem]">
              Inspire. Equip.
              <br />
              <span className="text-[#412279]">Empower.</span>
              <span className="ml-4 inline-block align-middle text-[#f08f52] text-[0.6em]">
                ♡
              </span>
            </h1>

            <div className="mt-8 max-w-[620px] space-y-3 text-[1.05rem] leading-[1.8] text-slate-700 md:text-[1.15rem]">
              <p>
                I’m called to use my God-given gifts to build, teach, and
                encourage others to walk boldly in their purpose.
              </p>
              <p>
                Through faith, wisdom, and real-life experience, I help people
                grow spiritually, mentally, and practically.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#about"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[#0f7f87] px-8 text-base font-semibold text-white transition hover:bg-[#0c6a71]">
                My Story
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="#resources"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl border border-[#6e53b6] bg-transparent px-8 text-base font-semibold text-[#4c2d8a] transition hover:bg-white/70">
                <Download className="h-5 w-5" />
                Download Encouragement Guide
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end">
            <div className="relative flex h-[430px] w-full max-w-[680px] items-center justify-center sm:h-[540px] lg:h-[640px]">
              {/* Outer soft glow */}
              <div
                className="absolute right-1/2 top-1/2
  h-[520px] w-[520px]
  sm:h-[700px] sm:w-[700px]
  lg:h-[860px] lg:w-[860px]
 translate-x-[55%] -translate-y-1/2
  rounded-full
  bg-[radial-gradient(circle,#ffe1d2_0%,#f6c8dc_45%,#dcc6f3_75%,transparent_100%)]
  opacity-80 blur-3xl"
              />
              <div
                className="absolute right-1/2 top-1/2
  h-[400px] w-[400px]
  sm:h-[560px] sm:w-[560px]
  lg:h-[680px] lg:w-[680px]
  translate-x-[55%]-translate-y-1/2
  rounded-full
  bg-white/20 blur-2xl"
              />
              {/* Main circle */}
              <div
                className="absolute right-1/2 top-1/2
  h-[460px] w-[460px]
  sm:h-[600px] sm:w-[600px]
  lg:h-[720px] lg:w-[720px]
  translate-x-[55%] -translate-y-[45%]
  rounded-full border border-[#b8e3e4]
  bg-[radial-gradient(circle_at_32%_30%,#8ee5e6_0%,#58d6dc_16%,#f6c7b6_52%,#efc5df_76%,#d8b9f1_100%)]
  shadow-[0_25px_60px_rgba(121,86,151,0.12)]"
              />

              {/* Soft inner haze to reduce harshness */}
              <div
                className="absolute right-[26px] top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full
      bg-white/18 blur-2xl sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]"
              />

              {/* Portrait */}
              <div className="relative z-10 w-[320px] translate-y-2 sm:w-[410px] lg:w-[900px]">
                <img
                  src={heroImg}
                  alt="Monicah smiling"
                  className="h-auto w-full object-contain drop-shadow-[0_14px_28px_rgba(0,0,0,0.08)] saturate-[1.02] brightness-[1.02]"
                />
              </div>

              {/* Softer quote card */}
              <div
                className="absolute bottom-10 right-2 z-20 max-w-[255px] rounded-[24px]
      border border-white/35 bg-white/18 px-5 py-5 text-[#44237f]
      shadow-[0_18px_35px_rgba(92,58,130,0.14)] backdrop-blur-md
      sm:right-[6px] lg:right-[-6px]">
                <div className="text-3xl leading-none text-[#6b3fa0]/70">“</div>

                <p className="text-[0.98rem] font-medium leading-[1.65] text-[#4b2d79]">
                  I can do all things through Christ who strengthens me.
                </p>

                <p className="mt-4 text-sm font-semibold tracking-[0.01em] text-[#f08f52]">
                  Philippians 4:13
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mt-8 overflow-hidden rounded-[28px] bg-gradient-to-r from-[#2b173e] via-[#3e2670] to-[#0c8891] shadow-[0_20px_50px_rgba(35,20,60,0.14)]">
          <div className="grid items-stretch md:grid-cols-[340px_1fr_150px]">
            <div className="min-h-[220px]">
              <img
                src={bibleImg}
                alt="Open Bible"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center px-6 py-8 text-white md:px-10">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#f2a25f]">
                God is the Center
              </p>

              <h2 className="font-display text-[2.25rem] leading-[1] md:text-[3.4rem]">
                Everything I do starts with Him.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-[1.1rem]">
                My ministry is rooted in a relationship with Jesus Christ. He is
                my source, my strength, and my why. Every word I share and every
                life I touch is for His glory.
              </p>
            </div>

            <div className="hidden items-center justify-center md:flex">
              <div className="text-[120px] leading-none text-[#f2a25f]">✞</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
