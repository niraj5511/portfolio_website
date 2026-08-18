import React, { useEffect, useRef } from "react";
import "./Work.css";
import VanillaTilt from "vanilla-tilt";
import { Link } from "react-router-dom";

// import secureShieldImg from "../assets/secureshield.png";
// import nepseImg from "../assets/nepse-predictor.png";
import cgpaImg from "../assets/cgpa-calculator.png";
import bookSearchImg from "../assets/reactprojects.png";

const projects = [
  //   {
  //     name: "SecureShield",
  //     desc: "A phishing URL and SMS scam detection system with SHAP explainability — won First Position at NCIT's Final Year Project Exhibition 2083.",
  //     image: secureShieldImg,
  //     links: {
  //       view: "https://secureshieldd.netlify.app/", // add a live demo link here if you have one
  //       code: "https://github.com/niraj5511", // replace with the actual repo link
  //     },
  //   },
  //   {
  //     name: "NEPSE Share Price Predictor",
  //     desc: "A React web app that predicts NEPSE share prices using ridge regression with walk-forward backtesting and an interactive SVG chart.",
  //     image: nepseImg,
  //     links: {
  //       view: "#",
  //       code: "https://github.com/niraj5511",
  //     },
  //   },
  {
    name: "CGPA Calculator",
    desc: "A professional CGPA calculator. Add subjects, credits, and grades per semester. Save results and share via link.",
    image: cgpaImg,
    links: {
      view: "/cgpacalculator",
      code: "https://github.com/niraj5511/CGPA-Calculator",
    },
  },
  {
    name: "Book Search",
    desc: "A web-based platform made using React for searching books using the Google Books API.",
    image: bookSearchImg,
    links: {
      view: "https://booksearchi.web.app/",
      code: "https://github.com/niraj5511/ReactProject",
    },
  },
];

const Work = () => {
  const containerRef = useRef(null);

  // tilt-on-hover effect for every project card
  useEffect(() => {
    const tiltElements = containerRef.current.querySelectorAll(".tilt");
    VanillaTilt.init(tiltElements, { max: 10 });
  }, []);

  return (
    <section className="work" id="work">
      <h2 className="heading">
        <i className="fas fa-briefcase"></i> My <span>Projects</span>
      </h2>
      <p className="quote">Some of the things I've built.</p>

      <div className="box-container" ref={containerRef}>
        {projects.map((project) => (
          <div className="box tilt" key={project.name}>
            <img draggable="false" src={project.image} alt={project.name} />
            <div className="content">
              <div className="tag">
                <h3>{project.name}</h3>
              </div>
              <div className="desc">
                <p>{project.desc}</p>
                <div className="btns">
                  <a
                    href={project.links.view}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-eye"></i> View
                  </a>
                  <a
                    href={project.links.code}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code <i className="fas fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="viewall">
        <Link to="/projects" className="btn">
          <span>View All Projects</span>
          <i className="fas fa-arrow-circle-right"></i>
        </Link>
      </div>
    </section>
  );
};

export default Work;
