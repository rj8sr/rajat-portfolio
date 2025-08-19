import React from "react";

const About = ({ aboutMe }) => (
  <section id="about" className="section" data-aos="fade-up">
    <h2>About Me</h2>
    <p>{aboutMe}</p>
  </section>
);

export default About;
