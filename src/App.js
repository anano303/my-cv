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

function App() {
  const [language, setLanguage] = useState("ge");
  const [showAllPages, setShowAllPages] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = language;
  }, [language]);

  useEffect(() => {
    const appEl = document.getElementById("app");
    if (appEl) {
      appEl.className = theme;
    }
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const toggleShowAllPages = () => {
    setShowAllPages((prev) => !prev);
  };

  return (
    <div className="App" id="app">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Router>
            {showAllPages ? (
              <Layout>
                <Home />
                <About />
                <Portfolio />
                <Contact />
              </Layout>
            ) : (
              <Routes>
                <Route
                  path="/"
                  element={
                    <Layout>
                      <Home />
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
                      <Contact />
                    </Layout>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <Layout>
                      <About />
                    </Layout>
                  }
                />

                <Route
                  path="/portfolio"
                  element={
                    <Layout>
                      <Portfolio />
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
