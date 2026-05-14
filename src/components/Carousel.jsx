import React, { useState, useEffect, useRef } from 'react';

const Carousel = () => {
  const images = [
    {
      desktopSrc: '/img/banner1',
      mobileSrc: '/img/banner1Mobile',
      link: 'https://www.predialnet.com.br/assineja?plano=banner',
      linkMobile: 'https://www.predialnet.com.br/assineja?plano=banner'
    },
    {
      desktopSrc: '/img/banner4',
      mobileSrc: '/img/banner4Mobile',
      link: 'https://minhaconta.predialnet.com.br',
      linkMobile: 'https://minhaconta.predialnet.com.br'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const mobileScrollRef = useRef(null);
  const isHoveredRef = useRef(false);
  const autoplayRef = useRef(null);
  const transitionCountRef = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    
    // Scroll no mobile (verifica largura da tela diretamente)
    if (mobileScrollRef.current && window.innerWidth <= 900) {
      const slideWidth = mobileScrollRef.current.scrollWidth / images.length;
      mobileScrollRef.current.scrollTo({
        left: slideWidth * newIndex,
        behavior: 'smooth'
      });
    }
  };

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      if (!isHoveredRef.current) {
        nextSlide();
        transitionCountRef.current += 1;
      }
    }, 4000);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [currentIndex]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };
  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    startAutoplay();
  };

  const handleScroll = () => {
    if (!mobileScrollRef.current || !isMobile) return;
    
    const scrollLeft = mobileScrollRef.current.scrollLeft;
    const slideWidth = mobileScrollRef.current.scrollWidth / images.length;
    const newIndex = Math.round(scrollLeft / slideWidth);
    
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mobile - Scroll nativo igual Cards.astro */}
      <div
        ref={mobileScrollRef}
        className="md:hidden flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onScroll={handleScroll}
      >
        {images.map((image, index) => (
          <a
            key={index}
            className="w-full flex-shrink-0 snap-start"
            href={image.linkMobile}
            target={image.link.startsWith('https://') ? '_blank' : '_self'}
            rel={image.link.startsWith('https://') ? 'noopener noreferrer' : undefined}
          >
            <picture>
              {!image.jpgOnly && <source srcSet={`${image.mobileSrc}.avif`} type="image/avif" />}
              {!image.jpgOnly && <source srcSet={`${image.mobileSrc}.webp`} type="image/webp" />}
              <img
                src={`${image.mobileSrc}.jpg`}
                alt={`Slide ${index + 1}`}
                className="w-full block"
              />
            </picture>
          </a>
        ))}
      </div>

      {/* Desktop */}
      <div
        className="hidden md:flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <a
            key={index}
            className="w-full flex-shrink-0"
            href={image.link}
            target={image.link.startsWith('https://') ? '_blank' : '_self'}
            rel={image.link.startsWith('https://') ? 'noopener noreferrer' : undefined}
          >
            <picture>
              {!image.jpgOnly && <source srcSet={`${image.desktopSrc}.avif`} type="image/avif" />}
              {!image.jpgOnly && <source srcSet={`${image.desktopSrc}.webp`} type="image/webp" />}
              <img
                src={`${image.desktopSrc}.jpg`}
                alt={`Slide ${index + 1}`}
                className="w-full block"
              />
            </picture>
          </a>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-[#9c0004] w-8' : 'bg-white/50'
            }`}
            aria-label={`Ir para slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
            type="button"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
