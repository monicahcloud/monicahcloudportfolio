import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className=" text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-300 to-cyan-600 via-yellow-300 bg-clip-text text-transparent tracking-wider uppercase  ">
        Monicah Cloud
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-5xl text-3xl text-cyan-400 font-bold uppercase">
        Your Go-To-Partner for Getting Things Done
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-2 text-xl md:text-2xl capitalize">
        I listen, I understand and I turn challenges into opportunities for your
        business.
      </motion.p>
    </div>
  );
};

export default HeroText;
