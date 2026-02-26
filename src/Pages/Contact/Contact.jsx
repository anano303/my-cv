import React, { useState, useContext } from "react";
import "./Contact.css";
import { FaGithub, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { TEXTS } from "../../Hooks/Languages";
import { LanguageContext } from "../../Hooks/LanguageContext";

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      const response = await fetch("https://formspree.io/f/mgegdqja", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="contact">
      <div className="section1">
        <h1>{TEXTS[language].contactMe}</h1>
        {submitted ? (
          <p>{TEXTS[language].messageSent}</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>

      <div className="socIcons">
        <a href="https://github.com/anano303?tab=repositories" target="_blank" rel="noopener noreferrer">
          <FaGithub size={22} />
        </a>
        <a href="https://www.facebook.com/anano303" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={22} />
        </a>
        <a href="mailto:beroshviliani100@gmail.com?subject=Your%20Subject%20Here">
          <FaEnvelope size={22} />
        </a>
        <a href="tel:+995577300480">
          <FaPhone size={22} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
