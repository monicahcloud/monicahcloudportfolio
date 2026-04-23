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
      className="relative overflow-hidden px-4 pb-12 pt-8 md:px-6 lg:px-8">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full border border-[#f3d8c8]/70" />
        <div className="absolute left-[-40px] top-28 h-64 w-64 rounded-full border border-[#f3d8c8]/40" />

        {/* Animated glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          className="absolute right-[-40px] top-24 h-[320px] w-[320px] rounded-full bg-[#f7e7df]/70"
        />

        <div className="absolute right-4 top-44 hidden lg:block">
          <LeafGraphicRight />
        </div>

        <div className="absolute left-1/2 top-[120px] hidden -translate-x-1/2 lg:block">
          <DotSprinkle />
        </div>

        <div className="absolute bottom-0 left-1/3 h-40 w-80 rounded-full bg-[radial-gradient(circle,#f5d2bf_0%,transparent_70%)] opacity-60 blur-2xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
          {/* TEXT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="pt-4 lg:order-2 lg:pl-8">
            <motion.p
              variants={fadeUp}
              className="text-[1.9rem] font-medium leading-none text-[#f08f52] md:text-[2.5rem]">
              About
            </motion.p>

            {/* LOGO */}
            <motion.div variants={fadeUp} className="max-w-[520px]">
              <img
                src={logo}
                alt="Monicah Cloud"
                className="h-auto w-[260px] sm:w-[320px] lg:w-[420px] object-contain"
              />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#0f7f87]">
              Faith-Driven. Purpose-Led. Impact-Focused.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="font-display mt-6 max-w-[560px] space-y-3 text-[1.02rem] leading-8 md:text-[1.5rem]">
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
              className="mt-10 text-[2.3rem] text-[#f08f52] font-['Parisienne'] leading-none">
              – Monicah C.
            </motion.p>
          </motion.div>

          {/* IMAGE */}
          <div className="relative flex justify-center lg:justify-start lg:order-1">
            <div className="relative flex h-[430px] w-full max-w-[620px] items-center justify-center sm:h-[540px] lg:h-[620px]">
              {/* Glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.7, scale: 1 }}
                transition={{ duration: 1 }}
                className="absolute right-1/2 top-1/2 h-[410px] w-[410px] translate-x-[52%] -translate-y-[48%] rounded-full bg-[radial-gradient(circle,#fbd9ca_0%,#f3c5d7_46%,#d8c1f2_78%,transparent_100%)] blur-3xl sm:h-[520px] sm:w-[520px] lg:h-[640px] lg:w-[640px]"
              />

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, rotate: 7 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-[300px] sm:w-[390px] lg:w-[700px]">
                <img
                  src={aboutImg}
                  alt="Joyful Monicah"
                  className="h-auto w-full object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.08)]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
