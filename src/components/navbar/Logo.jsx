import logo from "/monicahlogo.png";

function Logo() {
  return (
    <div className="flex items-center justify-center h-16 min-w-[170px]">
      <a href="/" className="flex items-center">
        <img
          src={logo}
          alt="Monicah Cloud logo"
          className="hidden h-auto w-36 max-w-none md:block md:w-40 lg:w-44"
        />
      </a>
    </div>
  );
}

export default Logo;
