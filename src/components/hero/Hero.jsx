import heroImg from "../../assets/images/5-removebg-preview.png";
import RainbowButton from "./RainbowButton";
import resume from "../../assets/resume.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";
import { PiHexagonThin } from "react-icons/pi";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div id="home" className="pt-20 md:pt-40 bg-gray-900 text-white">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto px-5">
        {/* Text Section */}
        <article className="text-center md:text-left flex flex-col gap-4">
          <HeroText />
          <div className="flex justify-center md:justify-start pb-10">
            <RainbowButton text="Download Resume" downloadLink={resume} />
          </div>
        </article>

        {/* Image Section */}
        <article className="flex items-center justify-center relative">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="relative flex items-center justify-center">
            {/* Rotating Hexagon */}
            <div className="absolute flex justify-center items-center z-10 animate-pulse">
              <PiHexagonThin
                className="text-cyan-500 blur-md animate-[spin_20s_linear_infinite] 
              h-[450px] w-[450px]  md:h-[500px] md:w-[500px] lg:h-[650px] lg:w-[650px]"
              />
            </div>

            {/* Image */}
            <img
              src={heroImg}
              alt="Monicah Cloud - Frontend Developer & BI Analyst"
              className="relative z-20 max-w-[300px] md:max-w-[400px] lg:max-w-[500px] object-contain"
            />
          </motion.div>
        </article>
      </div>
    </div>
  );
};

export default Hero;
