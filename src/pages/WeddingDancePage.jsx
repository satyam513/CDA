import React from "react";
import "./KidsDancePage.css";

const WeddingDancePage = () => {
  return (
    <div className="kids-dance-page">
      <section
        className="hero"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1449796/pexels-photo-1449796.jpeg')",
        }}
      >
        <div className="overlay">
          <h1>Wedding Dance Classes 💍</h1>
          <p>Make your special day unforgettable with a magical performance.</p>
          <a href="/enrollment">
            <button className="cta-btn">Book Your Wedding Dance</button>
          </a>
        </div>
      </section>

      <section className="about">
        <h2>👰 Choreography for Couples & Groups</h2>
        <p>
          From elegant ballads to Bollywood dhamaka, we design customized
          wedding dance routines that wow your guests.
        </p>
      </section>

      <section className="features">
        <h2>💖 What We Offer</h2>
        <div className="feature-grid">
          <div className="feature-card">💃 Couple’s First Dance</div>
          <div className="feature-card">👯 Family Performances</div>
          <div className="feature-card">🎶 Sangeet Choreography</div>
          <div className="feature-card">✨ Grand Stage Entry</div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Let’s Make Your Wedding Dance a Memory Forever 💕</h2>
        <button className="cta-btn">Plan Your Dance</button>
      </section>
    </div>
  );
};

export default WeddingDancePage;
