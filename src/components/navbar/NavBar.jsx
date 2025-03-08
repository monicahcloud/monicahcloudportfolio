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
      <div className="flex justify-between w-full  mx-auto  bg-slate-900 items-center p-6  lg:border-b-orange-300 border-[0.5px] ">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <Links />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-5 mt-2  bg-slate-900 items-center justify-center rounded-full  border-cyan-500 border-[0.5px] ">
        <button
          className="text-2xl p-2 border text-white border-cyan-400 rounded-full"
          onClick={toggleMenu}>
          {" "}
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
