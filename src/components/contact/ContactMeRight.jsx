import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import image from "../../assets/images/9-removebg-preview.png";
const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img src={image} alt="email image" className="max-w-[300px]" />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
