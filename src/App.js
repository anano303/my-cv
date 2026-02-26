import React, { useState, useEffect } from "react";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import arrowHome from "./icons8-down-94.png";
import { LanguageContext } from "../src/Hooks/LanguageContext";
import { ThemeContext } from "../src/Hooks/ThemeContext";
import "./App.css";
import { smoothScrollTo } from "./utils/scrollUtils";
import { setupHeaderScroll } from "./utils/headerScroll";

function App() {
  const [language, setLanguage] = useState("ge");
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
    
    // Set up sticky header scroll behavior
    setupHeaderScroll();
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const toggleShowAllPages = () => {
    setShowAllPages((prev) => !prev);
  };

  // Handle scroll to section when all pages are shown
  const handleScrollToSection = (sectionId) => {
    if (showAllPages) {
      smoothScrollTo(sectionId);
    }
  };

  return (
    <div className="App" id="app">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Router>
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
                  path="/"
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
                  path="/contact"
                  element={
                    <Layout>
                      <div id="contact-section">
                        <Contact />
                      </div>
                    </Layout>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Layout>
                      <div id="about-section">
                        <About />
                      </div>
                    </Layout>
                  }
                />
                <Route
                  path="/portfolio"
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
          </Router>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
