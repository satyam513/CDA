import React from "react";
import "./KidsDancePage.css";

const YogaPage = () => {
  return (
    <div className="kids-dance-page">
      <section
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg')",
        }}
      >
        <div className="overlay">
          <h1>Yoga Classes 🧘‍♀️</h1>
          <p>Find peace, balance, and strength in your daily life.</p>
          <a href="/enrollment">
            <button className="cta-btn">Start Yoga</button>
          </a>
        </div>
      </section>

      <section className="about">
        <h2>🌿 Inner Peace & Outer Strength</h2>
        <p>
          Our yoga sessions help in mindfulness, flexibility, and building a
          strong, healthy body.
        </p>
      </section>

      <section className="features">
        <h2>✨ Benefits of Yoga</h2>
        <div className="feature-grid">
          <div className="feature-card">🧘 Relaxation</div>
          <div className="feature-card">💪 Core Strength</div>
          <div className="feature-card">🌸 Stress Relief</div>
          <div className="feature-card">⚡ Energy Boost</div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Discover Balance. Discover You. 🌺</h2>
        <button className="cta-btn">Book a Free Session</button>
      </section>
    </div>
  );
};

export default YogaPage;
