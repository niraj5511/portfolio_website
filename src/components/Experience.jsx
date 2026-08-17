import React from "react";
import "./Experience.css";

const experiences = [
  {
    side: "right",
    tag: "IIS Incorporation",
    role: "Jr. Techno Functional Associate (SAP B1 Intern)",
    period: "May 2026 – Present",
  },
  {
    side: "left",
    tag: "Nepal Tek Community (NTK)",
    role: "Secretary, NCIT Chapter",
    period: "Ongoing",
  },
];

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <h2 className="heading">
        <i className="fas fa-briefcase"></i> Experience
      </h2>
      <div className="quote">
        <span>Each step you take is shaping who you're becoming.</span>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className={`container ${exp.side}`} key={index}>
            <div className="content">
              <div className="tag">
                <h2>{exp.tag}</h2>
              </div>
              <div className="desc">
                <h3>{exp.role}</h3>
                <p>{exp.period}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="morebtn">
          <a href="/experience" className="btn">
            <span>View All</span>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;