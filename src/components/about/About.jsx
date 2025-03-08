import React from "react";
import SectionTitle from "../skills/SectionTitle";
import SocialMedia from "../navbar/SocialMedia";
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutmeText";

const About = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 pt-50 pb-10" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <AboutMeImage />

        <article>
          <SectionTitle first="About " second="Monicah" />
          <AboutMeText />
          <div className="pt-5 mx-10 flex items-center">
            {" "}
            <SocialMedia />
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
