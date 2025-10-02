import React from "react";
import "./KidsDancePage.css";

const ZumbaPage = () => {
  return (
    <div className="kids-dance-page">
      <section
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg')",
        }}
      >
        <div className="overlay">
          <h1>Zumba Classes 🔥</h1>
          <p>Dance your way to fitness with energy-packed sessions.</p>
          <a href="/enrollment">
            <button className="cta-btn">Join Zumba Today</button>
          </a>
        </div>
      </section>

      <section className="about">
        <h2>⚡ High Energy. Maximum Fun.</h2>
        <p>
          Zumba blends cardio, dance, and fun! Sweat it out while grooving to
          Latin and Bollywood beats.
        </p>
      </section>

      <section className="features">
        <h2>💃 Why Zumba?</h2>
        <div className="feature-grid">
          <div className="feature-card">🔥 Burn Calories Fast</div>
          <div className="feature-card">💓 Boost Stamina</div>
          <div className="feature-card">🎶 Energetic Music</div>
          <div className="feature-card">😊 Stress Relief</div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Let’s Groove, Sweat & Stay Fit 💪</h2>
        <button className="cta-btn">Start Dancing</button>
      </section>
    </div>
  );
};

export default ZumbaPage;
