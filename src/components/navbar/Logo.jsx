import logo from "/monicahlogo.png";

function Logo() {
  return (
    <div className="flex items-center justify-center h-16 min-w-[170px]">
      <a href="#home" className="flex items-center">
        <img
          src={logo}
          alt="Monicah Cloud logo"
          className="block h-auto w-36 md:w-40 lg:w-44 max-w-none"
        />
      </a>
    </div>
  );
}

export default Logo;
