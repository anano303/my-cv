import React, { useContext } from "react";
import { LanguageContext } from "../../Hooks/LanguageContext";
import "./Header.css";
import Navbar from "./Navbar/Navbar";
import geo from "../../assets/Georgia.png";
import eng from "../../assets/USA.png";
import logo from "../../assets/anano logo another.png";
import { Link } from "react-router-dom";
import { smoothScrollTo } from "../../utils/scrollUtils";

const Header = ({ onNavigate }) => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleLangClick = () => {
    const newLanguage = language === "ge" ? "en" : "ge";
    setLanguage(newLanguage);
  };

  const handleLogoClick = (e) => {
    if (onNavigate) {
      e.preventDefault();
      smoothScrollTo("home-section", 800, 60);
    }
  };

  return (
    <div className="header">
      <div className="mobileFlex">
        <Link to={`/${language}`} className="logo" onClick={handleLogoClick}>
          <img alt="logo" src={logo} className="logo" />
        </Link>
        <Navbar onNavigate={onNavigate} />
        <div className="icons">
          {/* <div className="toggle">
            <ToggleSwitch
              checked={isChecked}
              onChange={handleChange}
            />
          </div> */}
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
