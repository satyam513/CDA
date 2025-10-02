import React from "react";
import "./KidsDancePage.css";

const AdultDancePage = () => {
  return (
    <div className="kids-dance-page">
      <section
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg')",
        }}
      >
        <div className="overlay">
          <h1>Adult Dance Classes 🎶</h1>
          <p>Stay fit, stress-free, and groove to your favorite beats!</p>
          <a href="/enrollment">
            <button className="cta-btn">Join Now</button>
          </a>
        </div>
      </section>

      <section className="about">
        <h2>💪 Dance for Fitness & Fun</h2>
        <p>
          Dance is not just exercise—it’s therapy! Build strength, burn
          calories, and improve flexibility while enjoying your favorite music.
        </p>
      </section>

      <section className="features">
        <h2>🔥 Highlights</h2>
        <div className="feature-grid">
          <div className="feature-card">💃 Salsa & Bachata</div>
          <div className="feature-card">🕺 Hip-Hop Grooves</div>
          <div className="feature-card">🎶 Bollywood Beats</div>
          <div className="feature-card">⚡ Fitness Dance</div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Make Dance Your Lifestyle ✨</h2>
        <button className="cta-btn">Get Started Today</button>
      </section>
    </div>
  );
};

export default AdultDancePage;
