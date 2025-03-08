import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[350px] md:w-[240px] h-auto w-full border-2 text-white border-orange-500 border-dashed rounded-2xl mt-12 p-4">
      <p className="font-bold text-cyan-500">{experience.job}</p>
      <p className="text-orange-500">{experience.company}</p>
      <p className="text-gray-200">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
