import React from 'react';

function Cliente() {
  return (
    <div className="px-[12%] py-10 font-sans bg-[#6e0000] text-[#231f20]">
      <div className="flex flex-row justify-between pt-2">
        
        <div className="w-full lg:w-[32%]">
            <h3 className='text-[#f8abad] text-lg'>Cliente Predialnet</h3>
          <h2 className="text-3xl font-medium text-white">Acesso fácil às principais
          funções de atendimento</h2>
          <p className="text-[#f8abad] mt-0.5 text-lg">Resolva também pelo App Minha Predialnet
          </p>
          <p className="text-[#fff] -mt-2 text-lg">Baixe o App e gerencie seu plano</p>
        </div>

        {/* Cards de Contato */}
        <div className=" w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              iconSrc: 'img/iconeMedidor.png',
              title: 'Medidor de velocidade',
              link: 'https://speedtest.predialnet.com.br'
            },
            {
              iconSrc: 'img/iconeConta.png',
              title: `2ª via
              <br />de conta`,
              link: 'https://minhaconta.predialnet.com.br'
            },
            {
              iconSrc: 'img/iconeSuporte.png',
              title: 'Suporte<br />técnico',
              link: 'https://speedtest.predialnet.com.br'
            },
            {
              iconSrc: 'img/iconeCelular.png',
              title: 'Gerenciar plano<br />pelo App',
              link: '#href'
            },
          ].map((card, index) => (
            <a
              key={index}
              className="flex flex-col items-start justify-center rounded-3xl bg-white shadow-[0px_0px_5px_5px_rgba(240,5,11,0.3)] border-gray-200 border-[1.5px] p-6 w-40 h-40 text-center"
              href={card.link}
              target={card.link == '#href' ? '_self': '_blank'}
            >
              <img src={card.iconSrc}  className="w-8 h-8 mb-2" />
              <h4 className="text-md text-left leading-5" dangerouslySetInnerHTML={{ __html: card.title }} />
            </a>
          ))}
        </div>
      </div>


      <div className="flex flex-row justify-between mt-2">
        
        <div className="w-full lg:w-[32%] mt-10">
          <h2 className="text-3xl font-medium text-white">Que tal um upgrade no seu plano?</h2>
          <p className="text-[#f8abad] text-lg leading-5 mt-1.5">Planos com Wi-Fi 6 que vão mudar sua experiência de conexão.
          </p>
        </div>
        
        <img src="img/600prov.png" alt="" className="w-[40%] h-full object-cover -mr-8 hover:cursor-pointer hover:scale-105 transition-transform" />
        <img src="img/700prov.png" alt="" className="w-[40%] h-full object-cover -mr-7 hover:cursor-pointer hover:scale-105 transition-transform" />
        </div>
    </div>
  );
}

export default Cliente;
