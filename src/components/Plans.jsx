"use client"
import React, {useState} from 'react';
import { IoIosWifi } from "react-icons/io";
import PlansModal from './PlansModal';
import { FaWhatsapp } from 'react-icons/fa6';

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
      id: '500mega',
      title: '500 mega',
      valor: 'R$ 99,90',
      wifi: 'Com Super Wi-Fi Gigabit',
    },
    {
      id: '600mega',
      title: '600 mega',
      valor: 'R$ 124,90',
      wifi: 'Com Super Wi-Fi 6',
    },
    {
      id: '700mega',
      title: '700 mega',
      valor: 'R$ 139,90',
      wifi: 'Com Super Wi-Fi 6',
    },
  ];
  return (
    <div id='Plans' className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-14 font-sans bg-[#f4f5f5] text-[#231f20]">
      <h1 className="text-3xl sm:text-3xl mb-1 tracking-tight">Predialnet é muito mais velocidade e estabilidade</h1>
      <h2 className="text-[#9e9e9e] text-lg sm:text-xl leading-6">Agora sua internet vai decolar com os novos planos Wi-Fi 6. + Conexão | + Velocidade |<br />+ Estabilidade | + Alcance</h2>
      
      <div className="mt-8 flex flex-col md:flex-row justify-between gap-6">
        <div id="500mega" className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] w-full md:w-[31%] rounded-3xl">
          <div className="rounded-t-3xl border-b-0 border-gray-200 border-[2px] px-6 pt-8 pb-3">
            <h1 className="text-4xl sm:text-4xl tracking-tight">500 mega</h1>
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
            href="https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20!%20Quero%20assinar%20o%20plano%20de%20500%20mega!"
            target="_blank"
            className="flex items-center justify-center gap-2 py-2 bg-[#2db640] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-4 hover:scale-105 transition-transform">
              <FaWhatsapp size={25}/> Assinar pelo WhatsApp
            </a>
          
            
            <p className="text-base sm:text-lg text-[#9e9e9e] mt-2">Super Wi-Fi Gigabit</p>
            <p className="text-base sm:text-lg text-[#9e9e9e]">Instalação grátis | Sem fidelidade</p>
          </div>
          <div className="rounded-b-3xl border-t-0 border-gray-200 border-[2px] px-6 py-6 bg-[#e9e9e9b6]">
            <p className="flex flex-row items-center gap-2 text-base sm:text-lg text-[#5c595b]">
              <IoIosWifi /> 1 Ponto Wi-Fi Gigabit incluído
            </p>
          </div>
        </div>

        <div id="600mega" className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] w-full md:w-[31%] rounded-3xl">
          <div className="rounded-t-3xl border-b-0 border-gray-200 border-[2px] px-6 pt-8 pb-3">
            <h1 className="text-4xl sm:text-4xl">600 mega</h1>
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
            href="https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20!%20Quero%20assinar%20o%20plano%20de%20600%20mega!"
            target="_blank"
            className="flex items-center justify-center gap-2 py-2 bg-[#2db640] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-4 hover:scale-105 transition-transform">
              <FaWhatsapp size={25}/> Assinar pelo WhatsApp
            </a>
            <p className="text-base sm:text-lg text-[#9e9e9e] mt-2">Wi-Fi 6 - Mais conectividade</p>
            <p className="text-base sm:text-lg text-[#9e9e9e]">Instalação grátis | Sem fidelidade</p>
          </div>
          <div className="rounded-b-3xl border-t-0 border-gray-200 border-[2px] px-6 py-6 bg-[#e9e9e9b6]">
            <p className="flex flex-row items-center gap-2 text-base sm:text-lg text-[#5c595b]">
              <IoIosWifi /> 1 Ponto <span className="text-[#008c4b]">Wi-Fi 6</span> incluído
            </p>
          </div>
        </div>

        <div id="700mega" className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] w-full md:w-[31%] rounded-3xl">
          <div className="rounded-t-3xl border-b-0 border-gray-200 border-[2px] px-6 pt-8 pb-3">
            <h1 className="text-4xl dsm:text-4xl">700 mega</h1>
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
            href="https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20!%20Quero%20assinar%20o%20plano%20de%20700%20mega!"
            target="_blank"
            className="flex items-center justify-center gap-2 py-2 bg-[#2db640] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-4 hover:scale-105 transition-transform">
              <FaWhatsapp size={25}/> Assinar pelo WhatsApp
            </a>
            <p className="text-base sm:text-lg text-[#9e9e9e] mt-2">Wi-Fi 6 - Mais conectividade</p>
            <p className="text-base sm:text-lg text-[#9e9e9e]">Instalação grátis | Sem fidelidade</p>
          </div>
          <div className="rounded-b-3xl border-t-0 border-gray-200 border-[2px] px-6 py-6 bg-[#e9e9e9b6]">
            <p className="flex flex-row items-center gap-2 text-base sm:text-lg text-[#5c595b]">
              <IoIosWifi /> 1 Ponto <span className="text-[#008c4b]">Wi-Fi 6</span> incluído
            </p>
          </div>
        </div>
      </div>
      {selectedPlan && <PlansModal isOpen={isModalOpen} onClose={closeModal} plan={selectedPlan} />  }
    </div>
  );
}

export default Plans;

