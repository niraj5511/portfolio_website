import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import mylogo from "../assets/mylogo3.png";
import { useTheme } from "../context/ThemeContext.jsx";

const navLinks = [
  { to: "/#home", id: "home", label: "Home" },
  { to: "/#skills", id: "skills", label: "Skills" },
  { to: "/#work", id: "work", label: "Projects" },
  { to: "/#experience", id: "experience", label: "Experience" },
  { to: "/#contact", id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setMenuOpen(false);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 200;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top > offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once immediately, so the correct link is active on page load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <Link to="/#home">
        <img src={mylogo} width="132" alt="Niraj Bhusal logo" />
      </Link>

      {/* Grouped so the toggle and the hamburger stay together on the right.
          On mobile .navbar is position:fixed and leaves the flow, which leaves
          just these two controls in the header bar. */}
      <div className="nav-right">
        <nav className={`navbar ${menuOpen ? "nav-toggle" : ""}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.to}
                  className={activeSection === link.id ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Deliberately outside .navbar so it stays reachable at every width
            instead of hiding behind the hamburger. */}
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
          }
          aria-pressed={theme === "dark"}
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
        </button>

        <div
          id="menu"
          className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        ></div>
      </div>
    </header>
  );
};

export default Navbar;