import aboutImg from "/aboutmonicah.png";
import DotSprinkle from "./DotSprinkle";
import LeafGraphicRight from "./LeafGraphicRight";
import logo from "/monicahlogo.png";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function AboutHero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8f3ee] px-4 pb-12 pt-6 md:px-6 lg:px-8 lg:pt-8">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Mobile softer background */}
        <div className="absolute inset-0 block lg:hidden">
          <div className="absolute left-1/2 top-[-100px] h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#fbd9ca_0%,#f3dce9_48%,transparent_78%)] opacity-70 blur-3xl" />
          <div className="absolute bottom-[18%] right-[-80px] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,#bde9e9_0%,transparent_72%)] opacity-50 blur-3xl" />
        </div>

        {/* Desktop background */}
        <div className="hidden lg:block">
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full border border-[#f3d8c8]/70" />
          <div className="absolute left-[-40px] top-28 h-64 w-64 rounded-full border border-[#f3d8c8]/40" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1 }}
            className="absolute right-[-40px] top-24 h-[320px] w-[320px] rounded-full bg-[#f7e7df]/70"
          />

          <div className="absolute right-4 top-44">
            <LeafGraphicRight />
          </div>

          <div className="absolute left-1/2 top-[120px] -translate-x-1/2">
            <DotSprinkle />
          </div>

          <div className="absolute bottom-0 left-1/3 h-40 w-80 rounded-full bg-[radial-gradient(circle,#f5d2bf_0%,transparent_70%)] opacity-60 blur-2xl" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* MOBILE LOGO */}
        <motion.div variants={fadeUp} className="flex justify-center lg:hidden">
          <img
            src={logo}
            alt="Monicah Cloud"
            className="h-auto w-[230px] object-contain sm:w-[300px]"
          />
        </motion.div>
        <div className="grid items-center gap-4 lg:grid-cols-[1fr_1fr] lg:gap-10">
          {/* IMAGE FIRST ON MOBILE */}
          <div className="relative flex justify-center lg:order-1 lg:justify-start">
            <div className="relative flex justify-center lg:order-1 lg:justify-start">
              <div className="relative flex items-center justify-center">
                {/* OUTER GLOW */}
                <div className="absolute h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,#ffd8c5_0%,#f4c8dc_46%,#d9c3f2_78%,transparent_100%)] opacity-70 blur-3xl sm:h-[430px] sm:w-[430px] lg:h-[620px] lg:w-[620px]" />

                {/* GLASS RING */}
                <div className="absolute h-[300px] w-[300px] rounded-full border border-white/40 bg-white/25 shadow-[0_20px_60px_rgba(90,60,120,0.12)] backdrop-blur-sm sm:h-[410px] sm:w-[410px] lg:h-[560px] lg:w-[560px]" />

                {/* MAIN CIRCLE */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10 flex h-[280px] w-[280px] items-center justify-center overflow-hidden rounded-full border border-[#d8e8ea] bg-[linear-gradient(135deg,#bfe9ea_0%,#f7d7c8_52%,#e8d4f5_100%)] sm:h-[390px] sm:w-[390px] lg:h-[520px] lg:w-[520px]">
                  <img
                    src={aboutImg}
                    alt="Joyful Monicah"
                    className="h-[115%] w-[115%] object-cover object-center scale-[1.08] translate-y-10 md:translate-y-20"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:order-2 lg:pl-8 lg:text-left">
            {/* <motion.p
              variants={fadeUp}
              className="text-[1.5rem] font-medium leading-none text-[#f08f52] md:text-[2.5rem]">
              About
            </motion.p> */}

            {/* LOGO */}
            <motion.div
              variants={fadeUp}
              className="mt-1 hidden justify-center lg:flex">
              <img
                src={logo}
                alt="Monicah Cloud"
                className="h-auto w-[230px] object-contain sm:w-[300px] lg:w-[420px]"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-[330px] text-xs font-semibold uppercase tracking-[0.16em] text-[#0f7f87] sm:max-w-none sm:text-sm lg:mx-0">
              Faith-Driven. Purpose-Led. Impact-Focused.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mx-auto mt-5 max-w-[360px] space-y-3 text-[1rem] leading-7 text-slate-700 sm:max-w-[560px] md:text-[1.08rem] lg:mx-0">
              <p>
                I blend technology, creativity, and strategy to build solutions
                that solve real problems and change lives.
              </p>
              <p>
                But beyond the work, I’m a daughter of Christ, a lifelong
                learner, and a woman who believes in using her gifts to inspire,
                empower, and leave a legacy.
              </p>
            </motion.div>

            {/* SIGNATURE */}
            <motion.p
              variants={fadeUp}
              className="mt-7 text-[2rem] text-[#f08f52] font-['Parisienne'] leading-none md:text-[2.3rem]">
              – Monicah C.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
