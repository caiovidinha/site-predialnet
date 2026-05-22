import React from 'react';
import { FaChevronRight } from "react-icons/fa6";

const actions = [
  {
    icon: '/img/iconeDesktop.avif',
    label: 'Assine pelo site',
    sub: 'ver disponibilidade',
    href: 'https://www.predialnet.com.br/assineja?plano=site',
    external: true,
  },
  {
    icon: '/img/iconeWhatsapp.avif',
    label: 'Assine pelo WhatsApp',
    sub: 'conversar',
    href: 'https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20da%20Predialnet.',
    external: true,
  },
  {
    icon: '/img/iconeTel.avif',
    label: 'Assine pelo telefone',
    sub: '21 3515-0555',
    href: 'tel:02135150555',
    external: false,
  },
];

function Contrate() {
  return (
    <div
      id="Contrate"
      className="relative font-sans overflow-hidden"
    >
      {/* Imagem define as dimensões reais da seção */}
      <img
        src="/img/fundo-contrate.webp"
        alt=""
        aria-hidden="true"
        className="w-full h-auto block"
      />

      <div className="absolute inset-0" />

      <div className="absolute inset-0 z-10 px-6 sm:px-[8%] md:px-[12%] py-16 flex flex-col md:flex-row items-center gap-10">
        {/* Esquerda — texto */}
        <div className="flex-1 flex flex-col justify-between h-full gap-6">
          <div>
            <p className="text-white text-sm mb-6">Contrate já!</p>
                <h1 className="text-3xl mb-6 font-light tracking-[-0.01em] text-white">
        Assine do seu jeito e venha<br />para Predialnet agora!
      </h1>
      <h2 className="text-lg font-light leading-6 text-white">
        A melhor internet fibra que vai<br />transformar sua casa
      </h2>
          </div>
          <img src="/img/logo-fibra-branca.png" alt="Predialnet Fibra" className="w-36 mt-4" />
        </div>

        {/* Direita — cards de ação */}
        <div className="w-full md:w-[42%] flex flex-col gap-3">
          {actions.map((action) => (
            <a
              key={action.href}
              href={action.href}
              target={action.external ? '_blank' : '_self'}
              rel={action.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 bg-transparent border-2 border-white/70 hover:border-white transition-colors rounded-lg px-5 py-4"
            >
              <img src={action.icon} alt={action.label} className="w-8 h-8 object-contain shrink-0" />
              <span className="flex-1 text-white text-lg ">
                {action.label}
                <span className="text-white">&nbsp;-&nbsp;{action.sub}</span>
              </span>
              <FaChevronRight className="text-white/60 shrink-0" size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contrate;
