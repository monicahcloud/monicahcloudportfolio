import React from "react";
import SectionTitle from "./SectionTitle";

const SkillsText = () => {
  return (
    <div>
      {" "}
      <div className="align-element">
        <SectionTitle first="My" second="Skills" />
        <p className="text-2xl mt-5 text-white mx-10 text-center">
          I turn business challenges into easy-to-use digital solutions. Using
          my experience with modern web tools, I create websites and apps that
          are user-friendly, accessible, and tailored to your needs-helping your
          business run smoother and reach more people.
        </p>
      </div>
    </div>
  );
};

export default SkillsText;
