import React, { useState } from "react";
import "./Contact.css";
import git from "../../assets/Git.png";
import insta from "../../assets/Instagram.png";
import emailIcon from "../../assets/Email.png";
import telIcon from "../../assets/telpon.png";
import { TEXTS } from "../../Hooks/Languages";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { useContext } from "react";

const Contact = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to store form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);

    try {
      // Send form data to Formspree endpoint
      const response = await fetch("https://formspree.io/f/mgegdqja", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      // Check if form submission was successful
      if (response.ok) {
        setSubmitted(true);
        // Reset form fields
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
            <button type="submit">Send</button>
          </form>
        )}
      </div>

      <div className="socIcons">
        <a href="https://github.com/anano303?tab=repositories" target="blank">
          {" "}
          <img alt="icon" src={git} />
        </a>
        <a href="www.facebook.com/anano303" target="blank">
          <img alt="icon" src={insta} />
        </a>
        <a href="mailto:beroshviliani100@gmail.com?subject=Your%20Subject%20Here">
          <img alt="icon" src={emailIcon} />
        </a>
        <a href="tel:+995577300480">
          <img alt="icon" src={telIcon} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
