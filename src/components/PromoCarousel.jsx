import React, { useState, useEffect, useRef } from 'react';

const defaultSlides = [
  { src: '/img/carrossel-b.webp', mobileSrc: '/img/carrossel-b-mobile.webp', alt: 'Promoção 800', link: 'https://www.predialnet.com.br/assineja?plano=800mega', mobileLink: '' },
  { src: '/img/carrossel-f.webp', mobileSrc: '/img/carrossel-f-mobile.webp', alt: 'Promoção 600', link: 'https://www.predialnet.com.br/assineja?plano=600mega', mobileLink: '' },
];

const PromoCarousel = ({
  id = undefined,
  title = 'Os melhores planos estão aqui',
  subtitle = 'A Predialnet tem um plano feito para você viver conectado',
  slides = defaultSlides,
}) => {
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(null);
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const isHoveredRef = useRef(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const isSwiping = useRef(false);

  const goTo = (index) => {
    setCurrent(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = false;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = (touchStartY.current ?? e.changedTouches[0].clientY) - e.changedTouches[0].clientY;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      } else {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      }
      startAutoplay();
    }
    touchStartX.current = null;
    touchStartY.current = null;
    // Reset isSwiping after a short delay so the onClick guard still fires
    setTimeout(() => { isSwiping.current = false; }, 0);
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

  // Non-passive touchmove: prevents browser from triggering link navigation
  // when the user is doing a horizontal swipe over an <a> element.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onTouchMove = (e) => {
      if (touchStartX.current === null) return;
      const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
      const dy = Math.abs(e.touches[0].clientY - (touchStartY.current ?? e.touches[0].clientY));
      if (dx > 8 && dx > dy) {
        isSwiping.current = true;
        e.preventDefault(); // cancels link tap AND page scroll on horizontal drag
      }
    };
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => container.removeEventListener('touchmove', onTouchMove);
  }, []);

  return (
    <section
      id={id}
      className="bg-white py-12 px-6 sm:px-[8%] md:px-[12%] font-sans text-[#3d3838]"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
    >

      {title=="Os melhores planos estão aqui"
      ? <h1 className="text-[1.65rem] md:text-3xl leading-8 mb-1 font-light tracking-[-0.01em] pr-[100px] md:pr-0" >{title}</h1>      
      : <h1 className="text-[1.65rem] md:text-3xl leading-8 mb-1 font-light tracking-[-0.01em]" dangerouslySetInnerHTML={{ __html: title }} />
}
      <h2 className="text-lg font-light leading-6 mb-8">
        {subtitle}
      </h2>     

      {/* Carousel */}
      <div ref={containerRef} className="overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} style={{ touchAction: 'pan-y', userSelect: 'none' }}>
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

            const preventIfSwiping = (e) => { if (isSwiping.current) e.preventDefault(); };
            if (slide.link) {
              return (
                <a key={i} href={slide.link} target="_blank" rel="noopener noreferrer" className="w-full flex-shrink-0 block" onClick={preventIfSwiping}>
                  {imgEl}
                </a>
              );
            }
            if (slide.mobileLink) {
              return (
                <a key={i} href={slide.mobileLink} className="w-full flex-shrink-0 block sm:pointer-events-none sm:cursor-default" onClick={preventIfSwiping}>
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
