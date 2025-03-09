import React from "react";
import { links } from "../../data";
import { useState } from "react";

const NavLink = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <ul className="hidden md:flex justify-center w-full gap-x-10 text-gray-200 uppercase font-semibold px-5 py-1">
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id} className="group">
              <a
                href={href}
                className="capitalize text-3xl tracking-wider hover:text-cyan-600 duration-300">
                {text}
              </a>
              <ul className="mx-auto bg-amber-400 w-0 group-hover:w-full h-[1px] transition-all duration-500"></ul>
            </li>
          );
        })}
      </ul>

      {/* Hamburger Button (on small screens) */}
      <div className="md:hidden">
        <button onClick={toggleNavbar} className="text-2xl text-cyan-500">
          {isOpen ? (
            <span className="text-6xl">&times;</span> // Close icon
          ) : (
            <span className="text-6xl">&#9776;</span> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-20 left-0 w-full text-gray-200 bg-slate-900 flex flex-col items-center gap-5 py-4 transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}>
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id} className="group">
              <a
                href={href}
                className="capitalize text-2xl tracking-wider hover:text-cyan-800 duration-300">
                {text}
              </a>
              <ul className="mx-auto bg-orange-400 w-0 group-hover:w-full h-[1px] transition-all duration-500"></ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLink;
