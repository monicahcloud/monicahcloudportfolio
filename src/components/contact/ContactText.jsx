import ContactInfo from "./ContactInfo";
import image from "../../assets/images/9-removebg-preview.png";

const ContactText = () => {
  return (
    <div>
      <h2 className="text-cyan-400 text-5xl  text-center">Get In Touch</h2>
      <div className="mx-auto justify-center items-center flex">
        <img src={image} alt="email image" className="" />
      </div>
      <div className="flex mx-auto justify-center">
        <ContactInfo />
      </div>
    </div>
  );
};

export default ContactText;
