import React, { useState, useRef } from "react";
import { FaEye } from "react-icons/fa";
import "./ShowCase.css";

const Showcase = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef([]);

  // Example video list (replace embedId with your own YouTube video IDs)
  const youtubeVideos = [
    {
      id: 1,
      embedId: "perzbpbgNPk",
      title: "Hip Hop Dance Performance",
      views: "25K views",
    },
    {
      id: 2,
      embedId: "n_uvHtP2h30",
      title: "Contemporary Dance Showcase",
      views: "18K views",
    },
    {
      id: 3,
      embedId: "HmRtXY9OCys",
      title: "Bollywood Dance Routine",
      views: "30K views",
    },
    {
      id: 4,
      embedId: "Q1vFrh5N8qA",
      title: "Classical Dance Performance",
      views: "12K views",
    },
    {
      id: 5,
      embedId: "3mr6foQ4LPM",
      title: "Salsa Showcase",
      views: "20K views",
    },
    {
      id: 6,
      embedId: "V2i0D1npxp8",
      title: "Ballet Performance",
      views: "15K views",
    },
    {
      id: 7,
      embedId: "24ReGjJsjbU",
      title: "Jazz Dance Showcase",
      views: "10K views",
    },
    {
      id: 8,
      embedId: "necPQoA593Y",
      title: "Zumba Dance Session",
      views: "50K views",
    },
  ];

  const handleVideoSelect = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <section className="videos-section">
      <h2 className="showcase-heading">Showcase</h2>
      <div className="videos-grid">
        {youtubeVideos.map((video, index) => (
          <div
            key={video.id}
            className={`video-card ${
              index === currentVideoIndex ? "active" : ""
            }`}
            onClick={() => handleVideoSelect(index)}
          >
            <div className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${video.embedId}?autoplay=${
                  index === currentVideoIndex ? 1 : 0
                }&mute=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ref={(el) => (videoRefs.current[index] = el)}
              ></iframe>
            </div>
            <div className="video-info">
              <h3>{video.title}</h3>
              <div className="video-meta">
                <span className="video-views">
                  <FaEye className="views-icon" /> {video.views}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
