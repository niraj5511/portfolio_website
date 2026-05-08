import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import facebook from "../assets/facebook.png";
import hero from "../assets/hero.jpeg";
import Typed from "typed.js";

const Hero = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        "Frontend Development",
        "Backend Development",
        "Web Development",
      ],

      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="hero">
      <div className="hero-text">
        <div className="texts">
          <h1 className="intro-text">Hi There,</h1>
          <h1 className="intro-text">
            I'm <span>Niraj Bhusal</span>
          </h1>

          <p>
            I'm into <span ref={textRef} className="changing-text"></span>{" "}
          </p>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/nirajbhusal551/" target="_blank">
            <img src={linkedin} alt="L" />
          </a>
          <a href="https://github.com/niraj5511" target="_blank">
            <img src={github} alt="G" />
          </a>
          <a href="https://www.facebook.com/ni.raj.31586" target="_blank">
            <img src={facebook} alt="F" />
          </a>
        </div>
      </div>

      <div className="hero-img-section">
        <div className="hero-img">
          <img src={hero} alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
