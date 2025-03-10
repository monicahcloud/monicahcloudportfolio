import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  const startYear = 2020;
  const currentYear = new Date().getFullYear();
  const yearDifference = currentYear - startYear;

  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-amber-500 font-bold uppercase text-3xl font-special text-center">
        Since {startYear}
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number={yearDifference} text="Years" />
        <p className="font-bold text-6xl text-amber-500">-</p>
        <ExperienceInfo number="25+" text="Websites" />
      </div>
      <p className="text-center text-lg text-white">
        With {yearDifference} years of experience building dynamic and
        user-friendly web applications.
      </p>
      {/* <ExperienceInfo number="$100k" text="Max Budget" /> */}
    </div>
  );
};

export default ExperienceTopLeft;
