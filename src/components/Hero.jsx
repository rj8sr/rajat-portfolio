import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'

const Hero = ({ personalInfo }) => {
  return (
    <section id="hero" className="hero-section">
      <Parallax speed={-15}>
        <motion.img
          src={`/assets/${personalInfo.photo}`}
          alt={personalInfo.name}
          className="hero-photo"
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
      </Parallax>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {personalInfo.name}
      </motion.h1>
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {personalInfo.title}
      </motion.h2>
    </section>
  )
}

export default Hero
