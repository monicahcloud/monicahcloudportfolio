import React from "react";
import { links } from "../../data";

import Logo from "./Logo";
import NavLink from "./NavLink";

const NavBarMain = () => {
  return (
    <>
      <nav className="sticky top-0 z-[20] bg-slate-900 flex border-orange-400 justify-between items-center px-5 py-4">
        <div className="flex items-center ml-10 justify-between w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Links Container (centered on larger screens) */}

          <NavLink />
        </div>
      </nav>
    </>
  );
};

export default NavBarMain;
