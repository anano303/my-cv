import "./About.css";
import Certificate from "../../Components/Certificate/Certificate";
import aboutImage from "./aboutMe.png";
import Skills from "../../Components/Skills/Skills";
import { TEXTS } from "../../Hooks/Languages.js";
import { LanguageContext } from "../../Hooks/LanguageContext.js";
import { useContext } from "react";

const About = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="about">
      <div className="aboutMe">
        <div className="myImg">
          <img alt="myImage" src={aboutImage} />
        </div>
        <div className="aboutText">
          {" "}
          <p>
            Hello! I'm Ani, a dedicated professional with a passion for
            continuous growth and learning. With a solid foundation in insurance
            sales since 2012, I've honed my skills in communication,
            negotiation, and client relationship management. In 2023, I embarked
            on an exciting journey into the world of development, driven by my
            curiosity and eagerness to explore new horizons. Since then, I've
            been immersing myself in various aspects of development, from web
            technologies to programming languages. My transition into
            development reflects my commitment to personal and professional
            development, as well as my enthusiasm for embracing challenges and
            seizing opportunities for growth.{" "}
          </p>
        </div>
      </div>
      <div className="cv">
        <div className="education">
          <h2>{TEXTS[language].education} </h2>
          <div className="edu edu1">
            <h3>2023-2024</h3>
            <p>
              {" "}
              <span>{TEXTS[language].skillwill}</span> {TEXTS[language].front}
            </p>
          </div>
          <div className="edu edu2">
            <h3>2023-2024</h3>
            <p>
              {" "}
              <span>{TEXTS[language].step} </span> {TEXTS[language].angular}
            </p>
          </div>
          <div className="edu edu3">
            <h3>2022-2023</h3>
            <p>
              {" "}
              <span>{TEXTS[language].bitcamp} </span>{" "}
              {TEXTS[language].frontBitcamp}
            </p>
          </div>

          <div className="edu edu4">
            <h3>2020</h3>
            <p>
              {" "}
              <span>{TEXTS[language].davidChikvaidze} </span>{" "}
              {TEXTS[language].salesTech}
            </p>
          </div>

          <div className="edu edu5">
            <h3>2019</h3>
            <p>
              {" "}
              <span>{TEXTS[language].tatiaTura}</span>{" "}
              {TEXTS[language].serviceMang}
            </p>
          </div>

          <div className="edu edu6">
            <h3>2016</h3>
            <p>
              {" "}
              <span>{TEXTS[language].jejelava}</span> {TEXTS[language].timeMang}
            </p>
          </div>

          <div className="edu edu7">
            <h3>2014-2015</h3>
            <p>
              {" "}
              <span>{TEXTS[language].gpi} </span>
              {TEXTS[language].salesTech} / {TEXTS[language].salesMang}
            </p>
          </div>
          <div className="edu edu8">
            <h3>2013</h3>
            <p>
              {" "}
              <span>{TEXTS[language].uni} </span> {TEXTS[language].hlv}
            </p>
          </div>
          <div className="edu edu9">
            <h3>2013-2015</h3>
            <p>
              {" "}
              <span>{TEXTS[language].uni} </span> {TEXTS[language].specMagistr}
            </p>
          </div>
          <div className="edu edu10">
            <h3>2010-2013</h3>
            <p>
              {" "}
              <span>{TEXTS[language].uni} </span> {TEXTS[language].specBacal1}
            </p>
          </div>
          <div className="edu edu11">
            <h3>2009-2013</h3>
            <p>
              {" "}
              <span>{TEXTS[language].uni}</span> {TEXTS[language].specbacal2}
            </p>
          </div>
        </div>
        <div className="experience">
          <h2> {TEXTS[language].experience}</h2>
          <div className="job job1">
            <h3>2015-{TEXTS[language].today}</h3>
            <p>
              <span>{TEXTS[language].prime}</span>
              {TEXTS[language].corp}
            </p>
          </div>
          <div className="job job2">
            <h3>2020-{TEXTS[language].today}</h3>
            <p>
              <span>{TEXTS[language].aldagi}</span>
              {TEXTS[language].agro}
            </p>
          </div>
          <div className="job job3">
            <h3>2020-2023</h3>
            <p>
              <span>{TEXTS[language].nvi}</span>
              {TEXTS[language].agro}
            </p>
          </div>
          <div className="job job4">
            <h3>2021-2023</h3>
            <p>
              <span>{TEXTS[language].liberty}</span>
              {TEXTS[language].agroCredit}
            </p>
          </div>
          <div className="job job5">
            <h3>2021-2023</h3>
            <p>
              <span>{TEXTS[language].crystal}</span>
              {TEXTS[language].agroCredit}
            </p>
          </div>
          <div className="job job6">
            <h3>2016-2020</h3>
            <p>
              <span>{TEXTS[language].gpi}</span>
              {TEXTS[language].agro}
            </p>
          </div>
          <div className="job job7">
            <h3>2016-2020</h3>
            <p>
              <span>{TEXTS[language].finca}</span>
              {TEXTS[language].agroCredit}
            </p>
          </div>
          <div className="job job8">
            <h3>2012-2015</h3>
            <p>
              <span>{TEXTS[language].gpi}</span>
              {TEXTS[language].retailSale}
            </p>
          </div>
        </div>
      </div>
      <div className="certificates">
        <Certificate />
      </div>
      <div className="skillsAbout">
        <h1>Skills</h1>
        <Skills />
      </div>
    </div>
  );
};
export default About;
