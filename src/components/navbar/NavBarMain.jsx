import React from "react";
import { links } from "../../data";
import Logo from "./Logo";
import NavLink from "./NavLink";
import NavbarBtn from "./NavbarBtn";

const NavBarMain = () => {
  return (
    <>
      <nav className="border-b border-b-orange-600">
        <div className="mx-10 py-4 px-8 flex justify-between items-center sticky top-0 z-[20] ">
          <div className="flex-shrink-0">
            <h1 className=" text-3xl font-bold tracking-wider text-cyan-600">
              Monicah<span className="text-white">Cloud</span>{" "}
            </h1>
          </div>
          <div>
            <NavLink />
          </div>
          <div className="hidden md:block">
            <NavbarBtn />
          </div>{" "}
        </div>
      </nav>
    </>
  );
};

export default NavBarMain;
