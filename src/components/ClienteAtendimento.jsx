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
      icon: '/img/iconeMedidor.avif',
      title: 'Medidor de\nvelocidade',
      href: 'https://speedtest.predialnet.com.br',
      external: true,
    },
    {
      icon: '/img/iconeFatura.avif',
      title: '2ª via\nde conta',
      href: 'https://minhaconta.predialnet.com.br',
      external: true,
    },
    {
      icon: '/img/iconeSuporte.avif',
      title: 'Suporte\ntécnico',
      href: '/#Atendimento',
      external: false,
    },
    {
      icon: '/img/iconeCelular.avif',
      title: 'Gerenciar plano\npelo App',
      href: 'https://minhaconta.predialnet.com.br',
      external: true,
    },
  ];

  const atendimentoCards = [
    { icon: '/img/iconeSuporte.avif', title: 'Suporte', phone: '21 3515-0500', type: 'suporte' },
    { icon: '/img/iconeFinanceiro.avif', title: 'Financeiro', phone: '21 3515-0555', type: 'financeiro' },
    { icon: '/img/iconeCancelamento.avif', title: 'Cancelamento', phone: '21 3515-0555', type: 'cancelamento' },
    { icon: '/img/iconeSAC.avif', title: 'SAC', phone: '0800 878 7319', type: 'contato' },
  ];

  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] py-10 font-sans bg-[#ebebeb] text-[#231f20] tracking-tight">
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-10">
        {/* Coluna esquerda */}
        <div className="md:w-[40%] flex flex-col justify-between text-left">
          <p className="text-sm text-[#444] mb-2">Cliente Predialnet</p>
          <h2 className="text-3xl text-[#8a0005] leading-snug mb-6">
            Acesso rápido às principais funções de atendimento
          </h2>

          <p className="text-base text-[#444]">Horário de Atendimento</p>
          <p className="text-sm text-[#444]">Segunda a sexta das 9h às 18h</p>

          <p className="text-base text-[#444] mt-3">Setor Comercial</p>
          <p className="text-sm text-[#444]">Segunda a sexta das 9h às 20h | Sábado das 9h às 16h</p>

          <p className="text-base text-[#444] mt-3">Suporte</p>
          <p className="text-sm text-[#444]">Todos os dias das 6h às 24h</p>
        </div>

        {/* Coluna direita — 2 linhas de 4 cards, alinhados à direita */}
        <div className="md:w-[50%] flex flex-col gap-3 items-end">
          {/* Linha 1 — acesso rápido */}
          <div className="grid grid-cols-4 gap-2 w-full">
            {acessoCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target={card.external ? '_blank' : '_self'}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="bg-white border border-[#dcdcdc] rounded-none aspect-square flex flex-col items-start justify-center gap-2 p-3 hover:shadow-md transition-shadow"
              >
                <img src={card.icon} alt={card.title} className="w-8 h-8 object-contain" />
                <span className="text-sm text-[#444] leading-tight whitespace-pre-line">{card.title}</span>
              </a>
            ))}
          </div>

          {/* Linha 2 — atendimento telefônico */}
          <div className="grid grid-cols-4 gap-2 w-full">
            {atendimentoCards.map((card) => (
              <button
                key={card.title}
                onClick={() => openModal(card.type)}
                className="bg-white border border-[#dcdcdc] rounded-none aspect-square flex flex-col items-start justify-center gap-1 p-3 hover:shadow-md transition-shadow text-left"
              >
                <img src={card.icon} alt={card.title} className="w-8 h-8 object-contain" />
                <span className="text-sm text-[#444] whitespace-pre-line">{card.title}</span>
                <span className="text-sm text-[#444] whitespace-pre-line">{card.phone}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <FormModal isOpen={isModalOpen} onClose={closeModal} type={selectedType} />
      )}
    </div>
  );
}

export default ClienteAtendimento;
