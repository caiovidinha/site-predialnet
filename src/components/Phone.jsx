import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import FormModal from './FormModal'
function Phone() {
  // Estado para controlar se o modal do formulário está aberto ou não
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Função para abrir o modal do formulário
  const handleOpenModalForm = (plan) => {
    setSelectedPlan(plan)
    setIsModalFormOpen(true);
  };

  // Função para fechar o modal do formulário
  const handleCloseModalForm = () => {
    setIsModalFormOpen(false);
  };
  return (
    <>
      {/* Versão para Desktop */}
      <div id="Telefone" className="hidden md:block px-[12%] pt-10 pb-14 font-sans bg-[#f4f5f5] text-[#231f20]">
        <h1 className="text-3xl mb-1">Telefonia</h1>
        <h2 className="text-[#9e9e9e] text-xl">A melhor internet fibra também</h2>
        <h2 className="text-[#9e9e9e] text-xl -mt-1">é a melhor telefonia fixa</h2>

        <div className="mt-10 flex flex-row justify-between">
          <div
            id="plus"
            className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] w-[31%] rounded-3xl p-5 flex flex-col justify-around"
          >
            <h1 className="text-4xl">Ideal Plus</h1>
            <h2 className="text-lg">Com suporte para portabilidade</h2>
            <p className="text-4xl font-medium text-[#9c0004] mt-2 mb-1">
              R$ 59,90<span className="text-2xl font-semibold">/mês</span>
            </p>
            <button 
            onClick={() => handleOpenModalForm("Ideal Plus")}
            className="py-2 bg-[#9c0004] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform">
              Assinar pelo site
            </button>
            <a 
            href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20!%20Quero%20assinar%20o%20plano%20de%20telefonia%20Ideal%20Plus!"
            target="_blank"
            className="flex items-center justify-center gap-2 py-2 bg-[#2db640] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-4 hover:scale-105 transition-transform">
              <FaWhatsapp size={25}/> Assinar pelo WhatsApp
            </a>
            <p className="text-lg text-[#9e9e9e] mt-2">2000 minutos fixo/fixo local</p>
            <p className="text-lg text-[#9e9e9e]">100 minutos para qualquer móvel local</p>
            <p className="text-lg text-[#9e9e9e]">Com serviço de siga-me</p>
          </div>

          <div
            id="master"
            className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] w-[31%] rounded-3xl p-5 flex flex-col justify-around"
          >
            <h1 className="text-4xl">Ideal Master</h1>
            <h2 className="text-lg">Com suporte para portabilidade</h2>
            <p className="text-4xl font-medium text-[#9c0004] mt-2 mb-1">
              R$ 89,90<span className="text-2xl font-semibold">/mês</span>
            </p>
            <button 
            onClick={() => handleOpenModalForm("Ideal Master")}
            className="py-2 bg-[#9c0004] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform">
              Assinar pelo site
            </button>
            <a 
            href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20!%20Quero%20assinar%20o%20plano%20de%20telefonia%20Ideal%20Master!"
            target="_blank"
            className="flex items-center justify-center gap-2 py-2 bg-[#2db640] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-4 hover:scale-105 transition-transform">
              <FaWhatsapp size={25}/> Assinar pelo WhatsApp
            </a>
            <p className="text-lg text-[#9e9e9e] mt-2">Ilimitado fixo/fixo local</p>
            <p className="text-lg text-[#9e9e9e]">200 minutos para qualquer móvel local</p>
            <p className="text-lg text-[#9e9e9e]">Com serviço de siga-me</p>
          </div>

          <img
            src="img/telefonia.jpg"
            alt="Telefonia"
            className="shadow-[0px_0px_10px_10px_rgba(80,80,80,0.1)] w-[31%] rounded-3xl object-cover"
          />
        </div>
        <div className='mt-8 w-full flex items-center justify-left text-gray-400 flex-col'>
          <p className='text-xs w-full'> Consulte sobre as tarifas excedentes Predialfone. Exceto para ligações Nextel SME (rádio).
            Os valores acima são promocionais e estão sujeitos a alteração.</p>
        </div>
      </div>

      {/* Versão para Mobile */}
      <div id="Telefone2" className="md:hidden px-6 pt-10 pb-14 font-sans bg-[#f4f5f5] text-[#231f20]">
        <h1 className="text-3xl mb-1">Telefonia</h1>
        <h2 className="text-[#9e9e9e] text-xl leading-6">A melhor internet fibra também é a melhor telefonia fixa</h2>
        

        <div className="mt-8 flex flex-col gap-6">
          <div
            id="plus"
            className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] rounded-3xl p-5 flex flex-col justify-start"
          >
            <h1 className="text-4xl">Ideal Plus</h1>
            <h2 className="text-lg">Com suporte para portabilidade</h2>
            <p className="text-4xl font-medium text-[#9c0004] mt-2 mb-1">
              R$ 59,90<span className="text-2xl font-semibold">/mês</span>
            </p>
            <button 
            onClick={() => handleOpenModalForm("Ideal Plus")}
            className="py-3 bg-[#9c0004] text-white w-full rounded-full text-xl mt-2 font-light mb-1 active:scale-95 transition-transform">
              Aproveitar oferta
            </button>
            <a 
            href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20!%20Quero%20assinar%20o%20plano%20de%20telefonia%20Ideal%20Plus!"
            target="_blank"
            className="flex items-center justify-center gap-2 py-2 bg-[#2db640] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-4 hover:scale-105 transition-transform">
              <FaWhatsapp size={25}/> Assinar pelo WhatsApp
            </a>
            <p className="text-lg text-[#9e9e9e] mt-2">2000 minutos fixo/fixo local</p>
            <p className="text-lg text-[#9e9e9e]">100 minutos para qualquer móvel local</p>
          </div>

          <div
            id="master"
            className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] rounded-3xl p-5 flex flex-col justify-start"
          >
            <h1 className="text-4xl">Ideal Master</h1>
            <h2 className="text-lg">Com suporte para portabilidade</h2>
            <p className="text-4xl font-medium text-[#9c0004] mt-2 mb-1">
              R$ 89,90<span className="text-2xl font-semibold">/mês</span>
            </p>
            <button 
            onClick={() => handleOpenModalForm("Ideal Master")}
            className="py-3 bg-[#9c0004] text-white w-full rounded-full text-xl mt-2 font-light mb-1 active:scale-95 transition-transform">
              Aproveitar oferta
            </button>
            <a 
            href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20!%20Quero%20assinar%20o%20plano%20de%20telefonia%20Ideal%20Master!"
            target="_blank"
            className="flex items-center justify-center gap-2 py-2 bg-[#2db640] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-4 hover:scale-105 transition-transform">
              <FaWhatsapp size={25}/> Assinar pelo WhatsApp
            </a>
            <p className="text-lg text-[#9e9e9e] mt-2">Ilimitado fixo/fixo local</p>
            <p className="text-lg text-[#9e9e9e]">200 minutos para qualquer móvel local</p>
          </div>
        </div>
        <div className='mt-8 w-full flex items-center justify-left text-gray-400 flex-col'>
          <p className='text-xs w-full'> Consulte sobre as tarifas excedentes Predialfone. Exceto para ligações Nextel SME (rádio).
            Os valores acima são promocionais e estão sujeitos a alteração.</p>
        </div>
      </div>
        {isModalFormOpen && <FormModal isOpen={isModalFormOpen} onClose={handleCloseModalForm} type="telefonia" plan={selectedPlan} />  }
    </>
  );
}

export default Phone;
