"use client"
import React, {useState} from 'react';
import { IoIosWifi } from "react-icons/io";
import PlansModal from './PlansModal';
import { FaWhatsapp } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';

function Plans() {
  
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [isModalOpen, setModalOpen] = useState(false)

  
  const openModal = (plan) => {
    setSelectedPlan(plan)
    setModalOpen(true)
  };
  const closeModal = () => {
    setModalOpen(false)
    setSelectedPlan(null)
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
    <div id='Plans' className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-14 font-sans bg-[#f4f5f5] text-[#231f20]">
      <h1 className="text-3xl sm:text-3xl mb-1 tracking-tight">Predialnet é muito mais velocidade e estabilidade</h1>
      <h2 className="text-[#9e9e9e] text-lg sm:text-xl leading-6 mb-16">Agora sua internet vai decolar com os novos planos Wi-Fi 6. + Conexão | + Velocidade |<br />+ Estabilidade | + Alcance</h2>
      
      <div className="mt-8 flex flex-col md:flex-row md:items-stretch justify-between gap-6">
        
      <div id="1giga" className="shadow-[0px_0px_7px_7px_rgba(0,0,0,0.3)] w-full md:w-[31%] rounded-3xl flex flex-col relative mb-10 md:mb-0">
          {/* Selinho Black Friday */}
          <div className="absolute -top-10 -left-0 z-10 bg-black rounded-lg px-3 py-2 flex items-center gap-2 shadow-lg w-full">
            {/* <Image src="/img/black-friday.png" alt="Black Friday" width={70} height={70} className=''/> */}
            <p className="text-white text-[10px] font-thin uppercase leading-tight">OFERTA PREDIALNET FRIDAY - Comece a pagar só em 2026</p>
          </div>
          
          <div className="rounded-t-3xl border-b-0 border-gray-200 px-6 pt-8 pb-3 flex-1">
            <h1 className="text-4xl dsm:text-4xl uppercase">1 GIGA</h1>
            <h2 className="text-lg">Mais alcance com <span className="text-[#008c4b]">Wi-Fi 6</span></h2>
            <p className="text-3xl sm:text-4xl font-medium text-[#9c0004] mt-2 mb-1">
              R$ 139,90<span className="text-xl sm:text-2xl font-semibold">/mês</span>
            </p>
            <button 
            onClick={() => openModal(plans[2])}
            className="py-2 bg-[#9c0004] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform">
              Assinar pelo site
            </button>
            <a 
            href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20!%20Quero%20assinar%20o%20plano%20de%201%20giga!"
            target="_blank"
            className="flex items-center justify-center gap-2 py-2 bg-[#2db640] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-4 hover:scale-105 transition-transform">
              <FaWhatsapp size={25}/> Assinar pelo WhatsApp
            </a>
            <p className="text-base sm:text-md text-[#9e9e9e] mt-2">Sem fidelidade</p>
            <p className="text-base sm:text-md text-[#9e9e9e]">Instalação grátis</p>
            <p className="text-base sm:text-md text-[#9e9e9e]">Serviços inteligentes</p>
          </div>
          <div className="rounded-b-3xl border-t-0 border-gray-200 px-6 py-6 bg-[#e9e9e9b6] min-h-[90px] flex items-center">
            <p className="flex flex-row items-center gap-2 text-base sm:text-md text-[#5c595b]">
              <IoIosWifi /> Plano com Super<span className='-ml-1 text-green-600'>Wi-Fi 6</span>
            </p>
          </div>
        </div>
        
  <div id="800mega" className="shadow-[0px_0px_7px_7px_rgba(0,0,0,0.3)] w-full md:w-[31%] rounded-3xl flex flex-col relative mb-2 md:mb-0">
          {/* Selinho Black Friday */}
          <div className="absolute -top-10 -left-0  z-10 bg-black rounded-lg px-3 py-2 flex items-center gap-2 shadow-lg w-full">
            {/* <Image src="/img/black-friday.png" alt="Black Friday" width={70} height={70} className=''/> */}
            <p className="text-white text-[10px] font-thin uppercase leading-tight">OFERTA PREDIALNET FRIDAY - Comece a pagar só em 2026</p>
          </div>
          
          <div className="rounded-t-3xl border-b-0 border-gray-200 px-6 pt-8 pb-3 flex-1">
            <h1 className="text-4xl sm:text-4xl uppercase">800 MEGA</h1>
            <h2 className="text-lg">Mais alcance com <span className="text-[#008c4b]">Wi-Fi 6</span></h2>
            <p className="text-3xl sm:text-4xl font-medium text-[#9c0004] mt-2 mb-1">
              R$ 124,90<span className="text-xl sm:text-2xl font-semibold">/mês</span>
            </p>
            <button 
            onClick={() => openModal(plans[1])}
            className="py-2 bg-[#9c0004] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform">
              Assinar pelo site
            </button>
            <a 
            href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20!%20Quero%20assinar%20o%20plano%20de%20800%20mega!"
            target="_blank"
            className="flex items-center justify-center gap-2 py-2 bg-[#2db640] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-4 hover:scale-105 transition-transform">
              <FaWhatsapp size={25}/> Assinar pelo WhatsApp
            </a>
            <p className="text-base sm:text-md text-[#9e9e9e] mt-2">Sem fidelidade</p>
            <p className="text-base sm:text-md text-[#9e9e9e]">Instalação grátis</p>
            <p className="text-base sm:text-md text-[#9e9e9e]">Serviços inteligentes</p>
          </div>
          <div className="rounded-b-3xl border-t-0 border-gray-200 px-6 py-6 bg-[#e9e9e9b6] min-h-[90px] flex items-center">
            <p className="flex flex-row items-center gap-2 text-base sm:text-md text-[#5c595b]">
              <IoIosWifi /> Plano com Super <span className="text-[#008c4b]">Wi-Fi 6</span>
            </p>
          </div>
        </div>

  <div id="600mega" className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] w-full md:w-[31%] rounded-3xl flex flex-col">
          <div className="rounded-t-3xl border-b-0 border-gray-200 px-6 pt-8 pb-3 flex-1">
            <h1 className="text-4xl sm:text-4xl tracking-tight uppercase">600 MEGA</h1>
            <h2 className="text-lg">Com Super Wi-Fi Gigabit</h2>
            <p className="text-3xl sm:text-4xl font-medium text-[#9c0004] mt-2 mb-1">
              R$ 99,90<span className="text-xl sm:text-2xl font-semibold">/mês</span>
            </p>
            <button 
            onClick={() => openModal(plans[0])}
            className="py-2 bg-[#9c0004] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform">
              Assinar pelo site
            </button>
            <a 
            href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20!%20Quero%20assinar%20o%20plano%20de%20600%20mega!"
            target="_blank"
            className="flex items-center justify-center gap-2 py-2 bg-[#2db640] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-4 hover:scale-105 transition-transform">
              <FaWhatsapp size={25}/> Assinar pelo WhatsApp
            </a>
          
            
            <p className="text-base sm:text-md text-[#9e9e9e] mt-2">Sem fidelidade</p>
            <p className="text-base sm:text-md text-[#9e9e9e]">Instalação grátis</p>
            <p className="text-base sm:text-md text-[#9e9e9e]">Serviços inteligentes</p>
          </div>
          <div className="rounded-b-3xl border-t-0 border-gray-200 px-6 py-6 bg-[#e9e9e9b6] min-h-[90px] flex items-center">
            <p className="flex flex-row items-center gap-2 text-base sm:text-md text-[#5c595b]">
              <IoIosWifi /> Plano com Super Wi-Fi Gigabit
            </p>
          </div>
        </div>
      </div>
        <div className='mt-8 w-full flex items-center justify-left text-gray-400 flex-col'>
          <p className='text-xs w-full '>Consulte o Regulamento para gerenciamento dos Serviços Inteligentes.</p>
          <p className='text-xs'>OBS: Condições para contratação por pessoa física, sem franquia de consumo. 
            Instalação sujeito a viabilidade técnica. Ofertas válidas para locais com cobertura fibra óptica, exceto: 
            Região do Porto Maravilha, e locais com tecnologia Rádio ou FTTH. Consulte o Regulamento.</p>
        </div>
        <div className='mt-6 w-full flex items-center justify-center'>
          <a href='/documentos' className='flex flex-row gap-1 items-start justify-center border-[#9c0004] hover:border-b-2 transition-all duration-75'> <Image src="/img/regulamento.png" alt="Documento" width={15} height={15} className='mt-0.5'/> Documentos</a>
        </div>
      {selectedPlan && <PlansModal isOpen={isModalOpen} onClose={closeModal} plan={selectedPlan} />  }
    </div>
  );
}

export default Plans;

