import React, { useEffect, useState } from "react";
import "./ScrollTop.css";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <i
      id="scroll-top"
      className={`fas fa-angle-up ${visible ? "active" : ""}`}
      onClick={scrollToTop}
    ></i>
  );
};

export default ScrollTop;