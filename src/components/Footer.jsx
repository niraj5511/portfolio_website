import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import mylogo from "../assets/mylogo3.png";

const EMAIL = "nirajbhusal551@gmail.com";
const PHONE_DISPLAY = "+977 9860970391";
const PHONE_HREF = "+9779860970391";
const LOCATION = "Lalitpur, Nepal";
const LINKEDIN = "https://www.linkedin.com/in/niraj-bhusal-6262b830a/";
const GITHUB = "https://github.com/niraj5511";
const RESUME =
  "https://drive.google.com/file/d/1b-HoV804OvMxHeFJbd8NhPFgZN_PVz_I/view";

const exploreLinks = [
  { to: "/#home", label: "Home" },
  { to: "/#skills", label: "Skills" },
  { to: "/#work", label: "Projects" },
  { to: "/#experience", label: "Experience" },
  { to: "/#contact", label: "Contact" },
];

const socials = [
  { href: LINKEDIN, icon: "fab fa-linkedin-in", label: "LinkedIn" },
  { href: GITHUB, icon: "fab fa-github", label: "GitHub" },
  { href: `mailto:${EMAIL}`, icon: "fas fa-envelope", label: "Email" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/#home" className="footer__logo">
              <img src={mylogo} width="148" alt="Niraj Bhusal" />
            </Link>
            <p className="footer__tagline">
              Thanks for stopping by. Chasing dreams and building big
              <span className="footer__rocket"> 🚀</span> — let&apos;s connect.
            </p>

            {/* A list, not loose anchors: it is a list of links, and it gives
                screen readers an item count. Each anchor carries an aria-label
                because the icon is the only content — the old markup used empty
                <a> tags with the icon class on them, which announced nothing. */}
            <ul className="footer__socials">
              {socials.map((social) => {
                const isExternal = social.href.startsWith("http");
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      title={social.label}
                      {...(isExternal
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      <i className={social.icon} aria-hidden="true"></i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <nav className="footer__col" aria-labelledby="footer-explore">
            <h2 className="footer__heading" id="footer-explore">
              Explore
            </h2>
            <ul className="footer__links">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-labelledby="footer-more">
            <h2 className="footer__heading" id="footer-more">
              More
            </h2>
            <ul className="footer__links">
              <li>
                <Link to="/projects">All Projects</Link>
              </li>
              <li>
                <Link to="/cgpacalculator">CGPA Calculator</Link>
              </li>
              <li>
                <a href={RESUME} target="_blank" rel="noreferrer">
                  Resume
                  <i
                    className="fas fa-arrow-up-right-from-square footer__ext"
                    aria-hidden="true"
                  ></i>
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__heading">Get in touch</h2>
            {/* Actionable rather than plain text: tapping the phone on mobile
                dials it, and the address opens Maps. */}
            <ul className="footer__contact">
              <li>
                <i className="fas fa-envelope" aria-hidden="true"></i>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </li>
              <li>
                <i className="fas fa-phone" aria-hidden="true"></i>
                <a href={`tel:${PHONE_HREF}`}>{PHONE_DISPLAY}</a>
              </li>
              <li>
                <i className="fas fa-location-dot" aria-hidden="true"></i>
                <a
                  href={`https://www.google.com/maps/search/${encodeURIComponent(
                    LOCATION
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {LOCATION}
                </a>
              </li>
            </ul>

            <a className="footer__cta" href={`mailto:${EMAIL}`}>
              Hire me <i className="fas fa-paper-plane" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <div className="footer__bar">
          <p className="footer__copy">
            © {year} Niraj Bhusal. All rights reserved.
          </p>

          <p className="footer__credit">
            Designed with{" "}
            <i className="fas fa-heart footer__heart" aria-hidden="true"></i>
            <span className="sr-only">love</span> by{" "}
            <a href={LINKEDIN} target="_blank" rel="noreferrer">
              Niraj Bhusal
            </a>
          </p>

          <button
            type="button"
            className="footer__top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            title="Back to top"
          >
            <i className="fas fa-arrow-up" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
