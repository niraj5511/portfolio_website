import React, { useEffect, useRef } from "react";
import "./Hero.css";
import Typed from "typed.js";
import VanillaTilt from "vanilla-tilt";
import heroImg from "../assets/hero.jpeg";

const Hero = () => {
  const typedTextRef = useRef(null);
  const imageRef = useRef(null);

  // typing animation effect
  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: [
        "Frontend Development",
        "SAP B1 and HANA",
        "Web Designing",
        "Web Development",
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });

    return () => typed.destroy();
  }, []);

  // tilt-on-hover effect for the profile image
  useEffect(() => {
    VanillaTilt.init(imageRef.current, { max: 15 });
  }, []);

  // particle background (particlesJS comes from the script tag in index.html)
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#1a1a2e" },
          shape: {
            type: "star",
            stroke: {
              width: 2,
              color: [
                "rgba(255,255,255,0.8)",
                "rgba(255,255,200,0.7)",
                "rgba(173,216,230,0.8)",
              ],
            },
            polygon: { nb_sides: 5 },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 39, size_min: 0.81, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 144,
            color: "#0052cc",
            opacity: 0.2,
            width: 1.6,
          },
          move: {
            enable: true,
            speed: 5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 203 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <section className="home" id="home">
      <div id="particles-js"></div>

      <div className="content">
        <h2>
          Hi There,
          <br />
          I'm Niraj <span>Bhusal</span>
        </h2>
        <p>
          I am into <span className="typing-text" ref={typedTextRef}></span>
        </p>
        <a href="#about" className="btn">
          <span>About Me</span>
          <i className="fas fa-arrow-circle-down"></i>
        </a>

        <div className="socials">
          <ul className="social-icons">
            <li>
              <a
                className="linkedin"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/niraj-bhusal-6262b830a/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>

            <li>
              <a
                className="github"
                aria-label="GitHub"
                href="https://github.com/niraj5511"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a className="instagram" aria-label="Instagram" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="image">
        <img
          draggable="false"
          ref={imageRef}
          src={heroImg}
          alt="Niraj Bhusal"
        />
      </div>
    </section>
  );
};

export default Hero;
