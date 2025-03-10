import aboutImg from "../../assets/images/7-removebg-preview.png";

const AboutMeImage = () => {
  return (
    <div className="h-[400px] lg:h-[500px] w-full relative flex justify-center">
      <div className="h-[400px] w-[300px] md:h-[500px] md:w-[350px] rounded-[100px] overflow-hidden">
        <img
          src={aboutImg}
          alt="About Me Image"
          className="h-full scale-x-[-1] relative z-10 w-full object-contain"
        />
      </div>
      <div className="h-[350px] w-[250px] md:h-[400px] md:w-[300px] bg-orange-300 absolute bottom-[-20px] left-[-20px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
