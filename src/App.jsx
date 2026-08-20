import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollTop from "./components/ScrollTop.jsx";
import ScrollManager from "./components/ScrollManager.jsx";
import Home from "./pages/Home.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import CgpaCalculator from "./pages/CgpaCalculator.jsx";

function App() {
  // tell the preloader in index.html that React has rendered, so it can
  // advance its progress bar (see the inline controller there)
  useEffect(() => {
    window.__preloader?.appReady();
  }, []);

  return (
    <BrowserRouter>
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/cgpacalculator" element={<CgpaCalculator />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </BrowserRouter>
  );
}

export default App;
