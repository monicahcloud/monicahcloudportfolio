import { useState } from 'react'
import Button from "react-bootstrap/Button";



const ContactForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");

    function encode(data) {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", name, phone, email, date, message }),
        })
          .then(() => alert("Message sent!"))
          .catch((error) => alert(error));
      }

    return (
        <>
            <div >
            <form className='form' action="" name="contact" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name
                        <input
                            type="text"
                            id='name'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email
                        <input
                            type="text"
                            id='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone
                        <input type="text" id='phone' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="date">Timeline
                        <input
                            type="date"
                            id='date'
                            name='date'
                            value={date}
                            onChange={(e) => setDate(e.target.value)} />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Tell me a little about your project:
                        <textArea
                            type="text"
                            id='message'
                            name='message'
                            value={message}
                            rows={3}
                            onChange={(e) => setMessage(e.target.value)} />
                    </label>
                </div>
                <Button 
                    variant="success"
                    type="submit">
                    Send
                </Button>
            </form></div>
        </>
    )
}

export default ContactForm
