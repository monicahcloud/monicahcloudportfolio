import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center text-center mx-5">
      <p className="text-white text-2xl pt-10">
        I’m a creative problem solver who helps people bring their ideas to life
        with clarity and purpose. Whether it’s building a brand, designing a
        website, or turning messy data into simple insights, I blend strategy,
        storytelling, and design to create experiences that truly connect. I
        care deeply about making things that feel thoughtful, human, and
        impactful—because I believe every voice deserves to be seen, heard, and
        understood.
      </p>
      <button className="border border-cyan-300 rounded-full py-2 px-8 w-1/2 md:w-1/3 justify-center text-lg flex gap-2 items-center mt-8  hover:bg-orange-300 transition-all duration-500 cursor-pointer ">
        <a
          href="#projects"
          className="cursor-pointer text-white hover:text-cyan-500 transition-all duration-500">
          My Projects
        </a>
      </button>
    </div>
  );
};

export default AboutMeText;
