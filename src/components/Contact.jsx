import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = ({ personalInfo }) => (
  <section id="contact" className="section" data-aos="fade-up">
    <h2>Contact</h2>
    <p>Location: {personalInfo.location}</p>
    <p>Email: <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
    <div className="social-icons">
      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href={personalInfo.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
      <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
    </div>
  </section>
);

export default Contact;
