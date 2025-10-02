// src/pages/ClassesPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook

import ClassesSection from "../components/Classessection/ClassesSection";
import Showcase from "../components/Showcase/Showcase";

function ClassesPage() {
  const navigate = useNavigate(); // ✅ create navigate instance

  return (
    <div>
      {/* Main Classes Section */}
      <ClassesSection />

      {/* Different Types of Dance Classes */}
      <section
        style={{
          padding: "60px 20px",
          background: "linear-gradient(135deg, #f9f9f9, #eef2f3)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: "700",
            marginBottom: "40px",
            color: "#2c3e50",
            letterSpacing: "1px",
          }}
        >
          Different Types of Dance Classes
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {["Hip-Hop", "Contemporary", "Salsa", "Ballet", "Bollywood"].map(
            (dance, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  padding: "25px",
                  borderRadius: "14px",
                  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-6px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h3 style={{ fontSize: "1.5rem", marginBottom: "12px" }}>
                  {dance}
                </h3>
                <p style={{ color: "#555", lineHeight: "1.6" }}>
                  Learn the art of <b>{dance}</b> with expert instructors
                  guiding you every step of the way.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Latest Offers */}
      <section
        style={{
          padding: "60px 20px",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: "700",
            marginBottom: "35px",
            color: "#2c3e50",
          }}
        >
          Latest Offers
        </h2>

        {/* General Offers */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          {[
            "🎉 Get 20% off on Annual Membership",
            "✨ Free Trial Class for New Students",
            "🤝 Refer a Friend & Get 1 Month Free",
          ].map((offer, idx) => (
            <div
              key={idx}
              style={{
                background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
                padding: "20px",
                borderRadius: "12px",
                boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                minWidth: "250px",
                fontWeight: "500",
                fontSize: "1.1rem",
                color: "#333",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {offer}
            </div>
          ))}
        </div>

        {/* Class-Specific Offers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "💃 Zumba Special",
              desc: "Join our Zumba classes & get 15% off on your first 3 months!",
              bg: "linear-gradient(135deg, #ff9a9e, #fecfef)",
            },
            {
              title: "🧘 Yoga Bliss",
              desc: "Unlock peace of mind with Yoga – Free 2 trial classes for new members!",
              bg: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
            },
            {
              title: "🎶 Kathak Dance Offer",
              desc: "Get flat 25% discount on Kathak annual membership today!",
              bg: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
            },
          ].map((offer, i) => (
            <div
              key={i}
              style={{
                background: offer.bg,
                padding: "30px 20px",
                borderRadius: "16px",
                boxShadow: "0 8px 18px rgba(0,0,0,0.1)",
                textAlign: "center",
                color: "#2c3e50",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 22px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 18px rgba(0,0,0,0.1)";
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  marginBottom: "12px",
                }}
              >
                {offer.title}
              </h3>
              <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                {offer.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Benefits */}
      <section
        style={{
          padding: "60px 20px",
          background: "linear-gradient(135deg, #f6f9fc, #e9eff5)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: "700",
            marginBottom: "40px",
            color: "#2c3e50",
          }}
        >
          Why Choose Us?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {[
            {
              title: "👨‍🏫 Expert Trainers",
              text: "Learn from seasoned professionals with years of experience.",
            },
            {
              title: "🕒 Flexible Timings",
              text: "Morning & evening classes to suit your lifestyle.",
            },
            {
              title: "🎭 Performance Events",
              text: "Showcase your talent in regular academy events.",
            },
            {
              title: "🌍 All Levels Welcome",
              text: "Beginner to advanced – everyone has a place here.",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                padding: "30px 20px",
                borderRadius: "14px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.07)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <h3 style={{ fontSize: "1.4rem", marginBottom: "12px" }}>
                {item.title}
              </h3>
              <p style={{ color: "#555", lineHeight: "1.6" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        style={{
          padding: "60px 20px",
          background: "#fff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: "700",
            marginBottom: "40px",
            color: "#2c3e50",
          }}
        >
          What Our Students Say
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          {[
            {
              name: "Riya",
              review: "The best dance academy! I improved a lot.",
            },
            { name: "Arjun", review: "Friendly trainers and fun environment." },
            { name: "Sneha", review: "Loved the choreography sessions." },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                background: "linear-gradient(135deg, #fdfbfb, #ebedee)",
                padding: "25px",
                borderRadius: "14px",
                boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                maxWidth: "300px",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <p
                style={{
                  fontStyle: "italic",
                  marginBottom: "15px",
                  color: "#555",
                  lineHeight: "1.5",
                }}
              >
                "{t.review}"
              </p>
              <h4 style={{ fontWeight: "600", color: "#2c3e50" }}>
                - {t.name}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      {/* <section
        style={{
          padding: "80px 20px",
          background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Ready to Start Your Dance Journey?
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
          Join now and take the first step toward rhythm, energy, and fun!
        </p>
        <button
          style={{
            padding: "12px 25px",
            fontSize: "1rem",
            fontWeight: "600",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#fff",
            color: "#ff4d6d",
            cursor: "pointer",
          }}
          onClick={() => navigate("/enrollment")} // ✅ navigate to enrollment page
        >
          Enroll Today
        </button>
      </section> */}
      {/* Main Classes Section */}
      <Showcase />
    </div>
  );
}

export default ClassesPage;
