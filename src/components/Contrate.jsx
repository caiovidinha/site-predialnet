import React from 'react';
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function Contrate() {
  return (
    <div id="WiFi6" className="bg-[#670c0c] px-6 sm:px-[8%] md:px-[12%] py-8 font-sans">

      {/* Versão para Desktop */}
      <div className="hidden md:block">
        <div className="flex flex-row justify-between">
          <img
            src="img/carda.png"
            className="w-[51.5%] -ml-[1.5%] h-full cursor-pointer md:hover:scale-105 transition-transform"
            alt=""
          />
          <img
            src="img/cardb.png"
            className="w-[51.5%] h-full cursor-pointer md:hover:scale-105 transition-transform"
            alt=""
          />
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
            <img src="img/iconeDesktop.png" alt="" className="w-10 h-10" />
            <p className="text-white text-xl my-2 leading-6">Assine<br /> pelo site</p>
            <a
              className="flex items-center gap-2 py-2 px-4 rounded-full bg-[#ffbd17] md:hover:scale-105 transition-transform"
              target="_blank"
              href="https://www.predialnet.com.br/assineja"
            >
              Consultar disponibilidade <FaArrowRight />
            </a>
          </div>

          <div>
            <img src="img/iconeWhatsapp.png" alt="" className="w-10 h-10" />
            <p className="text-white text-xl my-2 leading-6">Assine<br /> pelo WhatsApp</p>
            <a
              className="flex items-center gap-2 py-2 px-4 rounded-full bg-[#ffbd17] md:hover:scale-105 transition-transform"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20da%20Predialnet."
            >
              Iniciar conversa <FaArrowRight />
            </a>
          </div>

          <div>
            <img src="img/iconeTel.png" alt="" className="w-10 h-10" />
            <p className="text-white text-xl my-2 leading-6">Assine<br /> pelo telefone</p>
            <a
              className="flex items-center gap-2 py-2 px-4 rounded-full bg-[#ffbd17] md:hover:scale-105 transition-transform"
              href="tel:2135150555"
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
            src="img/cardAmobile.png"
            className="w-full h-full cursor-pointer transition-transform scale-110"
            alt=""
          />
          <img
            src="img/cardBmobile.png"
            className="w-full h-full cursor-pointer transition-transform scale-110"
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
            className="w-full flex items-center border-[1px] border-white rounded-lg py-4 px-6 cursor-pointer transition-transform active:scale-95 text-left"
          >
            <img src="img/iconeDesktop.png" alt="" className="w-9 h-9 mr-4 self-start" />
            <p className="text-white text-lg leading-6 flex-1">
              Assine  pelo site
            </p>
            <FaChevronRight className="text-white text-2xl ml-auto" size={22} />
          </a>

          {/* Assine pelo WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20da%20Predialnet."
            target="_blank"
            className="w-full flex items-center border-[1px] border-white rounded-lg py-4 px-6 cursor-pointer transition-transform active:scale-95 text-left"
          >
            <img src="img/iconeWhatsapp.png" alt="" className="w-9 h-9 mr-4 self-start" />
            <p className="text-white text-lg leading-6 flex-1">
              Assine  pelo WhatsApp
            </p>
            <FaChevronRight className="text-white text-2xl ml-auto" size={22} />
          </a>

          {/* Assine pelo telefone */}
          <a
            href="tel:2135150555"
            className="w-full flex items-center border-[1px] border-white rounded-lg py-4 px-6 cursor-pointer transition-transform active:scale-95 text-left"
          >
            <img src="img/iconeTel.png" alt="" className="w-9 h-9 mr-4 self-start" />
            <p className="text-white text-lg leading-6 flex-1">
              Assine  pelo telefone
            </p>
            <FaChevronRight className="text-white text-2xl ml-auto"  size={22}/>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Contrate;
