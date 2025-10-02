import React from "react";

import { motion } from "framer-motion";
import "./HeroSection.css";
import heroBg from "../../assets/hero-bg.jpg";
import student1 from "../../assets/student1.jpg";
import student2 from "../../assets/student2.jpg";
import student3 from "../../assets/student3.jpg";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const slideIn = (direction, delay = 0) => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay },
  },
});

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-content">
        {/* Tagline */}
        <motion.p
          className="tagline"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span className="highlight">DANCE FIRST</span>. THINK LATER
        </motion.p>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          STEP INTO THE RHYTHM <br /> DISCOVER YOUR DANCE JOURNEY
        </motion.h1>

        {/* Button */}
        <motion.div
          className="hero-buttons"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          <a href="/contact">
            <button className="btn-primary">Join Us Now</button>
          </a>
        </motion.div>
      </div>

      {/* Bottom Left */}
      <motion.div
        className="bottom-left"
        variants={slideIn("left", 0.9)}
        initial="hidden"
        animate="visible"
      >
        <div className="rounded-box">
          <span className="play-icon">▶</span>
          Get a Studio Video Tour
        </div>
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        className="bottom-right"
        variants={slideIn("right", 1.2)}
        initial="hidden"
        animate="visible"
      >
        <div className="rounded-box">
          <div className="student-avatars">
            <img src={student1} alt="student" />
            <img src={student2} alt="student" />
            <img src={student3} alt="student" />
          </div>
          <p>
            Trusted by over <span>1000+ Students</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
