import React, { useContext, useState } from "react";
import { LanguageContext } from "../../Hooks/LanguageContext";
import "./Header.css";
import Navbar from "./Navbar/Navbar";
import geo from "../../assets/Georgia.png";
import eng from "../../assets/USA.png";
import { ThemeContext } from "../../Hooks/ThemeContext";
import logo from "../../assets/anano logo another.png";
import { Link } from "react-router-dom";
import ToggleSwitch from "../Toggle/Toggle";

const Header = ({ onNavigate }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(theme === "dark");

  const handleChange = () => {
    setIsChecked(!isChecked);
    toggleTheme();
  };

  const handleLangClick = () => {
    const newLanguage = language === "ge" ? "en" : "ge";
    setLanguage(newLanguage);
  };

  return (
    <div className="header">
      <div className="mobileFlex">
        <Link to="/" className="logo">
          <img alt="logo" src={logo} className="logo" />
        </Link>
        <Navbar onNavigate={onNavigate} />
        <div className="icons">
          <div className="toggle">
            <ToggleSwitch
              checked={isChecked}
              onChange={handleChange}
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
