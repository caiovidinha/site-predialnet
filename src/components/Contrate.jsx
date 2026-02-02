import React, { useState } from 'react';
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import InfoModal from './InfoModal';
import { events } from '../utils/analytics';

function Contrate() {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  // Função para abrir o modal do Super Wi-Fi 6
  const handleOpenInfoModal = () => {
    setIsInfoModalOpen(true);
    events.infoModalOpen('wifi6');
  };

  // Função para fechar o modal do Super Wi-Fi 6
  const handleCloseInfoModal = () => {
    setIsInfoModalOpen(false);
  };
  return (
    <div id="WiFi6" className="bg-[#670c0c] px-6 sm:px-[8%] md:px-[12%] py-8 font-sans">

      {/* Versão para Desktop */}
      <div className="hidden md:flex flex-col">
        <div className="flex flex-row">
          <picture 
            onClick={() => handleOpenInfoModal()} 
            onKeyDown={(e) => e.key === 'Enter' && handleOpenInfoModal()}
            className="w-[51.5%] -ml-[1.5%] h-full cursor-pointer md:hover:scale-105 transition-transform"
            role="button"
            tabIndex={0}
            aria-label="Ver mais informações sobre Super Wi-Fi 6"
          >
            <source srcSet="img/cardA.avif" type="image/avif" />
            <source srcSet="img/cardA.webp" type="image/webp" />
            <img
              src="img/cardA.png"
              className="w-full h-full cursor-pointer md:hover:scale-105 transition-transform"
              alt="Super Wi-Fi 6"
            />
          </picture>
          
          <picture onClick={() => handleOpenInfoModal()} className="w-[51.5%] -mr-[1.5%] h-full cursor-pointer md:hover:scale-105 transition-transform">
            <source srcSet="img/cardB.avif" type="image/avif" />
            <source srcSet="img/cardB.webp" type="image/webp" />
            <img
              src="img/cardB.png"
              className="w-full h-full cursor-pointer md:hover:scale-105 transition-transform"
              alt="Super Wi-Fi 6"
            />
          </picture>
        </div>
        <div className="mt-4 flex flex-row justify-between">
          <div className="w-[33%]">
            <h3 className="text-white text-xl mb-3">Contrate já!</h3>
            <h2 className="text-[#ffbd17] text-3xl mb-3 font-medium">
              Assine do seu jeito e venha para Predialnet agora!
            </h2>
            <p className="text-white text-md mb-3">
              A melhor internet fibra que vai transformar sua casa
            </p>
          </div>

          <div>
            <picture>
              <source srcSet="img/iconeDesktop.avif" type="image/avif" />
              <source srcSet="img/iconeDesktop.webp" type="image/webp" />
              <img src="img/iconeDesktop.png" alt="Ícone Desktop" className="w-10 h-10" />
            </picture>
            <p className="text-white text-xl my-2 leading-6">Assine<br /> pelo site</p>
            <a
              className="flex items-center gap-2 py-2 px-4 rounded-full bg-[#ffbd17] md:hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.predialnet.com.br/assineja"
            >
              Consultar disponibilidade <FaArrowRight />
            </a>
          </div>

          <div>
            <picture>
              <source srcSet="img/iconeWhatsapp.avif" type="image/avif" />
              <source srcSet="img/iconeWhatsapp.webp" type="image/webp" />
              <img src="img/iconeWhatsapp.png" alt="Ícone WhatsApp" className="w-10 h-10" />
            </picture>
            <p className="text-white text-xl my-2 leading-6">Assine<br /> pelo WhatsApp</p>
            <a
              className="flex items-center gap-2 py-2 px-4 rounded-full bg-[#ffbd17] md:hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20da%20Predialnet."
            >
              Iniciar conversa <FaArrowRight />
            </a>
          </div>

          <div>
            <picture>
              <source srcSet="img/iconeTel.avif" type="image/avif" />
              <source srcSet="img/iconeTel.webp" type="image/webp" />
              <img src="img/iconeTel.png" alt="Ícone Telefone" className="w-10 h-10" />
            </picture>
            <p className="text-white text-xl my-2 leading-6">Assine<br /> pelo telefone</p>
            <a
              className="flex items-center gap-2 py-2 px-4 rounded-full bg-[#ffbd17] md:hover:scale-105 transition-transform"
              href="tel:02135150555"
            >
              21 3515-0555 <FaArrowRight />
            </a>
          </div>
        </div>
      </div>

      {/* Versão para Mobile */}
      <div className="block md:hidden">
        <div className="flex flex-col justify-between">
          <img
          onClick={() => handleOpenInfoModal()}
            src="img/cardAmobile.png"
            className="w-full h-full cursor-pointer transition-transform scale-110 active:scale-105"
            alt=""
          />
          <img
          onClick={() => handleOpenInfoModal()}
            src="img/cardBmobile.png"
            className="w-full h-full cursor-pointer transition-transform scale-110 active:scale-105"
            alt=""
          />
        </div>
        <div className="mt-4 flex flex-col justify-between gap-4">
          <div className="w-full">
            <h3 className="text-white text-2xl mb-3">Contrate já!</h3>
            <h2 className="text-[#ffbd17] text-3xl mb-3 font-medium">
              Assine do seu jeito e venha para Predialnet agora!
            </h2>
            <p className="text-white text-xl mb-3 leading-6">
              A melhor internet fibra que vai transformar sua casa
            </p>
          </div>

          {/* Assine pelo site */}
          <a
            href="https://www.predialnet.com.br/assineja"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center border-[1px] border-white rounded-lg py-4 px-6 cursor-pointer transition-transform active:scale-95 text-left"
          >
            <picture className="w-9 h-9 mr-4 self-start flex-shrink-0">
              <source srcSet="img/iconeDesktop.avif" type="image/avif" />
              <source srcSet="img/iconeDesktop.webp" type="image/webp" />
              <img src="img/iconeDesktop.png" alt="Ícone Desktop" className="w-9 h-9" />
            </picture>
            <p className="text-white text-lg leading-6 flex-1">
              Assine  pelo site
            </p>
            <FaChevronRight className="text-white text-2xl ml-auto" size={22} />
          </a>

          {/* Assine pelo WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20da%20Predialnet."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center border-[1px] border-white rounded-lg py-4 px-6 cursor-pointer transition-transform active:scale-95 text-left"
          >
            <picture className="w-9 h-9 mr-4 self-start flex-shrink-0">
              <source srcSet="img/iconeWhatsapp.avif" type="image/avif" />
              <source srcSet="img/iconeWhatsapp.webp" type="image/webp" />
              <img src="img/iconeWhatsapp.png" alt="Ícone WhatsApp" className="w-9 h-9" />
            </picture>
            <p className="text-white text-lg leading-6 flex-1">
              Assine  pelo WhatsApp
            </p>
            <FaChevronRight className="text-white text-2xl ml-auto" size={22} />
          </a>

          {/* Assine pelo telefone */}
          <a
            href="tel:02135150555"
            className="w-full flex items-center border-[1px] border-white rounded-lg py-4 px-6 cursor-pointer transition-transform active:scale-95 text-left"
          >
            <picture className="w-9 h-9 mr-4 self-start flex-shrink-0">
              <source srcSet="img/iconeTel.avif" type="image/avif" />
              <source srcSet="img/iconeTel.webp" type="image/webp" />
              <img src="img/iconeTel.png" alt="Ícone Telefone" className="w-9 h-9" />
            </picture>
            <p className="text-white text-lg leading-6 flex-1">
              Assine  pelo telefone
            </p>
            <FaChevronRight className="text-white text-2xl ml-auto"  size={22}/>
          </a>
        </div>
      </div>
      {isInfoModalOpen && (
        <InfoModal isOpen={isInfoModalOpen} onClose={handleCloseInfoModal} />
      )}
    </div>
  );
}

export default Contrate;
