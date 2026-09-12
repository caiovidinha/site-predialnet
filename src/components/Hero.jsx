import React, { useState, useEffect, useRef } from 'react';

const slides = [
  {
    src: '/img/hero.webp',
    mobileSrc: '/img/bannerMobile.avif',
    alt: 'Predialnet - internet de fibra óptica',
    link: 'https://www.predialnet.com.br/assineja?plano=hero',
  },
  {
    src: '/img/carrossel-hero-b.webp',
    mobileSrc: '/img/carrossel-hero-b-mobile.webp',
    alt: 'Plano 800 Mega com Super Wi-Fi 6, por R$ 124,90 por mês',
    link: 'https://www.predialnet.com.br/assineja?plano=800mega',
  },
  {
    src: '/img/carrossel-hero-c.webp',
    mobileSrc: '/img/carrossel-hero-c-mobile.webp',
    alt: 'Predialnet conecta você. Plano 1 Giga com Super Wi-Fi 6, por R$ 139,90 por mês',
    link: 'https://www.predialnet.com.br/assineja?plano=1giga',
  },
  {
    src: '/img/carrossel-hero-d.webp',
    mobileSrc: '/img/carrossel-hero-d-mobile.webp',
    alt: 'Plano 600 Mega com Wi-Fi Gigabit, por R$ 99,90 por mês',
    link: 'https://www.predialnet.com.br/assineja?plano=600mega',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const autoplayRef = useRef(null);
  const containerRef = useRef(null);
  const isHoveredRef = useRef(false);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const isSwiping = useRef(false);

  const goTo = (index) => setCurrent(index);

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
    setTimeout(() => { isSwiping.current = false; }, 0);
  };

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!isHoveredRef.current) {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }
    }, 3000);
  };

  useEffect(() => {
    startAutoplay();
    return () => clearInterval(autoplayRef.current);
  }, []);

  // touchmove não-passivo: evita que o navegador dispare o clique no link
  // quando o usuário está arrastando horizontalmente.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onTouchMove = (e) => {
      if (touchStartX.current === null) return;
      const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
      const dy = Math.abs(e.touches[0].clientY - (touchStartY.current ?? e.touches[0].clientY));
      if (dx > 8 && dx > dy) {
        isSwiping.current = true;
        e.preventDefault();
      }
    };
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => container.removeEventListener('touchmove', onTouchMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      onMouseEnter={() => { isHoveredRef.current = true; }}
      onMouseLeave={() => { isHoveredRef.current = false; }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'pan-y', userSelect: 'none' }}
    >
      <div
        className="flex items-start transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => {
          const imgEl = slide.mobileSrc ? (
            <picture>
              <source media="(max-width: 639px)" srcSet={slide.mobileSrc} />
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full block"
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchpriority={i === 0 ? 'high' : undefined}
              />
            </picture>
          ) : (
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full block"
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchpriority={i === 0 ? 'high' : undefined}
            />
          );

          const preventIfSwiping = (e) => { if (isSwiping.current) e.preventDefault(); };

          return (
            <a
              key={i}
              href={slide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex-shrink-0 block"
              onClick={preventIfSwiping}
            >
              {imgEl}
            </a>
          );
        })}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            type="button"
            aria-label={`Ir para slide ${i + 1}`}
            aria-current={i === current ? 'true' : 'false'}
            className={`h-3 rounded-full transition-all ${i === current ? 'w-8 bg-[#9c0004]' : 'w-3 bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
