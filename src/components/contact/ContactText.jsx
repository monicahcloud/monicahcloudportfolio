import ContactInfo from "./ContactInfo";
import image from "../../assets/images/9-removebg-preview.png";

const ContactText = () => {
  return (
    <div className="px-4 py-10">
      <h2 className="text-cyan-400 text-3xl md:text-5xl text-center font-bold">
        Get In Touch
      </h2>

      <div className="flex justify-center items-center relative mt-10">
        {/* Rotating Dotted Circle with Glow Effect */}
        <div
          className="absolute animate-spin-slow rounded-full border-4 border-dotted border-cyan-500 
          h-[300px] w-[300px] sm:h-[300px] sm:w-[300px] md:h-[450px] md:w-[450px] lg:h-[550px] lg:w-[550px]
          shadow-[0_0_50px_10px_rgba(6,182,212,0.4)]"></div>

        {/* Image */}
        <img
          src={image}
          alt="Get in touch illustration"
          className="relative z-10  w-[300px] md:w-[400px] lg:w-[500px] object-contain"
        />
      </div>

      <div className="flex justify-center mt-10">
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactText;
