import React, { useRef, useState } from 'react';

const cards = [
  {
    img: '/img/navega-1.webp',
    title: 'Jogue online com ping baixo e máxima performance',
    text: 'Experimente uma conexão ideal para jogos competitivos, sem interrupções, com ping baixo e alta velocidade.',
  },
  {
    img: '/img/navega-2.webp',
    title: 'Vídeochamadas com muita qualidade e estabilidade',
    text: 'Faça chamadas de vídeo sem travar com uma conexão estável e de qualidade.',
  },
  {
    img: '/img/navega-3.webp',
    title: 'Navegue sem lentidão com o Wi-Fi 6 mais estável do mercado',
    text: 'Garanta uma navegação sem lentidão, mesmo com vários aparelhos conectados simultaneamente.',
  },
  {
    img: '/img/navega-4.webp',
    title: 'Assista seus filmes e maratone suas séries sem travar',
    text: 'Maratone suas séries sem interrupções. Tenha a melhor experiência sem travamentos ou queda de qualidade.',
  },
];

const NavegaSection = () => {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.85 + 12;
    setActiveDot(Math.min(Math.round(el.scrollLeft / cardWidth), cards.length - 1));
  };

  return (
    <section className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-8 md:pb-14 font-sans bg-[#ebebeb] text-[#3d3838]">
      <h2 className="text-[1.65rem] md:text-3xl leading-8 mb-1 tracking-[-0.01em]">
        Com Predialnet sua casa navega com você
      </h2>
      <p className="text-lg font-light leading-6 mb-5 md:mb-10">
        É muita internet para você navegar, jogar, maratonar, trabalhar...
      </p>

      <div ref={scrollRef} onScroll={handleScroll} className="flex overflow-x-auto snap-x snap-mandatory md:overflow-visible gap-3 items-stretch pb-2 scrollbar-hide">
        {cards.map((card, i) => (
          <div key={i} className="snap-start shrink-0 md:shrink w-[85%] md:flex-1 bg-white flex flex-col p-2 overflow-hidden rounded border border-[#dcdcdc]">
            <img
              src={card.img}
              alt={card.title}
              className="w-full block mb-4"
            />
            <div className="px-6 pb-5">
              <h3 className="text-xl leading-tight mb-2 tracking-[-0.01em]" style={{ color: '#8a0005' }}>
                {card.title}
              </h3>
              <p className="text-sm font-light">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Dots — mobile only */}
      <div className="flex justify-center gap-1.5 mt-2 md:hidden">
        {cards.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para item ${i + 1}`}
            onClick={() => {
              const el = scrollRef.current;
              if (!el) return;
              const cardWidth = el.offsetWidth * 0.85 + 12;
              el.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
              setActiveDot(i);
            }}
            style={{
              backgroundColor: i === activeDot ? '#f7adaf' : '#e6e7e8',
              width: i === activeDot ? '1.5rem' : '0.55rem',
              height: '0.35rem',
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

export default NavegaSection;
