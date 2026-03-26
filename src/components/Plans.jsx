"use client";
import React, { useState, useEffect } from 'react';
import { IoIosWifi } from "react-icons/io";
import PlansModal from './PlansModal';
import { FaWhatsapp } from 'react-icons/fa6';

function Plans({ linkAssinar }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [highlightedPlan, setHighlightedPlan] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const banner = urlParams.get('banner');
    if (banner === 'E') {
      setHighlightedPlan('1giga'); // Quando banner=E, destacar o plano 1 giga
    }
    else{setHighlightedPlan('800mega')}
  }, []);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPlan(null);
  };

  const plans = [
    {
      id: 'gamer-pro',
      title: 'Plano Gamer Pro',
      valor: 'R$ 124,90',
      wifi: '1 giga pelo preço de 800 mega',
    },
    {
      id: '600mega',
      title: '600 mega',
      valor: 'R$ 99,90',
      wifi: 'Com Super Wi-Fi Gigabit',
    },
    {
      id: '800mega',
      title: '800 mega',
      valor: 'R$ 124,90',
      wifi: 'Com Super Wi-Fi 6',
    },
    {
      id: '1giga',
      title: '1 giga',
      valor: 'R$ 139,90',
      wifi: 'Com Super Wi-Fi 6',
    },
  ];

  return (
    <div id="Plans" className="px-[12%] pt-10 pb-14 font-sans bg-[#f4f5f5] text-[#231f20]">
      <h1 className="text-3xl sm:text-3xl mb-1 tracking-tight">Predialnet é muito mais velocidade e estabilidade</h1>
      <h2 className="text-[#9e9e9e] text-lg sm:text-xl leading-6">Agora sua internet vai decolar com os novos planos Wi-Fi 6. + Conexão | + Velocidade |<br />+ Estabilidade | + Alcance</h2>

      <div className="mt-8 flex flex-col md:flex-row justify-between gap-4">
        <div
          id="gamer-pro"
          className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] w-full md:w-[23%] rounded-3xl overflow-hidden"
          style={{ backgroundImage: "url('/img/fundo-plano-gamer.png')", backgroundSize: 'cover', backgroundPosition: 'center', brightness: '0.6' }}
        >
          <div className="px-4 pt-6 pb-4">
            <h1 className="text-2xl xl:text-3xl text-white">Plano Gamer Pro</h1>
            <h2 className="text-sm xl:text-base text-white">1 giga pelo preço de 800 mega</h2>

            <p className="text-2xl xl:text-3xl font-medium text-white mt-2 mb-1">
              R$ 124,90<span className="text-base font-medium">*</span><span className="text-lg xl:text-xl font-semibold">/mês</span>
            </p>
            <button
              onClick={() => openModal(plans[0])}
              className="py-1.5 bg-[#9c0004] text-white w-full rounded-full text-base xl:text-lg mt-2 font-light mb-1 hover:scale-105 transition-transform"
            >
              Assinar pelo site
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20Quero%20assinar%20o%20Plano%20Gamer%20Pro!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-1.5 bg-[#2db640] text-white w-full rounded-full text-base xl:text-lg mt-2 font-light mb-1 hover:scale-105 transition-transform"
            >
              <FaWhatsapp size={20} /> Assinar pelo WhatsApp
            </a>
            <p className="text-sm xl:text-base text-white mt-2">Sem fidelidade</p>
            <p className="text-sm xl:text-base text-white">Instalação grátis</p>
            <p className="text-sm xl:text-base text-white">Mais alcance com Wi-Fi 6</p>
            <p className="text-sm xl:text-base text-white">Serviços inteligentes</p>
            <div className="mt-3 pt-3 border-t border-white/30">
              <p className="flex items-center text-sm text-white">
                 Plano com <span className="text-[#008c4b]">&nbsp;dispositivo cabeado grátis</span>
              </p>
              <p className="text-xs text-white/60 mt-2">*Oferta válida pelos 3 primeiros meses, após R$ 139,90/mês</p>
            </div>
          </div>
        </div>

        <div
          id="1giga"
          className={`w-full md:w-[23%] rounded-3xl overflow-hidden border border-gray-200 flex flex-col ${
            highlightedPlan === '1giga' ? 'shadow-[0px_0px_7px_7px_rgba(8240,5,11,0.3)]' : 'shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)]'
          }`}
        >
          <div className="px-4 pt-6 pb-3 flex-1">
            <h1 className="text-2xl xl:text-3xl">1 giga</h1>
            <h2 className="text-sm xl:text-base">Mais alcance com <span className="text-[#008c4b]">Wi-Fi 6</span></h2>
            
            <p className="text-2xl xl:text-3xl font-medium text-[#9c0004] mt-2 mb-1">
              R$ 139,90<span className="text-lg xl:text-xl font-semibold">/mês</span>
            </p>
            <button
              onClick={() => openModal(plans[3])}
              className="py-1.5 bg-[#9c0004] text-white w-full rounded-full text-base xl:text-lg mt-2 font-light mb-1 hover:scale-105 transition-transform"
            >
              Assinar pelo site
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20!%20Quero%20assinar%20o%20plano%20de%201%20giga!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-1.5 bg-[#2db640] text-white w-full rounded-full text-base xl:text-lg mt-2 font-light mb-1 hover:scale-105 transition-transform"
            >
              <FaWhatsapp size={20} /> Assinar pelo WhatsApp
            </a>
            <p className="text-sm xl:text-base text-[#9e9e9e] mt-2">Sem fidelidade</p>
            <p className="text-sm xl:text-base text-[#9e9e9e]">Instalação grátis</p>
            <p className="text-sm xl:text-base text-[#9e9e9e]">Serviços inteligentes</p>
          </div>
          <div className="px-4 py-4 bg-[#e9e9e9b6] border-t border-gray-200">
            <p className="flex flex-row items-center text-sm text-[#5c595b]">
              <IoIosWifi className="mr-2"/> Plano com Super<span className="text-[#008c4b]">&nbsp;Wi-Fi 6</span>
            </p>
          </div>
        </div>

        <div id="800mega" className={`w-full md:w-[23%] rounded-3xl overflow-hidden border border-gray-200 flex flex-col ${highlightedPlan === '800mega' ? 'shadow-[0px_0px_7px_7px_rgba(8240,5,11,0.3)]' : 'shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)]'}`}>
          <div className="px-4 pt-6 pb-3 flex-1">
            <h1 className="text-2xl xl:text-3xl">800 mega</h1>
            <h2 className="text-sm xl:text-base">Mais alcance com <span className="text-[#008c4b]">Wi-Fi 6</span></h2>
            
            <p className="text-2xl xl:text-3xl font-medium text-[#9c0004] mt-2 mb-1">
              R$ 124,90<span className="text-lg xl:text-xl font-semibold">/mês</span>
            </p>
            <button
              onClick={() => openModal(plans[2])}
              className="py-1.5 bg-[#9c0004] text-white w-full rounded-full text-base xl:text-lg mt-2 font-light mb-1 hover:scale-105 transition-transform"
            >
              Assinar pelo site
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20!%20Quero%20assinar%20o%20plano%20de%20800%20mega!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-1.5 bg-[#2db640] text-white w-full rounded-full text-base xl:text-lg mt-2 font-light mb-1 hover:scale-105 transition-transform"
            >
              <FaWhatsapp size={20} /> Assinar pelo WhatsApp
            </a>
            <p className="text-sm xl:text-base text-[#9e9e9e] mt-2">Sem fidelidade</p>
            <p className="text-sm xl:text-base text-[#9e9e9e]">Instalação grátis</p>
            <p className="text-sm xl:text-base text-[#9e9e9e]">Serviços inteligentes</p>
          </div>
          <div className="px-4 py-4 bg-[#e9e9e9b6] border-t border-gray-200">
            <p className="flex flex-row items-center text-sm text-[#5c595b]">
              <IoIosWifi className="mr-2"/> Plano com Super<span className="text-[#008c4b]">&nbsp;Wi-Fi 6</span>
            </p>
          </div>
        </div>

        <div id="600mega" className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] w-full md:w-[23%] rounded-3xl overflow-hidden border border-gray-200 flex flex-col">
          <div className="px-4 pt-6 pb-3 flex-1">
            <h1 className="text-2xl xl:text-3xl tracking-tight">600 mega</h1>
            <h2 className="text-sm xl:text-base">Com Super Wi-Fi Gigabit</h2>
            
            <p className="text-2xl xl:text-3xl font-medium text-[#9c0004] mt-2 mb-1">
              R$ 99,90<span className="text-lg xl:text-xl font-semibold">/mês</span>
            </p>
            <button
              onClick={() => openModal(plans[1])}
              className="py-1.5 bg-[#9c0004] text-white w-full rounded-full text-base xl:text-lg mt-2 font-light mb-1 hover:scale-105 transition-transform"
            >
              Aproveitar oferta
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20!%20Quero%20assinar%20o%20plano%20de%20600%20mega!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-1.5 bg-[#2db640] text-white w-full rounded-full text-base xl:text-lg mt-2 font-light mb-1 hover:scale-105 transition-transform"
            >
              <FaWhatsapp size={20} /> Assinar pelo WhatsApp
            </a>
            <p className="text-sm xl:text-base text-[#9e9e9e] mt-2">Sem fidelidade</p>
            <p className="text-sm xl:text-base text-[#9e9e9e]">Instalação grátis</p>
            <p className="text-sm xl:text-base text-[#9e9e9e]">Serviços inteligentes</p>
          </div>
          <div className="px-4 py-4 bg-[#e9e9e9b6] border-t border-gray-200">
            <p className="flex flex-row items-center text-sm text-[#5c595b]">
              <IoIosWifi className="mr-2"/> Plano com Super Wi-Fi Gigabit
            </p>
          </div>
        </div>
      </div>
      {selectedPlan && <PlansModal isOpen={isModalOpen} onClose={closeModal} plan={selectedPlan} url={linkAssinar} />}
    </div>
  );
}

export default Plans;

