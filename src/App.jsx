import React from "react";
import "./App.css";
import {
  personalInfo,
  aboutMe,
  skills,
  experience,
  certifications,
} from "./data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero personalInfo={personalInfo} />
        <About aboutMe={aboutMe} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Certifications certifications={certifications} />
        <Contact personalInfo={personalInfo} />
      </main>
      <Footer name={personalInfo.name} />
    </>
  );
}

export default App;
