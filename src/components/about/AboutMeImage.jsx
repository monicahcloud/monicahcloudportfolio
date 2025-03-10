import aboutImg from "../../assets/images/7-removebg-preview.png";

const AboutMeImage = () => {
  return (
    <div className=" mx-10 h-[400px] lg:h-[500px] w-full relative">
      <div className="h-[500px] md:h-[500px] w-full rounded-[100px] absolute overflow-hidden">
        <img
          src={aboutImg}
          alt="About Me Image"
          className="h-full scale-x-[-1] relative z-10  w-[400px] md:w-[400px] lg:w-[500px] object-contain"
        />
      </div>
      <div className="h-[400px] w-[350px] md:h-[400px] md:w-[400px] bg-orange-300 absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
