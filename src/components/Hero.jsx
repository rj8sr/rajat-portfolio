import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { motion } from "framer-motion";

const Hero = ({ personalInfo }) => (
  <ParallaxBanner
    className="hero-section"
    layers={[
      { image: "/assets/backgrounds/hero-bg.svg", speed: -15 },
      { image: "/assets/backgrounds/particle_bg.svg", speed: -5, opacity: 0.4 }
    ]}
    style={{ height: "90vh" }}
  >
    <motion.div
      className="hero-content"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>{personalInfo.name}</h1>
      <h2>{personalInfo.title}</h2>
    </motion.div>
  </ParallaxBanner>
);

export default Hero;
