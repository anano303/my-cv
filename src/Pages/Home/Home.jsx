import MyImage from "../../assets/me.png";
import "./Home.css";
import { TEXTS } from "../../Hooks/Languages";
import { LanguageContext } from "../../Hooks/LanguageContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { generateCV } from "../../utils/generateCV";

const Home = () => {
  const { language } = useContext(LanguageContext);
  const [generating, setGenerating] = useState(false);

  const handleDownload = async (e) => {
    e.preventDefault();
    setGenerating(true);
    try {
      await generateCV(language);
    } catch (err) {
      console.error("CV generation failed:", err);
    }
    setGenerating(false);
  };

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
          <button
            className="download"
            onClick={handleDownload}
            disabled={generating}
          >
            {generating
              ? language === "ge"
                ? "იტვირთება..."
                : "Generating..."
              : TEXTS[language].download}
          </button>
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
