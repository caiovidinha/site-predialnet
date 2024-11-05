"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const PlansModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button 
        // onClick={openModal}
        className="py-3 bg-[#9c0004] text-white w-full rounded-full text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform"
      >
        Aproveitar oferta
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative w-11/12 max-w-3xl bg-white rounded-lg overflow-hidden shadow-lg">
            {/* Botão de Fechar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              ✕
            </button>

            <div className="flex flex-wrap md:flex-nowrap p-8 bg-[#f4f5f5]">
              {/* Coluna do Plano */}
              <div className="flex flex-col w-full md:w-[40%] border-r-[3px] border-solid border-[#a7a7a7] pr-4">
                <h3 className="text-3xl font-semibold mb-2">Plano até</h3>
                <h1 className="text-5xl font-bold text-[#9c0004] mb-2">500 mega</h1>
                <p className="text-3xl text-[#9c0004] mb-2">R$ 99,90/mês</p>
                <p className="text-md mb-4">Instalação grátis</p>
                <p className="text-md mb-4">Sem fidelidade</p>
                <p className="text-center font-bold text-lg text-[#9c0004]">OU</p>
              </div>

              {/* Coluna da Oferta */}
              <div className="flex flex-col w-full md:w-[40%] pl-4 pr-4">
                <h3 className="text-3xl font-semibold mb-2">Oferta até</h3>
                <h1 className="text-5xl font-bold text-[#9c0004] mb-2">500 mega</h1>
                <p className="text-3xl text-[#9c0004] mb-2">R$ 99,90/mês</p>
                <p className="text-md mb-4">Instalação grátis</p>
                <p className="text-md mb-4">Sem fidelidade</p>
                <p className="text-md font-bold text-[#ffbd17] mb-4">Com Super Wi-Fi Gigabit</p>
                <p className="text-md font-bold text-[#ffbd17]">Serviços inteligentes</p>
              </div>

              {/* Coluna da Descrição */}
              <div className="flex flex-col w-full md:w-[20%] pl-4">
                <h3 className="font-semibold text-[#9c0004] mb-2">SEM FIDELIDADE. CANCELE A QUALQUER HORA</h3>
                <p className="text-sm mb-4 text-[#5c595b]">
                  Oferta com velocidade de até 500 mega. Condições para contratação por pessoa física, sem franquia de consumo. 
                  Instalação sujeita à viabilidade técnica. Ofertas válidas para locais com cobertura fibra óptica, exceto: Região 
                  do Porto Maravilha, e locais com tecnologia HPNA, Rádio ou FTTH. Consulte o Regulamento.
                </p>
                <p className="font-bold text-md mb-2">*Serviços Inteligentes:</p>
                <ul className="text-sm mb-2 text-[#5c595b] list-disc pl-4">
                  <li>Controle Parental (1 licença)</li>
                  <li>Navegação mais segura</li>
                  <li>Predial Protect (1 licença)</li>
                </ul>
                <p className="text-sm text-[#5c595b]">
                  Consulte o Regulamento para gerenciamento dos Serviços Inteligentes.
                </p>
                {/* Logotipo Predialnet */}
                <div className="mt-6 flex justify-between items-center">
                  <Image src="/img/logo.png" alt="Logo Predialnet" width={150} height={40} />
                  <p className="text-md font-semibold text-[#9c0004] cursor-pointer">
                    <a href="/regulamento" target="_blank">Regulamento</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlansModal;
