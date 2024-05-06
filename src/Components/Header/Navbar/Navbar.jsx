import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../../../Hooks/LanguageContext.js";
import { useContext, useEffect, useState } from "react";
import { TEXTS } from "../../../Hooks/Languages.js";
import menu from "../../../assets/icons8-menu-bar-100.png";
import ToggleOn from "../../../assets/toggle on (2).png";
import ToggleOff from "../../../assets/toggle off.png";
import geo from "../../../assets/geo.png";
import eng from "../../../assets/eng.png";
// import { ThemeContext } from "../../../Hooks/ThemeContext";
// import { THEME } from "../../../Hooks/ThemeColors";
import close from "../../../assets/icons8-close-window-100.png";
import { ThemeContext } from "../../../Hooks/ThemeContext.js";

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  // const [isOn, setIsOn] = useState(true);
  // const themeContext = useContext(ThemeContext);
  //   const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClick = () => {
    // setIsOn((prevState) => !prevState);
    // Toggle between 'dark' and 'light' themes
    const newTheme = theme === "light" ? "dark" : "light";
    toggleTheme(newTheme);
  };

  const handleLangClick = () => {
    const newLanguage = language === "ge" ? "en" : "ge";
    setLanguage(newLanguage); // Use setLanguage from LanguageContext to update the language
  };

  return (
    <div className="Navbar">
      <div className="menu" onClick={toggleMenu}>
        {isMenuOpen ? (
          <img alt="close" src={close} />
        ) : (
          <img alt="menu" src={menu} />
        )}
      </div>
      <div
        className={`links ${isMenuOpen ? "open" : ""}
         `}
      >
        <ul className="ul">
          <li>
            {" "}
            <Link to="/" onClick={closeMenu}>
              {TEXTS[language].home}
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/about" onClick={closeMenu}>
              {TEXTS[language].about}
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/portfolio" onClick={closeMenu}>
              {TEXTS[language].portfolio}
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/contact" onClick={closeMenu}>
              {TEXTS[language].contact}
            </Link>
          </li>
          <div className="mobileIcons">
            <img
              className="toggle"
              src={theme === "light" ? ToggleOn : ToggleOff}
              alt="toggle"
              onClick={handleClick}
            />
            <img
              className="lang"
              src={language === "ge" ? eng : geo}
              alt="lang"
              onClick={handleLangClick}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
