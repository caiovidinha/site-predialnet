import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-[#dedede] py-8 font-sans text-[#231f20] px-6 md:px-[12%]">
      <div className="flex flex-col md:flex-row items-center justify-between  gap-3">
        {/* Logotipo da Predialnet */}
        <div className="flex items-center">
          <img src="img/logo.png" alt="Predialnet Logo" className="h-10" />
        </div>

        {/* Ícones das redes sociais */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#231f20] hover:text-[#9c0004]"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#231f20] hover:text-[#9c0004]"
          >
            <FaFacebook size={24} />
          </a>
        </div>

        {/* Links de política de privacidade */}
        <div className="flex space-x-8">
          <a
            href="#"
            className="text-sm text-[#231f20] hover:text-[#9c0004] underline-offset-2 underline"
          >
            Política de Privacidade
          </a>
        </div>

        {/* Texto de direitos reservados */}
        <p className="text-center md:text-left text-xs text-[#231f20] w-full md:w-auto">
          Predialnet - Provedor de Internet &copy; 2024  Todos os direitos reservados.
        </p>

        {/* Texto de desenvolvimento */}
        <p className="text-center md:text-left text-xs text-[#231f20] w-full md:w-auto">
          Site desenvolvido por Jump IMKT
        </p>
      </div>
    </div>
  );
}

export default Footer;
