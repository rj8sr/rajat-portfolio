import React from 'react'

const Certifications = ({ certifications }) => (
  <section id="certifications" className="section" data-aos="fade-up">
    <h2>Certifications</h2>
    <ul>
      {certifications.map(({ title, issuer }) => (
        <li key={title}>{title} - <em>{issuer}</em></li>
      ))}
    </ul>
  </section>
)

export default Certifications
