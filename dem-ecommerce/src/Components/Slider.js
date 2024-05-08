import React, { useState } from "react";
import "./Slider.css"; 


const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="slider">
      
      <div className="slider-images" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
     
        {images.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
      </div>
    
      <button onClick={prevSlide} className="prev">&#10094;</button> 
      <button onClick={nextSlide} className="next">&#10095;</button> 
    
    </div>
  );
};

export default Slider;
