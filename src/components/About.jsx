import React, { useEffect, useRef } from "react";
import "./About.css";
import VanillaTilt from "vanilla-tilt";
import aboutImg from "../assets/about.jpeg"; // swap to hero.jpeg if you don't have this yet

const About = () => {
  const imageRef = useRef(null);

  // tilt-on-hover effect, same as the Hero photo
  useEffect(() => {
    VanillaTilt.init(imageRef.current, { max: 15 });
  }, []);

  return (
    <section className="about" id="about">
      <h2 className="heading">
        <i className="fas fa-user-alt"></i> Who <span>I Am</span>
      </h2>

      <div className="row">
        <div className="image">
          <img
            draggable="false"
            ref={imageRef}
            src={aboutImg}
            alt="Niraj with laptop"
            title="Niraj - Developer"
          />
        </div>

        <div className="content">
          <h3>Hello, I'm Niraj</h3>
          <span className="tag">
            Front-End Developer | Hands-on Experience with SAP B1 & HANA
          </span>
          <p>
            I'm a Computer Engineering student at NCIT, Pokhara University, with
            a passion for building responsive and user-friendly web
            applications. I specialize in front-end development with React.js,
            and through my internship at IIS Incorporation, I've also gained
            hands-on experience with SAP Business One, SAP HANA, and Crystal
            Reports. My strengths extend beyond coding to include strong
            presentation and leadership skills, sharpened through my role as
            Secretary of Nepal Tek Community, which help me effectively
            communicate ideas and lead collaborative projects. I'm always eager
            to learn new tools and create meaningful digital experiences.
          </p>

          <div className="box-container">
            <div className="box">
              <p>
                <span>Email: </span> nirajbhusal551@gmail.com
              </p>
              <p>
                <span>Location: </span> Lalitpur, Nepal
              </p>
            </div>
          </div>

          <div className="resumebtn">
            <a
              href="https://drive.google.com/file/d/1b-HoV804OvMxHeFJbd8NhPFgZN_PVz_I/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              <span>View My Resume</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
