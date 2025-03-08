import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/cloudmonicah/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://www.github.com/monicahcloud"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://www.facebook.com/monicahcloud"
        Icon={FaFacebook}
      />
    </div>
  );
};

export default ContactSocial;
