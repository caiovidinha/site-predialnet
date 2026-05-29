import React from 'react';

const AnatelPage = () => {
  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-14 font-sans bg-[#fafafa] text-[#3d3838]">

      <div className="mb-16">
        <p className="text-sm font-light text-[#6b6b6b] mb-1">Regulatório</p>
        <h1 className="text-[1.65rem] md:text-3xl leading-8 font-light mb-1">Provedor Homologado pela Anatel</h1>
        <p className="text-lg font-light leading-6 mb-8">A segurança de conectar-se com um provedor devidamente autorizado</p>

        <div className="flex flex-col">
          <p className="text-sm font-light leading-snug mb-6">
            Na Predialnet, entendemos que a internet não é apenas um serviço, mas o motor que move o seu trabalho, os seus estudos e o seu lazer. Por isso, operamos em total conformidade com as normas federais e somos uma empresa devidamente cadastrada e autorizada pela Anatel (Agência Nacional de Telecomunicações).
          </p>

          <p className="text-md font-light mb-1">Mas o que isso significa na prática?</p>

          <p className="text-md font-light mt-4">Garantia de Qualidade</p>
          <p className="text-sm font-light leading-snug mb-2">
            Nossa infraestrutura atende aos rigorosos padrões de estabilidade e segurança exigidos pela agência reguladora.
          </p>

          <p className="text-md font-light">Segurança Jurídica</p>
          <p className="text-sm font-light leading-snug mb-2">
            Você tem a certeza de contratar um serviço 100% legalizado, protegido contra interrupções por irregularidades fiscais ou técnicas.
          </p>

          <p className="text-md font-light">Equipamentos Homologados</p>
          <p className="text-sm font-light leading-snug mb-6">
            Toda a nossa tecnologia é testada e certificada para não gerar interferências e proteger os seus dispositivos.
          </p>

          <p className="text-sm font-light leading-snug">
            Mais do que entregar velocidade, assumimos o compromisso público e legal de entregar uma conexão estável, transparente e segura.
          </p>
        </div>
      </div>

    </div>
  );
};

export default AnatelPage;
