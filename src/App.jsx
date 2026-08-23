import React from "react";
import Background from "./components/background/Background";
import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Background />

      <Navbar />

      <main id="scroll-container">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;