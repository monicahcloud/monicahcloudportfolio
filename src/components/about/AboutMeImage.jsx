import aboutImg from "../../assets/images/7-removebg-preview.png";

const AboutMeImage = () => {
  return (
    <div className="h-[400px] lg:h-[500px] w-full relative flex justify-center items-center">
      {/* Energy Flow Effect */}
      <div
        className="absolute animate-pulse rounded-full bg-gradient-to-r from-cyan-500 to-orange-500 
      opacity-40 blur-xl h-[400px] w-[400px] md:h-[500px] md:w-[500px] 
      z-0"></div>

      <div
        className="absolute animate-[ping_4s_ease-in-out_infinite] rounded-full border-4 border-cyan-400 
      h-[400px] w-[400px] md:h-[480px] md:w-[480px] 
      opacity-50 blur-lg z-0"></div>

      {/* Image */}
      <div className="h-[400px] w-[275px] md:h-[500px] md:w-[350px] rounded-[100px] overflow-hidden z-10">
        <img
          src={aboutImg}
          alt="About Me Image"
          className="h-full scale-x-[-1] w-full object-contain justify-center"
        />
      </div>
    </div>
  );
};

export default AboutMeImage;
