import aboutImg from "../../assets/images/7-removebg-preview.png";

const AboutMeImage = () => {
  return (
    <div className=" mx-10 h-[500px] w-full relative">
      <div className="h-[500px] w-full rounded-[100px] absolute overflow-hidden">
        <img
          src={aboutImg}
          alt="About Me Image"
          className="h-full w-auto object-cover scale-x-[-1]"
        />
      </div>
      <div className="h-[500px] w-[400px] bg-amber-400 absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
