import MyImage from "../../assets/image.png";
import "./Home.css";
import cv from "../../assets/cv.pdf";
import { TEXTS } from "../../Hooks/Languages";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { useContext } from "react";
// import { useContext } from "react";
// import { ThemeContext } from "../../Hooks/ThemeContext";
// import {THEME} from "../../Hooks/ThemeColors"

const Home = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  // const ThemeContext = useContext(ThemeContext);
  return (
    <div className="home">
      <div className="text">
        <p>Hi!</p>
        <h1> I am Ani, </h1> <h1> a Front-End Developer</h1>
        <a href={cv} target="blank" className="download">
          {TEXTS[language].download}
        </a>
      </div>
      <div className="image-container">
        <img src={MyImage} alt="myImage" className="myImage" />
      </div>
    </div>
  );
};
export default Home;
