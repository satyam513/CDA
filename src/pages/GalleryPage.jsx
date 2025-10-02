import React from "react";
import GallerySection from "../components/GallerySection/GallerySection"; // Importing the GallerySection component
import Showcase from "../components/ShowCase/Showcase";

const GalleryPage = () => {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#fff" }}>
      {/* Importing the Gallery Section */}
      <GallerySection />

      {/* Highlight Moments Section */}
      <section
        style={{
          padding: "70px 20px",
          background: "#f9f9f9",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "40px",
            color: "#2c3e50",
          }}
        >
          🌟 Highlight Moments
        </h2>
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
              title: "Stage Performances",
              text: "Dazzling performances at annual events where students shine on stage.",
              emoji: "🎤",
            },
            {
              title: "Workshops",
              text: "Special workshops with national & international artists.",
              emoji: "🕺",
            },
            {
              title: "Competitions",
              text: "Our students competing and winning across platforms.",
              emoji: "🏆",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-8px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <h3 style={{ fontSize: "1.5rem", color: "#ff4d6d" }}>
                {item.emoji} {item.title}
              </h3>
              <p
                style={{ marginTop: "12px", color: "#555", lineHeight: "1.6" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section
        style={{
          padding: "70px 20px",
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          color: "#fff",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            marginBottom: "40px",
          }}
        >
          🎥 Behind the Scenes
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          {[
            "https://www.youtube.com/embed/V2i0D1npxp8",
            "https://www.youtube.com/embed/3mr6foQ4LPM",
          ].map((video, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                width: "480px",
                maxWidth: "100%",
              }}
            >
              <iframe
                width="100%"
                height="270"
                src={video}
                title="Dance Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* 🎉 Social Media Wall Section */}
      <section
        style={{
          padding: "100px 20px",
          background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            color: "#2c3e50",
            marginBottom: "20px",
            letterSpacing: "1px",
          }}
        >
          🎬 Social Media Wall – Reels Style
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#444",
            marginBottom: "60px",
            maxWidth: "750px",
            marginInline: "auto",
            lineHeight: "1.8",
          }}
        >
          Our community shines on social media! Check out these short
          Reels-style dance clips showcasing creativity, energy, and passion
          💃🕺
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            {
              video: "https://www.instagram.com/reel/DNSXoS9SVTx/",
              caption: "Zumba High Energy 🔥",
            },
            {
              video: "https://www.instagram.com/reel/CxVCg21RT5w/",
              caption: "Graceful Kathak ✨",
            },
            {
              video: "https://www.instagram.com/reel/DMrIgFcSMp8/",
              caption: "Yoga Flow 🧘‍♀️",
            },
            {
              video: "https://www.instagram.com/reel/CxVCg21RT5w/",
              caption: "Hip-Hop Freestyle 🎵",
            },
          ].map((post, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "18px",
                boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                cursor: "pointer",
                aspectRatio: "9/16",
                background: "#000",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
              }}
              onMouseEnter={(e) => {
                const iframe = e.currentTarget.querySelector("iframe");
                if (iframe) {
                  iframe.src = `${post.video}embed?autoplay=1`;
                }
              }}
              onMouseLeave={(e) => {
                const iframe = e.currentTarget.querySelector("iframe");
                if (iframe) {
                  iframe.src = `${post.video}embed`;
                }
              }}
            >
              {/* Instagram Embed */}
              <iframe
                src={`${post.video}embed`}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  border: "0",
                }}
              ></iframe>

              {/* Caption Overlay */}
              <div
                className="caption"
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))",
                  color: "#fff",
                  padding: "16px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                {post.caption}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Showcase />

      {/* CTA Section */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background: "#fff",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            color: "#2c3e50",
            marginBottom: "20px",
          }}
        >
          💃 Want to Be a Part of Our Journey?
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto 30px",
          }}
        >
          Join our community of passionate dancers and unleash your creativity.
          Explore classes in Zumba, Kathak, Yoga, Salsa, Ballet, and more!
        </p>
        <a href="/enrollment">
          <button
            style={{
              padding: "14px 28px",
              fontSize: "1.1rem",
              fontWeight: "600",
              border: "none",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #ff4d6d, #ff758c)",
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #ff758c, #ff4d6d)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(135deg, #ff4d6d, #ff758c)")
            }
          >
            Enroll Today 🚀
          </button>
        </a>
      </section>
    </div>
  );
};

export default GalleryPage;
