import React from "react";

const SectionTitle = ({ first, second }) => {
  return (
    <div className="border-b border-white pb-2 mx-5 ">
      <h1 className="text-5xl text-white mb-4 tracking-wider uppercase font-medium">
        {first} <span className="text-cyan-400">{second}</span>
      </h1>
    </div>
  );
};

export default SectionTitle;
