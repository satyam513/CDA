import React from "react";
import "./KidsDancePage.css";

const KidsDancePage = () => {
  return (
    <div className="kids-dance-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <h1>Kids Dance Classes 💃🕺</h1>
          <p>Fun, fitness, and creativity for your little stars!</p>
          <a href="/enrollment">
            <button className="cta-btn">Enroll Now</button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>🌟 Why Choose Our Kids Dance Program?</h2>
        <p>
          Our classes help kids build <strong>confidence</strong>, improve{" "}
          <strong>fitness</strong>, and spark <strong>creativity</strong>. From
          Bollywood to Hip-Hop, they’ll shine with every step.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>✨ What We Offer</h2>
        <div className="feature-grid">
          <div className="feature-card">🎵 Fun Music & Choreography</div>
          <div className="feature-card">🤸 Improves Flexibility</div>
          <div className="feature-card">👯 Team Performances</div>
          <div className="feature-card">🏆 Stage Opportunities</div>
        </div>
      </section>

      {/* Gallery-like Showcase */}
      <section className="showcase">
        <h2>📸 Sneak Peek</h2>
        <div className="gallery">
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
          <div className="gallery-item"></div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to See Your Child Shine? 🌟</h2>
        <button className="cta-btn">Book a Free Trial</button>
      </section>
    </div>
  );
};

export default KidsDancePage;
