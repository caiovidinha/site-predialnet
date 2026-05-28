import React, { useState, useEffect, useRef } from 'react';

const defaultSlides = [
  { src: '/img/carrossel-b.webp', alt: 'Promoção B', link: 'https://www.predialnet.com.br/assineja?plano=promo' },
  { src: '/img/carrossel-d.webp', alt: 'Promoção A', link: '' },
];

const PromoCarousel = ({
  id,
  title = 'Os melhores planos estão aqui',
  subtitle = 'A Predialnet tem um plano feito para você viver o melhor conectado',
  slides = defaultSlides,
}) => {
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(null);
  const trackRef = useRef(null);
  const isHoveredRef = useRef(false);
  const touchStartX = useRef(null);

  const goTo = (index) => {
    setCurrent(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      } else {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }
      startAutoplay();
    }
    touchStartX.current = null;
  };

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!isHoveredRef.current) {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    }, 2800);
  };

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(autoplayRef.current);
  }, [slides.length]);

  return (
    <section
      id={id}
      className="bg-white py-12 px-6 sm:px-[8%] md:px-[12%] font-sans text-[#3d3838]"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >

      <h1 className="text-3xl mb-1 font-light tracking-[-0.01em]">
        {title}
      </h1>
      <h2 className="text-lg font-light leading-6 mb-8">
        {subtitle}
      </h2>

      {/* Carousel */}
      <div className="overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ touchAction: 'pan-y', userSelect: 'none' }}>
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => {
            const imgEl = slide.mobileSrc ? (
              <picture>
                <source media="(max-width: 639px)" srcSet={slide.mobileSrc} />
                <img src={slide.src} alt={slide.alt} className="w-full block" />
              </picture>
            ) : (
              <img src={slide.src} alt={slide.alt} className="w-full block" />
            );

            if (slide.link) {
              return (
                <a key={i} href={slide.link} target="_blank" rel="noopener noreferrer" className="w-full flex-shrink-0 block">
                  {imgEl}
                </a>
              );
            }
            if (slide.mobileLink) {
              return (
                <a key={i} href={slide.mobileLink} className="w-full flex-shrink-0 block sm:pointer-events-none sm:cursor-default">
                  {imgEl}
                </a>
              );
            }
            return (
              <div key={i} className="w-full flex-shrink-0 block">
                {imgEl}
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      {slides.length > 1 ? <div className="flex justify-center gap-1.5 mt-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            type="button"
            aria-label={`Ir para slide ${i + 1}`}
            style={{
              backgroundColor: i === current ? '#f7adaf' : '#e6e7e8',
              width: i === current ? '1.5rem' : '0.55rem',
              height: '0.35rem',
              borderRadius: '9999px',
              border: 'none',
              transition: 'all 0.3s',
              cursor: 'pointer',
            }}
          />
        ))}
      </div> : null}
    </section>
  );
};

export default PromoCarousel;
