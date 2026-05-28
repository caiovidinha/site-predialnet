import React, { useRef, useState } from 'react';

function Others() {
  const residencialCards = [
    { label: 'Via Rádio', href: '/via-radio', img: '/img/via_radio.avif' },
    { label: 'Porto Maravilha', href: '/porto-maravilha', img: '/img/porto_maravilha.avif' },
  ];

  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.85 + 16;
    setActiveDot(Math.min(Math.round(el.scrollLeft / cardWidth), residencialCards.length - 1));
  };

  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-14 font-sans bg-[#fff] text-[#3d3838]">
      <div className="flex flex-col md:flex-row gap-6 items-stretch">

        {/* Esquerda — Via Rádio + Porto Maravilha */}
        <div className="md:w-[45%] flex flex-col">
          <h2 className="text-3xl mb-4">Internet Via Rádio e Porto Maravilha</h2>
          <div ref={scrollRef} onScroll={handleScroll} className="flex overflow-x-auto snap-x snap-mandatory md:overflow-visible gap-4 md:flex-1 pb-2 scrollbar-hide">
            {residencialCards.map((item) => (
              <div key={item.href} className="snap-start shrink-0 md:shrink w-[85%] md:flex-1 border border-[#dcdcdc] rounded flex flex-col justify-between overflow-hidden pb-2">
                <div className="px-4 pt-6 pb-1 flex flex-col gap-0.5">
                  <p className="text-xl text-[#3d3838] leading-tight">{item.label}</p>
                  <p className="text-sm text-[#3d3838] leading-tight">Planos residenciais</p>
                </div>
                <div className="px-4 py-2">
                  <img src={item.img} alt={item.label} className="w-full aspect-[16/9] object-cover" />
                </div>
                <div className="p-4">
                  <a
                    href={item.href}
                    className="w-full block text-center py-3 text-xs text-white bg-[#8a0005] hover:opacity-80 transition-opacity rounded-sm"
                  >
                    Conhecer planos
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* Dots — mobile only */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {residencialCards.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Ir para item ${i + 1}`}
                onClick={() => {
                  const el = scrollRef.current;
                  if (!el) return;
                  const cardWidth = el.offsetWidth * 0.85 + 16;
                  el.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
                  setActiveDot(i);
                }}
                style={{
                  backgroundColor: i === activeDot ? '#f7adaf' : '#e6e7e8',
                  width: i === activeDot ? '2rem' : '0.75rem',
                  height: '0.75rem',
                  borderRadius: '9999px',
                  border: 'none',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>

        {/* Direita — Internet Empresa */}
        <div className="md:flex-1 flex flex-col">
          <h2 className="text-3xl mb-4">Internet Empresa</h2>
          <div className="border border-[#dcdcdc] rounded flex-1 flex overflow-hidden bg-[#ebebeb]">
            {/* Texto */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <p className="text-xl font-light text-[#3d3838]">
                  Planos sob medida<br />para sua empresa decolar
                </p>
                <hr className="my-3 border-t-1 border-[#3d3838] mr-12" />
                <p className="text-lg text-[#3d3838] leading-[1.2em]">
                  Preencha o formulário<br />e entraremos em contato<br />para informar os planos<br />disponíveis para<br />o seu negócio.
                </p>
              </div>
              <a
                href="/empresa"
                className="block text-center py-3 text-xs text-white bg-[#8a0005] hover:opacity-80 transition-opacity rounded-sm"
              >
                Preencher formulário
              </a>
            </div>
            {/* Imagem */}
            <div className="w-[45%] flex-shrink-0">
              <img
                src="/img/foto_empresa.avif"
                alt="Internet Empresa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Others;
