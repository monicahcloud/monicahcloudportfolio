import { useState } from "react";
import { links } from "../../data";
import Logo from "./Logo";
import NavbarBtn from "./NavbarBtn";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-[20] bg-slate-900  lg:border-b-orange-300 lg:border-[0.5px] flex justify-between items-center px-5 py-4">
      <div className="flex items-center ml-10 justify-between w-full">
        {/* Logo */}
        <div className="flex-shrink-0">
          {" "}
          <Logo />
        </div>

        {/* Links Container (centered on larger screens) */}
        <div className="hidden md:flex justify-center w-full gap-x-10 text-cyan-500 uppercase font-semibold px-5 py-1">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                key={id}
                href={href}
                className="capitalize text-2xl tracking-wider hover:text-cyan-800 duration-300">
                {text}
              </a>
            );
          })}
        </div>

        {/* Hamburger Button (on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-2xl text-cyan-500">
            {isOpen ? (
              <span className="text-4xl">&times;</span> // Close icon
            ) : (
              <span className="text-4xl">&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-slate-900 flex flex-col items-center gap-5 py-4 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}>
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <a
              key={id}
              href={href}
              className="capitalize text-2xl text-cyan-500 tracking-wider hover:text-cyan-800 duration-300"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {text}
            </a>
          );
        })}
      </div>
      <div className="hidden md:flex">
        <NavbarBtn />
      </div>
    </nav>
  );
};

export default Navbar2;
