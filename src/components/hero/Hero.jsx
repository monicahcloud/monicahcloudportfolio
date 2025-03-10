import heroImg from "../../assets/images/5-removebg-preview.png";
import RainbowButton from "./RainbowButton";
import resume from "../../assets/resume.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";
import { PiHexagonThin } from "react-icons/pi";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <div
      id="home"
      className="pt-20 md:pt-40 bg-gray-900 text-white overflow-hidden">
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
            {/* First Hexagon (Glow Effect) */}
            <div className="absolute flex justify-center items-center animate-[spin_20s_linear_infinite] z-0">
              <PiHexagonThin
                className="text-cyan-400 blur-lg animate-pulse
                h-[500px] w-[500px] md:h-[600px] md:w-[600px] 
                lg:h-[700px] lg:w-[700px]"
              />
              {/* Glowing Blur */}
              <div className="absolute w-full h-full bg-cyan-500 blur-[150px] opacity-20"></div>
            </div>

            {/* Second Hexagon (Pulse Effect) */}
            <div className="absolute flex justify-center items-center z-0 animate-pulse">
              <PiHexagonThin
                className="text-orange-500 opacity-50 blur-md animate-[ping_5s_ease-in-out_infinite]
                h-[450px] w-[450px] md:h-[500px] md:w-[500px]"
              />
            </div>

            {/* Floating Image */}
            <img
              src={heroImg}
              alt="Monicah Cloud - Frontend Developer & BI Analyst"
              className="relative z-20 max-w-[300px] md:max-w-[400px] lg:max-w-[500px] 
              object-contain drop-shadow-xl transform 
              animate-[float_6s_ease-in-out_infinite]"
            />
          </motion.div>
        </article>
      </div>

      {/* Keyframes Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes ping {
            0% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 0.2; }
            100% { transform: scale(1); opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
