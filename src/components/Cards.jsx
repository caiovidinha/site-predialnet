"use client"
import React, { useState, useRef } from 'react';

function Cards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef(null);

  const cards = [
    {
      id: 'jogos',
      title: 'Jogue com máxima performance com uma internet feita para jogos',
      description:
        'Experimente a velocidade e estabilidade de uma internet feita para jogos, sem interrupções e com ping baixo.',
      imgSrc: '/img/cardA.jpg',
    },
    {
      id: 'chamadas',
      title: 'Vídeo chamadas com alta qualidade e muita estabilidade',
      description:
        'Faça chamadas de vídeo sem travar, com uma conexão estável e de qualidade, sem perder nenhum momento!',
      imgSrc: '/img/cardB.jpg',
    },
    {
      id: 'lentidao',
      title: 'Navegação sem lentidão com o Wi-Fi 6 mais estável do mercado',
      description:
        'Garanta uma navegação sem lentidão, mesmo com vários aparelhos conectados simultaneamente.',
      imgSrc: '/img/cardC.jpg',
    },
    {
      id: 'filmes',
      title: 'Assista a filmes e séries sem travar e com a melhor qualidade',
      description:
        'Maratone suas séries sem interrupções. Tenha a melhor experiência sem travamentos ou queda de qualidade.',
      imgSrc: '/img/cardD.jpg',
    },
  ];

  const handleScroll = (event) => {
    const scrollPosition = event.target.scrollLeft;
    const cardWidth = event.target.offsetWidth;
    const newIndex = Math.ceil(scrollPosition / cardWidth);
    setActiveIndex(newIndex);
  };

  const handleChipClick = (index) => {
    setActiveIndex(index);
    const cardWidth = cardsRef.current.offsetWidth;
    cardsRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] py-10 font-sans bg-gray-200 text-[#231f20]">
      <h1 className="text-3xl sm:text-3xl mb-1">
        É muita internet para você navegar, jogar e maratonar suas séries
      </h1>
      <h2 className="text-[#9e9e9e] text-xl sm:text-xl leading-6">
        Com Predialnet sua casa navega com você. Venha para uma internet rápida de verdade.
      </h2>
      <div className="mt-8">
        <div
          ref={cardsRef}
          className="flex md:justify-between sm:w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4"
          onScroll={handleScroll}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="w-[80%] sm:w-[23.6%] rounded-2xl snap-start shrink-0"
            >
              <div
                className="rounded-3xl aspect-[3/4] relative"
                style={{
                  backgroundImage: `url(${card.imgSrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="absolute inset-0 p-8 sm:p-9 flex flex-col justify-end">
                  <p className="text-xl sm:text-lg text-white mb-3 leading-6">
                    {card.title}
                  </p>
                  <p className="text-lg sm:text-sm font-light text-white leading-6">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Chips de Navegação */}
        <div className="flex justify-center mt-6 sm:hidden">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleChipClick(index)}
              className={`w-6 h-1 rounded-full mx-1 transition-colors duration-300 opacity-40 ${
                activeIndex === index ? 'bg-gray-800' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
