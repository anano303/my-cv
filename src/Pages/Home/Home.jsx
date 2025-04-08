import MyImage from "../../assets/me.png";
import "./Home.css";
import cv from "../../assets/cv Ani Beroshvili 2024.pdf";
import { TEXTS } from "../../Hooks/Languages";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { useContext } from "react";
// import img1 from "../../assets/evolve.png";
// import img2 from "../../assets/create.png";
// import img3 from "../../assets/innovate.png";
import sect2Image from "../../assets/Group 6.png";
import { Link } from "react-router-dom";
const Home = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  // const ThemeContext = useContext(ThemeContext);
  return (
    <div className="home">
      <div className="sect1">
        <div className="text">
          <h1>About Me</h1>
          <p>
            Welcome to my corner of the web! I'm Ani, a passionate{" "}
            <span>front-end developer </span>with a keen eye for detail and a
            love for creating engaging digital experiences. From crafting
            elegant user interfaces to optimizing performance, I thrive on
            bringing designs to life through clean, efficient code.{" "}
          </p>
          <a href={cv} target="blank" className="download">
            {TEXTS[language].download}
          </a>
        </div>
        <div className="image-container">
          <img src={MyImage} alt="myImage" className="myImage" />
        </div>
      </div>
      {/* <div className="boxes">
        <img alt="img" src={img1} />
        <img alt="img" src={img2} />
        <img alt="img" src={img3} />
      </div> */}
      <div className="sect2">
        <div className="text2">
          {" "}
          <span>Let’s Work Together!</span>
          <button className="homeButton">
            {" "}
            <Link to="/contact">{TEXTS[language].contactMe}</Link>{" "}
          </button>
        </div>
        <img alt="img" src={sect2Image} />
      </div>
    </div>
  );
};
export default Home;
