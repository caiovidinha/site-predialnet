"use client";

import { FaWhatsapp } from "react-icons/fa";

const SecNav = () => {
  return (
    <>
      {/* Versão Desktop - Mantida inalterada */}
      <nav className="hidden sm:flex py-3 px-[12%] font-sans font-thin duration-300 transition-all justify-between flex-row bg-[#f3f3f3]">
        <div className="w-full flex gap-8 items-center justify-start">
          <a
            className="text-[#9e9e9e] hover:text-[#9c0004] hover:border-b-2 transition-all border-[#9c0004] font-semibold"
            href="#Plans"
          >
            Planos
          </a>
          <a
            className="text-[#9e9e9e] hover:text-[#9c0004] hover:border-b-2 transition-all border-[#9c0004] font-semibold"
            href="#WiFi6"
          >
            Wi-Fi 6
          </a>
          <a
            className="text-[#9e9e9e] hover:text-[#9c0004] hover:border-b-2 transition-all border-[#9c0004] font-semibold"
            href="#Telefone"
          >
            Telefonia Fixa
          </a>
          <a
            className="text-black font-semibold bg-[#f7adaf] text-sm px-8 py-2.5 rounded-full hover:scale-105 transition-transform"
            href="#App"
          >
            APP Minha Predialnet
          </a>
        </div>
        <div className="w-full flex items-center justify-end gap-3">
          <div className="font-semibold">
            Assine também pelo telefone 21 3515-0555
          </div>
          <a
            target="_blank"
            className="p-2 bg-[#00a300] inline-block rounded-full text-xs font-medium uppercase leading-normal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:scale-105"
            href="https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20da%20Predialnet."
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={25} color="white" />
          </a>
          <a
            target="_blank"
            className="text-black font-semibold bg-[#f7adaf] text-sm px-8 py-2.5 rounded-full hover:scale-105 transition-transform"
            href="https://www.predialnet.com.br/assineja"
            rel="noopener noreferrer"
          >
            Assinar Agora!
          </a>
        </div>
      </nav>

      {/* Versão Mobile */}
      <nav className="sm:hidden pb-0 bg-white flex items-center justify-between flex-wrap gap-2">
        {/* Botões Assine e Contato */}
        <div className="py-3 flex items-center space-x-2 w-full bg-[#f3f3f3] justify-between px-6">
          <a
            href="https://www.predialnet.com.br/assineja"
            target="_blank"
            className="bg-[#f7adaf] text-xs px-4 py-1.5 rounded-full font-semibold whitespace-nowrap hover:scale-105 transition-transform"
          >
            Assinar pelo site
          </a>
          <a
            href="tel:02135150555"
            className="border border-black px-4 py-1.5 rounded-full font-semibold text-xs whitespace-nowrap"
          >
            ou pelo telefone 3515-0555
          </a>
          <a href="https://minhaconta.predialnet.com.br" target="_blank">
          <img
            src="/img/icone_profile.png"
            alt="Perfil"
            className="w-7 h-8 mt-1"
          />
          </a>
        </div>

        {/* Ícones em uma linha, com fundo branco e espaçamento uniforme */}
        <div className="w-full bg-white pt-1 pb-2 flex justify-between px-6">
          {[
            {
              icon: "/img/iconeRoteador.png",
              title: `600 mega +<br />Wi-Fi 6`,
              link: "#600mega",
            },
            { icon: "/img/iconePlanos.png", title: "Planos<br />Internet", link: "#Plans" },
            { icon: "/img/iconeTelefonia.png", title: "Telefonia<br />Fixa", link: "#Telefone2" },
            { icon: "/img/iconeAcesso.png", title: "Acesso<br />rápido", link: "#Cliente2" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex flex-col items-center hover:scale-105 transition-transform w-1/4"
            >
              <img src={item.icon} alt={item.title} className="w-10 h-10 mb-0" />
              <p className="text-xs text-center whitespace-pre-wrap leading-tight" dangerouslySetInnerHTML={{__html:item.title}}/>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default SecNav;
