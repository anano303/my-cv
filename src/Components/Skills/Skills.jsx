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
import "./Skills.css";

const Skills = () => {
  // Define an array of skill objects
  const skills = [
    { name: "HTML", level: 5 },
    { name: "CSS", level: 5 },
    { name: "SCSS", level: 5 },
    { name: "Bootstrap", level: 4 },
    { name: "JavaScript", level: 3 },
    { name: "React", level: 4 },
    { name: "Angular", level: 2 },

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
