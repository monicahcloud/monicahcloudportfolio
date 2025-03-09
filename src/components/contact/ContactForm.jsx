import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ecjoxco", "template_8s24eyo", form.current, {
        publicKey: "XnLTFneXRVkwkphGD",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setPhone("");
          setSuccess("Message Sent Succesfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan-500">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="h-12 rounded-lg bg-gray-200 px-2 text-black"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="h-12 rounded-lg bg-gray-200  text-black px-2"
          value={email}
          onChange={handleEmail}
        />
        <input
          type="phone"
          name="phone"
          placeholder="Phone Number"
          required
          className="h-12 rounded-lg bg-gray-200  text-black px-2"
          value={phone}
          onChange={handlePhone}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg bg-gray-200  text-black p-2"
          value={message}
          onChange={handleMessage}
        />
        <div className="w-1/2 mx-auto">
          {" "}
          <button
            type="submit"
            className="w-full rounded-lg border border-cyan-500 text-white h-12 font-bold text-xl hover:bg-cyan-800 bg-cyan-500/50 transition-all duration-500">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
