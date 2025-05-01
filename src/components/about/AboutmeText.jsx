import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center text-center mx-5">
      <p className="text-white text-2xl pt-10">
        I help businesses grow. By understanding your needs, I turn your
        challenges into simple, effective solutions by establishing custom, easy
        to use systems that make a real difference for your business.
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
