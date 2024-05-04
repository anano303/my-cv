import React, { useContext, useState } from "react";
import { LanguageContext } from "../../Hooks/LanguageContext";
import logo from "../../assets/logo-no-background.png";
import "./Header.css";
import Navbar from "./Navbar/Navbar";
import ToggleOn from "../../assets/toggle on (2).png";
import ToggleOff from "../../assets/toggle off.png";
import geo from "../../assets/geo.png";
import eng from "../../assets/eng.png";
import { ThemeContext } from "../../Hooks/ThemeContext";
// import { THEME } from "../../Hooks/ThemeColors";
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
      <Link to="/">
        <img alt="logo" src={logo} className="logo" />
      </Link>
      <div className="mobileFlex">
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
            src={language === "ge" ? geo : eng}
            alt="lang"
            onClick={handleLangClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
