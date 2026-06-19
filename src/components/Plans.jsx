import React, { useState, useRef, useEffect } from 'react';
import { events } from '../utils/analytics';

// Paleta
// v1:   #8a0005
// g1:   #fafafa
// g2:   #e6e6e6
// g3:   #dcdcdc
// vrd1: #00a650

const planDataBase = [
  {
    id: '600mega',
    tagline: 'Navegue sem limites',
    title: '600 Mega',
    price: '99,90',
    wifi: 'Wi-Fi Gigabit',
    wifiDesc: 'Conexão rápida e estável',
    seal: { text: 'MENOR CUSTO', bg: '#dcdcdc', color: '#8a0005' },
    gamerPonto: false,
    regulamento: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-600.pdf',
  },
  {
    id: '800mega',
    tagline: 'Pra conectar todo mundo',
    title: '800 Mega',
    price: '124,90',
    wifi: 'Wi-Fi 6',
    wifiDesc: 'Mais alcance e estabilidade',
    seal: { text: 'MAIS VENDIDO', bg: '#dcdcdc', color: '#8a0005' },
    gamerPonto: false,
    regulamento: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-800.pdf',
  },
  {
    id: '1giga',
    tagline: 'Torcida Pro predialnet',
    title: '1 Giga',
    subtitle: '+ Ponto cabeado',
    price: '139,90',
    wifi: 'Wi-Fi 6',
    wifiDesc: 'Mais alcance e estabilidade',
    seal: { text: 'MELHOR OFERTA', bg: '#8a0005', color: '#ffffff' },
    gamerPonto: false,
    regulamento: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-1giga.pdf',
    assinarSlug: '1gigacopa',
  },
  {
    id: 'gamer1giga',
    imageCard: '/img/cardPlanos.webp',
    title: 'Gamer Pro 1 Giga',
  },
];

const Plans = ({ imageCard = '/img/cardPlanos.webp' }) => {
  const planData = React.useMemo(() => {
    const data = [...planDataBase];
    data[data.length - 1] = { ...data[data.length - 1], imageCard };
    return data;
  }, [imageCard]);
  const scrollRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const visiblePlans = planData.filter(p => !p.imageCard);
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

  const [pontoCabeado, setPontoCabeado] = useState({
    '600mega': false,
    '800mega': false,
    '1giga': false,
    'gamer1giga': true,
  });

  const toggleDetails = (id) => setOpenDetails((prev) => (prev === id ? null : id));

  return (
    <div id="Plans" className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-8 md:pb-14 font-sans bg-[#f4f5f5] text-[#3d3838]">
      {/* Cabeçalho */}
      <h1 className="text-[1.65rem] md:text-3xl leading-8 mb-1 font-light tracking-[-0.01em]">
        Planos Predialnet Fibra para sua casa
      </h1>
      <h2 className="text-lg font-light leading-6">
        Conquiste um plano Predialnet e mude sua experiência de conexão
      </h2>

      {/* Cards */}
      <div ref={scrollRef} onScroll={handleScroll} className="mt-5 md:mt-10 flex items-start md:items-stretch overflow-x-auto snap-x snap-mandatory md:overflow-visible gap-3 pb-2 scrollbar-hide">
        {planData.map((plan) => {
          const isOpen = openDetails === plan.id;
          const isPonto = pontoCabeado[plan.id];
          const mobileOrderClass = { '800mega': 'order-2 md:order-2', '600mega': 'order-3 md:order-1', '1giga': 'order-1 md:order-3', 'gamer1giga': 'order-4' }[plan.id] ?? '';

          return (
            <div key={plan.id} ref={el => { cardRefs.current[plan.id] = el; }} className={`${mobileOrderClass} snap-start shrink-0 md:shrink w-[85%] md:w-1/4 relative pt-4 flex flex-col${plan.imageCard ? ' hidden md:flex' : ''}`}>

              {/* Selo */}
              {plan.seal && (
                <div
                  className="absolute top-4 left-0 -translate-y-1/2 px-6 py-1.5 text-[10px] font-medium tracking-wide z-10 rounded-r"
                  style={{ backgroundColor: plan.seal.bg, color: plan.seal.color }}
                >
                  {plan.seal.text}
                </div>
              )}

              {/* Card */}
              {plan.imageCard ? (
                <div className="border border-[#dcdcdc] rounded bg-white overflow-hidden flex-1">
                  <img src={plan.imageCard} alt={plan.title} className="w-full block" />
                </div>
              ) : (
              <>
              <div className="border border-[#dcdcdc] rounded bg-white flex flex-col px-6 pt-10 pb-7 flex-1">

                {/* Tagline */}
                <p className="text-sm font-light mb-1">{plan.tagline}</p>
                {/* Nome do plano */}
                <div className="min-h-[60px] mb-1">
                  <h2 className="text-[28px] font-light leading-8 tracking-[-0.01em]">
                    {plan.title}
                    {plan.subtitle && <span className="block text-[18px] font-light leading-6">{plan.subtitle}</span>}
                  </h2>
                </div>


                {/* Features */}
                <ul className="flex flex-col gap-2.5 mb-5 md:mt-5">
                  {['Instalação Grátis', 'Sem fidelidade', 'Serviços Inteligentes'].map((feat) => (
                    <li key={feat} className="text-xs font-light flex items-center gap-1.5">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="flex-shrink-0 text-[#8a0005]" aria-hidden="true">
                        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                {/* Ponto cabeado */}
                {plan.id === '1giga' ? (
                <div className="rounded-sm overflow-hidden aspect-[18/5] mt-2">
                  <img src="/img/bannercopa.webp" alt="Torcida Pro Predialnet" className="w-full h-full object-cover block" />
                </div>
                ) : (
                <div
                  className={`rounded-sm flex items-center justify-between aspect-[18/5] px-4 bg-[#e6e6e6] transition-colors ${plan.gamerPonto ? 'cursor-default' : 'cursor-pointer'} text-sm mt-2`}
                  onClick={() => !plan.gamerPonto && setPontoCabeado((prev) => ({ ...prev, [plan.id]: !prev[plan.id] }))}
                >
                  <span className="text-[12px] font-light">
                    <span>Super {plan.wifi}</span> <br />
                    <span>{plan.wifiDesc}</span>
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8a0005" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-shrink-0"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="#8a0005" stroke="none"/></svg>

                <div
                  className={`hidden rounded-sm flex items-center justify-between px-4 py-3 bg-[#e6e6e6] transition-colors ${plan.gamerPonto ? 'cursor-default' : 'cursor-pointer'} text-sm mt-2`}
                  onClick={() => !plan.gamerPonto && setPontoCabeado((prev) => ({ ...prev, [plan.id]: !prev[plan.id] }))}
                >
                  <span className="text-[12px] font-light">
                    {isPonto ? (plan.gamerPonto ? <><span>1 Ponto cabeado</span><br /><span>grátis</span></> : <><span>1 Ponto cabeado</span><br /><span>selecionado</span></>) : <><span>Adicionar ponto cabeado</span><br /><span>+R$ 30,00/mês</span></>}
                  </span>
                  <div
                    className="w-6 h-6 flex-shrink-0 rounded-sm border flex items-center justify-center transition-colors"
                    style={{ backgroundColor: isPonto ? '#00a650' : 'white', borderColor: isPonto ? '#00a650' : '#aaaaaa' }}
                  >
                    {isPonto && (
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                        <path d="M1 4.5L4 7.5L10 1.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  </div>
                </div>
                )}
                

                {/* Preço */}
                <p className="text-2xl mt-auto pt-5">
                  R$ {isPonto ? (parseFloat(plan.price.replace(',', '.')) + 30).toFixed(2).replace('.', ',') : plan.price}<span className="text-sm font-light">/mês</span>
                </p>

                {/* Botão Assinar */}
                <a
                  href={`https://www.predialnet.com.br/assineja?plano=${plan.assinarSlug || plan.id}${(isPonto || plan.id === '1giga') ? '&ponto-cabeado' : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-sm text-xs text-white bg-[#8a0005] hover:opacity-80 transition-opacity mt-3 md:mt-5 mb-3"
                  aria-label={`Assinar plano ${plan.title}`}
                  onClick={() => events.planClick(plan.title, `R$ ${plan.price}`, 'site', 'plans_section')}
                >
                  Assinar
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
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Accordion inline — mobile only */}
                {isOpen && (
                  <div className="md:hidden mt-4 pt-4 border-t border-[#e6e6e6] flex flex-col gap-3">
                    <p className="text-xl">Plano {plan.title} {plan.id === '1giga' ? '+ ponto cabeado' : ''}</p>
                    <p className="text-base">Oferta com velocidade de até {plan.title}.</p>
                    {plan.id === '1giga' && (
                      <p className="text-sm">
                        Este plano já inclui 1 Ponto Cabeado grátis.
                      </p>
                    )}
                    <p className="text-sm">
                      Condições para contratação por pessoa física, sem franquia de consumo. Instalação sujeito a
                      viabilidade técnica. Ofertas válidas para locais com cobertura fibra óptica, exceto: Região do
                      Porto Maravilha, e locais com tecnologia HPNA, Rádio ou FTTH. Consulte o Regulamento.
                    </p>
                    <div>
                      <p className="text-base mb-2">*Serviços Inteligentes:</p>
                      <div className="flex flex-col gap-2 text-sm font-light">
                        <p><span className="font-normal">· Controle Parental (1 licença)</span><br />Permite ao titular da conta controlar o horário de utilização da sua Internet.</p>
                        <p><span className="font-normal">· Navegação mais segura</span><br />Oferece tentativa de proteção contra conexões entrantes indesejadas. Auxilia o usuário na tentativa de identificar e bloquear sites fraudulentos.</p>
                        <p><span className="font-normal">· Predial Protect (1 Licença)</span><br />Consulte o Regulamento para gerenciamento dos Serviços Inteligentes.</p>
                      </div>
                    </div>
                    <p className="text-sm">Baixe o App Minha Predialnet e gerencie seu plano.</p>
                    <a href={plan.regulamento} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-base hover:text-[#8a0005] transition-colors">
                      <img src="/img/regulamento.png" alt="" width="14" height="14" aria-hidden="true" />
                      Baixe o regulamento
                    </a>
                  </div>
                )}
              </div>
              {/* Accordion desktop — flap absoluto abaixo do card */}
              {isOpen && (
                <div className="hidden md:flex flex-col gap-3 absolute top-full left-0 right-0 z-20 border border-[#dcdcdc] border-t-0 rounded-b bg-white px-6 py-5">
                  <p className="text-xl">Plano {plan.title} {plan.id === '1giga' ? '+ ponto cabeado' : ''}</p>
                  <p className="text-base">Oferta com velocidade de até {plan.title}.</p>
                  {plan.id === '1giga' && (
                    <p className="text-sm">
                      Este plano já inclui 1 Ponto Cabeado grátis.
                    </p>
                  )}
                  <p className="text-sm">
                    Condições para contratação por pessoa física, sem franquia de consumo. Instalação sujeito a
                    viabilidade técnica. Ofertas válidas para locais com cobertura fibra óptica, exceto: Região do
                    Porto Maravilha, e locais com tecnologia HPNA, Rádio ou FTTH. Consulte o Regulamento.
                  </p>
                  <div>
                    <p className="text-base mb-2">*Serviços Inteligentes:</p>
                    <div className="flex flex-col gap-2 text-sm font-light">
                      <p><span className="font-normal">· Controle Parental (1 licença)</span><br />Permite ao titular da conta controlar o horário de utilização da sua Internet.</p>
                      <p><span className="font-normal">· Navegação mais segura</span><br />Oferece tentativa de proteção contra conexões entrantes indesejadas. Auxilia o usuário na tentativa de identificar e bloquear sites fraudulentos.</p>
                      <p><span className="font-normal">· Predial Protect (1 Licença)</span><br />Consulte o Regulamento para gerenciamento dos Serviços Inteligentes.</p>
                    </div>
                  </div>
                  <p className="text-sm">Baixe o App Minha Predialnet e gerencie seu plano.</p>
                  <a href={plan.regulamento} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-base hover:text-[#8a0005] transition-colors">
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

      {/* Rodapé — OBS */}
      <div className="mt-5 w-full flex items-start font-light text-xs flex-col gap-1">
        <p className="text-[8px] md:text-[10px] w-full leading-3">Consulte o Regulamento para gerenciamento dos Serviços Inteligentes. OBS: Condições para contratação por pessoa física, sem franquia de consumo. Instalação sujeito a viabilidade técnica. Ofertas válidas para locais com cobertura fibra óptica, exceto: Região do Porto Maravilha, e locais com tecnologia Rádio ou FTTH. Consulte o Regulamento.
        </p>
      </div>
    </div>
  );
};

export default Plans;
