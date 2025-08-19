import React from 'react'

const Contact = ({ personalInfo }) => (
  <section id="contact" className="section" data-aos="fade-up">
    <h2>Contact</h2>
    <p>Location: {personalInfo.location}</p>
    <p>Email: <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
  </section>
)

export default Contact
