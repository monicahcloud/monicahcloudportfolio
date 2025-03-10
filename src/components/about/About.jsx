import React from "react";
import SectionTitle from "../skills/SectionTitle";
import SocialMedia from "../navbar/SocialMedia";
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutmeText";

const About = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 pt-30 pb-20" id="about">
      <div className=" grid md:grid-cols-2 items-center gap-16">
        <AboutMeImage />

        <article>
          <div className="pt-20">
            {" "}
            <SectionTitle first="About " second="Monicah" />
            <AboutMeText />{" "}
            <div className="pt-5 ml-20 flex justify-center items-center">
              {" "}
              <SocialMedia />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
