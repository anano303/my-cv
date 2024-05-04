import "./Footer.css";
import vector from "../../assets/Vector (1).png";

const Footer = () => {
  return (
    <div className="footer">
      <img alt="img" src={vector} />
      <p>
        By A.Beroshvili <span> / 2024 </span>
      </p>
    </div>
  );
};
export default Footer;
