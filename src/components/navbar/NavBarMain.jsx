import Logo from "./Logo";
import NavLink from "./NavLink";
import NavbarBtn from "./NavbarBtn";

const NavBarMain = () => {
  return (
    <>
      <nav className="border-b border-b-orange-600">
        <div className="mx-10 py-4 px-8 flex justify-between items-center sticky top-0 z-[20]">
          <div>
            <Logo />
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
