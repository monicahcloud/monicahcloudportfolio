import ContactInfo from "./ContactInfo";
import image from "../../assets/images/9-removebg-preview.png";

const ContactText = () => {
  return (
    <div>
      <h2 className="text-cyan-400 text-5xl text-center">Get In Touch</h2>

      <div className="mx-auto justify-center items-center flex relative">
        {/* Rotating Dotted Circle with Glow Effect */}
        <div
          className="absolute animate-spin-slow rounded-full border-4 border-dotted border-cyan-500
          md:h-[600px] md:w-[600px] 
          h-[300px] w-[300px] 
          lg:h-[600px] lg:w-[600px]
          shadow-[0_0_50px_10px_rgba(6,182,212,0.4)]"></div>

        {/* Image */}
        <img
          src={image}
          alt="email image"
          className="relative z-10 max-w-[500px] md:max-w-[600px] lg:max-w-[600px]"
        />
      </div>

      <div className="flex mx-auto justify-center">
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactText;
