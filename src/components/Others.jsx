import React, { useRef, useState } from 'react';

function Others() {
  const residencialCards = [
    { label: 'Via Rádio', href: '/via-radio', img: '/img/via_radio.avif', mobileImg: '/img/via_radio_mobile.avif' },
    { label: 'Porto Maravilha', href: '/porto-maravilha', img: '/img/porto_maravilha.avif', mobileImg: '/img/porto_maravilha_mobile.avif' },
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
      <div className="w-[45%] flex-shrink-0 -mr-10 md:mr-0">
        <picture>
          <source media="(min-width: 768px)" srcSet="/img/foto_empresa.avif" />
          <img
            src="/img/foto_empresa_mobile.avif"
            alt="Equipe usando internet corporativa Predialnet no escritório"
            width={900}
            height={976}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-left -ml-10 md:ml-0 md:object-center"
          />
        </picture>
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
          <h2 className="text-[1.65rem] md:text-3xl leading-8 mb-4">Internet Via Rádio e Porto Maravilha</h2>
          <div className="flex gap-4 flex-1">
            {/* Via Rádio */}
            <div className="flex-1 border border-[#dcdcdc] rounded flex flex-col justify-between overflow-hidden">
              <div className="px-4 pt-6 pb-1 flex flex-col gap-0.5">
                <p className="text-xl text-[#3d3838] leading-tight">Via Rádio</p>
                <p className="text-sm text-[#3d3838] leading-tight">Planos residenciais</p>
              </div>
              <div className="px-4 py-2 flex-1 flex items-center">
                <img src="/img/via_radio.avif" alt="Via Rádio" className="w-full object-cover" style={{ transform: 'scaleX(-1)' }} width={600} height={334} loading="lazy" decoding="async" />
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
                <img src="/img/porto_maravilha.avif" alt="Porto Maravilha" className="w-full object-cover" width={600} height={334} loading="lazy" decoding="async" />
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
          <h2 className="text-[1.65rem] md:text-3xl leading-8 mb-4">Internet Empresa</h2>
          <div className="flex-1">
            <EmpresaCard />
          </div>
        </div>

      </div>

      {/* ── MOBILE: empilhado + empresa abaixo ── */}
      <div className="md:hidden">
        <h2 className="text-[1.65rem] mb-4">Internet Via Rádio e Porto Maravilha</h2>
        <div className="flex flex-col gap-4">
          {residencialCards.map((item) => (
            <div key={item.href} className="border border-[#dcdcdc] rounded flex flex-col justify-between overflow-hidden pb-2">
              <div className="px-4 pt-6 pb-1 flex flex-col gap-0.5">
                <p className="text-xl text-[#3d3838] leading-tight">{item.label}</p>
                <p className="text-sm text-[#3d3838] leading-tight">Planos residenciais</p>
              </div>
              <div className="px-4 pt-2">
                <img src={item.mobileImg} alt={`Internet ${item.label} da Predialnet`} width={900} height={353} loading="lazy" decoding="async" className="w-full object-cover" style={item.href === '/via-radio' ? { transform: 'scaleX(-1)' } : undefined} />
              </div>
              <div className="p-4 -mt-1">
                <a href={item.href} className="w-full block text-center py-3 text-xs text-white bg-[#8a0005] hover:opacity-80 transition-opacity rounded-sm">
                  Conhecer planos
                </a>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-[1.65rem] mt-6 mb-4">Internet Empresa</h2>
        <EmpresaCard />
      </div>

    </div>
  );
}

export default Others;
