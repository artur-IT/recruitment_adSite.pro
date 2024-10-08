import "../styles/slider.css";

import { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "./img/car_1.webp",
    "./img/car_2.webp",
    "./img/car_3.webp",
    "./img/car_4.webp",
    "./img/road.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        if (prevSlide === images.length - 1) return 0;
        else return prevSlide + 1;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div id="cars_gallery" className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentSlide * (innerWidth > 1023 ? 55 : 50)}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide relative" style={{ width: "50%" }}>
            <img src={image} alt={`Slide ${index + 1}`} />
            {/* PLAY BUTTON */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[82px] h-[82px] bg-slate-400"></div>
            </div> */}

            {/* CAPTION */}
            {/* <div className="absolute bottom-0 left-0">
              <div className="w-[366px] h-[112px] bg-red-400"></div>
            </div> */}
          </div>
        ))}
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
