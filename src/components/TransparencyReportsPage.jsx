import React from 'react';
import Image from 'next/image';

const reports = {
  'Salario': [
    {
      title: 'Relatório 2° Semestre 2025 - base dados 2025',
      link: 'https://www.predialnet.com.br/assineja/images/relatorios/relat%C3%B3rio%202%C2%BA%20semestre%20ano%202025%20-%20base%20de%20dados%202025.pdf',
    },
    {
      title: 'Relatório 1° Semestre 2025 - base dados 2024',
      link: 'https://www.predialnet.com.br/assineja/images/relatorios/relat%C3%B3rio%201%C2%BA%20semestre%20ano%202025%20-%20base%20de%20dados%202024.pdf',
    },
    {
      title: 'Relatório 2° Semestre 2024 – base dados 2023',
      link: 'https://www.predialnet.com.br/assineja/images/relatorios/relat%C3%B3rio%202%C2%BA%20semestre%20ano%202024%20-%20base%20de%20dados%202023.pdf',
    },
    {
      title: 'Relatório 1° Semestre 2024 – base dados 2022',
      link: 'https://www.predialnet.com.br/assineja/images/relatorios/relat%C3%B3rio%201%C2%BA%20semestre%20ano%202024%20-%20base%20de%20dados%202022.pdf',
    },
  ],
};

const TransparencyReportsPage = () => {
  return (
    <div className="font-sans container mx-auto py-20 px-12 text-black">
      {/* Conteúdo da Página */}
      <div className="text-center">
        <h2 className="text-lg md:text-xl text-black font-normal">DOCUMENTOS</h2>
        <h3 className="text-xl md:text-4xl text-[#9c0004] mt-2 mb-4">
          Relatórios de Transparência e Igualdade Salarial de Mulheres e Homens
        </h3>
      </div>

      <div className="mb-12">
        
        <hr className="border-t-2 border-black mb-8 w-1/6 mx-auto" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reports['Salario'].map((report, index) => (
            <div key={index} className="flex flex-row items-center">
              <Image 
                src="/img/regulamento.png" 
                alt="Documento" 
                width={35} 
                height={35} 
                className='mr-5 mt-1'
              />
              <div className='flex flex-col'>
                <p className="text-lg font-normal mt-2">{report.title}</p>
                <a
                  href={report.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-normal hover:opacity-60 text-[#9c0004]"
                >
                  Visualizar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransparencyReportsPage;