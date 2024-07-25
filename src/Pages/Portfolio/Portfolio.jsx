import "./Portfolio.css";
import { TEXTS } from "../../Hooks/Languages.js";
import { LanguageContext } from "../../Hooks/LanguageContext.js";
import { useContext, React } from "react";
import blueprintImage from "./my projects/blueprint.jpg";
import clipboardImage from "./my projects/9.jpg";
import clipboardImage2 from "./my projects/8.jpg";
import clipboardImage3 from "./my projects/7.jpg";
import clipboardImage4 from "./my projects/2.jpg";
import clipboardImage5 from "./my projects/3.jpg";
import clipboardImage6 from "./my projects/4.jpg";
import clipboardImage7 from "./my projects/5.jpg";
import clipboardImage8 from "./my projects/6.jpg";
import clipboardImage9 from "./my projects/bagis page.png";
import clipboardImage10 from "./my projects/1.jpg";
import tbc from "./my projects/tbc.jpg";
import trainSite from "./my projects/train.jpg";

const Portfolio = () => {
  const { language } = useContext(LanguageContext);

  const projects = [
    {
      imageUrl: trainSite,
      projectTitle: "Train Railway",
      projectLink: "https://train-tickets-nine.vercel.app/",
    },

    {
      imageUrl: blueprintImage,
      projectTitle: "BluePrintStudio",
      projectLink: "https://www.blueprintstudio.ge",
    },
    {
      imageUrl: tbc,
      projectTitle: "Tbc concept",
      projectLink: "https://anano303.github.io/TBC/",
    },

    {
      imageUrl: clipboardImage,
      projectTitle: "Redberry Knight Cup",
      projectLink: "https://team-4-hazel.vercel.app/",
    },
    {
      imageUrl: clipboardImage4,
      projectTitle: "Photosnap-Multi-Page",
      projectLink: "https://photosnap-multi-page.vercel.app/index.html",
    },
    {
      imageUrl: clipboardImage6,
      projectTitle: "Tech Page",
      projectLink: "https://anano303.github.io/tech-page/index.html",
    },

    {
      imageUrl: clipboardImage2,
      projectTitle: "Advice Generator app",
      projectLink: "https://anano303.github.io/advice-generator-app-main/",
    },
    {
      imageUrl: clipboardImage8,
      projectTitle: "Color Game",
      projectLink: "https://anano303.github.io/Game-color/",
    },
    {
      imageUrl: clipboardImage10,
      projectTitle: "Tip Calculator",
      projectLink: "https://anano303.github.io/tip-calculator-app/",
    },
    {
      imageUrl: clipboardImage3,
      projectTitle: "Online Shop",
      projectLink: "https://anano303.github.io/bachira-online-shop/#",
    },

    {
      imageUrl: clipboardImage5,
      projectTitle: "Elearning-landing-page",
      projectLink: "https://anano303.github.io/skilled-elearning-landing-page/",
    },

    {
      imageUrl: clipboardImage7,
      projectTitle: "Calculator",
      projectLink: "https://anano303.github.io/calculator-app-main/",
    },

    {
      imageUrl: clipboardImage9,
      projectTitle: "Kinder Garden",
      projectLink: "https://slider-react-nine.vercel.app/",
    },
  ];

  return (
    <div className="portfolioo">
      <h1>{TEXTS[language].projects}</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="project"
            onClick={() =>
              console.log("Clicked project link:", project.projectLink)
            }
          >
            <div className="projectDiv">
              <img
                className="projectImage"
                src={project.imageUrl}
                alt={project.projectTitle}
              />
              <span>{project.projectTitle}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
