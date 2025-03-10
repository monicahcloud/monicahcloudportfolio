import React from "react";
import SectionTitle from "../skills/SectionTitle";
import SocialMedia from "../navbar/SocialMedia";
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutmeText";

import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";

const About = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 pt-30 pb-20" id="about">
      <div className=" grid md:grid-cols-2 items-center gap-16">
        {/* <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}>
          <AboutMeImage />
        </motion.div> */}
        <article>
          <div className="pt-20">
            {" "}
            <motion.div
              variants={fadeIn("left", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}>
              <SectionTitle first="About " second="Monicah" />
              <AboutMeText />{" "}
              <div className="pt-5 ml-20 flex justify-center items-center">
                {" "}
                <SocialMedia />
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
