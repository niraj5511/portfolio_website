import React, { useEffect, useState } from "react";
import "./Navbar.css";
import mylogo from "../assets/mylogo3.png";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  // controls whether the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);
  // tracks which section is currently in view, to highlight the right nav link
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // close the mobile menu whenever the user scrolls
      setMenuOpen(false);

      // figure out which section is currently on screen
      const sections = document.querySelectorAll("section");
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <a href="#home">
        <img src={mylogo} width="132" alt="Niraj Bhusal logo" />
      </a>

      <div
        id="menu"
        className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}
        onClick={() => setMenuOpen(!menuOpen)}
      ></div>

      <nav className={`navbar ${menuOpen ? "nav-toggle" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeSection === link.href.slice(1) ? "active" : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
