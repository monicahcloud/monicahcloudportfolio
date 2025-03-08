import logo from "../../assets/images/mono5.png";
import { Link } from "react-scroll";
function Logo() {
  return (
    <>
      <Link spy={true} smooth={true} duration={500} offset={-120} to="home">
        <img
          src={logo}
          alt="logo"
          className="w-40 block mt-[-4rem] mb-[-4rem] ml-02 "
        />
      </Link>
    </>
  );
}

export default Logo;
