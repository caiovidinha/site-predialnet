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

  const dotsScroll = (i) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.85 + 16;
    el.scrollTo({ left: cardWidth * i, behavior: 'smooth' });
    setActiveDot(i);
  };

  const EmpresaCard = () => (
    <div className="border border-[#dcdcdc] rounded flex overflow-hidden bg-[#ebebeb] h-full">
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <p className="text-xl font-light text-[#3d3838]">
            Planos sob medida<br className="hidden md:block" />
            {' '}para sua empresa decolar
          </p>
          <hr className="my-4 border-t border-[#3d3838] mr-12" />
          <p className="text-sm text-[#3d3838] leading-[1.4em]">
            Preencha o formulário{' '}
            <br className="hidden md:block" />e entraremos em contato{' '}
            <br className="hidden md:block" />para informar os planos{' '}
            <br className="hidden md:block" />disponíveis para{' '}
            <br className="hidden md:block" />o seu negócio.
          </p>
        </div>
        <a
          href="/empresa"
          className="block text-center py-3 text-xs text-white bg-[#8a0005] hover:opacity-80 transition-opacity rounded-sm mt-4 md:mt-0"
        >
          Preencher formulário
        </a>
      </div>
      <div className="hidden md:block w-[45%] flex-shrink-0">
        <img src="/img/foto_empresa.avif" alt="Internet Empresa" className="w-full h-full object-cover" />
      </div>
    </div>
  );

  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-14 font-sans bg-[#fff] text-[#3d3838]">

      {/* ── DESKTOP: 2 colunas — larguras originais, heading fixo para alturas iguais ── */}
      <div className="hidden md:flex md:flex-row gap-6 items-stretch">

        {/* Coluna esquerda — Via Rádio + Porto Maravilha */}
        <div className="md:w-[45%] flex flex-col">
          {/* min-h-[4.5rem] = exatamente 2 linhas de text-3xl, igualando com o heading direito */}
          <h2 className="text-3xl mb-4">Internet Via Rádio e Porto Maravilha</h2>
          <div className="flex gap-4 flex-1">
            {/* Via Rádio */}
            <div className="flex-1 border border-[#dcdcdc] rounded flex flex-col justify-between overflow-hidden">
              <div className="px-4 pt-6 pb-1 flex flex-col gap-0.5">
                <p className="text-xl text-[#3d3838] leading-tight">Via Rádio</p>
                <p className="text-sm text-[#3d3838] leading-tight">Planos residenciais</p>
              </div>
              <div className="px-4 py-2 flex-1 flex items-center">
                <img src="/img/via_radio.avif" alt="Via Rádio" className="w-full object-cover" />
              </div>
              <div className="p-4 mb-2">
                <a href="/via-radio" className="w-full block text-center py-3 text-xs text-white bg-[#8a0005] hover:opacity-80 transition-opacity rounded-sm">
                  Conhecer planos
                </a>
              </div>
            </div>
            {/* Porto Maravilha */}
            <div className="flex-1 border border-[#dcdcdc] rounded flex flex-col justify-between overflow-hidden">
              <div className="px-4 pt-6 pb-1 flex flex-col gap-0.5">
                <p className="text-xl text-[#3d3838] leading-tight">Porto Maravilha</p>
                <p className="text-sm text-[#3d3838] leading-tight">Planos residenciais</p>
              </div>
              <div className="px-4 py-2 flex-1 flex items-center">
                <img src="/img/porto_maravilha.avif" alt="Porto Maravilha" className="w-full object-cover" />
              </div>
              <div className="p-4  mb-2">
                <a href="/porto-maravilha" className="w-full block text-center py-3 text-xs text-white bg-[#8a0005] hover:opacity-80 transition-opacity rounded-sm">
                  Conhecer planos
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna direita — Empresa */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-3xl mb-4">Internet Empresa</h2>
          <div className="flex-1">
            <EmpresaCard />
          </div>
        </div>

      </div>

      {/* ── MOBILE: scroll horizontal + empresa abaixo ── */}
      <div className="md:hidden">
        <h2 className="text-3xl mb-4">Internet Via Rádio e Porto Maravilha</h2>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-2 scrollbar-hide"
          style={{ touchAction: 'pan-x' }}
        >
          {residencialCards.map((item) => (
            <div key={item.href} className="snap-start shrink-0 w-[85%] border border-[#dcdcdc] rounded flex flex-col justify-between overflow-hidden pb-2">
              <div className="px-4 pt-6 pb-1 flex flex-col gap-0.5">
                <p className="text-xl text-[#3d3838] leading-tight">{item.label}</p>
                <p className="text-sm text-[#3d3838] leading-tight">Planos residenciais</p>
              </div>
              <div className="px-4 py-2">
                <img src={item.img} alt={item.label} className="w-full aspect-[16/9] object-cover" />
              </div>
              <div className="p-4">
                <a href={item.href} className="w-full block text-center py-3 text-xs text-white bg-[#8a0005] hover:opacity-80 transition-opacity rounded-sm">
                  Conhecer planos
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-2">
          {residencialCards.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Ir para item ${i + 1}`}
              onClick={() => dotsScroll(i)}
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

        <h2 className="text-3xl mt-6 mb-4">Internet Empresa</h2>
        <EmpresaCard />
      </div>

    </div>
  );
}

export default Others;
