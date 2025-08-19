import React from "react";
import { motion } from "framer-motion";
import { MdBusiness } from "react-icons/md";

const ExperienceItem = ({ company, logo, title, period, projects }) => (
  <motion.div
    className="experience-item"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="logo-wrapper">
      {logo ? (
        <img src={logo} alt={`${company} logo`} className="company-logo" />
      ) : (
        <MdBusiness size={50} color="#22d3ee" />
      )}
    </div>
    <h3>{title}, {company}</h3>
    <span className="period">{period}</span>
    <ul>
      {projects.map((p, i) => (
        <li key={i}><strong>{p.domain}:</strong> {p.description}</li>
      ))}
    </ul>
  </motion.div>
);

const Experience = ({ experience }) => (
  <section id="experience" className="experience-section">
    <h2>Experience</h2>
    {experience.map(exp => (
      <ExperienceItem key={exp.company} {...exp} />
    ))}
  </section>
);

export default Experience;
