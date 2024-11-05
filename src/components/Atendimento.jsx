import React from 'react';

function Atendimento() {
  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] py-10 font-sans bg-[#f4f5f5] text-[#231f20] tracking-tight">
      <div className="flex flex-col md:flex-row md:justify-between gap-10">
        {/* Horários de Atendimento e Suporte */}
        <div className="w-full md:w-[32%]">
          <h2 className="text-3xl text-[#9c0004] tracking-tight">Horário de Atendimento</h2>
          <p className="text-[#9e9e9e] text-lg">Segunda a sexta das 9h às 18h</p>
          <h3 className="text-3xl text-[#9c0004] mt-4 tracking-tight">Suporte</h3>
          <p className="text-[#9e9e9e] text-lg mt-1">Segunda a sexta das 6h às 24h</p>
          <p className="text-[#9e9e9e] text-lg">Sábados, domingos e feriados das 9h às 22h</p>
        </div>

        {/* Cards de Contato */}
        <div className="w-full md:w-[60%] grid grid-cols-2 md:grid-cols-4 gap-6 -mt-2 md:mt-0">
          {[
            {
              iconSrc: 'img/iconeSuporte.png',
              title: 'Suporte',
              phone: '21 3515-0500',
              link: 'tel:2135150500',
            },
            {
              iconSrc: 'img/iconeFinanceiro.png',
              title: 'Financeiro',
              phone: '21 3515-0555',
              link: 'tel:2135150555',
            },
            {
              iconSrc: 'img/iconeCancelamento.png',
              title: 'Cancelamento',
              phone: '21 3515-0555',
              link: 'tel:213510555',
            },
            {
              iconSrc: 'img/iconeSAC.png',
              title: 'SAC',
              phone: '0800 878 7319',
              link: 'tel:08008787319',
            },
          ].map((card, index) => (
            <a
              key={index}
              className="flex flex-col items-start justify-center rounded-3xl bg-white shadow-[0px_0px_5px_5px_rgba(100,100,100,0.07)] border-gray-200 border-[1.5px] p-6 w-full text-left hover:scale-105 transition-transform"
              href={card.link}
            >
              <img src={card.iconSrc} alt={card.title} className="w-10 h-10 mb-3" />
              <h4 className="text-lg font-semibold">{card.title}</h4>
              <p className="text-lg text-[#231f20] mt-1">{card.phone}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Atendimento;
