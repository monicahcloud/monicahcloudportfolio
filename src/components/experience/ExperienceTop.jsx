import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopRight from "./ExperienceTopRight";
import ExperienceTopMiddle from "./ExperienceMiddle";

const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-4 items-center justify-center my-8">
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  );
};

export default ExperienceTop;
