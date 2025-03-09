import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col items-center text-center mx-5">
      <p className="text-white text-2xl pt-10">
        I combine front-end development expertise with business intelligence to
        create impactful digital solutions and data-driven insights. With a
        strong foundation in React, Python, SQL, and analytics, I develop
        intuitive user experiences while leveraging data to drive strategic
        decisions. Passionate about problem-solving and innovation, I thrive in
        roles that bridge technology and business, delivering solutions that
        enhance both user engagement and operational efficiency.
      </p>
      <button className="border border-cyan-300 rounded-full py-2 px-8 w-1/2 md:w-1/3 justify-center text-lg flex gap-2 items-center mt-8  hover:bg-orange-300 transition-all duration-500 cursor-pointer ">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-30}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan-500 transition-all duration-500">
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
