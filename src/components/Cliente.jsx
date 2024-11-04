import React from 'react';

function Cliente() {
  return (
    <div className="px-[12%] py-10 font-sans bg-[#6e0000] text-[#231f20]">
      <div className="flex flex-row justify-between">
        
        <div className="w-full lg:w-[32%]">
            <h3 className='text-[#f8abad] text-lg'>Cliente Predialnet</h3>
          <h2 className="text-3xl font-medium text-white">Acesso fácil às principais
          funções de atendimento</h2>
          <p className="text-[#f8abad] text-lg">Resolva também pelo App Minha Predialnet
          </p>
          <p className="text-[#fff] -mt-2 text-lg">Baixe o App e gerencie seu plano</p>
        </div>

        {/* Cards de Contato */}
        <div className=" w-full lg:w-[58%] grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              iconSrc: 'img/iconeSuporte.png',
              title: 'Medidor de velocidade',
            },
            {
              iconSrc: 'img/iconeFinanceiro.png',
              title: '2ª via de conta',
            },
            {
              iconSrc: 'img/iconeCancelamento.png',
              title: 'Suporte técnico',
            },
            {
              iconSrc: 'img/iconeSAC.png',
              title: 'Gerenciar plano pelo App',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center rounded-3xl bg-white shadow-[0px_0px_10px_10px_rgba(240,5,11,0.3)] border-gray-200 border-[1.5px] py-6 px-4 w-36 h-40 text-center"
            >
              <img src={card.iconSrc}  className="w-10 h-10 mb-1" />
              <h4 className="text-md text-left">{card.title}</h4>
            </div>
          ))}
        </div>
      </div>


      <div className="flex flex-row justify-between mt-10">
        
        <div className="w-full lg:w-[32%]">
          <h2 className="text-3xl font-medium text-white">Que tal um upgrade no seu plano?</h2>
          <p className="text-[#f8abad] text-lg">Planos com Wi-Fi 6 que vão mudar sua experiência de conexão.
          </p>
        </div>
        <img src="img/600prov.jpg" alt="" className="shadow-[0px_0px_10px_10px_rgba(240,5,11,0.3)] w-[31%]  rounded-3xl object-cover" />
        <img src="img/700prov.jpg" alt="" className="shadow-[0px_0px_10px_10px_rgba(240,5,11,0.3)] w-[31%]  rounded-3xl object-cover" />
        </div>
    </div>
  );
}

export default Cliente;
