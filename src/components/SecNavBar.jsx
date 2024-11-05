"use client"

import { FaWhatsapp } from "react-icons/fa";


const SecNav = () => {
  return (
    <nav 
    className="pt-3 px-[12%] font-sans font-thin duration-300 transition-all justify-between flex flex-row"
    >
      <div className="w-full flex gap-8 items-center justify-start">
        <a className="text-[#9e9e9e] hover:text-[#9c0004] hover:border-b-2 transition-all border-[#9c0004] font-semibold" href="#Planos">Planos</a>
        <a className="text-[#9e9e9e] hover:text-[#9c0004] hover:border-b-2 transition-all border-[#9c0004] font-semibold" href="#WiFi6">Wi-Fi 6</a>
        <a className="text-[#9e9e9e] hover:text-[#9c0004] hover:border-b-2 transition-all border-[#9c0004] font-semibold" href="#Telefone">Telefonia Fixa</a>
        <a className="text-black font-semibold bg-[#f7adaf] text-sm px-8 py-2.5 rounded-full hover:scale-105 transition-transform" href="#App">APP Minha Predialnet</a>
      </div>
      <div className="w-full flex items-center justify-end gap-3">
        <div className="font-semibold">Assine também pelo telefone 21 3515-0555</div>
        <a className="hover:scale-105 p-2 bg-[#00a300] inline-block rounded-full text-xs font-medium uppercase leading-norma shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" href="https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20da%20Predialnet." target="_blank">
          <FaWhatsapp className="relative" color={"white"} size={25}/></a>
        <a target="_blank" className="text-black font-semibold bg-[#f7adaf] text-sm px-8 py-2.5 rounded-full hover:scale-105 transition-transform" href="https://www.predialnet.com.br/assineja">Assinar Agora!</a>
      </div>
    </nav>
  );
};

export default SecNav;
