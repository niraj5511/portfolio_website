import React from "react";
import "./About.css";
import Aboutimg from "..//assets/hero.jpeg";
import Abouticon from "../assets/profile.png"

const About = () => {
  return (
    <div className="about-section">
      <div className="about-title">
        <img src={Abouticon} alt="" />
        <h2>Who I Am </h2>
      </div>

      <div className="about-description">
        <div className="about-image">
          <img src={Aboutimg} alt="" />
        </div>

        <div className="about-content">
          <h3>Hello, I'm Niraj</h3>
          <p className="my-title">
            Front-End Developer | Aspiring Full-Stack Developer
          </p>
          <p className="my-description">
            I'm a Computer Engineering student at NCIT, Lalitpur,Nepal, with a
            passion for building responsive and user-friendly web applications.
            Specializing in front-end development with React.js, I also have a
            basic grasp of backend technologies, enabling me to contribute
            across the stack. My strengths extend beyond coding to include
            strong presentation and leadership skills, which help me effectively
            communicate ideas and lead collaborative projects. I'm always eager
            to learn new tools and create meaningful digital experiences.
          </p>

          <p className="my-email">
            <span>E-mail:</span> nirajbhusal2077@gmail.com
          </p>
          <p className="my-address">
            <span>Location: </span>Lalitpur, Nepal
          </p>

          <button>View My Resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
