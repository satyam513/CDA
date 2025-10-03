import React from "react";
import { motion } from "framer-motion";
import "./ContactSection.css";

const fieldVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const ContactSection = () => {
  return (
    <section className="contact-section">
      {/* Heading */}
      <motion.h1
        className="contact-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Contact Us
      </motion.h1>

      <div className="contact-container">
        {/* Left Info */}
        <motion.div
          className="contact-info card-style"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2>Get in Touch</h2>
          <p>We’d love to hear from you! Reach out with any questions.</p>

          <div className="info-item">
            <strong>📍 Address:</strong> Creative Dance Academy, Pillar No. 76,
            Raja Bazar, Sheikhpura, Bailey Road, Patna - 14, Bihar, India.
          </div>
          <div className="info-item">
            <strong>📞 Phone:</strong> +91 9576733466, +91 7992407300
          </div>
          <div className="info-item">
            <strong>✉️ Email:</strong> info@thedanceacademy.com
          </div>

          <div className="social-links">
            <a
              href="https://www.facebook.com/share/17QxdvxYmT/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 Facebook
            </a>
            <a
              href="https://www.instagram.com/cda_official76?igsh=bWk0c3hjZGZkdjhq"
              target="_blank"
              rel="noopener noreferrer"
            >
              📷 Instagram
            </a>
            <a
              href="https://youtube.com/@cdaofficial76?si=wj63GbC1oWDdR9eU"
              target="_blank"
              rel="noopener noreferrer"
            >
              ▶️ YouTube
            </a>
          </div>
        </motion.div>

        {/* Enquiry Form Card */}
        <motion.div
          className="contact-form card-style"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <form>
            {[
              { label: "Your Name", type: "text" },
              { label: "Your Email", type: "email" },
              { label: "Your Mobile Number", type: "tel" },
            ].map((field, i) => (
              <motion.div
                className="form-group"
                key={i}
                custom={i}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <input type={field.type} required />
                <label>{field.label}</label>
              </motion.div>
            ))}

            {/* Textarea */}
            <motion.div
              className="form-group"
              custom={3}
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <textarea required rows="5"></textarea>
              <label>Your Enquiry</label>
            </motion.div>

            <motion.button
              type="submit"
              custom={4}
              variants={fieldVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Send Enquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
