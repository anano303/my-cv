import "./About.css";
import Certificate from "../../Components/Certificate/Certificate";
import aboutImage from "./aboutMe.png";
import Skills from "../../Components/Skills/Skills";
import { TEXTS } from "../../Hooks/Languages.js";
import { LanguageContext } from "../../Hooks/LanguageContext.js";
import { useContext } from "react";

const About = () => {
  const { language } = useContext(LanguageContext);
  const educationData = [
    {
      year: "2023-2024",
      institution: TEXTS[language].skillwill,
      course: TEXTS[language].front,
    },
    {
      year: "2023-2024",
      institution: TEXTS[language].step,
      course: TEXTS[language].angular,
    },
    {
      year: "2022-2023",
      institution: TEXTS[language].bitcamp,
      course: TEXTS[language].frontBitcamp,
    },
    {
      year: "2020",
      institution: TEXTS[language].davidChikvaidze,
      course: TEXTS[language].salesTech,
    },
    {
      year: "2019",
      institution: TEXTS[language].tatiaTura,
      course: TEXTS[language].serviceMang,
    },
    {
      year: "2016",
      institution: TEXTS[language].jejelava,
      course: TEXTS[language].timeMang,
    },
    {
      year: "2014-2015",
      institution: TEXTS[language].gpi,
      course: TEXTS[language].salesTech + " / " + TEXTS[language].salesMang,
    },
    {
      year: "2013",
      institution: TEXTS[language].uni,
      course: TEXTS[language].hlv,
    },
    {
      year: "2013-2015",
      institution: TEXTS[language].uni,
      course: TEXTS[language].specMagistr,
    },
    {
      year: "2010-2013",
      institution: TEXTS[language].uni,
      course: TEXTS[language].specBacal1,
    },
    {
      year: "2009-2013",
      institution: TEXTS[language].uni,
      course: TEXTS[language].specbacal2,
    },
  ];
  const experienceData = [
    {
      year: "2024-" + TEXTS[language].today,
      company: TEXTS[language].reEdu,
      position: TEXTS[language].backEnd,
    },
    {
      year: "2024-" + TEXTS[language].today,
      company: TEXTS[language].step,
      position: TEXTS[language].mentor,
    },
    {
      year: "2023-" + TEXTS[language].today,
      company: TEXTS[language].bestSoft,
      position: TEXTS[language].frontEnd,
    },
    {
      year: "2023-" + TEXTS[language].today,
      company: TEXTS[language].freelance,
      position: TEXTS[language].fullStack,
    },
    {
      year: "2015-" + TEXTS[language].today,
      company: TEXTS[language].prime,
      position: TEXTS[language].corp,
    },
    {
      year: "2020-" + TEXTS[language].today,
      company: TEXTS[language].aldagi,
      position: TEXTS[language].agro,
    },
    {
      year: "2020-2023",
      company: TEXTS[language].nvi,
      position: TEXTS[language].agro,
    },
    {
      year: "2021-2023",
      company: TEXTS[language].liberty,
      position: TEXTS[language].agroCredit,
    },
    {
      year: "2021-2023",
      company: TEXTS[language].crystal,
      position: TEXTS[language].agroCredit,
    },
    {
      year: "2016-2020",
      company: TEXTS[language].gpi,
      position: TEXTS[language].agro,
    },
    {
      year: "2016-2020",
      company: TEXTS[language].finca,
      position: TEXTS[language].agroCredit,
    },
    {
      year: "2012-2015",
      company: TEXTS[language].gpi,
      position: TEXTS[language].retailSale,
    },
  ];

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
          <h2>{TEXTS[language].education}</h2>
          {educationData.map((item, index) => (
            <div className={`edu edu${index + 1}`} key={index}>
              <h3>{item.year}</h3>
              <p>
                <span>{item.institution}</span> {item.course}
              </p>
            </div>
          ))}
        </div>
        <div className="experience">
          <h2>{TEXTS[language].experience}</h2>
          {experienceData.map((item, index) => (
            <div className={`job job${index + 1}`} key={index}>
              <h3>{item.year}</h3>
              <p>
                <span>{item.company}</span> {item.position}
              </p>
            </div>
          ))}
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
