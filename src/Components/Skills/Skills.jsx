import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaAngular,
  FaSass,
  FaBootstrap,
} from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiNestjs } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  // Define an array of skill objects
  const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 5 },
    { name: "SCSS", level: 5 },
    { name: "Bootstrap", level: 5 },
    { name: "JavaScript", level: 5 },
    { name: "React", level: 5 },
    { name: "Angular", level: 5 },
    { name: "Next.js", level: 5 },
    { name: "Express.js", level: 5 },
    { name: "Nest.js", level: 5 },
    { name: "MongoDB", level: 5 },
    { name: "Cloudinary", level: 5 },
    { name: "AWS", level: 5 },

    // Add more skills as needed
  ];

  return (
    <div className="skills">
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="iconSkills">
            {getSkillIcon(skill.name)}
            <div className="name">{skill.name}</div>
          </div>

          <div className="level">{renderSkillLevel(skill.level)}</div>
        </div>
      ))}
    </div>
  );
};

// Function to return appropriate icon based on skill name
const getSkillIcon = (skillName) => {
  switch (skillName) {
    case "HTML":
      return <FaHtml5 />;
    case "CSS":
      return <FaCss3Alt />;
    case "JavaScript":
      return <FaJs />;
    case "React":
      return <FaReact />;
    case "Angular":
      return <FaAngular />;
    case "SCSS":
      return <FaSass />;
    case "Bootstrap":
      return <FaBootstrap />;
    case "Next.js":
      return <SiNextdotjs />;
    case "Express.js":
      return <SiExpress />;
    case "Nest.js":
      return <SiNestjs />;
    default:
      return null;
  }
};

const renderSkillLevel = (level) => {
  return (
    <div className="level-indicator">
      <div className="level-bar">
        <div className="level-fill" style={{ width: `${level * 20}%` }}></div>
      </div>
    </div>
  );
};

export default Skills;
