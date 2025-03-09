import React from "react";
import SectionTitle from "./SectionTitle";

const SkillsText = () => {
  return (
    <div>
      {" "}
      <div className="align-element">
        <SectionTitle first="My" second="Skills" />
        <p className="text-2xl mt-5 text-white mx-10 text-center">
          Not only do I work with these technologies, but I excel in using them
          with best practices to deliver high-quality, scalable, and
          user-centric solutions. I specialize in React.js, JavaScript,
          TypeScript, and Tailwind CSS, ensuring that every application is built
          with clean, maintainable, and performance-optimized code. My expertise
          also includes ADA compliance, responsive design, API integration, and
          cross-functional team collaboration, allowing me to transform complex
          ideas into interactive, seamless, and visually compelling digital
          products. Additionally, I am skilled in debugging, problem-solving,
          and delivering efficient solutions that enhance user experience and
          performance.
        </p>
      </div>
    </div>
  );
};

export default SkillsText;
