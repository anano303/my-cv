import "./App.css";
import React, { useState, useEffect } from "react";
import Layout from "./Layouts/Layout";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import arrowHome from "./arrow_button.png";

function App() {
  // const [language, setLanguage] = useState("ge");
  // const [theme, setTheme] = useState("light");
  const [showAllPages, setShowAllPages] = useState(false);

  // useEffect(() => {
  //   document.body.className = language;
  // }, [language]);

  const toggleShowAllPages = () => {
    setShowAllPages((prev) => !prev);
  };
  return (
    <div className="App">
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
                  <button className="homeArrow" onClick={toggleShowAllPages}>
                    <img className="homeArrowImg" src={arrowHome} alt="arrow" />
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
    </div>
  );
}

export default App;
