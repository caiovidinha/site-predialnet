"use client"

import { FaWhatsapp } from "react-icons/fa";


const SecNav = () => {
  return (
    <nav 
    className="pt-3 px-[12%] font-sans font-thin duration-300 transition-all justify-between flex flex-row"
    >
      <div className="w-full flex gap-8 items-center justify-start">
        <button className="text-[#9c0004] font-semibold">Planos</button>
        <button className="text-[#808080] font-semibold">Wi-Fi 6</button>
        <button className="text-[#808080] font-semibold">Telefonia Fixa</button>
        <button className="text-black font-semibold bg-[#f7adaf] text-sm px-8 py-2.5 rounded-full">APP Minha Predialnet</button>
      </div>
      <div className="w-full flex items-center justify-end gap-3">
        <div className="font-semibold">Assine também pelo telefone 21 3515-0555</div>
        <button className="p-2 bg-[#00a300] inline-block rounded-full text-xs font-medium uppercase leading-norma shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
          <FaWhatsapp className="relative" color={"white"} size={25}/></button>
        <button className="text-black font-semibold bg-[#f7adaf] text-sm px-8 py-2.5 rounded-full">Assinar Agora!</button>
      </div>
    </nav>
  );
};

export default SecNav;
