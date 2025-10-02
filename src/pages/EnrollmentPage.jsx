import React, { useState } from "react";

const EnrollmentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    danceStyle: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enrollment Submitted:", formData);
    alert("🎉 Thank you for enrolling! We’ll contact you soon.");
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "50px",
          borderRadius: "20px",
          boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
          width: "100%",
          maxWidth: "650px",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "translateY(-8px)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "translateY(0)")
        }
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "800",
            marginBottom: "15px",
            textAlign: "center",
            color: "#ff4d6d",
            letterSpacing: "1px",
          }}
        >
          📝 Enroll Now
        </h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: "35px",
            color: "#555",
            fontSize: "1.1rem",
          }}
        >
          Secure your spot in our exciting <b>dance & fitness</b> programs 🎶
        </p>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: "22px" }}>
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "15px 18px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              outline: "none",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #ff4d6d")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "15px 18px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              outline: "none",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #ff4d6d")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              padding: "15px 18px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              outline: "none",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #ff4d6d")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          />

          {/* Dance Style Dropdown */}
          <select
            name="danceStyle"
            value={formData.danceStyle}
            onChange={handleChange}
            required
            style={{
              padding: "15px 18px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              outline: "none",
              background: "#fff",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #ff4d6d")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          >
            <option value="">-- Select Dance Style --</option>
            <option value="Zumba">💃 Zumba</option>
            <option value="Yoga">🧘 Yoga</option>
            <option value="Kathak">🎶 Kathak</option>
            <option value="Hip-Hop">🎵 Hip-Hop</option>
            <option value="Salsa">🔥 Salsa</option>
            <option value="Ballet">🩰 Ballet</option>
            <option value="Contemporary">✨ Contemporary</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Any specific requirements or questions?"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            style={{
              padding: "15px 18px",
              borderRadius: "12px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              outline: "none",
              resize: "none",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => (e.target.style.border = "1px solid #ff4d6d")}
            onBlur={(e) => (e.target.style.border = "1px solid #ddd")}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              background: "linear-gradient(135deg, #ff4d6d, #ff758c)",
              color: "#fff",
              padding: "16px 20px",
              border: "none",
              borderRadius: "14px",
              fontSize: "1.2rem",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
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
            🚀 Enroll Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnrollmentPage;
