import React from 'react';
import Image from 'next/image';
const documents = {
  'Banda Larga': [
    {
      title: 'Regulamento Oferta Promocional "Fibra 800 - Black Friday"',
      link: 'https://www.predialnet.com.br/download/2025.11_Oferta_Conjunta_800-Black_Friday.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "Fibra 1 Giga - Black Friday"',
      link: 'https://www.predialnet.com.br/download/2025.11_Oferta_Conjunta_1_GB-Black_Friday.pdf',
    },
    {
      title: 'Contrato padrão de Adesão à Internet',
      link: 'https://www.predialnet.com.br/download/contrato-padrao-adesao-servico-internet.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "Predial Fibra 800 – Black Friday 2025"',
      link: 'https://www.predialnet.com.br/download/2025.11_Oferta_Conjunta_800-Black_Friday.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "Predial Fibra 1 Giga – Black Friday 2025"',
      link: 'https://www.predialnet.com.br/download/2025.11_Oferta_Conjunta_1_GB-Black_Friday.pdf',
    },
    {
      title: 'Regulamento Plano "Fibra 1 Giga – Preço Fixo até 2029"',
      link: 'https://www.predialnet.com.br/download/2025.07.28_a_2025.10.31_Plano_1GB.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "Predial Fibra 1 Giga – Preço Fixo até 2029"',
      link: 'https://www.predialnet.com.br/download/2025.07.28_a_2025.10.31_Oferta_Conjunta_2029_1_GB.pdf',
    },
    {
      title: 'Regulamento Plano "Fibra 800 – Preço Fixo até 2029"',
      link: 'https://www.predialnet.com.br/download/2025.07.28_a_2025.10.31_Plano_800.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "Predial Fibra 800 – Preço Fixo até 2029"',
      link: 'https://www.predialnet.com.br/download/2025.07.28_a_2025.10.31_Oferta_Conjunta_2029_800.pdf',
    },
    {
      title: 'Regulamento Plano "Fibra 600 – Preço Fixo até 2029"',
      link: 'https://www.predialnet.com.br/download/2025.07.28_a_2025.10.31_Plano_600.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "Predial Fibra 600 – Preço Fixo até 2029"',
      link: 'https://www.predialnet.com.br/download/2025.07.28_a_2025.10.31_Oferta_Conjunta_2029_600.pdf',
    },
    {
      title: 'Regulamento Plano "Fibra 400 – Preço Fixo até 2029"',
      link: 'https://www.predialnet.com.br/download/2025.07.28_a_2025.10.31_Plano_400.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "Predial Fibra 400 – Preço Fixo até 2029"',
      link: 'https://www.predialnet.com.br/download/2025.07.28_a_2025.10.31_Oferta_Conjunta_2029_400.pdf',
    },
    {
      title: 'Regulamento "Plano Fibra 1 Giga"',
      link: 'https://www.predialnet.com.br/download/regulamento-plano-fibra-1giga.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "Predial Fibra 1 Giga"',
      link: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-1giga.pdf',
    },
    {
      title: 'Regulamento "Plano Fibra 800"',
      link: 'https://www.predialnet.com.br/download/regulamento-plano-fibra-800.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "Predial Fibra 800"',
      link: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-800.pdf',
    },
    {
      title: 'Regulamento "Plano Fibra 700"',
      link: 'https://www.predialnet.com.br/download/regulamento-plano-fibra-700.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "Predial Fibra 700"',
      link: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-700.pdf',
    },
    {
      title: 'Regulamento "Plano Fibra 600"',
      link: 'https://www.predialnet.com.br/download/regulamento-plano-fibra-600.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "Predial Fibra 600"',
      link: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-600.pdf',
    },
    {
      title: 'Regulamento "Plano Fibra 500"',
      link: 'https://www.predialnet.com.br/download/regulamento-plano-fibra-500.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "Predial Fibra 500"',
      link: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-500.pdf',
    },
    {
      title: 'Regulamento "Plano Fibra 400"',
      link: 'https://www.predialnet.com.br/download/regulamento-plano-fibra-400.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "Predial Fibra 400"',
      link: 'https://www.predialnet.com.br/download/sumario-oferta-plano-fibra-400.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "90+"',
      link: 'https://www.predialnet.com.br/download/sumario-oferta-promocao-90.pdf',
    },
    {
      title: 'Regulamento Plano "Até 90 MEGA"',
      link: 'https://www.predialnet.com.br/download/sumario-oferta-promocao-ate-90.pdf',
    },
    {
      title: 'Regulamento Oferta Promocional "50+"',
      link: 'https://www.predialnet.com.br/download/sumario-oferta-promocao-50+.pdf',
    },
    {
      title: 'Regulamento Plano "Até 50 MEGA"',
      link: 'https://www.predialnet.com.br/download/sumario-oferta-promocao-ate-50.pdf',
    },
    {
      title: 'Regulamento Plano Porto FTTH até 60 Mega',
      link: 'https://www.predialnet.com.br/download/regulamento-plano-porto-ftth-ate-60.pdf',
    },
    {
      title: 'Regulamento Plano Porto FTTH até 40 Mega',
      link: 'https://www.predialnet.com.br/download/regulamento-plano-porto-ftth-ate-40.pdf',
    },
    {
      title: 'Regulamento Plano Porto FTTH até 30 Mega',
      link: 'https://www.predialnet.com.br/download/regulamento-plano-porto-ftth-ate-30.pdf',
    },
    {
      title: 'Regulamento Plano Porto FTTH até 25 Mega',
      link: 'https://www.predialnet.com.br/download/regulamento-plano-porto-ftth-ate-25.pdf',
    },
  ],
  Telefonia: [
    {
      title: 'Contrato de Prestação de Serviço Telefônico',
      link: 'https://www.predialnet.com.br/download/contrato-prestacao-servico-telefonico.pdf',
    },
    {
      title: 'Tarifas Nacionais',
      link: 'https://www.predialnet.com.br/download/tarifas-nacionais.pdf',
    },
    {
      title: 'Tarifas Internacionais',
      link: 'https://www.predialnet.com.br/download/tarifas-internacionais.pdf',
    },
    {
      title: 'Regulamento do plano Predialfone Ideal Light',
      link: 'https://www.predialnet.com.br/download/regulamento-plano-predialfone-ideal-light.pdf',
    },
    {
      title: 'Regulamento do plano Predialfone Ideal Master',
      link: 'https://www.predialnet.com.br/download/regulamento-plano-predialfone-ideal-master.pdf',
    },
    {
      title: 'Regulamento do plano Predialfone Ideal Plus',
      link: 'https://www.predialnet.com.br/download/regulamento-plano-predialfone-ideal-plus.pdf',
    },
  ],
};
const DocumentsPage = () => {
  return (
    <div className="font-sans container mx-auto p-8 text-black">
      {/* Conteúdo da Página */}
      <div className="text-center">
        <h2 className="text-lg md:text-xl text-black font-normal">DOCUMENTOS</h2>
     
        <h3 className="text-4xl text-[#9c0004] mt-2 mb-4">BANDA LARGA</h3>
         
      </div>

      {/* Seção Banda Larga */}
      <div className="mb-12">
        <hr className="border-t-2 border-black mb-8 w-1/6 mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {documents['Banda Larga'].map((doc, index) => (
            <div key={index} className="flex flex-row items-center">
              <Image src="/img/regulamento.png" alt="Documento" width={35} height={35} className='mr-5 mt-1'/>
              <div className='flex flex-col'>
              <p className="text-lg font-normal mt-2">{doc.title}</p>
              <a
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-normal hover:opacity-60"
              >
                Download
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção Telefonia */}
      <div>
        <div className="text-center mt-20">
          <h2 className="text-lg md:text-xl text-black font-normal">DOCUMENTOS</h2>
          <h3 className="text-4xl text-[#9c0004] mt-2 mb-4">TELEFONIA</h3>
        </div>
        <hr className="border-t-2 border-black mb-8 w-1/6 mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {documents['Telefonia'].map((doc, index) => (
            <div key={index} className="flex flex-row items-center">
              <Image src="/img/regulamento.png" alt="Documento" width={35} height={35} className='mr-5 mt-1'/>
              <div className='flex flex-col'>
              <p className="text-lg font-normal mt-2">{doc.title}</p>
              <a
                href={doc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-normal hover:opacity-60"
              >
                Download
              </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;