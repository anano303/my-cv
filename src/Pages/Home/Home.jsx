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
          <p>
            Welcome to my corner of the web! I'm Ani, a passionate{" "}
            <span>full-stack developer</span> with a keen eye for detail and a
            love for creating engaging digital experiences. From crafting
            elegant user interfaces to building robust backends, I thrive on
            bringing ideas to life through clean, efficient code.
          </p>
          <a href={cv} target="_blank" rel="noopener noreferrer" className="download">
            {TEXTS[language].download}
          </a>
        </div>
        <div className="image-container">
          <img src={MyImage} alt="Ani Beroshvili" className="myImage" />
        </div>
      </div>
      <div className="sect2">
        <div className="text2">
          <span>Let's Build Something Amazing.</span>
          <button className="homeButton">
            <Link to="/contact">{TEXTS[language].contactMe}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
