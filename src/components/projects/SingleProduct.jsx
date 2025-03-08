import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";

const SingleProject = ({ title, align, image, url, info }) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } justify-end flex-col`}>
      <div>
        <h2 className="md:text-3xl text-2xl text-orange-400 ">{title}</h2>
        <h2
          className={`text-xl font-thin text-white font-special text-center ${
            align === "left" ? "md:text-right" : "md:text-left"
          }`}>
          {info}
        </h2>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-lg flex gap-2 items-center text-cyan-500 hover:text-orange-300 transition-all duration-500 cursor-pointer justify-self-center ${
            align === "left" ? "md:justify-self-end" : "md:justify-self-start"
          }`}>
          View <BsFillArrowUpRightCircleFill />
        </a>
      </div>
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan-300 opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500  hidden"></div>
        <img src={image} alt="website image" className="w-full h-full" />
      </div>
    </motion.div>
  );
};

export default SingleProject;
