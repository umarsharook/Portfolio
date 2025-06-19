import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Blog />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </div>
  );
}

export default App;
