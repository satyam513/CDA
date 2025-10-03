import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Side */}
        <div className="about-col">
          <h3>ABOUT US</h3>
          <p className="footer-text">
            The Dance Academy comprises of The Dance Academy Training Programs
            and The Dance Academy Student Repertory Company.
          </p>

          <div className="delhi-office">
            <h3>PATNA OFFICE</h3>
            <p>
              Creative Dance Academy, Pillar No. 76, Raja Bazar, Sheikhpura,
              Bailey Road, Patna - 14, Bihar, India.
            </p>
            <p>📞 +91 9576733466, +91 7992407300</p>
            <p>✉️ info@thedanceacademy.com</p>
          </div>

          {/* Socials & Links just below Delhi office */}
          <div className="footer-socials">
            <div className="social-links">
              <a
                href="https://www.facebook.com/share/17QxdvxYmT/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.instagram.com/cda_official76?igsh=bWk0c3hjZGZkdjhq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://youtube.com/@cdaofficial76?si=wj63GbC1oWDdR9eU"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={20} />
              </a>
            </div>

            <div className="footer-links">
              <a href="#">Terms & Conditions</a> |
              <a href="#"> Privacy Policy</a> |<a href="#"> Disclaimer</a> |
              <a href="#"> FAQ</a>
            </div>
            <p className="footer-copy">© 2025 Dance Academy</p>
          </div>
        </div>

        {/* Right Side - Inquiry Card */}
        <div className="inquiry-card">
          <h3>Quick Inquiry</h3>
          <form className="footer-form">
            {/* Name */}
            <div className="input-group">
              <input type="text" required />
              <label>Enter Name</label>
            </div>

            {/* Age Group (Dropdown) */}
            <div className="input-group select-group">
              <select required defaultValue="">
                <option value="" disabled></option>
                <option value="below-12">Below 12</option>
                <option value="13-18">13 - 18</option>
                <option value="19-25">19 - 25</option>
                <option value="26-40">26 - 40</option>
                <option value="40+">40+</option>
              </select>
              <label>Age</label>
            </div>

            {/* Email */}
            <div className="input-group">
              <input type="email" required />
              <label>Enter Email Address</label>
            </div>

            {/* Mobile Number */}
            <div className="input-group">
              <input type="tel" required />
              <label>Enter Mobile Number</label>
            </div>

            <button type="submit" className="submit-btn">
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
