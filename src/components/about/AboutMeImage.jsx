import aboutImg from "../../assets/images/7-removebg-preview.png";

const AboutMeImage = () => {
  return (
    <div className="h-[400px] lg:h-[500px] w-full relative flex justify-center">
      <div className="h-[400px] w-[400px] md:h-[500px] md:w-[500px] rounded-[100px] overflow-hidden">
        <img
          src={aboutImg}
          alt="About Me Image"
          className="h-full scale-x-[-1] relative z-10 w-full object-contain"
        />
      </div>
    </div>
  );
};

export default AboutMeImage;
