import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../../../Hooks/LanguageContext.js";
import { useContext, useEffect, useState } from "react";
import { TEXTS } from "../../../Hooks/Languages.js";
import geo from "../../../assets/Georgia.png";
import eng from "../../../assets/USA.png";
import { ThemeContext } from "../../../Hooks/ThemeContext.js";
import ToggleSwitch from "../../Toggle/Toggle.jsx";
import { getSectionId, smoothScrollTo } from "../../../utils/scrollUtils";

const Navbar = ({ onNavigate }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(theme === "dark");
  const location = useLocation();

  const handleChange = () => {
    setIsChecked(!isChecked);
    toggleTheme();
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLangClick = () => {
    const newLanguage = language === "ge" ? "en" : "ge";
    setLanguage(newLanguage);
  };

  const handleNavigation = (e, sectionName) => {
    const sectionId = getSectionId(sectionName);
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) { closeMenu(); return; }
    e.preventDefault();
    const isMobile = window.innerWidth <= 820;
    closeMenu();
    setTimeout(() => {
      if (onNavigate) {
        smoothScrollTo(sectionId, isMobile ? 1000 : 800, isMobile ? 40 : 60);
      } else {
        const currentPath = location.pathname;
        const targetPath = e.currentTarget.getAttribute('href').split('#')[0] || '/';
        if (currentPath === targetPath || (currentPath === '/' && targetPath === '/')) {
          smoothScrollTo(sectionId, isMobile ? 1000 : 800, isMobile ? 40 : 60);
        }
      }
    }, isMobile ? 300 : 0);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 820) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Navbar">
      <div className="menu" onClick={toggleMenu}>
        <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`links ${isMenuOpen ? "open" : ""}`}>
        <ul className="ul">
          <div className="desktop1">
            <li>
              <Link to="/" onClick={(e) => handleNavigation(e, TEXTS[language].home)}>
                {TEXTS[language].home}
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={(e) => handleNavigation(e, TEXTS[language].about)}>
                {TEXTS[language].about}
              </Link>
            </li>
          </div>
          <div className="desktop2">
            <li className="portfolio">
              <Link to="/portfolio" onClick={(e) => handleNavigation(e, TEXTS[language].portfolio)}>
                {TEXTS[language].portfolio}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={(e) => handleNavigation(e, TEXTS[language].contact)}>
                {TEXTS[language].contact}
              </Link>
            </li>
          </div>
          <div className="mobileIcons">
            <div className="toggle">
              <ToggleSwitch checked={isChecked} onChange={handleChange} />
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
