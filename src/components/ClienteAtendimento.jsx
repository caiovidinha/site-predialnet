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
    { icon: '/img/suporte.svg', title: 'Suporte', phone: 'Enviar mensagem', type: 'suporte' },
    { icon: '/img/financeiro.svg', title: 'Financeiro', phone: 'Enviar mensagem', type: 'financeiro' },
    { icon: '/img/cancelameto.svg', title: 'Cancelamento', phone: 'Enviar mensagem', type: 'cancelamento' },
    { icon: '/img/sac.svg', title: 'SAC', phone: 'Enviar mensagem', type: 'contato' },
  ];

  const blocos = [
    { titulo: 'Horário de Atendimento', detalhe: 'Segunda a sexta das 9h às 18h' },
    { titulo: 'Comercial', detalhe: 'Segunda a sexta das 8h às 20h | Sábado das 9h às 15h' },
    { titulo: 'Suporte', detalhe: 'Todos os dias das 6h às 24h', tel: '2135150500', telLabel: '3515-0500', email: 'suporte@predialnet.com.br' },
    { titulo: 'Financeiro', tel: '2135150555', telLabel: '3515-0555', email: 'financeiro@predialnet.com.br' },
    { titulo: 'Cancelamento', tel: '2135150555', telLabel: '3515-0555', email: 'cancelamento@predialnet.com.br' },
    { titulo: 'SAC', tel: '08008787319', telLabel: '08008787319', email: 'sac@predialnet.com.br' },
  ];

  const Contato = ({ b }) => (
    <>
      <a href={`tel:${b.tel}`} className="text-[#9c0004] hover:underline transition-all">{b.telLabel}</a>
      <span className="text-[#bbb]">{' | '}</span>
      <a href={`mailto:${b.email}`} className="hover:text-[#9c0004] hover:underline transition-all">{b.email}</a>
    </>
  );

  // Telefone e e-mail ficam na mesma linha do título só quando há largura para isso.
  const Linha = ({ b }) => b.tel && (
    <>
      <span className="hidden xl:inline">{' - '}</span>
      <span className="block xl:inline"><Contato b={b} /></span>
    </>
  );

  const Blocos = ({ mobile }) => (
    <>
      {blocos.map((b) => (
        <div key={b.titulo} className={mobile ? 'md:hidden block' : 'hidden md:block md:-mr-24 xl:-mr-32'}>
          {b.detalhe ? (
            <>
              <p className="text-base sm:text-lg text-[#444]">{b.titulo}</p>
              <p className="text-sm text-[#444] mb-2">{b.detalhe}<Linha b={b} /></p>
            </>
          ) : (
            <p className="text-sm text-[#444] mb-2">
              <span className="text-base sm:text-lg text-[#444]">{b.titulo}</span>
              <Linha b={b} />
            </p>
          )}
        </div>
      ))}
    </>
  );

  return (
    <div id="ClienteAtendimento" className="px-6 sm:px-[8%] md:px-[12%] py-8 md:py-10 font-sans bg-[#ebebeb] text-[#3d3838]">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Coluna esquerda */}
          <div className="md:w-1/2 flex flex-col text-left justify-between pr-0 md:pr-40">
          <div>
            <p className="text-base sm:text-lg text-[#444] mb-2">Cliente Predialnet</p>
            <h1 className="text-[1.65rem] md:text-3xl leading-8 text-[#8a0005] font-light tracking-[-0.01em] mb-2">
              Atendimento
            </h1>
          </div>
          <Blocos />
        </div>

        {/* Coluna direita — começa na metade — 4 linhas x 2 colunas */}
          <div className="md:w-1/2 flex flex-col justify-between w-full pt-10 mb-3">
          {acessoCards.map((card, i) => (
            <div key={card.title} className="flex gap-4">
              <a
                href={card.href}
                target={card.external ? '_blank' : '_self'}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="flex-1 min-h-[72px] md:min-h-[auto] bg-white border border-[#dcdcdc] rounded-[4px] flex items-center gap-3 px-4 py-3 md:py-5 hover:shadow-md transition-shadow group mb-2 md:mb-0"
              >
                <img
                  src={card.icon}
                  alt=""
                  className="w-5 h-5 object-contain flex-shrink-0 transition-all group-hover:[filter:brightness(0)_saturate(100%)_invert(8%)_sepia(97%)_saturate(4000%)_hue-rotate(352deg)_brightness(82%)]"
                />
                <span className="text-xs font-semibold md:font-normal md:text-sm text-[#444] flex-1 leading-tight">{card.title}</span>
                <svg className="w-4 h-4 flex-shrink-0 text-[#aaa]" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <button
                onClick={() => openModal(atendimentoCards[i].type)}
                className="flex-1 min-h-[72px] md:min-h-[auto] bg-white border border-[#dcdcdc] rounded-[4px] flex items-center gap-3 px-4 py-3 hover:shadow-md transition-shadow text-left group mb-2 md:mb-0"
              >
                <img
                  src={atendimentoCards[i].icon}
                  alt=""
                  className="w-5 h-5 object-contain flex-shrink-0 transition-all group-hover:[filter:brightness(0)_saturate(100%)_invert(8%)_sepia(97%)_saturate(4000%)_hue-rotate(352deg)_brightness(82%)]"
                />
                <span className="text-xs font-semibold md:font-normal md:text-sm text-[#444] flex-1 leading-tight flex flex-col md:flex-row md:items-center">
                  <span>{atendimentoCards[i].title}</span>
                  <span className="text-[#888] text-[9px] md:text-[8pt] w-full flex md:justify-end">
                    <span className="hidden md:inline">&nbsp;</span>
                    {atendimentoCards[i].phone}
                  </span>
                </span>
                <svg className="w-4 h-4 flex-shrink-0 text-[#aaa] -ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
          
        </div>
        <div className="mt-3 md:hidden">
          <Blocos mobile />
        </div>
      </div>

      {isModalOpen && (
        <FormModal isOpen={isModalOpen} onClose={closeModal} type={selectedType} />
      )}
    </div>
  );
}

export default ClienteAtendimento;
