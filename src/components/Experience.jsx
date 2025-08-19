import React from 'react'

const Experience = ({ experience }) => (
  <section id="experience" className="section" data-aos="fade-up">
    <h2>Professional Experience</h2>
    {experience.map(({ company, title, period, projects }) => (
      <div key={company} className="experience-company">
        <h3>{title}, {company}</h3>
        <span className="period">{period}</span>
        <ul>
          {projects.map(({ domain, description }) => (
            <li key={domain}><strong>{domain}:</strong> {description}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
)

export default Experience
