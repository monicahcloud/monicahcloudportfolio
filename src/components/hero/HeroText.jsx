import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";

{
  /*  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-300 to-cyan-600 via-yellow-300 bg-clip-text text-transparent tracking-wider">
            Creating Seamless Experiences, Powered by Data
          </h1>

          <p className="mt-4 text-3xl md:text-4xl text-cyan-400">
            Monicah Cloud
          </p>

          <p className="mt-2 text-xl md:text-2xl capitalize">
            Front-End Developer and BI Analyst
          </p> */
}

{
  /* Resume Button */
}
{
  /* <div className="mt-6 flex justify-center md:justify-start">
            <RainbowButton text="Download Resume" downloadLink={resume} /></div>*/
}

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className=" text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-300 to-cyan-600 via-yellow-300 bg-clip-text text-transparent tracking-wider uppercase  ">
        Creating Seamless Experiences, Powered by Data
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl text-4xl text-cyan-400 font-bold uppercase">
        Monicah Cloud
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-2 text-xl md:text-2xl capitalize">
        Front-End Developer and BI Analyst
      </motion.p>
    </div>
  );
};

export default HeroText;
