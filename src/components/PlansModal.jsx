import React, { useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const PlansModal = ({ isOpen, onClose, plan }) => {
  // if (!isOpen) return null;
  return null;

  useEffect(() => {
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      // Re-enable scrolling on the body when the modal is closed
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div
    className=" font-sans fixed inset-0 md:bg-black md:bg-opacity-50 bg-[#9c0004] flex items-center justify-center z-50 overflow-hidden">
      <div className="bg-[#f2f2f2] rounded-lg pt-10 pb-8 md:py-20 px-6 md:px-10 max-w-5xl w-full mx-4 relative overflow-y-auto max-h-[70%] md:max-h-screen">
        {/* Botão de Fechar */}
        <button className="absolute top-1 md:top-4 right-3 md:right-8 text-gray-500 text-4xl font-thin" onClick={onClose}>
          &times;
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Seção 1: Colunas do Plano */}
          <div className="flex-1 md:flex hidden flex-col md:flex-row gap-6 relative w-full md:max-w-[41%] md:mr-10">
            {/* Coluna 1 */}
            <div className="bg-[#9c0004] text-white p-4 md:p-6 w-full flex flex-col justify-between text-center md:text-left">
              <div className='flex flex-col gap-2'>
                <p className="text-md text-center">Plano até</p>
                <h1 className="text-3xl md:my-2 font-normal">{plan.title}</h1>
                <p className="text-2xl">{plan.valor}<span className="text-sm">/mês</span></p>
                <p className="md:mt-2 md:mb-2 text-xs">Instalação grátis</p>
                <p className="text-xs">Sem fidelidade</p>
              </div>
              <a
                href='https://www.predialnet.com.br/assineja/?services=false'
                target='_blank'
                className="mt-4 md:mt-0 bg-[#ffbd17] text-black py-1 px-4 rounded-full text-sm flex items-center justify-center gap-2 active:scale-95 md:hover:scale-105 transition-transform"
              >
                Assinar
              </a>
            </div>

            {/* Circulo de "OU" */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#9c0004] text-white w-14 h-14 rounded-full hidden md:flex items-center justify-center border-2 border-white text-2xl">
              ou
            </div>

            {/* Coluna 2 */}
            <div className="bg-[#fff] text-[#9c0004] p-4 md:p-6 w-full flex flex-col justify-between text-center md:text-left">
              <div className='flex flex-col gap-2'>
                <p className="text-md text-center">Oferta até</p>
                <h1 className="text-3xl md:my-2 font-normal">{plan.title}</h1>
                <p className="text-2xl">{plan.valor}<span className="text-sm">/mês</span></p>
                <p className="md:mt-2 md:mb-2 text-xs hidden md:flex">Instalação grátis</p>
                <p className="text-xs hidden md:flex">Sem fidelidade</p>
                <div className="border-t-[1.5px] border-[#9c0004] my-3 hidden md:block"/>
                <p className='text-xs md:mb-2 hidden md:flex'>{plan.wifi}</p>
                <p className='text-xs hidden md:flex'>+ Serviços inteligentes</p>

                <div className='md:hidden flex flex-row w-full justify-around'>
                  <div className='flex flex-col items-start '>
                  <p className="md:mt-6 md:mb-2 text-xs">- Instalação grátis</p>
                  <p className="text-xs">- Sem fidelidade</p>
                  </div>
                
                  <div className='flex flex-col items-start '>
                  <p className='text-xs md:mb-2'>- {plan.wifi}</p>
                  <p className='text-xs'>- Serviços inteligentes</p>
                  </div>
                </div>

              </div>
              <a
                href='https://www.predialnet.com.br/assineja'
                target='_blank'
                className="mt-4 md:mt-0 bg-[#ffbd17] text-black py-1 px-4 rounded-full text-sm flex items-center justify-center gap-2 active:scale-95 md:hover:scale-105 transition-transform"
              >
                Assinar
              </a>
            </div>
          </div>
          
          
          {/* Seção 1: Colunas do Plano MOBILE*/}
          <div className="flex-1 md:hidden flex flex-col md:flex-row gap-6 relative w-full md:max-w-[41%] md:mr-10">
            {/* Coluna 1 */}
            <div className="bg-[#9c0004] text-white p-4 md:p-6 w-full flex flex-col justify-between text-center md:text-left">
              <div className='flex flex-col gap-2'>
                
                <p className="text-md text-center">Plano até</p>
                <div className="flex w-full justify-around">
                  <h1 className="text-3xl md:my-2 font-normal">{plan.title}</h1>
                  <p className="text-3xl font-extralight">|</p>
                  <p className="text-3xl">{plan.valor}<span className="text-sm">/mês</span></p>
                </div>
                <div className='flex justify-around'>
                  <p className="md:mt-6 md:mb-2 text-xs">Instalação grátis</p>
                  <p className="text-xs">Sem fidelidade</p>
                </div>
              </div>
              <a
                href='https://www.predialnet.com.br/assineja/?services=false'
                target='_blank'
                className="mt-4 md:mt-0 bg-[#ffbd17] text-black py-1 px-4 rounded-full text-sm flex items-center justify-center gap-2 active:scale-95 md:hover:scale-105 transition-transform"
              >
                Assinar
              </a>
            </div>

            {/* Circulo de "OU" */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#9c0004] text-white w-14 h-14 rounded-full hidden md:flex items-center justify-center border-2 border-white text-2xl">
              ou
            </div>

            {/* Coluna 2 */}
            <div className="bg-[#fff] text-[#9c0004] p-4 md:p-6 w-full flex flex-col justify-between text-center md:text-left">
              <div className='flex flex-col gap-2'>
                <p className="text-md text-center">Oferta até</p>
                <div className="flex w-full justify-around">
                  <h1 className="text-3xl md:my-2 font-normal">{plan.title}</h1>
                  <p className="text-3xl font-extralight">|</p>
                  <p className="text-3xl">{plan.valor}<span className="text-sm">/mês</span></p>
                </div>
                <div className="flex flex-row w-full justify-around">
                  <div className='flex flex-col items-start '>
                  <p className="md:mt-6 md:mb-2 text-xs">Instalação grátis</p>
                  <p className="text-xs">Sem fidelidade</p>
                  </div>
                
                  <div className='flex flex-col items-start '>
                  <p className='text-xs md:mb-2'>{plan.wifi}</p>
                  <p className='text-xs'>Serviços inteligentes</p>
                  </div>
                </div>

              </div>
              <a
                href='https://www.predialnet.com.br/assineja'
                target='_blank'
                className="mt-4 md:mt-0 bg-[#ffbd17] text-black py-1 px-4 rounded-full text-sm flex items-center justify-center gap-2 active:scale-95 md:hover:scale-105 transition-transform"
              >
                Assinar
              </a>
            </div>
          </div>
      {/* Seção 1: Colunas do Plano MOBILE ACIMA*/}


          {/* Seção 2: Descrição */}
          <div className="flex-1 ">
            <h1 className="text-[#9c0004] text-xl mb-4 hidden md:block">SEM FIDELIDADE . CANCELE A QUALQUER HORA</h1>
            <h2 className="font-bold text-sm">Oferta com velocidade de até {plan.title}</h2>
            <p className=" mb-4 leading-tight text-sm">
              Condições para contratação por pessoa física, sem franquia de consumo. Instalação sujeito a viabilidade técnica. Ofertas válidas para locais com
              cobertura fibra óptica, exceto: Região do Porto Maravilha, e locais com tecnologia HPNA, Rádio ou FTTH. Consulte o Regulamento.
            </p>
            <h2 className="font-bold text-sm">*Serviços Inteligentes:</h2>
            <ul className="list-inside mb-2 text-sm">
              <li className="leading-tight">
                Controle Parental (1 licença):<br />Permite ao titular da conta controlar o horário de utilização da sua Internet.
              </li>
              <li className="leading-tight">
                Navegação mais segura:<br />Oferece tentativa de proteção contra conexões entrantes indesejadas.
              </li>
              <li className="leading-tight">
                Predial Protect (1 Licença):<br />Auxilia o usuário na tentativa de identificar e bloquear sites fraudulentos.
              </li>
            </ul>
            <p className="text-sm md:mb-6 leading-tight">Consulte o Regulamento para gerenciamento dos Serviços Inteligentes.</p>
            <div className="border-t-2 border-black my-4"></div>
            <div className="flex items-end justify-between">
              <Image src="/img/logo.png" alt="Predialnet Logo" width={140} height={22} />
              <a href="https://www.predialnet.com.br/download/contrato-padrao-adesao-servico-internet.pdf" target="_blank" className="flex items-center gap-2 font-bold text-black text-md">
                <img src="/img/regulamento.png" alt="Regulamento" className="w-5 h-5" /> Regulamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansModal;
