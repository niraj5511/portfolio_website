import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

// As we build each section, import it above and add it below,
// in the same order as the old site:
// Navbar -> Hero -> About -> Skills -> Education -> Work -> Experience -> Contact -> Footer

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
