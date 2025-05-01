import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a
      href="#contact"
      className="flex items-center justify-center px-8 h-12 min-w-[170px] whitespace-nowrap rounded-full text-xl font-bold font-body text-white border-cyan-300 border gap-1 
        transition-all duration-500 hover:scale-105 hover:border-orange-300 cursor-pointer hover:text-cyan-500">
      Hire Me
      <span className="hidden md:block">
        <LuArrowDownRight />
      </span>
    </a>
  );
};

export default NavbarBtn;
