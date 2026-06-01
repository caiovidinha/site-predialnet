import React, { useState, useRef, useEffect } from 'react';

const plans = [
  {
    id: '600mega',
    seal: 'Diversão e trabalho remoto',
    title: '600 Mega',
    img: '/img/ideal-600.webp',
    description:
      'Perfeito para entretenimento online e ótimo para consumir conteúdos em plataformas de streaming. Também ideal para trabalho remoto, proporcionando conexões estáveis e agilidade no envio e recebimento de arquivos.',
    btnLabel: 'Assinar 600 Mega',
    regulamento: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-600.pdf',
  },
  {
    id: '800mega',
    seal: 'Múltiplos dispositivos conectados',
    title: '800 Mega',
    img: '/img/ideal-800.webp',
    description:
      'Indicado para ambientes com múltiplos dispositivos conectados, casas inteligentes e uso frequente de serviços em nuvem. Também ideal para o consumo de conteúdo em 4K e jogos online com desempenho e performance.',
    btnLabel: 'Assinar 800 Mega',
    regulamento: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-800.pdf',
  },
  {
    id: '1giga',
    seal: 'Internet com performance',
    title: '1 Giga',
    img: '/img/ideal-1.webp',
    description:
      'Ideal para tarefas exigentes, como edição de áudio e vídeo e jogos em nuvem, além de conteúdos em 4K, HDR e 8K. Ideal também para ambientes com vários dispositivos conectados e alta velocidade de download e upload.',
    btnLabel: 'Assinar 1 Giga',
    regulamento: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-1giga.pdf',
  },
  {
    id: 'gamer1giga',
    imageCard: '/img/cardPlanoIdeal.webp',
    title: 'Gamer Pro 1 Giga',
  },
];

const IdealPlans = () => {
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const visiblePlans = plans.filter(p => !p.imageCard);
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.offsetWidth * 0.85 + 12;
    setActiveDot(Math.min(Math.round(el.scrollLeft / cardWidth), visiblePlans.length - 1));
  };

  const [openDetails, setOpenDetails] = useState(null);
  const cardRefs = useRef({});
  useEffect(() => {
    if (!openDetails) return;
    const el = cardRefs.current[openDetails];
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (!entry.isIntersecting) setOpenDetails(null); },
      { threshold: 0, rootMargin: '600px 0px 0px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [openDetails]);

  const toggleDetails = (id) =>
    setOpenDetails((prev) => (prev === id ? null : id));

  return (
    <section className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-8 md:pb-14 font-sans bg-[#fafafa] text-[#3d3838]">
      <h1 className="text-[1.65rem] md:text-3xl leading-8 mb-1 font-light tracking-[-0.01em]">
        Saiba como escolher o plano ideal pra você
      </h1>
      <h2 className="text-lg font-light leading-6">
        Veja qual opção combina melhor com o seu perfil
      </h2>

      <div ref={scrollRef} onScroll={handleScroll} className="mt-5 md:mt-10 flex overflow-x-auto snap-x snap-mandatory md:overflow-visible gap-3 pb-2 scrollbar-hide">
        {plans.map((plan) => {
          const isOpen = openDetails === plan.id;
          return (
            <div key={plan.id} ref={el => { cardRefs.current[plan.id] = el; }} className={`snap-start shrink-0 md:shrink w-[85%] md:flex-1 relative mt-4 flex flex-col${plan.imageCard ? ' hidden md:flex' : ''}`}>
              {/* Selo */}
              {plan.seal && (
                <div className="absolute top-0 left-7 right-7 -translate-y-1/2 z-10 bg-[#dcdcdc] text-xs rounded-sm text-center whitespace-nowrap" style={{ padding: '6px 18px' }}>
                  {plan.seal}
                </div>
              )}

              {/* Card */}
              {plan.imageCard ? (
                <div className="border border-[#dcdcdc] bg-white overflow-hidden rounded-sm flex-1">
                  <img src={plan.imageCard} alt={plan.title} className="w-full block" />
                </div>
              ) : (
              <>
              <div className="border border-[#dcdcdc] bg-white flex flex-col rounded flex-1">
                <div className="px-7 pt-8 pb-7 flex flex-col justify-between flex-1">
                  {/* Título */}
                  <h3 className="text-2xl font-light mb-5">{plan.title}</h3>

                  {/* Imagem */}
                  <img
                    src={plan.img}
                    alt={plan.title}
                    className="w-full block rounded-sm mb-5"
                  />

                  {/* Descrição */}
                  <p className="text-sm font-light mb-5">{plan.description}</p>

                  {/* Botão Assinar */}
                  <a
                    href={`https://www.predialnet.com.br/assineja?plano=${plan.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 text-xs text-white bg-[#8a0005] hover:opacity-80 transition-opacity rounded-sm mb-3"
                    aria-label={plan.btnLabel}
                  >
                    {plan.btnLabel}
                  </a>

                  {/* Mais detalhes */}
                  <button
                    type="button"
                    onClick={() => toggleDetails(plan.id)}
                    className="flex items-center justify-center gap-1 text-xs font-light hover:text-[#8a0005] transition-colors"
                  >
                    Mais detalhes
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Accordion inline — mobile only */}
                  {isOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-[#e6e6e6] flex flex-col gap-3">
                      <p className="text-xl">Plano {plan.title}</p>
                      <p className="text-base">Oferta com velocidade de até {plan.title}.</p>
                      <p className="text-sm">
                        Condições para contratação por pessoa física, sem franquia de consumo. Instalação sujeito a
                        viabilidade técnica. Ofertas válidas para locais com cobertura fibra óptica, exceto: Região do
                        Porto Maravilha, e locais com tecnologia HPNA, Rádio ou FTTH. Consulte o Regulamento.
                      </p>
                      <div>
                        <p className="text-base mb-2">*Serviços Inteligentes:</p>
                        <div className="flex flex-col gap-2 text-sm font-light">
                          <p>
                            <span className="font-normal">· Controle Parental (1 licença)</span><br />
                            Permite ao titular da conta controlar o horário de utilização da sua Internet.
                          </p>
                          <p>
                            <span className="font-normal">· Navegação mais segura</span><br />
                            Oferece tentativa de proteção contra conexões entrantes indesejadas.
                            Auxilia o usuário na tentativa de identificar e bloquear sites fraudulentos.
                          </p>
                          <p>
                            <span className="font-normal">· Predial Protect (1 Licença)</span><br />
                            Consulte o Regulamento para gerenciamento dos Serviços Inteligentes.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">
                        Baixe o App Minha Predialnet e gerencie seu plano.
                      </p>
                      <a
                        href={plan.regulamento}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-base hover:text-[#8a0005] transition-colors"
                      >
                        <img src="/img/regulamento.png" alt="" width="14" height="14" aria-hidden="true" />
                        Baixe o regulamento
                      </a>
                    </div>
                  )}
                </div>
              </div>
              {/* Accordion desktop — flap absoluto abaixo do card */}
              {isOpen && (
                <div className="hidden md:flex flex-col gap-3 absolute top-full left-0 right-0 z-20 border border-[#dcdcdc] border-t-0 rounded-b bg-white px-7 py-5">
                  <p className="text-xl">Plano {plan.title}</p>
                  <p className="text-base">Oferta com velocidade de até {plan.title}.</p>
                  <p className="text-sm">
                    Condições para contratação por pessoa física, sem franquia de consumo. Instalação sujeito a
                    viabilidade técnica. Ofertas válidas para locais com cobertura fibra óptica, exceto: Região do
                    Porto Maravilha, e locais com tecnologia HPNA, Rádio ou FTTH. Consulte o Regulamento.
                  </p>
                  <div>
                    <p className="text-base mb-2">*Serviços Inteligentes:</p>
                    <div className="flex flex-col gap-2 text-sm font-light">
                      <p>
                        <span className="font-normal">· Controle Parental (1 licença)</span><br />
                        Permite ao titular da conta controlar o horário de utilização da sua Internet.
                      </p>
                      <p>
                        <span className="font-normal">· Navegação mais segura</span><br />
                        Oferece tentativa de proteção contra conexões entrantes indesejadas.
                        Auxilia o usuário na tentativa de identificar e bloquear sites fraudulentos.
                      </p>
                      <p>
                        <span className="font-normal">· Predial Protect (1 Licença)</span><br />
                        Consulte o Regulamento para gerenciamento dos Serviços Inteligentes.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Baixe o App Minha Predialnet e gerencie seu plano.
                  </p>
                  <a
                    href={plan.regulamento}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-base hover:text-[#8a0005] transition-colors"
                  >
                    <img src="/img/regulamento.png" alt="" width="14" height="14" aria-hidden="true" />
                    Baixe o regulamento
                  </a>
                </div>
              )}
              </>
              )}
            </div>
          );
        })}
      </div>

      {/* Dots — mobile only */}
      <div className="flex justify-center gap-1.5 mt-2 md:hidden">
        {visiblePlans.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Ir para plano ${i + 1}`}
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

export default IdealPlans;
