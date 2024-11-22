"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram,FaWhatsapp } from "react-icons/fa";

const Nav = () => {
  return (
    <>
      {/* Versão Desktop - Mantida inalterada */}
      <nav className="hidden sm:flex pb-2 py-2 px-[12%] font-sans font-thin duration-300 transition-all border-b-[2.5px] border-solid border-[#e3e3e3] items-center justify-between flex-row bg-[#f3f3f3]">
        <div className="container flex justify-between gap-8 items-center">
          <a href="/">
            <Image
              src="/img/logo.png"
              width="200"
              height="0"
              className="hover:scale-105 duration-300 ease-in hover:cursor-pointer"
              alt="Predialnet Logo"
            />
          </a>
          <ul className="flex space-x-4 justify-start items-center w-full mt-4 gap-4 tracking-normal h-full">
            <li>
              <Link href="/">
                <p className="text-[#9c0004] text-sm font-semibold duration-150 ease-in-out border-b-[#9c0004] border-solid border-b-2 h-full">
                  Para sua casa
                </p>
              </Link>
            </li>
            {/* <li>
              <Link href="/">
                <p className="text-[#9e9e9e] text-sm font-semibold duration-150 ease-in-out">
                  Para sua empresa
                </p>
              </Link>
            </li> */}
          </ul>
        </div>
        <div id="buttons" className="flex w-80 items-center justify-end">
          <div className="flex items-center justify-start gap-3">
            <a
              target="_blank"
              className="p-2 bg-[#9c0004] inline-block rounded-full text-xs font-medium uppercase leading-normal shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg hover:scale-105"
              href="https://instagram.com/predialnet"
            >
              <FaInstagram className="relative" color={"white"} size={20} />
            </a>
          </div>
          <div className="max-w-0.5 min-h-8 mx-4 bg-[#e3e3e3] p-[0.8px]"></div>
          <a
            href="https://minhaconta.predialnet.com.br"
            target="_blank"
            className="flex text-right items-center justify-end gap-2 flex-row text-sm rounded-lg text-black font-bold font-sans mt-4"
          >
            <img
              src="/img/icone_profile.png"
              className="w-6 h-6 object-contain"
              alt="Perfil"
            />
            <p className="hover:border-b-2 border-[#9c0004] transition-all ease-in-out duration-100">
              Já sou cliente
            </p>
          </a>
        </div>
      </nav>

      {/* Versão Mobile */}
      <nav className="sm:hidden px-6 py-3 font-sans bg-[#f3f3f3] border-b-2 border-gray-200 flex items-center justify-between">
        {/* Logotipo */}
        <a href="/">
          <img
            src="/img/logo.png"
            alt="Predialnet Logo"
            className="h-8 object-contain"
          />
        </a>

        {/* Links para "Para sua casa" e "Para sua empresa" */}
        <div className="flex items-end mt-3 space-x-3">
          <Link href="/">
            <p className="text-[#9c0004] text-sm font-semibold whitespace-nowrap">
              Para sua casa
            </p>
          </Link>
          <Link href="/">
            <p className="text-[#9e9e9e] text-sm font-semibold whitespace-nowrap opacity-0">
              ____________________
            </p>
          </Link>
        </div>

        {/* Botão Flutuante de WhatsApp */}
        <a
  href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20da%20Predialnet."
  target="_blank"
  className="fixed bottom-4 right-4 p-3 bg-[#00a300] rounded-full shadow-lg hover:scale-105 transition-transform z-50"
  rel="noopener noreferrer"
>
  <FaWhatsapp size={25} color="white" />
</a>
      </nav>
    </>
  );
};

export default Nav;
