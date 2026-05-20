import React, { useState } from 'react';
import { events } from '../utils/analytics';

// Paleta
// v1:   #8a0005
// g1:   #fafafa
// g2:   #e6e6e6
// g3:   #dcdcdc
// vrd1: #00a650

const planData = [
  {
    id: '600mega',
    tagline: 'Navegue sem limites',
    title: '600 Mega',
    price: '99,90',
    wifi: 'Wi-Fi Gigabit',
    seal: null,
    gamerPonto: false,
    regulamento: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-600.pdf',
  },
  {
    id: '800mega',
    tagline: 'Pra conectar todo mundo',
    title: '800 Mega',
    price: '124,90',
    wifi: 'Wi-Fi 6',
    seal: { text: 'MAIS VENDIDO', bg: '#dcdcdc', color: '#8a0005' },
    gamerPonto: false,
    regulamento: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-800.pdf',
  },
  {
    id: '1giga',
    tagline: 'Muita internet pra casa toda',
    title: '1 Giga',
    price: '139,90',
    wifi: 'Wi-Fi 6',
    seal: { text: 'MELHOR OFERTA', bg: '#8a0005', color: '#ffffff' },
    gamerPonto: false,
    regulamento: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-1giga.pdf',
  },
  {
    id: 'gamer1giga',
    tagline: 'Jogue sem lag',
    title: 'Gamer Pro 1 Giga',
    price: '159,90',
    wifi: 'Wi-Fi 6',
    seal: { text: 'PLANO GAMER', bg: '#000000', color: '#ffffff' },
    gamerPonto: true,
    regulamento: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-1giga.pdf',
  },
];

const Plans = () => {
  const [openDetails, setOpenDetails] = useState(null);
  const [pontoCabeado, setPontoCabeado] = useState({
    '600mega': false,
    '800mega': false,
    '1giga': false,
    'gamer1giga': true,
  });

  const toggleDetails = (id) => setOpenDetails((prev) => (prev === id ? null : id));

  return (
    <div id="Plans" className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-14 font-sans bg-[#f4f5f5] text-[#231f20]">
      {/* Cabeçalho */}
      <h1 className="text-3xl mb-1 tracking-tight font-light">
        Planos Predialnet Fibra para sua casa
      </h1>
      <h2 className="text-lg font-light leading-6">
        Conquiste um plano Predialnet e mude sua experiência de conexão
      </h2>

      {/* Cards */}
      <div className="mt-10 flex flex-col md:flex-row gap-3 items-start">
        {planData.map((plan) => {
          const isOpen = openDetails === plan.id;
          const isPonto = pontoCabeado[plan.id];

          return (
            <div key={plan.id} className="relative pt-4 w-full md:w-1/4 flex flex-col">

              {/* Selo �?" metade saindo pelo topo da caixa */}
              {plan.seal && (
                <div
                  className="absolute top-0 left-0 px-3 py-0.5 text-[10px] font-medium tracking-wide z-10 rounded-r"
                  style={{ backgroundColor: plan.seal.bg, color: plan.seal.color }}
                >
                  {plan.seal.text}
                </div>
              )}

              {/* Card */}
              <div className="border border-[#dcdcdc] rounded bg-white flex flex-col p-6">

                {/* Tagline �?" f4 */}
                <p className="text-sm font-light mb-4">{plan.tagline}</p>

                {/* Nome do plano — f1 */}
                <h2 className="text-3xl font-light tracking-tight mb-8">{plan.title}</h2>

                {/* Features — f5 */}
                <ul className="flex flex-col gap-2.5 mb-7">
                  {[plan.wifi, 'Instalação Grátis', 'Sem fidelidade', 'Serviços Inteligentes'].map((feat) => (
                    <li key={feat} className="text-sm font-light flex items-center gap-1.5">
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="flex-shrink-0 text-[#8a0005]" aria-hidden="true">
                        <path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Ponto cabeado �?" f4 */}
                <div
                  className={`rounded flex items-center justify-between gap-3 px-4 py-3 mb-6 bg-[#e6e6e6] transition-colors ${
                    plan.gamerPonto ? 'cursor-default' : 'cursor-pointer'
                  } text-sm`}
                  onClick={() =>
                    !plan.gamerPonto &&
                    setPontoCabeado((prev) => ({ ...prev, [plan.id]: !prev[plan.id] }))
                  }
                >
                  <span className="font-light leading-tight">
                    {isPonto ? <><span>1 Ponto cabeado</span><br /><span>selecionado</span></> : 'Adicionar um ponto cabeado. +R$ 30,00/mês'}
                  </span>
                  {/* Checkbox à direita */}
                  <div
                    className="w-5 h-5 flex-shrink-0 rounded-sm border flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: isPonto ? '#00a650' : 'white',
                      borderColor: isPonto ? '#00a650' : '#aaaaaa',
                    }}
                  >
                    {isPonto && (
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                        <path d="M1 4.5L4 7.5L10 1.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Preço — f2 */}
                <p className="text-2xl tracking-tight mb-6">
                  R$ {isPonto ? (parseFloat(plan.price.replace(',', '.')) + 30).toFixed(2).replace('.', ',') : plan.price} <span className="text-sm font-light">/mês</span>
                </p>

                {/* Botão Assinar �?" v1, rounded mínimo */}
                <a
                  href={`https://www.predialnet.com.br/assineja?plano=${plan.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 rounded-sm text-xs text-white bg-[#8a0005] hover:opacity-90 transition-opacity mb-3"
                  aria-label={`Assinar plano ${plan.title}`}
                  onClick={() => events.planClick(plan.title, `R$ ${plan.price}`, 'site', 'plans_section')}
                >
                  Assinar
                </a>

                {/* Mais detalhes �?" f4 */}
                <button
                  type="button"
                  onClick={() => toggleDetails(plan.id)}
                  className="flex items-center justify-center gap-1 text-sm font-light hover:text-[#8a0005] transition-colors"
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

                {/* Accordion de detalhes */}
                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-[#e6e6e6] flex flex-col gap-3">
                    {/* f2 */}
                    <p className="text-2xl tracking-tight">Plano {plan.title}</p>
                    {/* f3 */}
                    <p className="text-base">Oferta com velocidade de até {plan.title}.</p>
                    {/* f4 */}
                    <p className="text-sm leading-relaxed">
                      Condições para contratação por pessoa física, sem franquia de consumo. Instalação sujeito a
                      viabilidade técnica. Ofertas válidas para locais com cobertura fibra óptica, exceto: Região do
                      Porto Maravilha, e locais com tecnologia HPNA, Rádio ou FTTH. Consulte o Regulamento.
                    </p>
                    <div>
                      {/* f3 */}
                      <p className="text-base mb-2">*Serviços Inteligentes:</p>
                      {/* f4 */}
                      <div className="flex flex-col gap-2 text-sm font-light leading-relaxed">
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
                    {/* f4 */}
                    <p className="text-sm leading-relaxed">
                      Baixe o App Minha Predialnet e gerencie seu plano.
                    </p>
                    {/* f3 */}
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
          );
        })}
      </div>

      {/* Rodapé — OBS */}
      <div className="mt-8 w-full flex items-start font-light text-xs flex-col gap-1">
        <p className="text-xs w-full">Consulte o Regulamento para gerenciamento dos Serviços Inteligentes.</p>
        <p className="text-xs w-full whitespace-normal">
          OBS: Condições para contratação por pessoa física, sem franquia de consumo. Instalação sujeito a viabilidade técnica. Ofertas válidas para locais com cobertura fibra óptica, exceto: Região do Porto Maravilha, e locais com tecnologia Rádio ou FTTH. Consulte o Regulamento.
        </p>
      </div>
    </div>
  );
};

export default Plans;
