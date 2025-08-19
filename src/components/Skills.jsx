import React from 'react'

const Skills = ({ skills }) => (
  <section id="skills" className="section" data-aos="fade-up">
    <h2>Skills</h2>
    <div className="skills-grid">
      {skills.map(({ name, level }) => (
        <div key={name} className="skill-item">
          <div className="skill-name">{name}</div>
          <div className="skill-bar">
            <div className="skill-progress" style={{ width: `${level}%` }}>
              {level}%
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

export default Skills
