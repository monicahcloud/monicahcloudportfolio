import subSkills from "../../assets/images/subSkills.jpg";

const SubSkills = () => {
  return (
    <div className="border-y-2 border-gray-200 relative ">
      <div className="absolute bg-gradient-to-r from-orange-500 to-cyan-500 opacity-50 w-full h-full"></div>
      <img
        src={subSkills}
        alt="subSkills image"
        className="h-[80px] md:h-[100px] lg:h-[100px] w-full object-cover"
      />
    </div>
  );
};

export default SubSkills;
