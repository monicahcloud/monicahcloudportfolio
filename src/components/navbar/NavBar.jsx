import Logo from "./Logo";
import Links from "./Links";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className=" mx-auto w-full  fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 ">
      <div className="flex flex-col sm:justify-around sm:items-center flex-wrap py-6 gap-4 sm:flex-row w-full bg-slate-900 lg:border-b-orange-300 lg:border-[0.5px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-cyan-300 flex flex-col items-center gap-5 py-4 transition-all duration-300 ease-in-out 
            ${menuOpen ? "block" : "hidden"}`}>
          <Links />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:flex p-2 mt-14 bg-slate-900 items-center justify-center rounded-full  border-cyan-500 border-[0.5px] ">
        <button
          className=" p-2 border text-white border-cyan-400 rounded-full"
          onClick={toggleMenu}>
          {" "}
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
