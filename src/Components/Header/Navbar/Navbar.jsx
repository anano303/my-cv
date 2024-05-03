import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../../../Hooks/LanguageContext.js";
import { useContext, useEffect } from "react";
import { TEXTS } from "../../../Hooks/Languages.js";
import menu from "../../../assets/menu.png";

const Navbar = () => {
  const { language } = useContext(LanguageContext);
  //   const location = useLocation();

  useEffect(() => {
    document.body.className = language;
  }, [language]);

  return (
    <div className="Navbar">
      <img alt="menu" src={menu} className="menu" />
      <ul className="ul">
        <li>
          {" "}
          <Link to="/">{TEXTS[language].home}</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">{TEXTS[language].about}</Link>
        </li>
        <li>
          {" "}
          <Link to="/portfolio">{TEXTS[language].portfolio}</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact">{TEXTS[language].contact}</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
