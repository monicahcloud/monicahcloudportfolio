import AllSkills from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";

const Skills = () => (
  <div id="skills" className="pt-40">
    <div>
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}>
          <SkillsText />
        </motion.div>
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] hidden lg:block">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
