import { Link } from "react-scroll";

const Footer = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-cyan-500 mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-cyan-500 ">Monicah Cloud</p>
        <ul className="flex gap-4 text-cyan-500 text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-orange-500 transition-all duration-500 cursor-pointer">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-cyan-500">
        &copy; {currentYear} VitaNova Designs LLC | All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
