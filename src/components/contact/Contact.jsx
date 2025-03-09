import SectionTitle from "../skills/SectionTitle";
import ContactMeLeft from "./ContactMeLeft";
import { motion } from "framer-motion";
import { fadeIn } from "@/framerMotion/variant";

const Contact = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 ">
      <div className=" md:hidden ">
        <SectionTitle first="Let's Work Together On" second="Something Great" />
      </div>
      <div>
        <h1 className=" text-6xl font-bold tracking-wider text-center text-white hidden md:block capitalize">
          Let's Work Together on <br></br>
          <span className="text-cyan-500"> something great</span>{" "}
        </h1>
      </div>
      <div className="flex justify-between gap-20 bg-slate-900/10 p-8 rounded-2xl lg:flex-row flex-col">
        <motion.div
          variants={fadeIn("top", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}>
          <ContactMeLeft />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
