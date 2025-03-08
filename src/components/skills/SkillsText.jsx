import React from "react";
import SectionTitle from "./SectionTitle";

const SkillsText = () => {
  return (
    <div>
      {" "}
      <div className="align-element">
        <SectionTitle first="My" second="Skills" />
        <p className="text-2xl mt-5 text-white mx-10 text-center">
          Not only do I work with these technologies but I excel in using them
          with best practices to deliver high-quality results.
        </p>
      </div>
    </div>
  );
};

export default SkillsText;
