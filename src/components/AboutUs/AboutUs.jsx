import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";

import aboutImg from "../../assets/about-us.png"; // Replace with real images
import philosophyImg from "../../assets/philosophy.png";
import visionImg from "../../assets/vision.png";

// Variants for animation
const fadeInLeft = {
  hidden: { opacity: 0, x: -100, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AboutUs = () => {
  return (
    <section className="about-section">
      {/* About Us */}
      <div className="about-container">
        <motion.div
          className="about-image"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={aboutImg} alt="About Our Dance Studio" />
        </motion.div>

        <motion.div
          className="about-content"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>About Us</h2>
          <p>
            At <span>Creative dance studio</span>, we believe dance is more than
            just movement – it’s a way of life. With expert instructors,
            state-of-the-art facilities, and a vibrant community, we provide the
            perfect space to discover your rhythm, build confidence, and connect
            with others.
          </p>
          <a href="/about">
            <button className="btn-primary">Learn More</button>
          </a>
        </motion.div>
      </div>

      {/* Philosophy */}
      <div className="about-container reverse">
        <motion.div
          className="about-image"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={philosophyImg} alt="Our Philosophy" />
        </motion.div>

        <motion.div
          className="about-content"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Our Philosophy</h2>
          <p>
            Dance is a universal language that transcends boundaries. Our
            philosophy is to nurture creativity, discipline, and
            self-expression, ensuring that every dancer finds their unique voice
            on stage and in life.
          </p>
          <a href="/about">
            <button className="btn-primary">Discover More</button>
          </a>
        </motion.div>
      </div>

      {/* Vision */}
      <div className="about-container">
        <motion.div
          className="about-image"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={visionImg} alt="Our Vision" />
        </motion.div>

        <motion.div
          className="about-content"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Our Vision</h2>
          <p>
            We envision a world where dance empowers individuals to grow,
            connect, and inspire change. Our mission is to make dance accessible
            to everyone, cultivating a community that thrives on passion,
            inclusivity, and excellence.
          </p>
          <a href="/about">
            <button className="btn-primary">Our Mission</button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
