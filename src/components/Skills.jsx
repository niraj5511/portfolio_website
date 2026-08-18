import React from "react";
import "./Skills.css";

const categories = [
  {
    id: "frontend",
    label: "Frontend & Web",
    tagline: "What I build interfaces with",
    variant: "light",
    skills: [
      {
        name: "ReactJS",
        type: "img",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "JavaScript",
        type: "img",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "HTML5",
        type: "img",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        type: "img",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
  },
  {
    id: "sap",
    label: "SAP & Enterprise Systems",
    tagline: "Specialization",
    variant: "dark",
    skills: [
      { name: "SAP Business One", type: "fa", icon: "fa-cubes" },
      { name: "SAP HANA", type: "fa", icon: "fa-database" },
      { name: "SQLScript", type: "fa", icon: "fa-code" },
      { name: "Crystal Reports", type: "fa", icon: "fa-chart-bar" },
    ],
  },
  {
    id: "core",
    label: "Languages & Tools",
    tagline: "The everyday toolkit",
    variant: "light",
    skills: [
      {
        name: "Java",
        type: "img",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Python",
        type: "img",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "C++",
        type: "img",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "MySQL",
        type: "img",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Git",
        type: "img",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        type: "img",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        Skills & <span>Expertise</span>
      </h2>
      <p className="skills-eyebrow">
        A rare mix: enterprise systems + modern web
      </p>

      <div className="skills-grid">
        {categories.map((cat) => (
          <div className={`skill-card ${cat.variant}`} key={cat.id}>
            <div className="skill-card-header">
              <span className="skill-card-tagline">{cat.tagline}</span>
              <h3>{cat.label}</h3>
            </div>

            <div className="chip-row">
              {cat.skills.map((skill) => (
                <div className="chip" key={skill.name}>
                  <span className="chip-icon">
                    {skill.type === "img" ? (
                      <img src={skill.icon} alt="" />
                    ) : (
                      <i className={`fas ${skill.icon}`}></i>
                    )}
                  </span>
                  <span className="chip-label">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
