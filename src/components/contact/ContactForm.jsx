import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

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
          setSuccess("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-8 max-w-3xl mx-auto">
      {success && <p className="text-cyan-500 font-medium mb-4">{success}</p>}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="h-12 text-base sm:text-lg rounded-lg bg-gray-200 px-3 text-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="h-12 text-base sm:text-lg rounded-lg bg-gray-200 px-3 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          className="h-12 text-base sm:text-lg rounded-lg bg-gray-200 px-3 text-black"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <textarea
          name="message"
          rows={6}
          placeholder="Message"
          required
          className="text-base sm:text-lg rounded-lg bg-gray-200 p-3 text-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="w-full sm:w-1/2 mx-auto">
          <button
            type="submit"
            className="w-full rounded-lg border border-cyan-500 text-white h-12 font-semibold text-lg bg-cyan-500/70 hover:bg-cyan-800 transition-all duration-300">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
