import React from "react";
import "./Skills.css";

// each skill's icon comes from devicon (a free, reliable icon CDN covering most tech stacks)
const skills = [
  {
    name: "ReactJS",
    type: "img",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
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
  {
    name: "JavaScript",
    type: "img",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },

  { name: "SAP B1", type: "fa", icon: "fa-cubes", color: "#0A6ED1" },
  { name: "SAP HANA", type: "fa", icon: "fa-database", color: "#0A6ED1" },
  { name: "SQLScript", type: "fa", icon: "fa-code", color: "#00609D" },
  {
    name: "Crystal Reports",
    type: "fa",
    icon: "fa-chart-bar",
    color: "#F58220",
  },

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
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Skills & <span>Abilities</span>
      </h2>
      <p className="qoute">
        Skill is only developed by hours and hours of work.
      </p>

      <div className="container">
        <div className="row">
          {skills.map((skill) => (
            <div className="bar" key={skill.name}>
              <div className="info">
                <div className="icon-box">
                  {skill.type === "img" ? (
                    <img src={skill.icon} alt={skill.name} />
                  ) : (
                    <i
                      className={`fas ${skill.icon}`}
                      style={{ color: skill.color }}
                    ></i>
                  )}
                </div>
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
