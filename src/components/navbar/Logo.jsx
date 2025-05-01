import logo from "../../assets/images/mono5.png";

function Logo() {
  return (
    <div className="flex items-center justify-center h-12 min-w-[170px]">
      <a href="#home">
        <img
          src={logo}
          alt="logo"
          className="w-40 h-auto max-w-none block mt-[-4rem] mb-[-4rem]"
          style={{ maxWidth: "200px" }}
        />
      </a>
    </div>
  );
}

export default Logo;
