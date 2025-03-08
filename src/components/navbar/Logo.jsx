import logo from "../../assets/images/mono5.png";

function Logo() {
  return (
    <>
      <a href="home" className="">
        <img
          src={logo}
          alt="logo"
          className="w-40 block mt-[-4rem] mb-[-4rem] ml-02 "
        />
      </a>
    </>
  );
}

export default Logo;
