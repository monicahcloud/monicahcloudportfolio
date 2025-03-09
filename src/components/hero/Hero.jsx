import heroImg from "../../assets/images/5-removebg-preview.png";
import RainbowButton from "./RainbowButton";
import resume from "../../assets/resume.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";
import { PiHexagonThin } from "react-icons/pi";
import SubHero from "./SubHero";

const Hero = () => {
  return (
    <div
      id="home"
      className="pt-20 px-5 md:pt-40 md:px-10 lg:px-20 bg-gray-900 text-white">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Text Section */}
        <article className="text-center md:text-left flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-300 to-cyan-600 via-yellow-300 bg-clip-text text-transparent tracking-wider">
            Creating Seamless Experiences, Powered by Data
          </h1>

          <p className="mt-4 text-3xl md:text-4xl text-cyan-400">
            Monicah Cloud
          </p>

          <p className="mt-2 text-xl md:text-2xl capitalize">
            Front-End Developer and BI Analyst
          </p>

          {/* Resume Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <RainbowButton text="Download Resume" downloadLink={resume} />
          </div>
        </article>

        {/* Image Section */}
        <article className="flex items-center justify-center">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="relative max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src={heroImg}
              alt="Monicah Cloud"
              className="w-full h-auto rounded-lg shadow-lg"
            />

            {/* Decorative Hexagon */}
            <div className="absolute -z-10 flex justify-center items-center animate-pulse">
              <PiHexagonThin className="text-cyan-500 blur-md animate-[spin_20s_linear_infinite] w-[300px] md:w-[400px] lg:w-[500px]" />
            </div>
          </motion.div>
        </article>
      </div>

      {/* SubHero Section */}
      <SubHero />
    </div>
  );
};
export default Hero;
