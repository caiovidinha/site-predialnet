import React from 'react';

function Footer() {
  return (
    <div className=" bg-[#dedede] py-12 font-sans text-[#231f20]">
      <div className="flex flex-wrap items-end justify-between px-[12%]">
        {/* Logotipo da Predialnet */}
        <div className="flex">
          <img src="img/logo.png" alt="Predialnet Logo" className="h-10" />
        </div>
        
        {/* Texto de direitos reservados */}
        <p className="text-sm text-[#6d6e70]">
          Predialnet – Provedor de Internet @ 2024 – Todos os direitos reservados.
        </p>

        {/* Texto de desenvolvimento */}
        <p className="text-sm text-[#6d6e70]">
          Site desenvolvido por Jump IMKT
        </p>
      </div>
    </div>
  );
}

export default Footer;
