import React, { useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const PlansModal = ({ isOpen, onClose, plan } ) => {
  if (!isOpen) return null;
  const url = 'https://www.predialnet.com.br/assineja?services=false'
  const urlSA = 'https://www.predialnet.com.br/assineja'
  const regulamentoURL = plan.title == "600 mega" 
  ? "https://www.predialnet.com.br/download/2025.07.28_a_2025.10.31_Oferta_Conjunta_2029_600.pdf" 
  : plan.title == "800 mega"
  ? "https://www.predialnet.com.br/download/2025.07.28_a_2025.10.31_Oferta_Conjunta_2029_800.pdf"
  : "https://www.predialnet.com.br/download/2025.07.28_a_2025.10.31_Oferta_Conjunta_2029_1_GB.pdf"



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
    className="font-sans fixed inset-0 bg-[#9c0004] md:bg-black md:bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-[#f2f2f2] rounded-lg pt-10 pb-8 md:py-20 px-6 md:px-10 max-w-5xl w-full mx-4 relative overflow-y-auto max-h-[70%] md:max-h-screen">
        {/* Botão de Fechar */}
        <button className="absolute top-1 md:top-4 right-3 md:right-8 text-gray-500 text-4xl font-thin" onClick={onClose}>
          &times;
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Seção 1: Colunas do Plano */}
          <div className="flex-1 flex flex-row gap-6 relative w-full md:max-w-[41%] md:mr-10">
            {/* Coluna 1 */}
            <div className="bg-white text-[#9c0004] p-4 md:p-6 w-full flex flex-col justify-between text-center md:text-left">
            <div className='flex flex-col gap-2 '>
                <p className="text-sm md:text-md text-center ">Plano até</p>
                <h1 className="text-2xl md:text-3xl md:my-2 font-normal ">{plan.title}</h1>
                
                <p className="text-xl md:text-2xl">{plan.valor}<span className="text-xs">/mês</span></p>
                <p className="mt-2 text-xs  px-1 md:px-0 text-left ">Instalação grátis</p>
                <p className="text-xs  px-1 md:px-0 text-left ">Sem fidelidade</p>
              </div>
              <a
                href={url}
                target='_blank'
                className="mt-4 md:mt-0 bg-[#ffbd17] text-black py-1 px-4 rounded-full text-sm flex items-center justify-center gap-2 active:scale-95 md:hover:scale-105 transition-transform"
              >
                Assinar
              </a>
            </div>

            {/* Circulo de "OU" */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#9c0004] text-white w-14 h-14 rounded-full flex items-center justify-center border-2 border-white text-2xl">
              ou
            </div>

            {/* Coluna 2 */}
            {
              plan.title=="jasndjsa"?
              <div className="bg-black text-white p-4 md:p-6 w-full flex flex-col justify-between text-center md:text-left ">
              <div className='flex flex-col gap-2 '>
                <p className="text-sm md:text-md text-center bg-gradient-to-r from-[#c48621] via-[#efd86d] to-[#c48621] inline-block text-transparent bg-clip-text">Oferta até</p>
                <h1 className="text-2xl md:text-3xl md:my-2 font-normal bg-gradient-to-r from-[#c48621] via-[#efd86d] to-[#c48621] inline-block text-transparent bg-clip-text">{plan.title}</h1>
                <h1 className="text-xs md:text-xs -mt-3 font-normal bg-gradient-to-r from-[#c48621] via-[#efd86d] to-[#c48621] inline-block text-transparent bg-clip-text">+100 mega de bônus nos doze primeiros meses</h1>
                <p className="text-xl md:text-2xl">{plan.valor}<span className="text-xs">/mês</span></p>
                <p className="mt-2 text-xs  px-1 md:px-0 text-left ">Instalação grátis</p>
                <p className="text-xs  px-1 md:px-0 text-left ">Sem fidelidade</p>
                <p className='text-xs    px-1 md:px-0 text-left font-bold'>{plan.wifi}</p>
                <p className='text-xs   px-1 md:px-0 text-left'>Serviços inteligentes*</p>
              </div>
              <a
                href={urlSA}
                target='_blank'
                className="mt-4 md:mt-0 bg-gradient-to-r from-[#c48621] via-[#efd86d] to-[#c48621]  text-black py-1 px-4 rounded-full text-sm flex items-center justify-center gap-2 active:scale-95 md:hover:scale-105 transition-transform"
              >
                Assinar
              </a>
            </div> :
            <div className="bg-[#9c0004] text-[#fff] p-4 md:p-6 w-full flex flex-col justify-between text-center md:text-left ">
            <div className='flex flex-col gap-2 '>
              <p className="text-sm md:text-md text-center ">Oferta até</p>
              <h1 className="text-2xl md:text-3xl md:my-2 font-normal ">{plan.title}</h1>
              
              <p className="text-xl md:text-2xl">{plan.valor}<span className="text-xs">/mês</span></p>
              <p className="text-sm md:text-md mt-2    px-1 md:px-0 text-left font-bold">{plan.wifi}</p>
              <p className="text-xs  px-1 md:px-0 text-left ">Instalação grátis</p>
              <p className="text-xs  px-1 md:px-0 text-left ">Sem fidelidade</p>
              <p className='text-xs   px-1 md:px-0 text-left'>Serviços inteligentes*</p>
            </div>
            <a
              href={urlSA}
              target='_blank'
              className="mt-4 md:mt-0 bg-[#ffbd17] text-black py-1 px-4 rounded-full text-sm flex items-center justify-center gap-2 active:scale-95 md:hover:scale-105 transition-transform"
            >
              Assinar
            </a>
          </div>}
          </div>
          
          
          


          {/* Seção 2: Descrição */}
          <div className="flex-1 ">
            <h1 className="text-[#9c0004] text-xl mb-4 hidden md:block">SEM FIDELIDADE . PREÇO FIXO ATÉ 2029</h1>
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
              <a href={regulamentoURL} target="_blank" className="flex items-center gap-1 font-bold text-black text-md">
                <img src="/img/regulamento.png" alt="Regulamento" className="w-4 h-4 mb-1" /> Regulamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansModal;
