import React, { useContext, useState } from "react";
import { LanguageContext } from "../../Hooks/LanguageContext";
import "./Header.css";
import Navbar from "./Navbar/Navbar";
import geo from "../../assets/Georgia.png";
import eng from "../../assets/USA.png";
import { ThemeContext } from "../../Hooks/ThemeContext";
import logo from "../../assets/anano logo another.png";
import darkLogo from "../../assets/image (1).png";
import { Link } from "react-router-dom";
import moon from "../Toggle/darkToggle.png";
import sun from "../Toggle/lightToggle.png";
import ToggleSwitch from "../Toggle/Toggle";

const Header = ({ onNavigate }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext); // Access ThemeContext
  const [isChecked, setIsChecked] = useState(theme === "dark");

  const handleChange = () => {
    setIsChecked(!isChecked);
    toggleTheme(); // Toggle theme
  };

  const handleLangClick = () => {
    const newLanguage = language === "ge" ? "en" : "ge";
    setLanguage(newLanguage); // Use setLanguage from LanguageContext to update the language
  };
  // const handleClick = () => {

  //   const newTheme = theme === "light" ? "dark" : "light";
  //   toggleTheme(newTheme);
  // };

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
        <Navbar onNavigate={onNavigate} />
        <div className="icons">
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
      </div>
    </div>
  );
};

export default Header;
