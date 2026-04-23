import Logo from "./Logo";
import NavLinks from "./NavLinks";
import NavbarBtn from "./NavbarBtn";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/80 backdrop-blur-xl">
      <div className="relative mx-auto flex items-center justify-around px-4 py-3 md:px-6 lg:px-8">
        {/* Left */}
        <Logo />

        {/* Center desktop nav */}
        <div className="flex-1 justify-center hidden lg:flex font-display text-md font-semibold tracking-[0.02em] text-[#155f69]  ">
          <NavLinks />
        </div>

        {/* Right desktop button */}
        <div className="hidden lg:flex">
          <NavbarBtn />
        </div>

        {/* Mobile nav trigger */}
        <div className="lg:hidden">
          <NavLinks />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
