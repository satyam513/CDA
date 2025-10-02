import React from "react";
import Slider from "react-slick";
import "./ClassesSection.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/classical.jpg";
import img2 from "../../assets/group.jpg";
import img3 from "../../assets/kathak.jpg";
import img4 from "../../assets/solo.jpg";

const images = [img1, img2, img3, img4, img1, img2, img3, img4];

const ClassesSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4, // show 4 at once
    slidesToScroll: 1, // move 1 at a time
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="classes-section">
      <h1 className="classes-bg-text">CLASSES</h1>
      <Slider {...settings} className="classes-slider">
        {images.map((src, i) => (
          <div className="class-card" key={i}>
            <img src={src} alt={`Class ${i + 1}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ClassesSection;
