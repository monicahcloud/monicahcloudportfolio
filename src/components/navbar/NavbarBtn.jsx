import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button
      className="flex px-8  rounded-full text-xl font-bold font-body text-white border-cyan-300 border items-center gap-1 
     transition-all duration-500 hover:scale-110 hover:border-orange-300 cursor-pointer hover:cyan-500">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
