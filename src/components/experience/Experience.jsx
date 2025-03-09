import AllExperiences from "./AllExperiences";
import ExperienceTop from "./ExperienceTop";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";
import SectionTitle from "../skills/SectionTitle";

const Experience = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4 pt-30">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}>
        <SectionTitle first="Work" second="Experience" />
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}>
        <ExperienceTop />
      </motion.div>
      <div className="w-full h-1 mt-4 bg-orange-500 lg:block hidden"></div>
      <AllExperiences />
    </div>
  );
};

export default Experience;
