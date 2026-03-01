import React, { useState, useEffect } from "react";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import arrowHome from "./icons8-down-94.png";
import { LanguageContext } from "../src/Hooks/LanguageContext";
import { ThemeContext } from "../src/Hooks/ThemeContext";
import "./App.css";
import { smoothScrollTo } from "./utils/scrollUtils";
import { setupHeaderScroll } from "./utils/headerScroll";

function LanguageSync({ setLanguage }) {
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (lang === "ge" || lang === "en") {
      setLanguage(lang);
    } else {
      navigate("/en", { replace: true });
    }
  }, [lang, setLanguage, navigate]);

  return null;
}

function AppRoutes({
  language,
  setLanguage,
  showAllPages,
  toggleShowAllPages,
  handleScrollToSection,
  arrowHome,
}) {
  const navigate = useNavigate();

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|ge)/, "");
    navigate(`/${newLang}${pathWithoutLang || "/"}`);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      <Routes>
        <Route path="/" element={<Navigate to={`/${language}`} replace />} />
        <Route
          path="/about"
          element={<Navigate to={`/${language}/about`} replace />}
        />
        <Route
          path="/portfolio"
          element={<Navigate to={`/${language}/portfolio`} replace />}
        />
        <Route
          path="/contact"
          element={<Navigate to={`/${language}/contact`} replace />}
        />
        <Route
          path="/:lang/*"
          element={
            <>
              <LanguageSync setLanguage={setLanguage} />
              {showAllPages ? (
                <Layout onNavigate={handleScrollToSection}>
                  <div id="home-section" className="section">
                    <Home />
                  </div>
                  <div id="about-section" className="section">
                    <About />
                  </div>
                  <div id="portfolio-section" className="section">
                    <Portfolio />
                  </div>
                  <div id="contact-section" className="section">
                    <Contact />
                  </div>
                </Layout>
              ) : (
                <Routes>
                  <Route
                    index
                    element={
                      <Layout>
                        <div id="home-section">
                          <Home />
                        </div>
                        <button
                          className="homeArrow"
                          onClick={toggleShowAllPages}
                        >
                          <img
                            className="homeArrowImg"
                            src={arrowHome}
                            alt="arrow"
                          />
                        </button>
                      </Layout>
                    }
                  />
                  <Route
                    path="contact"
                    element={
                      <Layout>
                        <div id="contact-section">
                          <Contact />
                        </div>
                      </Layout>
                    }
                  />
                  <Route
                    path="about"
                    element={
                      <Layout>
                        <div id="about-section">
                          <About />
                        </div>
                      </Layout>
                    }
                  />
                  <Route
                    path="portfolio"
                    element={
                      <Layout>
                        <div id="portfolio-section">
                          <Portfolio />
                        </div>
                      </Layout>
                    }
                  />
                </Routes>
              )}
            </>
          }
        />
      </Routes>
    </LanguageContext.Provider>
  );
}

function App() {
  const [language, setLanguage] = useState("en");
  const [showAllPages, setShowAllPages] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = language;
  }, [language]);

  useEffect(() => {
    const appEl = document.getElementById("app");
    if (appEl) {
      appEl.className = theme;
    }
    setupHeaderScroll();
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const toggleShowAllPages = () => {
    setShowAllPages((prev) => !prev);
  };

  const handleScrollToSection = (sectionId) => {
    if (showAllPages) {
      smoothScrollTo(sectionId);
    }
  };

  return (
    <div className="App" id="app">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Router>
          <AppRoutes
            language={language}
            setLanguage={setLanguage}
            showAllPages={showAllPages}
            toggleShowAllPages={toggleShowAllPages}
            handleScrollToSection={handleScrollToSection}
            arrowHome={arrowHome}
          />
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
