import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a
      href="#contact"
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#f3b490] bg-[#f7c3a7] px-6 h-11 text-sm md:text-base font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-[#f1b391]">
      Let’s Connect
      <span className="hidden md:flex">
        <LuArrowDownRight />
      </span>
    </a>
  );
};

export default NavbarBtn;
