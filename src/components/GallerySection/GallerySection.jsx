import React from "react";
import { motion } from "framer-motion";
import "./GallerySection.css";

import g1 from "../../assets/gallery.jpg";
import g2 from "../../assets/gallery2.jpg";
import g3 from "../../assets/gallery3.jpg";
import g4 from "../../assets/gallery4.jpg";
import g5 from "../../assets/gallery5.jpg";
import g6 from "../../assets/gallery6.jpg";
import g7 from "../../assets/gallery7.jpg";
import g8 from "../../assets/gallery8.jpg";

const galleryItems = [
  { img: g1, title: "Kathak", artist: "Guru Pali Chandra" },
  { img: g2, title: "Mohiniyattam", artist: "Neena Prasad" },
  { img: g3, title: "Yakshagana", artist: "MSDY Kala Mandali" },
  { img: g4, title: "Ottan Thullal", artist: "Kalamandalam Geethanandan" },
  { img: g5, title: "Kutiyattam", artist: "Kalamandalam Sivan" },
  { img: g6, title: "Gita Govinda", artist: "Invis" },
  { img: g7, title: "Odissi", artist: "Vidushi Sujata Mohapatra" },
  { img: g8, title: "Neela Varnam", artist: "Dr. Rajashree Warrier" },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.8, rotate: -5 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const GallerySection = () => {
  return (
    <section className="gallery-section">
      {/* Heading Animation */}
      <motion.h1
        className="gallery-heading"
        initial={{ opacity: 0, y: -60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Gallery
      </motion.h1>

      {/* Cards Animation */}
      <motion.div
        className="gallery-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {galleryItems.map((item, i) => (
          <motion.div className="gallery-card" key={i} variants={cardVariants}>
            <div className="gallery-image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="gallery-info">
              <h3>{item.title}</h3>
              <p>{item.artist}</p>
              <a href="#" className="view-details">
                View details
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GallerySection;
