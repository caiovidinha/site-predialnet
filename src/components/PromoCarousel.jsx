import React, { useState, useEffect, useRef } from 'react';

const defaultSlides = [
  { src: '/img/carrossel-a.webp', alt: 'Promoção A', link: 'https://www.predialnet.com.br/assineja?plano=promo' },
  { src: '/img/carrossel-b.webp', alt: 'Promoção B', link: 'https://www.predialnet.com.br/assineja?plano=promo' },
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

  const goTo = (index) => {
    setCurrent(index);
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
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <a
              key={i}
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex-shrink-0 block"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full block"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            type="button"
            aria-label={`Ir para slide ${i + 1}`}
            style={{
              backgroundColor: i === current ? '#f7adaf' : '#e6e7e8',
              width: i === current ? '2rem' : '0.75rem',
              height: '0.75rem',
              borderRadius: '9999px',
              border: 'none',
              transition: 'all 0.3s',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default PromoCarousel;
