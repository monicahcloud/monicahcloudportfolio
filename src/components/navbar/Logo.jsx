import logo from "../../assets/images/mono5.png";
import { Link } from "react-scroll";

function Logo() {
  return (
    <div className="flex items-center justify-center px-8 h-12 min-w-[170px]">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="home">
        <img
          src={logo}
          alt="logo"
          className="w-40 h-auto max-w-none block mt-[-4rem] mb-[-4rem] ml-2"
          style={{ maxWidth: "170px" }}
        />
      </Link>
    </div>
  );
}

export default Logo;
