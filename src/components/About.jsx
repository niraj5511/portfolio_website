import React, { useEffect, useRef } from "react";
import "./About.css";
import aboutImg from "../assets/about.jpeg";

const About = () => {
  const sectionRef = useRef(null);

  // Staggered fade-up as the section scrolls into view. Each element is
  // unobserved once it has played, so nothing re-animates on scroll-back.
  //
  // VanillaTilt used to run on this photo and has been removed: the frame now
  // carries a CSS `rotate(-2deg)` that straightens on hover, and tilt writes
  // its own transform to the same element — the two overwrite each other.
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    if (!els?.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      {/* two blurred colour washes, so the panel has something to float above */}
      <div className="about-ambient" aria-hidden="true">
        <i></i>
        <i></i>
      </div>

      {/* <span className="about-kicker">// about me</span> */}
      <h2 className="heading">
        <i className="fas fa-user-alt"></i> Who <span>I Am</span>
      </h2>
      <div className="about-rule"></div>

      <div className="about-panel reveal">
        <div className="about-grid">
          <div className="about-photo-wrap">
            <div className="about-photo">
              <img
                draggable="false"
                src={aboutImg}
                alt="Niraj with laptop"
                title="Niraj - Developer"
              />
            </div>
          </div>

          <div className="about-text">
            <p className="code-line reveal d1">
              const <span>aboutMe = {"{"}</span>
            </p>

            <h3 className="about-name reveal d1">
              Hi, I'm<em>Niraj</em>
              <span className="caret"></span>
            </h3>

            <p className="about-lead reveal d1">
              A Computer Engineering student at NCIT, Pokhara University,
              currently in my final semester. I like turning ideas into working
              software, whether that's a <code>React</code> interface, a data
              pipeline in <code>SAP HANA</code>, or a small tool that saves
              someone time.
            </p>

            <p className="about-lead reveal d2">
              My internship at IIS Incorporation gave me real-world exposure to
              enterprise systems like <code>SAP B1</code> and <code>Odoo</code>,
              while my project work has sharpened my frontend and
              problem-solving skills.
            </p>

            <div className="about-award reveal d2">
              <span className="award-medal">
                <i className="fas fa-trophy"></i>
              </span>
              <div>
                <p className="award-k">First Position</p>
                <p className="award-v">
                  <b>SecureShield</b> — Final Year Project Exhibition
                </p>
              </div>
              <span className="award-ghost" aria-hidden="true">
                1st
              </span>
            </div>

            <p className="about-lead soft reveal d2">
              When I'm not coding, I'm organizing events as Secretary of Nepal
              Tek Community (NTK), where I get to combine my interest in tech
              with community building.
            </p>

            <p className="code-line code-close reveal d2">{"};"}</p>

            <div className="about-actions reveal d2">
              <a
                href="https://drive.google.com/file/d/1b-HoV804OvMxHeFJbd8NhPFgZN_PVz_I/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="about-btn solid"
              >
                View My Resume <i className="fas fa-chevron-right"></i>
              </a>
              <a href="#contact" className="about-btn ghost">
                &lt;/&gt; Let's build something
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
