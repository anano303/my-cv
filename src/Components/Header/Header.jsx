import React, { useContext, useState } from "react";
import { LanguageContext } from "../../Hooks/LanguageContext";

import "./Header.css";
import Navbar from "./Navbar/Navbar";
import ToggleOn from "../../assets/Land Switch - Dark.png";
import ToggleOff from "../../assets/Sky Switch - Light.png";
import geo from "../../assets/Georgia.png";
import eng from "../../assets/USA.png";
import { ThemeContext } from "../../Hooks/ThemeContext";
import logo from "../../assets/anano logo another.png";
import darkLogo from "../../assets/image (1).png";
import { Link } from "react-router-dom";

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  // const [isOn, setIsOn] = useState(true);
  const { theme, toggleTheme } = useContext(ThemeContext); // Access ThemeContext

  const handleLangClick = () => {
    const newLanguage = language === "ge" ? "en" : "ge";
    setLanguage(newLanguage); // Use setLanguage from LanguageContext to update the language
  };
  const handleClick = () => {
    // setIsOn((prevState) => !prevState);
    // Toggle between 'dark' and 'light' themes
    const newTheme = theme === "light" ? "dark" : "light";
    toggleTheme(newTheme);
  };

  return (
    <div className="header">
      <div className="mobileFlex">
        <Link to="/" className="logo">
          <img
            alt="logo"
            src={theme === "dark" ? darkLogo : logo}
            className="logo"
          />
        </Link>{" "}
        <Navbar />
        <div className="icons">
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
      </div>
    </div>
  );
};

export default Header;
