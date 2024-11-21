import React from 'react';
import Image from 'next/image';

const InfoModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-[#9c0004] md:bg-black md:bg-opacity-50 flex items-center justify-center z-[9999]">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-8 relative overflow-y-auto mx-4 max-h-[90%]">
      <div className="absolute inset-0 opacity-20 md:opacity-50 flex items-center justify-center z-0">
          <Image
            src="/img/bg-mark.png"
            alt="Background Mark"
            objectFit="cover"
            width={350}
            height={350}
          />
        </div>
        <div className="relative z-10 md:px-16 pt-4">
        {/* Botão de Fechar */}
        <button className="absolute -top-2 md:top-4 right-3 md:right-8 text-gray-500 text-4xl font-thin" onClick={onClose}>
          &times;
        </button>

        {/* Imagem "Super Wi-Fi 6" */}
        <div className="flex flex-row justify-between  mb-6">
          <Image
            src="/img/superw6.png" // Supondo que a imagem do título seja chamada "super-wifi6.png"
            alt="Super Wi-Fi 6"
            width={100}
            height={53}
            className="object-contain"
          />
          <Image
            src="/img/logo.png"
            alt="Predialnet Logo"
            width={150}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Texto Informativo */}
        <div className="text-left">
          <p className="text-sm md:text-base mb-4">
            Bem-vindo ao futuro da conectividade com o Super Wi-Fi 6 da Predialnet!
          </p>
          <p className="text-sm md:text-base mb-2">
            Wi-Fi 6 é a mais nova geração de tecnologia Wi-Fi, com o melhor desempenho e eficiência. Com o Wi-Fi 6, sua internet ganha um upgrade incrível:
          </p>

          <p className="text-sm md:text-base mb-2">
            <strong>Mais Conexão:</strong> Conecte mais dispositivos ao mesmo tempo sem perder desempenho.
          </p>
          <p className="text-sm md:text-base mb-2">
            <strong>Mais Velocidade:</strong> Desfrute de filmes, séries, jogos online e downloads com velocidades impressionantes.
          </p>
          <p className="text-sm md:text-base mb-2">
            <strong>Mais Estabilidade:</strong> Tenha um sinal forte em todos os cantos da sua casa e diga adeus às quedas de sinal.
          </p>
          <p className="text-sm md:text-base mb-2">
            <strong>Mais Experiência:</strong> Navegue, jogue e trabalhe com uma internet mais eficiente.
          </p>

          <p className="text-sm md:text-base mb-2 md:mb-6">
            Transforme sua experiência online com o Wi-Fi 6.
          </p>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
