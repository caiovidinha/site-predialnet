"use client"
import React, { useState, useEffect } from 'react';

const CarouselComponent = () => {
  const images = [
    {
      desktopSrc: '/img/banner4.jpg',
      mobileSrc: '/img/banner4Mobile.jpg',
      link: '#App',
      linkMobile: '/#App2'
    },
    {
      desktopSrc: '/img/banner1.jpg',
      mobileSrc: '/img/banner1Mobile.jpg',
      link: 'https://www.predialnet.com.br/assineja',
      linkMobile: 'https://www.predialnet.com.br/assineja'
    },
    {
      desktopSrc: '/img/banner2.jpg',
      mobileSrc: '/img/banner2Mobile.jpg',
      link: 'https://www.predialnet.com.br/assineja',
      linkMobile: 'https://www.predialnet.com.br/assineja'
    },
    {
      desktopSrc: '/img/banner3.jpg',
      mobileSrc: '/img/banner3Mobile.jpg',
      link: 'https://www.predialnet.com.br/assineja',
      linkMobile: 'https://www.predialnet.com.br/assineja'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
      // Remova as linhas relacionadas ao `isMobile`
    const [isMobile, setIsMobile] = useState(false);

    // Também remova o `useEffect` que detecta se é mobile:
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 900);
      };

      handleResize();
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, []);



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
    }, 3000); // Altera a cada 3 segundos

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
        className="md:hidden flex transition-transform duration-500 cursor-pointer"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
  <a
    key={index}
    className="w-full flex-shrink-0"
    href={image.linkMobile}
    target={image.link === 'https://www.predialnet.com.br/assineja' ? '_blank' : '_self'}
  >
    <div className="relative w-full">
      {/* Imagem para Mobile */}
      <img
        src={image.mobileSrc}
        alt={`Slide ${index} Mobile`}
        className="md:hidden block w-full h-full object-cover"
      />
      {/* Imagem para Desktop */}
      <img
        src={image.desktopSrc}
        alt={`Slide ${index} Desktop`}
        className="hidden md:block w-full h-full object-cover"
      />
    </div>
  </a>
))}
      </div>
      <div
        className="hidden md:flex transition-transform duration-500 cursor-pointer"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
  <a
    key={index}
    className="w-full flex-shrink-0"
    href={image.link}
    target={image.link === 'https://www.predialnet.com.br/assineja' ? '_blank' : '_self'}
  >
    <div className="relative w-full">
      {/* Imagem para Mobile */}
      <img
        src={image.mobileSrc}
        alt={`Slide ${index} Mobile`}
        className="md:hidden block w-full h-full object-cover"
      />
      {/* Imagem para Desktop */}
      <img
        src={image.desktopSrc}
        alt={`Slide ${index} Desktop`}
        className="hidden md:block w-full h-full object-cover"
      />
    </div>
  </a>
))}
      </div>

      {/* Botões de navegação (somente desktop) */}
      {!isMobile && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-opacity-0 bg-black h-full text-black opacity-100 px-10 "
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-opacity-0 bg-black h-full text-black opacity-100 px-10"
          >
            &#10095;
          </button>
        </>
      )}

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
