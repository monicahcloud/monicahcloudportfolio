import Logo from "./Logo";
import NavLink from "./NavLink";
import NavbarBtn from "./NavbarBtn";

const NavBarMain = () => {
  return (
    <>
      <nav className=" sticky top-0 z-[20] border-b border-b-amber-500">
        <div className="mx-10 py-6 px-8 flex justify-between items-center ">
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
