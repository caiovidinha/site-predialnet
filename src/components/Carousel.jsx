"use client"
import React, { useState, useEffect } from 'react';

const CarouselComponent = () => {
  const images = [
    { src: '/img/bannerA.jpg', link: 'https://www.predialnet.com.br/assineja' },
    { src: '/img/bannerB.jpg', link: '#WiFi6' },
    { src: '/img/bannerC.jpg', link: '#App' },
    { src: '/img/bannerD.jpg', link: 'https://www.predialnet.com.br/assineja' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    if (isHovered) return; // Pausa o carrossel se o mouse estiver em cima

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Altera a cada 5 segundos

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  return (
    <div 
      className="relative w-full overflow-hidden mt-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex transition-transform duration-500 cursor-pointer"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <a key={index} className="w-full flex-shrink-0" href={image.link} target={image.link === 'https://www.predialnet.com.br/assineja' ? '_blank' : '_self'}>
            <div className="relative w-full aspect-[1920/542]" >
              <img
                src={image.src}
                alt={`Slide ${index}`}
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </div>
          </a>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-opacity-50 text-gray-300 opacity-50 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-opacity-50 text-gray-300 opacity-50 rounded-full"
      >
        &#10095;
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-1 rounded-full ${
              currentIndex === index ? 'bg-[#f7adaf] opacity-50' : 'bg-gray-300 opacity-50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
