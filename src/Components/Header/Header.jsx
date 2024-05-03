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
import { THEME } from "../../Hooks/ThemeColors";

const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isOn, setIsOn] = useState(true);
  const themeContext = useContext(ThemeContext); // Access ThemeContext

  const { theme } = themeContext; // Destructure theme from ThemeContext

  const handleClick = () => {
    setIsOn((prevState) => !prevState);
    // Toggle between 'dark' and 'light' themes
    themeContext.setTheme((prevTheme) =>
      prevTheme === "dark" ? "light" : "dark"
    );
  };

  const handleLangClick = () => {
    const newLanguage = language === "ge" ? "en" : "ge";
    setLanguage(newLanguage); // Use setLanguage from LanguageContext to update the language
  };

  return (
    <div
      className="header"
      style={{
        backgroundColor: THEME[theme].backgroundColor,
        // color: THEME[theme].text,
      }}
    >
      <img alt="logo" src={logo} className="logo" />
      <div className="mobileFlex">
        <Navbar />
        <div className="icons">
          <img
            className="toggle"
            src={isOn ? ToggleOn : ToggleOff}
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
