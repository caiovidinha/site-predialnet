"use client"
import React, { useState, useEffect } from 'react';

const CarouselComponentEA = () => {
  const desktopImages = [
    { src: '/img/banner fifa.jpg', link: 'https://www.predialnet.com.br/assineja' },
  ];

  const mobileImages = [
    { src: '/img/bannerAmobile.jpg', link: 'https://www.predialnet.com.br/assineja' },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Detect if it is mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    if (isHovered) return; // Pausa o carrossel se o mouse estiver em cima (somente desktop)

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Altera a cada 5 segundos

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  // Handle touch events for mobile swiping
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    e.preventDefault(); // Evita que a página role enquanto o carrossel está sendo arrastado
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left to move to the next slide
      nextSlide();
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right to move to the previous slide
      prevSlide();
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 cursor-pointer"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <a
            key={index}
            className="w-full flex-shrink-0"
            href={image.link}
            target={image.link === 'https://www.predialnet.com.br/assineja' ? '_blank' : '_self'}
          >
            <div className={`relative w-full ${isMobile ? 'aspect-[650/720]' : 'aspect-[1920/542]'}`}>
              <img
                src={image.src}
                alt={`Slide ${index}`}
                className="absolute top-0 left-0 w-full h-full object-contain"
              />
            </div>
          </a>
        ))}
      </div>

      {/* Botões de navegação (somente desktop) */}
      {/* {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-opacity-50 text-gray-300 opacity-50 rounded-full p-8 "
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-opacity-50 text-gray-300 opacity-50 rounded-full p-8 "
          >
            &#10095;
          </button>
        </>
      )} */}

      {/* Indicadores */}
      {/* <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-1 rounded-full ${
              currentIndex === index ? 'bg-[#f7adaf] opacity-50' : 'bg-gray-300 opacity-50'
            }`}
          ></button>
        ))}
      </div> */}
    </div>
  );
};

export default CarouselComponentEA;
