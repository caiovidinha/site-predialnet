import React, { useState } from 'react';
import FormModal from './FormModal';

function ClienteAtendimento() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const openModal = (type) => {
    setSelectedType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedType(null);
  };

  const acessoCards = [
    {
      icon: '/img/medidor.svg',
      title: 'Medidor de velocidade',
      href: 'https://speedtest.predialnet.com.br',
      external: true,
    },
    {
      icon: '/img/segunda-via.svg',
      title: '2ª via de conta',
      href: 'https://minhaconta.predialnet.com.br',
      external: true,
    },
    {
      icon: '/img/webmail.svg',
      title: 'Webmail',
      href: 'https://webmail.predialnet.com.br/index.php',
      external: true,
    },
    {
      icon: '/img/app.svg',
      title: 'Gerenciar pelo App',
      href: '#App',
      external: false,
    },
  ];

  const atendimentoCards = [
    { icon: '/img/suporte.svg', title: 'Suporte', phone: '21 3515-0500', type: 'suporte' },
    { icon: '/img/financeiro.svg', title: 'Financeiro', phone: '21 3515-0555', type: 'financeiro' },
    { icon: '/img/cancelameto.svg', title: 'Cancelamento', phone: '21 3515-0555', type: 'cancelamento' },
    { icon: '/img/sac.svg', title: 'SAC', phone: '0800 878 7319', type: 'contato' },
  ];

  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] py-10 font-sans bg-[#ebebeb] text-[#3d3838]">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Coluna esquerda */}
          <div className="md:w-1/2 flex flex-col text-left justify-between pr-0 md:pr-40">
          <div>
            <p className="text-base sm:text-lg text-[#444] mb-2">Cliente Predialnet</p>
            <h1 className="text-3xl text-[#8a0005] font-light tracking-[-0.01em] mb-2">
              Acesso rápido às principais funções de atendimento
            </h1>
          </div>
          <div>
            <p className="text-base sm:text-lg text-[#444]">Horário de Atendimento</p>
            <p className="text-sm text-[#444] mb-2">Segunda a sexta das 9h às 18h</p>
          </div>
          <div>
            <p className="text-base sm:text-lg text-[#444]">Setor Comercial</p>
            <p className="text-sm text-[#444] mb-2">Segunda a sexta das 9h às 20h | Sábado das 9h às 16h</p>
          </div>
          <div>
            <p className="text-base sm:text-lg text-[#444]">Suporte</p>
            <p className="text-sm text-[#444]">Todos os dias das 6h às 24h</p>
          </div>
        </div>

        {/* Coluna direita — começa na metade — 4 linhas x 2 colunas */}
          <div className="md:w-1/2 flex flex-col justify-between w-full pt-2 mt-6 md:mt-0">
          {acessoCards.map((card, i) => (
            <div key={card.title} className="flex gap-2">
              <a
                href={card.href}
                target={card.external ? '_blank' : '_self'}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="flex-1 bg-white border border-[#dcdcdc] rounded-[4px] flex items-center gap-3 px-4 py-5 hover:shadow-md transition-shadow group"
              >
                <img
                  src={card.icon}
                  alt=""
                  className="w-5 h-5 object-contain flex-shrink-0 transition-all group-hover:[filter:brightness(0)_saturate(100%)_invert(8%)_sepia(97%)_saturate(4000%)_hue-rotate(352deg)_brightness(82%)]"
                />
                <span className="text-sm text-[#444] flex-1 leading-tight">{card.title}</span>
                <svg className="w-4 h-4 flex-shrink-0 text-[#aaa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <button
                onClick={() => openModal(atendimentoCards[i].type)}
                className="flex-1 bg-white border border-[#dcdcdc] rounded-[4px] flex items-center gap-3 px-4 py-3 hover:shadow-md transition-shadow text-left group"
              >
                <img
                  src={atendimentoCards[i].icon}
                  alt=""
                  className="w-5 h-5 object-contain flex-shrink-0 transition-all group-hover:[filter:brightness(0)_saturate(100%)_invert(8%)_sepia(97%)_saturate(4000%)_hue-rotate(352deg)_brightness(82%)]"
                />
                <span className="text-sm text-[#444] flex-1 leading-tight">{atendimentoCards[i].title} {atendimentoCards[i].phone}</span>
                <svg className="w-4 h-4 flex-shrink-0 text-[#aaa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <FormModal isOpen={isModalOpen} onClose={closeModal} type={selectedType} />
      )}
    </div>
  );
}

export default ClienteAtendimento;
