import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../../../Hooks/LanguageContext.js";
import { useContext, useEffect, useState } from "react";
import { TEXTS } from "../../../Hooks/Languages.js";
import menu from "../../../assets/icons8-menu-bar-100.png";
import geo from "../../../assets/Georgia.png";
import eng from "../../../assets/USA.png";
import close from "../../../assets/icons8-close-window-100.png";
import { ThemeContext } from "../../../Hooks/ThemeContext.js";
import moon from "../../Toggle/darkToggle.png";
import sun from "../../Toggle/lightToggle.png";
import ToggleSwitch from "../../Toggle/Toggle.jsx";

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(theme === "dark");

  const handleChange = () => {
    setIsChecked(!isChecked);
    toggleTheme(); // Toggle theme
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    toggleTheme(newTheme);
  };

  const handleLangClick = () => {
    const newLanguage = language === "ge" ? "en" : "ge";
    setLanguage(newLanguage); // Use setLanguage from LanguageContext to update the language
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 820) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          <div className="desktop1">
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
          </div>
          <div className="desktop2">
            <li className="portfolio">
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
          </div>
          <div className="mobileIcons">
            <div className="toggle">
              <ToggleSwitch
                checked={isChecked}
                onChange={handleChange}
                image={sun}
                image2={moon}
              />
            </div>
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
