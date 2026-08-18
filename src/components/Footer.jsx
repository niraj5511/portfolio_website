import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Niraj's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials. <br />
            <br />
            Chasing dreams and building big 🚀. Let's connect!
          </p>
        </div>

        <div className="box">
          <h3>Quick Links</h3>
          <Link to="/#home">
            <i className="fas fa-chevron-circle-right"></i> Home
          </Link>
          <Link to="/#skills">
            <i className="fas fa-chevron-circle-right"></i> Skills
          </Link>
          <Link to="/#work">
            <i className="fas fa-chevron-circle-right"></i> Projects
          </Link>
          <Link to="/#experience">
            <i className="fas fa-chevron-circle-right"></i> Experience
          </Link>
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <p>
            <i className="fas fa-phone"></i>+977 9860970391
          </p>
          <p>
            <i className="fas fa-envelope"></i>nirajbhusal2077@gmail.com
          </p>
          <p>
            <i className="fas fa-map-marked-alt"></i>Lalitpur, Nepal
          </p>
          <div className="share">
            <a
              href="https://www.linkedin.com/in/niraj-bhusal-6262b830a/"
              className="fab fa-linkedin"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              href="https://github.com/niraj5511"
              className="fab fa-github"
              target="_blank"
              rel="noreferrer"
            ></a>
            <a
              href="mailto:nirajbhusal2077@gmail.com"
              className="fas fa-envelope"
              target="_blank"
              rel="noreferrer"
            ></a>
          </div>
        </div>
      </div>

      <h1 className="credit">
        Designed with <i className="fa fa-heart pulse"></i> by{" "}
        <a href="https://www.linkedin.com/in/niraj-bhusal-6262b830a/">
          Niraj Bhusal
        </a>
      </h1>
    </section>
  );
};

export default Footer;
