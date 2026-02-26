import "./About.css";
import Certificate from "../../Components/Certificate/Certificate";
import aboutImage from "./aboutMe.png";
import Skills from "../../Components/Skills/Skills";
import { TEXTS } from "../../Hooks/Languages.js";
import { LanguageContext } from "../../Hooks/LanguageContext.js";
import { useContext, useRef, useEffect, useCallback } from "react";

const About = () => {
  const { language } = useContext(LanguageContext);
  const sectionsRef = useRef(null);

  const closeOthers = useCallback((openedDetail) => {
    if (!sectionsRef.current) return;
    const allDetails = sectionsRef.current.querySelectorAll('details');
    allDetails.forEach((d) => {
      if (d !== openedDetail) d.removeAttribute('open');
    });
  }, []);

  useEffect(() => {
    const container = sectionsRef.current;
    if (!container) return;

    const handleToggle = (e) => {
      if (e.target.open) closeOthers(e.target);
    };

    const handleClickOutside = (e) => {
      if (!container.contains(e.target)) {
        container.querySelectorAll('details[open]').forEach((d) => d.removeAttribute('open'));
      }
    };

    const details = container.querySelectorAll('details');
    details.forEach((d) => d.addEventListener('toggle', handleToggle));
    document.addEventListener('click', handleClickOutside);

    return () => {
      details.forEach((d) => d.removeEventListener('toggle', handleToggle));
      document.removeEventListener('click', handleClickOutside);
    };
  }, [closeOthers]);

  const experienceData = [
    {
      year: "2025/02 \u2013 " + TEXTS[language].today,
      company: TEXTS[language].soulart,
      position: TEXTS[language].soulartRole,
      website: "soulart.ge",
      highlight: true,
    },
    {
      year: "2025/01 \u2013 " + TEXTS[language].today,
      company: TEXTS[language].shopit,
      position: TEXTS[language].shopitRole,
      website: "shopit.ge",
      highlight: true,
    },
    {
      year: "2024 \u2013 2025/05",
      company: TEXTS[language].reEdu,
      position: TEXTS[language].backEnd,
    },
    {
      year: "2024 \u2013 " + TEXTS[language].today,
      company: TEXTS[language].step,
      position: TEXTS[language].mentor,
    },
    {
      year: "2023 \u2013 " + TEXTS[language].today,
      company: TEXTS[language].bestSoft,
      position: TEXTS[language].frontEnd,
    },
    {
      year: "2023 \u2013 " + TEXTS[language].today,
      company: TEXTS[language].freelance,
      position: TEXTS[language].fullStack,
    },
    {
      year: "2015 \u2013 " + TEXTS[language].today,
      company: TEXTS[language].prime,
      position: TEXTS[language].corp,
    },
    {
      year: "2020 \u2013 " + TEXTS[language].today,
      company: TEXTS[language].aldagi,
      position: TEXTS[language].agro,
    },
    {
      year: "2020 \u2013 2023",
      company: TEXTS[language].nvi,
      position: TEXTS[language].agro,
    },
    {
      year: "2021 \u2013 2023",
      company: TEXTS[language].liberty,
      position: TEXTS[language].agroCredit,
    },
    {
      year: "2021 \u2013 2023",
      company: TEXTS[language].crystal,
      position: TEXTS[language].agroCredit,
    },
    {
      year: "2016 \u2013 2020",
      company: TEXTS[language].gpi,
      position: TEXTS[language].agro,
    },
    {
      year: "2016 \u2013 2020",
      company: TEXTS[language].finca,
      position: TEXTS[language].agroCredit,
    },
    {
      year: "2012 \u2013 2015",
      company: TEXTS[language].gpi,
      position: TEXTS[language].retailSale,
    },
  ];

  const educationData = [
    {
      year: "2023 \u2013 2024",
      institution: TEXTS[language].skillwill,
      course: TEXTS[language].front,
    },
    {
      year: "2023 \u2013 2024",
      institution: TEXTS[language].step,
      course: TEXTS[language].angular,
    },
    {
      year: "2022 \u2013 2023",
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
      year: "2014 \u2013 2015",
      institution: TEXTS[language].gpi,
      course: TEXTS[language].salesTech + " / " + TEXTS[language].salesMang,
    },
    {
      year: "2013",
      institution: TEXTS[language].uni,
      course: TEXTS[language].hlv,
    },
    {
      year: "2013 \u2013 2015",
      institution: TEXTS[language].uni,
      course: TEXTS[language].specMagistr,
    },
    {
      year: "2010 \u2013 2013",
      institution: TEXTS[language].uni,
      course: TEXTS[language].specBacal1,
    },
    {
      year: "2009 \u2013 2013",
      institution: TEXTS[language].uni,
      course: TEXTS[language].specbacal2,
    },
  ];

  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-img">
          <img alt="Ani Beroshvili" src={aboutImage} />
        </div>
        <div className="about-hero-text">
          <h1 className="about-hero-heading">
            {language === "ge"
              ? "\u10d2\u10d0\u10db\u10d0\u10e0\u10ef\u10dd\u10d1\u10d0, \u10db\u10d4 \u10d0\u10dc\u10d8 \u10d5\u10d0\u10e0"
              : "Hello, I\u2019m Ani"}
            <span className="accent-dot">.</span>
          </h1>
          <p>
            {language === "ge"
              ? "\u10de\u10e0\u10dd\u10e4\u10d4\u10e1\u10d8\u10dd\u10dc\u10d0\u10da\u10d8, \u10e0\u10dd\u10db\u10d4\u10da\u10e1\u10d0\u10ea \u10d0\u10e5\u10d5\u10e1 \u10db\u10e3\u10d3\u10db\u10d8\u10d5\u10d8 \u10d6\u10e0\u10d3\u10d8\u10e1\u10d0 \u10d3\u10d0 \u10e1\u10ec\u10d0\u10d5\u10da\u10d8\u10e1 \u10e1\u10e3\u10e0\u10d5\u10d8\u10da\u10d8. 2012 \u10ec\u10da\u10d8\u10d3\u10d0\u10dc \u10e1\u10d0\u10d3\u10d0\u10d6\u10e6\u10d5\u10d4\u10d5\u10dd \u10d2\u10d0\u10e7\u10d8\u10d3\u10d5\u10d4\u10d1\u10d4\u10d1\u10e8\u10d8 \u10d3\u10d0\u10d2\u10e0\u10dd\u10d5\u10d8\u10da\u10d8 \u10d2\u10d0\u10db\u10dd\u10ea\u10d3\u10d8\u10da\u10d4\u10d1\u10d8\u10d7, \u10d2\u10d0\u10db\u10dd\u10d5\u10d8\u10db\u10e3\u10e8\u10d0\u10d5\u10d4 \u10d9\u10dd\u10db\u10e3\u10dc\u10d8\u10d9\u10d0\u10ea\u10d8\u10d8\u10e1, \u10db\u10dd\u10da\u10d0\u10de\u10d0\u10e0\u10d0\u10d9\u10d4\u10d1\u10d8\u10e1\u10d0 \u10d3\u10d0 \u10d9\u10da\u10d8\u10d4\u10dc\u10e2\u10d4\u10d1\u10d7\u10d0\u10dc \u10e3\u10e0\u10d7\u10d8\u10d4\u10e0\u10d7\u10dd\u10d1\u10d8\u10e1 \u10db\u10d0\u10e0\u10d7\u10d5\u10d8\u10e1 \u10e3\u10dc\u10d0\u10e0\u10d4\u10d1\u10d8. 2023 \u10ec\u10d4\u10da\u10e1 \u10d3\u10d4\u10d5\u10d4\u10da\u10dd\u10de\u10db\u10d4\u10dc\u10e2\u10d8\u10e1 \u10e1\u10d0\u10db\u10e7\u10d0\u10e0\u10dd\u10e8\u10d8 \u10d2\u10d0\u10d3\u10d0\u10d5\u10ec\u10e7\u10d5\u10d8\u10e2\u10d4 \u10d2\u10d6\u10d0 \u10d3\u10d0 \u10db\u10d0\u10e1 \u10e8\u10d4\u10db\u10d3\u10d4\u10d2 \u10d5\u10d0\u10d5\u10d8\u10d7\u10d0\u10e0\u10d4\u10d1 \u10e3\u10dc\u10d0\u10e0\u10d4\u10d1\u10e1 \u10d5\u10d4\u10d1 \u10e2\u10d4\u10e5\u10dc\u10dd\u10da\u10dd\u10d2\u10d8\u10d4\u10d1\u10d8\u10d3\u10d0\u10dc \u10de\u10e0\u10dd\u10d2\u10e0\u10d0\u10db\u10d8\u10e0\u10d4\u10d1\u10d8\u10e1 \u10d4\u10dc\u10d4\u10d1\u10d0\u10db\u10d3\u10d4."
              : "A dedicated professional with a passion for continuous growth and learning. With a solid foundation in insurance sales since 2012, I\u2019ve honed my skills in communication, negotiation, and client relationship management. In 2023, I embarked on an exciting journey into the world of development, immersing myself in web technologies and programming languages."}
          </p>
        </div>
      </section>

      <div className="cv-sections" ref={sectionsRef}>
        <details className="collapsible-section" open>
          <summary className="collapsible-header">
            <div className="collapsible-title">
              <span className="section-number">01</span>
              <h2>{TEXTS[language].experience}</h2>
            </div>
            <span className="chevron-icon">&#9662;</span>
          </summary>
          <div className="collapsible-inner">
            <div className="timeline">
              {experienceData.map((item, index) => (
                <div
                  className={`timeline-item ${item.highlight ? "highlighted" : ""}`}
                  key={index}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-company">
                      {item.company}
                      {item.website && (
                        <a
                          href={`https://${item.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="timeline-link"
                        >
                          {item.website} ↗
                        </a>
                      )}
                    </h3>
                    <p className="timeline-position">{item.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </details>

        <details className="collapsible-section">
          <summary className="collapsible-header">
            <div className="collapsible-title">
              <span className="section-number">02</span>
              <h2>{TEXTS[language].education}</h2>
            </div>
            <span className="chevron-icon">&#9662;</span>
          </summary>
          <div className="collapsible-inner">
            <div className="timeline">
              {educationData.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-company">{item.institution}</h3>
                    <p className="timeline-position">{item.course}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </details>

        <details className="collapsible-section">
          <summary className="collapsible-header">
            <div className="collapsible-title">
              <span className="section-number">03</span>
              <h2>{TEXTS[language].certificates}</h2>
            </div>
            <span className="chevron-icon">&#9662;</span>
          </summary>
          <div className="collapsible-inner">
            <Certificate />
          </div>
        </details>
      </div>

      <div className="skillsAbout">
        <h2 className="section-heading">Skills</h2>
        <Skills />
      </div>
    </div>
  );
};

export default About;
