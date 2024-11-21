import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa6';
import SpecialPlansModal from './SpecialPlansModal';
import FormModal from './FormModal';

function Others() {
  const [isSpecialModalOpen, setIsSpecialModalOpen] = useState(false);
  const [selectedPlanType, setSelectedPlanType] = useState("");

  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  // Função para abrir o modal do formulário
  const handleOpenFormModal = (plan) => {
    console.log(plan)
    setSelectedPlan(plan);
    setIsSpecialModalOpen(false);
    setIsFormModalOpen(true);
  };

  // Função para fechar o modal do formulário
  const handleCloseFormModal = () => {
    setIsFormModalOpen(false);
  };

  const handleOpenModal = (planType) => {
    setSelectedPlanType(planType);
    setIsSpecialModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSpecialModalOpen(false);
  };
  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] py-8 md:pt-14 md:pb-14 font-sans bg-[#fff] text-[#231f20]">
      <div className="flex flex-col md:flex-row md:justify-around gap-6">
        <div
          id="radio"
          className="shadow-[0px_0px_8px_8px_rgba(100,100,100,0.07)] w-full md:w-[42%] rounded-3xl py-6 px-8 flex flex-col justify-around"
        >
          <h1 className="text-xl md:text-2xl mb-1 text-center ">Opções de planos de internet<br /><strong className='text-2xl'>Via rádio</strong></h1>
          <button 
            onClick={() => handleOpenModal("viaRadio")}
            className="py-2 bg-[#9c0004] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform">
              Assinar pelo site
            </button>
        </div>
        
        <div
          id="porto"
          className="shadow-[0px_0px_8px_8px_rgba(100,100,100,0.07)] w-full md:w-[42%] rounded-3xl py-6 px-8 flex flex-col justify-around"
        >
          <h1 className="text-xl md:text-2xl mb-1 text-center ">Opções de planos de internet para a região do <strong className='text-2xl'>Porto Maravilha</strong></h1>
          <button 
            onClick={() => handleOpenModal("portoMaravilha")}
            className="py-2 bg-[#9c0004] text-white w-full rounded-full text-lg sm:text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform">
              Assinar pelo site
            </button>
        </div>
      </div>
      {isSpecialModalOpen && <SpecialPlansModal
        isOpen={isSpecialModalOpen}
        onClose={handleCloseModal}
        type={selectedPlanType}
        onSelectPlan={handleOpenFormModal}
      />}
      {isFormModalOpen && (
        <FormModal
          isOpen={isFormModalOpen}
          onClose={handleCloseFormModal}
          type={selectedPlanType}
          plan={selectedPlan}
        />
      )}
    </div>
  );
}

export default Others;
