"use client"
import React, { useState, useEffect } from 'react';

const CarouselComponent = () => {
  const images = [
    '/img/bannerA.jpg',
    '/img/bannerB.jpg',
    '/img/bannerC.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  // Auto-play
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000); // Altera a cada 5 segundos

  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden mt-3">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <div className="relative w-full aspect-[1920/542]">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/ bg-opacity-50 text-gray-400 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-opacity-50 text-gray-400 rounded-full"
      >
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-[#f7adaf]' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
