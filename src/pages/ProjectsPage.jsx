import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import "./ProjectsPage.css";
import { isTouchDevice } from "../utils/pointer.js";

import secureShieldImg from "../assets/secureshield.png";
// import nepseImg from "../assets/nepse-predictor.png";
import cgpaImg from "../assets/cgpa-calculator.png";
import bookSearchImg from "../assets/reactprojects.png";

const allProjects = [
  {
    name: "SecureShield",
    category: "ml",
    desc: "Built the React frontend for a phishing URL and SMS scam detection system (team project) — won First Position at NCIT's Final Year Project Exhibition 2083.",
    image: secureShieldImg,
    links: { view: "#", code: "https://github.com/niraj5511" },
  },
//   {
//     name: "NEPSE Share Price Predictor",
//     category: "ml",
//     desc: "A React web app that predicts NEPSE share prices using ridge regression with walk-forward backtesting and an interactive SVG chart.",
//     image: nepseImg,
//     links: { view: "#", code: "https://github.com/niraj5511" },
//   },
  {
    name: "CGPA Calculator",
    category: "tool",
    desc: "A professional CGPA calculator. Add subjects, credits, and grades per semester. Save results and share via link.",
    image: cgpaImg,
    links: { view: "/cgpacalculator", code: "https://github.com/niraj5511/CGPA-Calculator" },
  },
  {
    name: "Book Search",
    category: "web",
    desc: "A web-based platform made using React for searching books using the Google Books API.",
    image: bookSearchImg,
    links: { view: "https://booksearchi.web.app/", code: "https://github.com/niraj5511/ReactProject" },
  },
];

const filters = [
  { label: "All Projects", value: "*" },
  { label: "Machine Learning", value: "ml" },
  { label: "Web Apps", value: "web" },
  { label: "Tools", value: "tool" },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("*");
  const [revealed, setRevealed] = useState(null);
  const [touch] = useState(isTouchDevice);
  const containerRef = useRef(null);

  const filteredProjects =
    activeFilter === "*"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  // Re-run tilt whenever the filter changes, since new cards mount.
  // Keyed on activeFilter rather than the filteredProjects array: that array is
  // rebuilt on every render, so the effect used to fire for unrelated state
  // changes too.
  // The cleanup matters here in a way it didn't before: cards that SURVIVE a
  // filter change were being re-initialised without the previous instance being
  // torn down, stacking a duplicate set of listeners on every filter click.
  // gyroscope defaults to true, so it is also switched off, and skipped
  // entirely on touch where there is no hover to respond to.
  useEffect(() => {
    if (touch) return;
    const tiltElements = containerRef.current.querySelectorAll(".tilt");
    tiltElements.forEach((el) => el.vanillaTilt && el.vanillaTilt.destroy());
    VanillaTilt.init(tiltElements, { max: 15, gyroscope: false });
    return () =>
      tiltElements.forEach((el) => el.vanillaTilt && el.vanillaTilt.destroy());
  }, [activeFilter, touch]);

  // a card left open would stay open behind a different filter
  useEffect(() => {
    setRevealed(null);
  }, [activeFilter]);

  return (
    <section className="projects-page" id="work">
      <h2 className="heading">
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>

      <div className="button-group">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`btn ${activeFilter === f.value ? "is-checked" : ""}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="box-container" ref={containerRef}>
        {filteredProjects.map((project) => (
          <div
            className={`box tilt ${revealed === project.name ? "is-revealed" : ""}`}
            key={project.name}
            onClick={
              touch
                ? () =>
                    setRevealed((current) =>
                      current === project.name ? null : project.name,
                    )
                : undefined
            }
          >
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
                    /* keeps the tap from bubbling up and collapsing the card
                       out from under the link just pressed */
                    onClick={(e) => e.stopPropagation()}
                  >
                    <i className="fas fa-eye"></i> View
                  </a>
                  <a
                    href={project.links.code}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Code <i className="fas fa-code"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="backbtn">
        <Link to="/#work" className="btn">
          <i className="fas fa-arrow-left"></i>
          <span>Back to Home</span>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsPage;