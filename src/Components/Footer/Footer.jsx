import "./Footer.css";
import { useContext } from "react";
import vector from "../../assets/Vector (1).png";
import darkFooter from "../../assets/darkfooter.png";
import { ThemeContext } from "../../Hooks/ThemeContext";

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="footer">
      <img alt="img" src={theme === "dark" ? darkFooter : vector} />
      <p>
        By A.Beroshvili <span> / 2024 </span>
      </p>
    </div>
  );
};
export default Footer;
