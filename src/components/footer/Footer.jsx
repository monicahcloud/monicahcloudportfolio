import { Link } from "react-scroll";
import ContactSocial from "../contact/ContactSocial";

const Footer = () => {
  const footerLinks = [
    {
      name: "About",
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
    <div className="px-4 ">
      <div className="w-full h-[1px] bg-cyan-500 mt-24"></div>
      <div className=" mt-4 justify-center mx-auto text-center  ">
        <h1 className="text-4xl text-white mb-4 uppercase font-medium">
          Monicah <span className="text-cyan-400">Cloud</span>
        </h1>
      </div>
      <div className="">
        <ul className="flex gap-4 justify-center mx-auto text-center items-center  text-cyan-500 text-2xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-amber-400 transition-all duration-500 cursor-pointer">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="justify-center mx-auto text-center flex my-4">
          <ContactSocial />
        </div>
      </div>
      <p className="max-w-[1200px] mt-2 mb-12 text-md justify-center mx-auto text-center text-cyan-500">
        &copy; {currentYear} VitaNova Designs LLC | All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
