import git from "../../assets/Git.png";
import insta from "../../assets/Instagram.png";
import email from "../../assets/Email.png";
import tel from "../../assets/telpon.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h1>contact me</h1>
      <div className="socIcons">
        <img alt="icon" src={git} />
        <img alt="icon" src={insta} />
        <img alt="icon" src={email} />
        <img alt="icon" src={tel} />
      </div>
    </div>
  );
};
export default Contact;
