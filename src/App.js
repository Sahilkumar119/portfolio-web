import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
