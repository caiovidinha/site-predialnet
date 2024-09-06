"use client"


import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav 
    className="p-4 pb-8 font-sans font-thin duration-300 transition-all bg-[#9c0004]"
    >
      <div className="container mx-auto flex justify-between gap-8 items-center mt-6">
        <a href="/">
        <Image
        src="/img/logo_branca.png"
        width="330"
        height="0"
        className="hover:scale-105 duration-300 ease-in hover:cursor-pointer"
        />
        </a>
        <ul className="flex space-x-4 justify-start w-full mt-5 gap-4 tracking-widest">
          <li>
            <Link href="/about">
              <p className="text-[#f5f5f5] hover:text-red-400 hover:font-medium duration-150 ease-in-out">Sobre</p>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <p className="text-[#f5f5f5] hover:text-red-400 hover:font-medium duration-150 ease-in-out">Serviços</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="text-[#f5f5f5] hover:text-red-400 hover:font-medium duration-150 ease-in-out">Contato</p>
            </Link>
          </li>
        </ul>
        <div id="buttons" className="flex flex-row gap-3">
          <button onClick={()=> window.location.href ="https://minhaconta.predialnet.com.br/"} className="shadow-lg w-48 bg-yellow-400 hover:bg-yellow-600 hover:scale-105 duration-200 ease-in-out p-3 rounded-lg text-black font-bold font-sans uppercase">
            Assine agora
          </button>
          <button onClick={()=> window.location.href ="https://minhaconta.predialnet.com.br/"} className="shadow-lg w-48 bg-white hover:bg-red-400 hover:scale-105 duration-200 ease-in-out p-3 rounded-lg text-[#9c0004] hover:text-white font-bold font-sans uppercase">
            Área do cliente
          </button>
          <button onClick={()=> window.location.href ="https://minhaconta.predialnet.com.br/"} className="shadow-lg bg-white hover:bg-red-400 hover:scale-105 duration-200 ease-in-out px-4 rounded-lg text-[#9c0004] hover:text-white font-bold font-sans uppercase">
          <FaWhatsapp size={25}/>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
