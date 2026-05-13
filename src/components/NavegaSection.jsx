import React from 'react';

const cards = [
  {
    img: '/img/navega-1.webp',
    title: 'Jogue online com ping baixo e máxima performance',
    text: 'Experimente uma conexão ideal para jogos competitivos, sem interrupções, com ping baixo e alta velocidade.',
  },
  {
    img: '/img/navega-2.webp',
    title: 'Vídeochamadas com alta qualidade e estabilidade',
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
  return (
    <section className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-14 font-sans bg-[#ebebeb] text-[#231f20]">
      <h2 className="text-3xl mb-1 tracking-tight">
        Com Predialnet sua casa navega com você
      </h2>
      <p className="text-lg font-light leading-6 mb-10">
        É muita internet para você navegar, jogar, maratonar, trabalhar...
      </p>

      <div className="flex flex-col md:flex-row gap-3 items-stretch">
        {cards.map((card, i) => (
          <div key={i} className="flex-1 bg-white flex flex-col p-2 overflow-hidden">
            <img
              src={card.img}
              alt={card.title}
              className="w-full block mb-4"
            />
            <div className="px-6 pb-5">
              <h3 className="text-xl font-semibold leading-snug mb-2" style={{ color: '#8a0005' }}>
                {card.title}
              </h3>
              <p className="text-sm font-light leading-tight">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NavegaSection;
