import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-amber-500">
      <SingleInfo text="monicahcloud@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="470-703-7133" Image={FiPhone} />
      <SingleInfo text="Atlanta, GA USA" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
