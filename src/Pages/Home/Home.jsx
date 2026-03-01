import MyImage from "../../assets/me.png";
import "./Home.css";
import cv from "../../assets/cv Ani Beroshvili 2024.pdf";
import { TEXTS } from "../../Hooks/Languages";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="home">
      <div className="sect1">
        <div className="text">
          <h1>
            Full-Stack
            <br />
            Developer<span className="accent-dot">.</span>
          </h1>
          <p>{TEXTS[language].homeBio}</p>
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className="download"
          >
            {TEXTS[language].download}
          </a>
        </div>
        <div className="image-container">
          <img src={MyImage} alt="Ani Beroshvili" className="myImage" />
        </div>
      </div>
      <div className="sect2">
        <div className="text2">
          <span>{TEXTS[language].homeCta}</span>
          <button className="homeButton">
            <Link to={`/${language}/contact`}>{TEXTS[language].contactMe}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
