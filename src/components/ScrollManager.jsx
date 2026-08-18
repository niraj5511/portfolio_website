import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // give the page a moment to render its sections before scrolling
      setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location]);

  return null; // this component renders nothing, it just watches for navigation
};

export default ScrollManager;