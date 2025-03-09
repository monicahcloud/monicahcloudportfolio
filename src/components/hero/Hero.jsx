import heroImg from "../../assets/images/5-removebg-preview.png";
import RainbowButton from "./RainbowButton";
import resume from "../../assets/resume.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";
import { PiHexagonThin } from "react-icons/pi";
import SubHero from "./SubHero";

const Hero = () => {
  return (
    <div id="home" className="pt-20 p-5">
      <div className=" mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8 justify-between relative">
        <article className="flex flex-col gap-4 h-full justify-center md:text-left text-center ml-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-300 to-cyan-600 via-yellow-300 bg-clip-text text-transparent tracking-wider">
            Creating Seamless Experiences, Powered by Data
          </h1>

          <p className="mt-4 text-5xl md:text-6xl text-cyan-400 tracking-wide">
            Monicah Cloud
          </p>
          <p className="mt-2 text-3xl text-white capitalize tracking-wide">
            Front-End Developer and BI Analyst
          </p>
          <div className="mt-3 md:mt-6  justify-center hidden md:flex">
            <RainbowButton text="Download Resume" downloadLink={resume} />
          </div>
        </article>
        <article className="mt-10 md:mt-0">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
            className=" h-full w-auto flex items-center justify-center ">
            <img
              src={heroImg}
              alt="Monicah Cloud"
              className="max-h-[450px] w-auto"
            />

            <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
              <PiHexagonThin className=" md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan-500 blur-md animate-[spin_20s_linear_infinite] " />
            </div>
          </motion.div>
        </article>
      </div>
      <SubHero />
    </div>
  );
};

export default Hero;
