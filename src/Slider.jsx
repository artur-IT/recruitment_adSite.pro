import "./slider.css";

import { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = ["./img/car_1.jpg", "./img/car_2.jpg", "./img/car_3.jpg", "./img/car_4.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        // Sprawdzamy czy jesteśmy na przedostatnim slajdzie
        if (prevSlide === images.length - 1) {
          // Przeskakujemy na początek (slajd 0)
          return 0;
        } else {
          // Przechodzimy do następnego slajdu
          return prevSlide + 1;
        }
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 55}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide" style={{ width: "50%" }}>
            {" "}
            {/* Ustawiamy szerokość slajdu na 50% */}
            <img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
          </div>
        ))}
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span key={index} className={`dot ${index === currentSlide ? "active" : ""}`} onClick={() => setCurrentSlide(index)} />
        ))}
      </div>
    </div>
  );
};

export default Slider;

{
  /* play button*/
}
{
  /* <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[82px] h-[82px] bg-slate-400"></div>
              </div> */
}
{
  /* caption */
}
{
  /* <div className="absolute bottom-0 left-0">
                <div className="w-[366px] h-[112px] bg-red-400"></div>
              </div> */
}
