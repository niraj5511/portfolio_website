import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Work from "./components/Work.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollTop from "./components/ScrollTop.jsx";

// As we build each section, import it above and add it below,
// in the same order as the old site:
// Navbar -> Hero -> About -> Skills -> Education -> Work -> Experience -> Contact -> Footer

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Work />
      <Experience />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
