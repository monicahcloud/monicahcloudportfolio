import React from "react";

const RainbowButton = ({ text, downloadLink }) => {
  return (
    <a
      href={downloadLink}
      download
      className="relative flex items-center justify-center h-12 w-40 font-bold text-white transition group duration-300 ease-in-out 
        rounded-lg bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 
        hover:shadow-purple-600/30 hover:shadow-2xl p-[2px]">
      <span
        className="flex items-center justify-center w-full h-full bg-gray-900 rounded-md 
        transition duration-300 ease-in-out hover:bg-gradient-to-r 
        hover:from-gray-700 hover:to-gray-900">
        {text}
      </span>
    </a>
  );
};

export default RainbowButton;
