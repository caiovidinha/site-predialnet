import React from 'react';

function Atendimento() {
  return (
    <div className="px-[12%] py-10 font-sans bg-[#f4f5f5] text-[#231f20]">
      <div className="flex flex-row justify-between">
        {/* Horários de Atendimento e Suporte */}
        <div className="w-full lg:w-[32%]">
          <h2 className="text-3xl font-semibold text-[#9c0004]">Horário de Atendimento</h2>
          <p className="text-[#6d6e70] text-lg">Segunda a sexta das 9h às 18h</p>
          <h3 className="text-2xl font-semibold text-[#9c0004] mt-2">Suporte</h3>
          <p className="text-[#6d6e70] text-lg">Segunda a sexta das 6h às 24h</p>
          <p className="text-[#6d6e70] text-lg">Sábados, domingos e feriados das 9h às 22h</p>
        </div>

        {/* Cards de Contato */}
        <div className=" w-full lg:w-[58%] grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              iconSrc: 'img/iconeSuporte.png',
              title: 'Suporte',
              phone: '21 3515-0500',
            },
            {
              iconSrc: 'img/iconeFinanceiro.png',
              title: 'Financeiro',
              phone: '21 3515-0555',
            },
            {
              iconSrc: 'img/iconeCancelamento.png',
              title: 'Cancelamento',
              phone: '21 3515-0555',
            },
            {
              iconSrc: 'img/iconeSAC.png',
              title: 'SAC',
              phone: '0800 878 7319',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center rounded-3xl bg-white shadow-[0px_0px_10px_10px_rgba(80,80,80,0.1)] border-gray-200 border-[1.5px] p-6 w-40 h-40 text-center"
            >
              <img src={card.iconSrc} alt={card.title} className="w-10 h-10 mb-1" />
              <h4 className="text-md text-left">{card.title}</h4>
              <p className="text-md text-[#231f20] text-left">{card.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Atendimento;
