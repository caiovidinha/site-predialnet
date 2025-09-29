import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-[#dedede] py-8 font-sans text-[#231f20] px-6 md:px-[8%]">

     
      <div className="flex flex-col md:flex-row items-center justify-between  gap-3">
        {/* Logotipo da Predialnet */}
        <div className="flex items-center">
          <img src="img/logo.png" alt="Predialnet Logo" className="h-10" />
        </div>
        <div className='md:hidden'><p className='text-xs text-center w-full md:hidden block'>Rua da Conceição, 188 – sala 3108,
          Centro, Niterói – Rio de Janeiro
          <br />CEP: 24020-080</p></div>
        {/* Ícones das redes sociais */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/predialnet"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#231f20] hover:text-[#9c0004]"
          >
            <FaInstagram size={24} />
          </a>
          {/* <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#231f20] hover:text-[#9c0004]"
          >
            <FaFacebook size={24} />
          </a> */}
        </div>

        {/* Links de política de privacidade e relatórios */}
          <a
            href="/politica-de-privacidade"
            target='_blank'
            className="text-xs text-[#231f20] hover:text-[#9c0004] underline-offset-2 underline"
          >
            Política de Privacidade
          </a>
        <a
            href="/relatorios"
            target='_blank'
            className="text-xs text-[#231f20] hover:text-[#9c0004] underline-offset-2 underline"
          >
            Relatórios de Transparência e Igualdade Salarial
          </a>

        {/* Texto de direitos reservados */}
        <p className="text-center md:text-left text-xs text-[#231f20] w-full md:w-auto">
          Predialnet - Provedor de Internet &copy; 2025  Todos os direitos reservados.
        </p>

        {/* Texto de desenvolvimento */}
        <p className="text-center md:text-left text-xs text-[#231f20] w-full md:w-auto">
          Site desenvolvido por Jump IMKT
        </p>
      </div>
      <div><p className='mt-5 text-xs text-center w-full hidden md:block'>Rua da Conceição, 188 – sala 3108,
          Centro, Niterói – Rio de Janeiro
          CEP: 24020-080</p></div>
    </div>
  );
}

export default Footer;
