import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../../../Hooks/LanguageContext.js";
import { useContext, useEffect, useState } from "react";
import { TEXTS } from "../../../Hooks/Languages.js";
import geo from "../../../assets/Georgia.png";
import eng from "../../../assets/USA.png";
import { ThemeContext } from "../../../Hooks/ThemeContext.js";
import moon from "../../Toggle/darkToggle.png";
import sun from "../../Toggle/lightToggle.png";
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
    toggleTheme(); // Toggle theme
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLangClick = () => {
    const newLanguage = language === "ge" ? "en" : "ge";
    setLanguage(newLanguage); // Use setLanguage from LanguageContext to update the language
  };
  
  // Handle navigation with smooth scrolling if needed
  const handleNavigation = (e, sectionName) => {
    // Get section ID
    const sectionId = getSectionId(sectionName);
    const targetElement = document.getElementById(sectionId);
    
    // If no target element found, proceed with normal navigation
    if (!targetElement) {
      closeMenu();
      return;
    }
    
    // Prevent default link behavior
    e.preventDefault();
    
    // Handle scrolling
    const isMobile = window.innerWidth <= 820;
    
    // Close mobile menu first (important for mobile UX)
    closeMenu();
    
    // Slight delay to ensure menu closes before scrolling on mobile
    setTimeout(() => {
      // If onNavigate is provided (we're in single-page mode)
      if (onNavigate) {
        smoothScrollTo(sectionId, isMobile ? 1000 : 800, isMobile ? 40 : 60);
      } else {
        // If we're already on the current page, scroll to the section
        const currentPath = location.pathname;
        const targetPath = e.currentTarget.getAttribute('href').split('#')[0] || '/';
        
        if (currentPath === targetPath || (currentPath === '/' && targetPath === '/')) {
          smoothScrollTo(sectionId, isMobile ? 1000 : 800, isMobile ? 40 : 60);
        }
      }
    }, isMobile ? 300 : 0); // Add delay for mobile devices
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
        <div className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={`links ${isMenuOpen ? "open" : ""}
         `}
      >
        <ul className="ul">
          <div className="desktop1">
            <li>
              {" "}
              <Link 
                to="/" 
                onClick={(e) => handleNavigation(e, TEXTS[language].home)}
              >
                {TEXTS[language].home}
              </Link>
            </li>
            <li>
              {" "}
              <Link 
                to="/about" 
                onClick={(e) => handleNavigation(e, TEXTS[language].about)}
              >
                {TEXTS[language].about}
              </Link>
            </li>
          </div>
          <div className="desktop2">
            <li className="portfolio">
              <Link 
                to="/portfolio" 
                onClick={(e) => handleNavigation(e, TEXTS[language].portfolio)}
              >
                {TEXTS[language].portfolio}
              </Link>
            </li>
            <li>
              {" "}
              <Link 
                to="/contact" 
                onClick={(e) => handleNavigation(e, TEXTS[language].contact)}
              >
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
