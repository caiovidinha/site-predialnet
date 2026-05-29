"use client"
import React, {useState} from 'react';
import PlansModal from "./PlansModal"
import { events } from '../utils/analytics';

function Cliente() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    const device = window.innerWidth >= 768 ? 'desktop' : 'mobile';
    events.upgradeClick(plan.title, plan.valor, device);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };
  const plans = [
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
    <>
      {/* Versão para Desktop */}
      <div id="Cliente" className="hidden md:block px-6 sm:px-[8%] md:px-[12%] py-10 font-sans bg-[#6e0000] text-[#3d3838]">
        <div className="flex flex-row justify-between pt-2">
          <div className="w-full lg:w-[32%]">
            <h3 className="text-[#f8abad] text-lg">Cliente Predialnet</h3>
            <h2 className="text-[1.65rem] md:text-3xl leading-8 text-white">
              Acesso fácil às principais funções de atendimento
            </h2>
            {/* <p className="text-[#f8abad] mt-0.5 text-lg">
              Resolva também pelo App Minha Predialnet
            </p>
            <p className="text-[#fff] -mt-2 text-lg">Baixe o App e gerencie seu plano</p> */}
          </div>

          {/* Cards de Contato */}
          <div className="w-full lg:w-[60%] flex flex-row justify-end gap-4">
            {[
              {
                iconSrc: 'img/iconeMedidor.png',
                title: 'Medidor de velocidade',
                link: 'https://speedtest.predialnet.com.br',
              },
              {
                iconSrc: 'img/iconeConta.png',
                title: `2ª via
                <br />de conta`,
                link: 'https://minhaconta.predialnet.com.br',
              },
              {
                iconSrc: 'img/iconeSuporte.png',
                title: `Suporte
                <br />técnico`,
                link: '/#Atendimento',
              },
              {
                iconSrc: 'img/iconeProfile.png',
                title: 'Área do<br />cliente',
                link: 'https://minhaconta.predialnet.com.br',
              },
            ].map((card, index) => (
              <a
                key={index}
                className="flex flex-col items-start justify-center rounded-2xl bg-white shadow-[0px_0px_5px_5px_rgba(240,5,11,0.3)] border-gray-200 border-[1.5px] p-4 w-32 h-32 text-left hover:scale-105 transition-transform"
                href={card.link}
                target={card.link === '/#Atendimento' ? '_self' : '_blank'}
              >
                <picture>
                  <source srcSet={card.iconSrc.replace('.png', '.avif')} type="image/avif" />
                  <source srcSet={card.iconSrc.replace('.png', '.webp')} type="image/webp" />
                  <img src={card.iconSrc} className="w-6 h-6 mb-2 object-contain" alt={card.title} />
                </picture>
                <h4 className="text-sm leading-4 text-[#444]" dangerouslySetInnerHTML={{ __html: card.title }} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-row justify-between mt-2">
          <div className="w-full lg:w-[32%] mt-10">
            <h2 className="text-[1.65rem] md:text-3xl leading-8 text-white">Que tal um upgrade no seu plano?</h2>
            <p className="text-[#f8abad] text-lg leading-5 mt-1.5">
              Planos com Wi-Fi 6 que vão mudar sua experiência de conexão.
            </p>
          </div>

          <picture
            onClick={() => openModal(plans[1])}
            onKeyDown={(e) => e.key === 'Enter' && openModal(plans[1])}
            className="w-[40%] h-full -mr-8 hover:cursor-pointer hover:scale-105 transition-transform"
            role="button"
            tabIndex={0}
            aria-label="Fazer upgrade para plano de 800 mega"
          >
            <source srcSet="img/600prov.avif" type="image/avif" />
            <source srcSet="img/600prov.webp" type="image/webp" />
            <img
              src="img/600prov.png"
              alt="Plano 800 Mega"
              className="w-full h-full object-cover"
            />
          </picture>
          <picture
            onClick={() => openModal(plans[2])}
            onKeyDown={(e) => e.key === 'Enter' && openModal(plans[2])}
            className="w-[40%] h-full -mr-7 hover:cursor-pointer hover:scale-105 transition-transform"
            role="button"
            tabIndex={0}
            aria-label="Fazer upgrade para plano de 1 giga"
          >
            <source srcSet="img/700prov.avif" type="image/avif" />
            <source srcSet="img/700prov.webp" type="image/webp" />
            <img
              src="img/700prov.png"
              alt="Plano 1 Giga"
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
        {selectedPlan && (
        <PlansModal isOpen={isModalOpen} onClose={closeModal} plan={selectedPlan} />
      )}
      </div>

      {/* Versão para Mobile */}
      <div id="Cliente2" className="md:hidden px-6 py-10 font-sans bg-[#6e0000] text-[#3d3838]">
        <div className="flex flex-col">
          <div className="w-full mb-8">
            <h3 className="text-[#f8abad] text-base sm:text-lg">Cliente Predialnet</h3>
            <h2 className="text-[1.65rem] md:text-3xl leading-8 sm:text-3xl text-white mt-2">
              Acesso fácil às principais funções de atendimento
            </h2>
            {/* <p className="text-[#f8abad] mt-0.5 text-lg">
              Resolva também pelo App Minha Predialnet
            </p>
            <p className="text-[#fff] -mt-1 text-lg">Baixe o App e gerencie seu plano</p> */}
          </div>

          {/* Cards de Contato */}
          <div className="w-full grid grid-cols-2 gap-4">
            {[
              {
                iconSrc: 'img/iconeMedidor.png',
                title: 'Medidor de velocidade',
                link: 'https://speedtest.predialnet.com.br',
              },
              {
                iconSrc: 'img/iconeConta.png',
                title: `2ª via
                <br />de conta`,
                link: 'https://minhaconta.predialnet.com.br',
              },
              {
                iconSrc: 'img/iconeSuporte.png',
                title: `Suporte
                <br />técnico`,
                link: '/#Atendimento',
              },
              {
                iconSrc: 'img/iconeProfile.png',
                title: 'Área do<br />cliente',
                link: 'https://minhaconta.predialnet.com.br',
              },
            ].map((card, index) => (
              <a
                key={index}
                className="flex flex-col items-start justify-center rounded-2xl bg-white shadow-[0px_0px_5px_5px_rgba(240,5,11,0.3)] border-gray-200 border-[1.5px] p-3 w-full h-32 text-left active:scale-95 transition-transform"
                href={card.link}
                target={card.link === '/#Atendimento' ? '_self' : '_blank'}
              >
                <picture>
                  <source srcSet={card.iconSrc.replace('.png', '.avif')} type="image/avif" />
                  <source srcSet={card.iconSrc.replace('.png', '.webp')} type="image/webp" />
                  <img src={card.iconSrc} className="w-7 h-7 mb-1.5 object-contain" alt={card.title} />
                </picture>
                <h4 className="text-sm leading-4 text-[#444]" dangerouslySetInnerHTML={{__html: card.title}} />
              </a>
            ))}
          </div>

          
          {/* Seção Upgrade de Plano */}
          <div className="w-full mt-8">
            <h2 className="text-[1.65rem] md:text-3xl leading-8 sm:text-3xl text-white pr-20">Que tal um upgrade no seu plano?</h2>
            <p className="text-[#f8abad] text-base sm:text-lg leading-6 mt-1.5">
              Planos com Wi-Fi 6 que vão mudar sua experiência de conexão.
            </p>
          </div>
          


          <div className="w-full flex flex-col gap-1 mt-3">
            <img
              onClick={() => openModal(plans[1])}
              onKeyDown={(e) => e.key === 'Enter' && openModal(plans[1])}
              src="img/600prov.png"
              alt="600 mega Wi-Fi 6"
              className="w-full h-auto object-cover hover:cursor-pointer active:scale-105 transition-transform scale-110"
              role="button"
              tabIndex={0}
              aria-label="Fazer upgrade para plano de 800 mega com Wi-Fi 6"
            />
            
              <img
              onClick={() => openModal(plans[2])}
              onKeyDown={(e) => e.key === 'Enter' && openModal(plans[2])}
              src="img/700prov.png"
              alt="700 mega Wi-Fi 6"
              className="w-full h-auto object-cover hover:cursor-pointer active:scale-105 transition-transform scale-110"
              role="button"
              tabIndex={0}
              aria-label="Fazer upgrade para plano de 1 giga com Wi-Fi 6"
            />

            {selectedPlan && (
            <PlansModal isOpen={isModalOpen} onClose={closeModal} plan={selectedPlan} />
          )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cliente;
