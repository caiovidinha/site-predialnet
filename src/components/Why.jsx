import React from 'react';

function Why() {
  return (
    <div className="px-[12%] pt-10 pb-14 font-sans bg-gray-200 text-[#231f20]">
      <h1 className="text-4xl font-semibold mb-6">
        Veja porque contratar os planos
        <br />
        de internet da Predialnet
      </h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            imgSrc: 'img/iconeA.png',
            title: 'A preferida entre os jogadores de EA FC',
            description: `A Predialnet é a internet número 1 entre os jogadores de EA FC de Niterói. 
                          E você sabe, se é melhor para quem joga é melhor para todo mundo. 
                          <br />Fonte: relatório de qualidade de conexão da EA | Mar 2024`,
          },
          {
            imgSrc: 'img/iconeB.png',
            title: 'Planos com Wi-Fi 6 que cabem no bolso',
            description: `Sua casa muito mais conectada com o super Wi-Fi 6 nos planos de 600 e 700 mega. 
                          Mais velocidade, estabilidade e alcance. Ideal para residências grandes com vários aparelhos conectados ao mesmo tempo.`,
          },
          {
            imgSrc: 'img/iconeC.png',
            title: 'O maior provedor regional',
            description: `A Predialnet é o maior provedor regional de Niterói, com uma velocidade média contratada de 434,13 mega. 
                          Venha para a maior!<br />Fonte: informacoes.anatel.gov.br | Mar 2024.`,
          },
          {
            imgSrc: 'img/iconeD.png',
            title: 'Resolva tudo no App com um toque',
            description: `Na Predialnet você tem um App completo para você resolver tudo com um toque. 
                          Faturas, suporte, mudança de plano, comunicados e muito mais. Com o Minha Predialnet tudo fica mais fácil e mais prático.`,
          },
        ].map((card, index) => (
          <div
            key={index}
            className="flex flex-col rounded-2xl bg-white shadow-md border-gray-200 border-[1.5px] overflow-hidden h-full"
          >
            <div className="flex flex-col h-full px-6 py-5">
              <div className="flex flex-row items-start gap-4">
                <img src={card.imgSrc} alt="" className="w-12 h-12" />
                <h1 className="text-lg font-semibold tracking-tight">{card.title}</h1>
              </div>
              <p className="text-[#6d6e70] mt-3 text-sm" dangerouslySetInnerHTML={{ __html: card.description }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Why;