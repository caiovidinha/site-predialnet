import React, { useEffect } from 'react';
import { FaWhatsapp } from "react-icons/fa";

const SpecialPlansModal = ({ isOpen, onClose, type, onSelectPlan  } ) => {
  if (!isOpen) return null;



// Texto das informações adicionais

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

const portoMaravilhaPlans = [
    {
        "plan": "60 mega",
        "price": "R$ 189,90/mês",
        "whatsapp": "https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20Quero%20assinar%20o%20plano%20residencial%20de%2060%20mega%20da%20Predialnet.%20Entrei%20em%20contato%20atrav%C3%A9s%20do%20site."
    },
    {
        "plan": "40 mega",
      "price": "R$ 129,90/mês",
      "whatsapp": "https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20Quero%20assinar%20o%20plano%20residencial%20de%2040%20mega%20da%20Predialnet.%20Entrei%20em%20contato%20atrav%C3%A9s%20do%20site."
    },
    {
        "plan": "30 mega",
        "price": "R$ 99,90/mês",
        "whatsapp": "https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20Quero%20assinar%20o%20plano%20residencial%20de%2030%20mega%20da%20Predialnet.%20Entrei%20em%20contato%20atrav%C3%A9s%20do%20site."
    },
    {
        "plan": "25 mega",
        "price": "R$ 89,90/mês",
        "whatsapp": "https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20Quero%20assinar%20o%20plano%20residencial%20de%2025%20mega%20da%20Predialnet.%20Entrei%20em%20contato%20atrav%C3%A9s%20do%20site."
    }
]

const viaRadioPlans = [
    {
        "plan": "10 mega",
        "price": "R$ 89,90/mês",
        "whatsapp": "https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20Quero%20assinar%20o%20plano%20via%20r%C3%A1dio%20de%2010%20mega%20da%20Predialnet.%20Entrei%20em%20contato%20atrav%C3%A9s%20do%20site."
    },
    {
        "plan": "8 mega",
        "price": "R$ 79,90/mês",
        "whatsapp": "https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20Quero%20assinar%20o%20plano%20via%20r%C3%A1dio%20de%208%20mega%20da%20Predialnet.%20Entrei%20em%20contato%20atrav%C3%A9s%20do%20site."
    },
    {
        "plan": "6 mega",
        "price": "R$ 64,90/mês",
        "whatsapp": "https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20Quero%20assinar%20o%20plano%20via%20r%C3%A1dio%20de%206%20mega%20da%20Predialnet.%20Entrei%20em%20contato%20atrav%C3%A9s%20do%20site."
    },
    {
        "plan": "5 mega",
        "price": "R$ 59,90/mês",
        "whatsapp": "https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20Quero%20assinar%20o%20plano%20via%20r%C3%A1dio%20de%205%20mega%20da%20Predialnet.%20Entrei%20em%20contato%20atrav%C3%A9s%20do%20site."
    }
]
// Seleciona os planos com base no tipo
const selectedPlans = type === "viaRadio" ? viaRadioPlans : portoMaravilhaPlans;
const additionalInfo =
  type === "viaRadio"
    ? "Condições para contratação por pessoa física, sem franquia de consumo, instalação sujeito à viabilidade técnica. Oferta válida para locais com cobertura via rádio."
    : "Condições para contratação por pessoa física, sem franquia de consumo. Para pessoa jurídica, consulte agente de vendas. Instalação sujeita a viabilidade técnica. Ofertas válidas para locais com cobertura via fibra.";
return (
    <div className="fixed inset-0 bg-[#9c0004] md:bg-black md:bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-8 relative overflow-y-auto mx-4 max-h-[90%]">
        {/* Botão de Fechar */}
        <button className="absolute top-1 md:top-4 right-3 md:right-8 text-gray-500 text-4xl font-thin" onClick={onClose}>
          &times;
        </button>

        {/* Título do Modal */}
        <h2 className="text-2xl md:text-3xl text-[#505050] mb-4 text-left font-normal">
          {type === "viaRadio" ? "Planos residenciais - VIA RÁDIO" : "Planos residenciais - PORTO MARAVILHA"}
        </h2>

        {/* Layout dos Planos e Informações Adicionais */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cards dos planos */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            {selectedPlans.map((plan, index) => (
              <div key={index} className="bg-[#9c0004] text-white p-4 flex flex-col justify-between items-center w-full md:flex-shrink-0 ">
                <h3 className="text-md mb-1 font-thin">Navegue com até</h3>
                <h2 className="text-2xl mb-5 font-normal">{plan.plan}</h2>
                <div className='h-[0.1px] w-full bg-white'/>
                <p className="text-base mt-5 mb-1 font-normal">Por apenas</p>
                <p className="text-xl mb-4 font-normal">{plan.price}</p>

                <div className="w-full flex flex-col items-center gap-2">
                    <p className='text-xs font-thin'>Contrate</p>
                    <button
                    onClick={() => onSelectPlan(plan.plan)}
                    className="bg-[#ffbd17] text-black py-2 px-4 rounded-full text-xs  w-full font-normal hover:bg-[#e6a30f] transition"
                  >
                        pelo site
                  </button>
                  <a 
                  href={plan.whatsapp}
                  target='_blank'
                  className="bg-[#2db640] text-white py-2 px-4 rounded-full text-xs w-full font-normal flex items-center justify-center gap-2 hover:bg-[#249c33] transition">
                    <FaWhatsapp size={18} />pelo WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Informações adicionais */}
          <div className="text-black md:w-1/5 md:flex-shrink-0 md:self-start">
            <p className="text-xs mb-4 font-normal">{additionalInfo}</p>
            {type !== "viaRadio" && (
              <>
                <p className="text-xs mb-2 font-normal">*Serviços Inteligentes:</p>
                <ul className="list-disc list-inside text-xs mb-4 font-normal">
                  <li>Controle Parental (1 licença): Permite ao titular da conta controlar o horário de utilização da sua Internet.</li>
                  <li>Navegação mais segura: Oferece tentativa de proteção contra conexões entrantes indesejadas.</li>
                  <li>Predial Protect (1 Licença): Auxilia o usuário na tentativa de identificar e bloquear sites fraudulentos.</li>
                </ul>
                <p className="text-xs font-normal">Consulte o Regulamento para gerenciamento dos Serviços Inteligentes.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialPlansModal;
