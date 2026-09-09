import React from "react";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";
import Background from "./components/ui/Background";
import ScrollProgress from "./components/ui/ScrollProgress";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <ScrollProgress />
      <NavBar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Home />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Education />
        <Contact />
      </main>

      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
