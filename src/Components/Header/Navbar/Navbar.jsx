import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../../../Hooks/LanguageContext.js";
import { useContext, useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { TEXTS } from "../../../Hooks/Languages.js";
import geo from "../../../assets/Georgia.png";
import eng from "../../../assets/USA.png";
import { getSectionId, smoothScrollTo } from "../../../utils/scrollUtils";

const SECTION_ROUTE_MAP = {
  "home-section": "",
  "about-section": "/about",
  "portfolio-section": "/portfolio",
  "contact-section": "/contact",
};

const Navbar = ({ onNavigate }) => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const location = useLocation();

  // Detect which section is visible when all pages are shown (arrow mode)
  const detectActiveSection = useCallback(() => {
    const sections = [
      "home-section",
      "about-section",
      "portfolio-section",
      "contact-section",
    ];
    const headerHeight = document.querySelector(".header")?.offsetHeight || 60;
    const scrollY = window.scrollY + headerHeight + 100;

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.offsetTop <= scrollY) {
        setActiveSection(SECTION_ROUTE_MAP[sections[i]]);
        return;
      }
    }
    setActiveSection("");
  }, []);

  useEffect(() => {
    // Only run scroll detection when all pages are visible (onNavigate exists)
    if (!onNavigate) {
      setActiveSection(null);
      return;
    }
    detectActiveSection();
    window.addEventListener("scroll", detectActiveSection);
    return () => window.removeEventListener("scroll", detectActiveSection);
  }, [onNavigate, detectActiveSection]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLangClick = () => {
    const newLanguage = language === "ge" ? "en" : "ge";
    setLanguage(newLanguage);
  };

  const isActive = (path) => {
    // When in scroll mode (arrow clicked), use scroll-based detection
    if (activeSection !== null) {
      return activeSection === path;
    }
    // Otherwise use URL-based detection
    const fullPath = path ? `/${language}${path}` : `/${language}`;
    return location.pathname === fullPath;
  };

  const handleNavigation = (e, sectionName) => {
    const sectionId = getSectionId(sectionName);
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) {
      closeMenu();
      return;
    }
    e.preventDefault();
    const isMobile = window.innerWidth <= 820;
    const targetPath =
      e.currentTarget.getAttribute("href")?.split("#")[0] || "/";
    closeMenu();
    setTimeout(
      () => {
        if (onNavigate) {
          smoothScrollTo(sectionId, isMobile ? 1000 : 800, isMobile ? 40 : 60);
        } else {
          const currentPath = location.pathname;
          if (
            currentPath === targetPath ||
            (currentPath === "/" && targetPath === "/")
          ) {
            smoothScrollTo(
              sectionId,
              isMobile ? 1000 : 800,
              isMobile ? 40 : 60,
            );
          }
        }
      },
      isMobile ? 300 : 0,
    );
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
      {/* Desktop links rendered normally inside header */}
      <div className="links desktop-links">
        <ul className="ul">
          <div className="desktop1">
            <li className={isActive("") ? "active" : ""}>
              <Link
                to={`/${language}`}
                onClick={(e) => handleNavigation(e, TEXTS[language].home)}
              >
                {TEXTS[language].home}
              </Link>
            </li>
            <li className={isActive("/about") ? "active" : ""}>
              <Link
                to={`/${language}/about`}
                onClick={(e) => handleNavigation(e, TEXTS[language].about)}
              >
                {TEXTS[language].about}
              </Link>
            </li>
          </div>
          <div className="desktop2">
            <li
              className={`portfolio${isActive("/portfolio") ? " active" : ""}`}
            >
              <Link
                to={`/${language}/portfolio`}
                onClick={(e) => handleNavigation(e, TEXTS[language].portfolio)}
              >
                {TEXTS[language].portfolio}
              </Link>
            </li>
            <li className={isActive("/contact") ? "active" : ""}>
              <Link
                to={`/${language}/contact`}
                onClick={(e) => handleNavigation(e, TEXTS[language].contact)}
              >
                {TEXTS[language].contact}
              </Link>
            </li>
          </div>
        </ul>
      </div>
      {/* Mobile overlay rendered via portal to escape header stacking context */}
      {isMenuOpen &&
        createPortal(
          <div
            className="mobile-nav-overlay"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeMenu();
            }}
          >
            <ul>
              <li className={isActive("") ? "active" : ""}>
                <Link
                  to={`/${language}`}
                  onClick={(e) => {
                    handleNavigation(e, TEXTS[language].home);
                    closeMenu();
                  }}
                >
                  {TEXTS[language].home}
                </Link>
              </li>
              <li className={isActive("/about") ? "active" : ""}>
                <Link
                  to={`/${language}/about`}
                  onClick={(e) => {
                    handleNavigation(e, TEXTS[language].about);
                    closeMenu();
                  }}
                >
                  {TEXTS[language].about}
                </Link>
              </li>
              <li className={isActive("/portfolio") ? "active" : ""}>
                <Link
                  to={`/${language}/portfolio`}
                  onClick={(e) => {
                    handleNavigation(e, TEXTS[language].portfolio);
                    closeMenu();
                  }}
                >
                  {TEXTS[language].portfolio}
                </Link>
              </li>
              <li className={isActive("/contact") ? "active" : ""}>
                <Link
                  to={`/${language}/contact`}
                  onClick={(e) => {
                    handleNavigation(e, TEXTS[language].contact);
                    closeMenu();
                  }}
                >
                  {TEXTS[language].contact}
                </Link>
              </li>
              <div className="mobileIcons">
                {/* <div className="toggle">
                <ToggleSwitch checked={isChecked} onChange={handleChange} />
              </div> */}
                <img
                  className="lang"
                  src={language === "ge" ? eng : geo}
                  alt="lang"
                  onClick={handleLangClick}
                />
              </div>
            </ul>
          </div>,
          document.body,
        )}
    </div>
  );
};
export default Navbar;
