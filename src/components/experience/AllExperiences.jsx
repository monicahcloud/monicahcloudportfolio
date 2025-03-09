import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";
import { nanoid } from "nanoid";

const experiences = [
  {
    job: "Front-End Developer",
    company: "VitaNova Designs",
    date: "2025 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Business Intelligence Analyst",
    company: "BRP",
    date: "2023 - 2024",
    responsibilities: [
      "Developed BI Dashboards and reports using PowerBI, SQL, DAX and Python.",
      "Conducted data transformation and analysis, inmproving data integrity and business insights.",
    ],
  },
  {
    job: "Software Developer",
    company: "Infosys",
    date: "2021 - 2023",
    responsibilities: [
      "Designed  enterprise applications using React.js and  Node.js, ensuring ADA complaince and responsive design.",
      "Developed web services and APIs, facilitating seamless integration between business applications.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}>
                <FaArrowRightLong className="text-6xl text-amber-500 lg:block hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
