import { projects } from "@/data";
import SectionTitle from "../skills/SectionTitle";
import SingleProject from "./SingleProduct";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";

const Projects = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 pt-50" id="projects">
      <SectionTitle first="web" second="creations" />
      <div id="projects" className="max-w-[1200px] mx-auto px-4">
        <motion.div
          variants={fadeIn("top", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}></motion.div>
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
          {projects.map((project, index) => {
            return (
              <SingleProject
                key={index}
                title={project.title}
                align={project.align}
                image={project.image}
                info={project.info}
                url={project.url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Projects;
