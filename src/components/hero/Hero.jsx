import heroImg from "../../assets/images/5-removebg-preview.png";
import RainbowButton from "./RainbowButton";
import resume from "../../assets/resume.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";
import { PiHexagonThin } from "react-icons/pi";
import SubHero from "./SubHero";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div id="home" className="pt-20 md:pt-40  bg-gray-900 text-white ">
      <div className="grid md:grid-cols-2 items-center gap-10 max-w-7xl mx-auto">
        {/* Text Section */}
        <article className="text-center md:text-left flex flex-col gap-4">
          <HeroText />
          <div className="items-center flex justify-center md:justify-start">
            <RainbowButton text="Download Resume" downloadLink={resume} />
          </div>
        </article>

        {/* Image Section */}
        <article className="flex items-center justify-center  ">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className="h-full flex items-center justify-center ">
            <img
              src={heroImg}
              alt="Monicah Cloud"
              className="max-h-[450px] w-auto relative z-20"
            />

            {/* Decorative Hexagon */}
            <div className="absolute z-10 flex justify-center items-center animate-pulse">
              <PiHexagonThin className="md:h-[100%] h-[110%] min-h-[650px] w-auto text-cyan-500 blur-md animate-[spin_20s_linear_infinite]" />
            </div>
          </motion.div>
        </article>
      </div>
    </div>
  );
};
export default Hero;
