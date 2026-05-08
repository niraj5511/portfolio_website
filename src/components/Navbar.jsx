import React from "react";
import "./Navbar.css";
import mylogo from "../assets/mylogo3.png"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="logo">
            <img src={mylogo} alt="My Logo" />
        </div>

        <div className="links">
            <a href="#" className="active">Home</a>
            <a href="#">Skills</a>
            <a href="#">Projects </a>
            <a href="#">Experience</a>
            <a href="#">Education</a>
            <a href="#">Contact</a>
        </div>
    </div>
  );
};

export default Navbar;
