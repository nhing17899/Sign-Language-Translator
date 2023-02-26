import React, { useState } from "react";
import './Slider.css';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

const Slider = ({ title, imagesUrl, numDisplay = 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    currentIndex === imagesUrl.length - numDisplay
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    currentIndex === 0
      ? setCurrentIndex(imagesUrl.length - numDisplay)
      : setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="slider">
      <h2>{title}</h2>
      <div className="slider-images">
        <button onClick={handlePrev}><IoIosArrowDropleftCircle /></button>
        {imagesUrl.slice(currentIndex, currentIndex + numDisplay).map((imagesUrl) => (
          <img 
            className="slider-image"
            key={imagesUrl} 
            src={imagesUrl} 
            alt="image1" 
          />
        ))}
        <button onClick={handleNext}><IoIosArrowDroprightCircle /></button>
      </div>
    </div>
  );
};

export default Slider;



