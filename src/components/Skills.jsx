import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";

const iconMap = {
  Java: <FaJava color="#007396" />,
  AWS: <FaAws color="#FF9900" />,
  Docker: <FaDocker color="#0db7ed" />,
  Git: <FaGitAlt color="#f34f29" />
};

const Skill = ({ name, level }) => (
  <motion.div
    className="skill-item"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="skill-header">
      {iconMap[name.split(" ")[0]] || null} <span>{name}</span>
    </div>
    <div className="skill-bar">
      <motion.div
        className="skill-progress"
        style={{ width: `${level}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        {level}%
      </motion.div>
    </div>
  </motion.div>
);

const Skills = ({ skills }) => (
  <section id="skills" className="skills-section">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skills.map(skill => (
        <Skill key={skill.name} {...skill} />
      ))}
    </div>
  </section>
);

export default Skills;
