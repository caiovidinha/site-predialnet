import React, { useState } from 'react';

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
    seal: 'Múltiplos dispositivos',
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
    seal: 'Para jogar sem lag',
    title: 'Gamer Pro 1 Giga',
    img: '/img/ideal-gamer.webp',
    description:
      'Com ponto cabeado, este plano é perfeito para jogos online, proporcionando ping baixo e conexão estável para respostas rápidas. Alta velocidade de download e upload com desempenho consistente para partidas fluidas e competitivas.',
    btnLabel: 'Assinar Gamer Pro',
    regulamento: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-1giga.pdf',
  },
];

const IdealPlans = () => {
  const [openDetails, setOpenDetails] = useState(null);

  const toggleDetails = (id) =>
    setOpenDetails((prev) => (prev === id ? null : id));

  return (
    <section className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-14 font-sans bg-[#fafafa] text-[#231f20]">
      <h2 className="text-3xl mb-1 tracking-tight">
        Saiba como escolher o plano ideal pra você
      </h2>
      <p className="text-lg font-light leading-6">
        Saiba como escolher o plano ideal pra você
      </p>

      <div className="mt-12 flex flex-col md:flex-row gap-3 items-start">
        {plans.map((plan) => {
          const isOpen = openDetails === plan.id;
          return (
            <div key={plan.id} className="relative flex-1 mt-4 flex flex-col">
              {/* Selo */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#dcdcdc] text-xs rounded-sm text-center" style={{ padding: '6px 18px', width: '170px' }}>
                {plan.seal}
              </div>

              {/* Card */}
              <div className="border border-[#dcdcdc] bg-white flex flex-col">
                <div className="p-7 flex flex-col flex-1">
                  {/* Título */}
                  <h3 className="text-2xl font-light tracking-tight mb-4">{plan.title}</h3>

                  {/* Imagem */}
                  <img
                    src={plan.img}
                    alt={plan.title}
                    className="w-full block rounded mb-4"
                  />

                  {/* Descrição */}
                  <p className="text-sm font-light leading-relaxed mb-6">{plan.description}</p>

                  {/* Botão Assinar */}
                  <a
                    href={`https://www.predialnet.com.br/assineja?plano=${plan.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 text-xs text-white bg-[#8a0005] hover:opacity-90 transition-opacity rounded-sm mb-3"
                    aria-label={plan.btnLabel}
                  >
                    {plan.btnLabel}
                  </a>

                  {/* Mais detalhes */}
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

                  {/* Accordion */}
                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-[#e6e6e6] flex flex-col gap-3">
                      <p className="text-2xl tracking-tight">Plano {plan.title}</p>
                      <p className="text-base">Oferta com velocidade de até {plan.title}.</p>
                      <p className="text-sm leading-relaxed">
                        Condições para contratação por pessoa física, sem franquia de consumo. Instalação sujeito a
                        viabilidade técnica. Ofertas válidas para locais com cobertura fibra óptica, exceto: Região do
                        Porto Maravilha, e locais com tecnologia HPNA, Rádio ou FTTH. Consulte o Regulamento.
                      </p>
                      <div>
                        <p className="text-base mb-2">*Serviços Inteligentes:</p>
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
                      <p className="text-sm leading-relaxed">
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default IdealPlans;
