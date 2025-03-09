import { links } from "../../data";

const Links = () => {
  return (
    <div className="">
      {/* Desktop Navigation */}
      <ul className=" hidden lg:flex justify-center w-full gap-x-10 backdrop-blur-lg lg:bg-slate-900">
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id} className="group">
              <a
                href={href}
                className="cursor-pointer transition-all capitalize text-4xl text-gray-300 tracking-wide hover:text-cyan-600 duration-300">
                {text}
              </a>
              <ul className="mx-auto bg-amber-500 w-0 group-hover:w-full h-[1px] transition-all duration-500"></ul>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu Button */}
      {/* <div className="md:hidden">
        <button
          onClick={toggleNavbar}
          className="text-6xl text-cyan-800 focus:outline-none">
          {isOpen ? <span>&times;</span> : <span>&#9776;</span>}
        </button>
      </div> */}

      {/* Mobile Menu */}
      {/* <div
        className={`md:hidden fixed top-0 left-0 w-full h-2/4 bg-slate-900 flex flex-col items-center justify-center gap-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <a
              key={id}
              href={href}
              className="capitalize text-2xl text-white tracking-wider hover:text-cyan-800 duration-300"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {text}
            </a>
          );
        })} */}

      {/* Close Button inside Menu */}
      {/* <button
          onClick={toggleNavbar}
          className="absolute top-5 right-5 text-4xl text-white">
          &times;
        </button>
      </div> */}
    </div>
  );
};

export default Links;
