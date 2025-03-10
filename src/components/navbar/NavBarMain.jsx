import Logo from "./Logo";
import NavLink from "./NavLink";
import NavbarBtn from "./NavbarBtn";

const NavBarMain = () => {
  return (
    <>
      <nav className="sticky top-0 z-[50] bg-gray-900 w-full border-b border-b-amber-500 scroll-mt-navbar shadow-md">
        <div className="mx-5 py-6  flex justify-between items-center ">
          <div>
            <Logo />
          </div>
          <div>
            <NavLink />
          </div>
          <div className="hidden lg:block">
            <NavbarBtn />
          </div>{" "}
        </div>
      </nav>
    </>
  );
};

export default NavBarMain;
