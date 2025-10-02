import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs/AboutUs"; // reuse AboutUs component + CSS

const styles = {
  page: { background: "#fff", color: "#222", fontFamily: "Inter, sans-serif" },

  banner: {
    maxWidth: 1200,
    margin: "40px auto 30px",
    padding: "40px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #ffebee, #fff)",
    borderRadius: 16,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  },
  bannerTitle: { fontSize: "2.8rem", fontWeight: 800, margin: "0 0 10px" },
  bannerSub: { fontSize: "1.1rem", opacity: 0.75, margin: 0 },

  sectionWrap: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "40px 20px",
  },

  h2: {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: 20,
    textAlign: "center",
    color: "#ff2e4c",
  },
  p: { lineHeight: 1.8, margin: "0 0 18px", fontSize: "1.05rem" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 24,
  },
  card: {
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: 14,
    padding: 22,
    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
    transition: "transform 0.2s ease",
  },
  cardHover: { transform: "translateY(-4px)" },
  cardTitle: { fontWeight: 700, marginBottom: 10, fontSize: "1.2rem" },
  muted: { opacity: 0.85, fontSize: "0.95rem" },

  list: { margin: "0 0 10px 20px", padding: 0, lineHeight: 1.8 },

  // CTA
  ctaBar: {
    maxWidth: 1200,
    margin: "50px auto 80px",
    padding: "22px 26px",
    borderRadius: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    background:
      "linear-gradient(90deg, rgba(255,46,76,0.1), rgba(255,46,76,0.05))",
    border: "1px solid rgba(255,46,76,0.25)",
  },
  ctaText: { fontWeight: 600, fontSize: "1.1rem" },
  ctaButton: {
    display: "inline-block",
    padding: "14px 22px",
    background: "#ff2e4c",
    color: "#fff",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "1rem",
    transition: "background 0.2s ease",
  },

  // FAQ
  faqItem: {
    background: "#fff",
    border: "1px solid #eee",
    borderRadius: 12,
    padding: "14px 16px",
    boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
  },
  summary: {
    cursor: "pointer",
    fontWeight: 700,
    listStyle: "none",
    fontSize: "1rem",
  },
  answer: { marginTop: 8, lineHeight: 1.6, opacity: 0.9, fontSize: "0.95rem" },

  // Latest Work
  workGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
  },
  workCard: {
    borderRadius: 14,
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    border: "1px solid #eee",
    background: "#fff",
  },
  workImg: { width: "100%", height: "200px", objectFit: "cover" },
  workCaption: {
    padding: "14px",
    textAlign: "center",
    fontWeight: 600,
    fontSize: "1rem",
  },
};

const AboutUsPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div style={styles.page}>
      {/* Page Banner */}
      <header style={styles.banner}>
        <h1 style={styles.bannerTitle}>About Creative Dance Academy</h1>
        <p style={styles.bannerSub}>
          Training programs, repertory & performance culture — built with
          passion and precision.
        </p>
      </header>

      {/* About Section (from component) */}
      <div style={styles.sectionWrap}>
        <AboutUs />
      </div>

      {/* Why Choose Us */}
      <section style={styles.sectionWrap}>
        <h2 style={styles.h2}>Why Choose Creative Dance Academy?</h2>
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.cardTitle}>Professional Curriculum</div>
            <p style={styles.muted}>
              Structured levels, clear outcomes, and real stage exposure.
            </p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardTitle}>Mentor-Led Training</div>
            <p style={styles.muted}>
              Learn from active performers & choreographers.
            </p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardTitle}>Performance Opportunities</div>
            <p style={styles.muted}>
              Showcases, competitions, and citywide cultural events.
            </p>
          </div>
          <div style={styles.card}>
            <div style={styles.cardTitle}>Multiple Styles</div>
            <p style={styles.muted}>
              From Classical to Contemporary, Hip-Hop, Bollywood & Kathak.
            </p>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section style={styles.sectionWrap}>
        <h2 style={styles.h2}>Our Journey</h2>
        <p style={styles.p}>
          From a humble start to a thriving repertory company, our growth is
          rooted in community trust and consistent results. Our focus is on
          strong technique, musicality, and expressive performance—shaping
          confident dancers and storytellers.
        </p>
      </section>

      {/* Milestones */}
      <section style={styles.sectionWrap}>
        <h2 style={styles.h2}>Milestones & Achievements</h2>
        <ul style={styles.list}>
          <li>Trained 1000+ students across diverse age groups</li>
          <li>City & national competition finalists</li>
          <li>Quarterly original productions</li>
          <li>Workshops with international guest artists</li>
        </ul>
      </section>

      {/* Latest Work */}
      <section style={styles.sectionWrap}>
        <h2 style={styles.h2}>Our Latest Work</h2>
        <div style={styles.workGrid}>
          <div style={styles.workCard}>
            <img
              src="https://images.pexels.com/photos/1820324/pexels-photo-1820324.jpeg"
              alt="Stage Performance"
              style={styles.workImg}
            />
            <div style={styles.workCaption}>Annual Showcase 2024</div>
          </div>
          <div style={styles.workCard}>
            <img
              src="https://images.pexels.com/photos/3585046/pexels-photo-3585046.jpeg"
              alt="Group Performance"
              style={styles.workImg}
            />
            <div style={styles.workCaption}>Bollywood Fusion Night</div>
          </div>
          <div style={styles.workCard}>
            <img
              src="https://images.pexels.com/photos/168866/pexels-photo-168866.jpeg"
              alt="Workshop"
              style={styles.workImg}
            />
            <div style={styles.workCaption}>Hip-Hop Workshop</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={styles.sectionWrap}>
        <h2 style={styles.h2}>FAQs</h2>
        <div style={{ display: "grid", gap: 14 }}>
          <details style={styles.faqItem}>
            <summary style={styles.summary}>
              Which batch is best for beginners?
            </summary>
            <div style={styles.answer}>
              Foundation batches are ideal. Or book a free level-assessment!
            </div>
          </details>
          <details style={styles.faqItem}>
            <summary style={styles.summary}>Can I try a class first?</summary>
            <div style={styles.answer}>
              Yes, free trials are available. Contact us to schedule yours.
            </div>
          </details>
          <details style={styles.faqItem}>
            <summary style={styles.summary}>
              Do you train for competitions?
            </summary>
            <div style={styles.answer}>
              Definitely. Our Student Repertory prepares for showcases &
              competitions.
            </div>
          </details>
        </div>
      </section>

      {/* CTA */}
      <div style={styles.ctaBar}>
        <span style={styles.ctaText}>
          Ready to begin your dance journey with us?
        </span>
        <a href="/contact" style={styles.ctaButton}>
          Start Your Free Trial
        </a>
      </div>
    </div>
  );
};

export default AboutUsPage;
