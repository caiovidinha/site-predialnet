import React from 'react'

function Cards() {
  return (
    <div className="px-[12%] py-10 font-sans bg-gray-200 text-[#231f20]">
        <h1 className="text-3xl mb-1">É muita internet para você navegar, jogar e maratonar suas séries</h1>
        <h2 className="text-[#808080] text-xl font-light">Com Predialnet sua casa navega com você</h2>
        <h2 className="text-[#808080] text-xl font-light -mt-1">Venha para uma internet rápida de verdade.</h2>
        <div className="mt-10 flex flex-row justify-between flex-wrap gap-4">
  <div id="jogos" className="w-[23.6%] rounded-2xl">
    <div
      className="rounded-2xl aspect-[3/4] relative"
      style={{
        backgroundImage: "url(/img/cardA.jpg)",
        backgroundSize: "cover", // Ajusta a imagem para cobrir o elemento
        backgroundPosition: "center", // Centraliza a imagem
        backgroundRepeat: "no-repeat", // Evita repetição da imagem
      }}
    >
      <div className="absolute inset-0 p-9 flex flex-col justify-end">
        <p className="text-lg text-white mb-3 leading-6">
          Jogue online com máxima performance e seja um campeão
        </p>
        <p className="text-sm font-light text-white">
          Experimente uma conexão ideal para jogos competitivos, sem interrupções, com ping baixo e alta velocidade.
        </p>
      </div>
    </div>
  </div>

  <div id="chamadas" className="w-[23.6%] rounded-2xl">
    <div
      className="rounded-2xl aspect-[3/4] relative"
      style={{
        backgroundImage: "url(/img/cardB.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 p-9 flex flex-col justify-end">
        <p className="text-lg text-white mb-3 leading-6">
          Vídeo chamadas com alta qualidade e estabilidade
        </p>
        <p className="text-sm font-light text-white">
          Faça chamadas de vídeo sem travar com uma conexão estável e de qualidade, sem perder nada!
        </p>
      </div>
    </div>
  </div>

  <div id="lentidao" className="w-[23.6%] rounded-2xl">
    <div
      className="rounded-2xl aspect-[3/4] relative"
      style={{
        backgroundImage: "url(/img/cardC.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 p-9 flex flex-col justify-end">
        <p className="text-lg text-white mb-3 leading-6">
          Navegação sem lentidão com o Wi-Fi 6 mais estável do mercado
        </p>
        <p className="text-sm font-light text-white">
          Garanta uma navegação sem lentidão, mesmo com vários aparelhos conectados simultaneamente.
        </p>
      </div>
    </div>
  </div>

  <div id="filmes" className="w-[23.6%] rounded-2xl">
    <div
      className="rounded-2xl aspect-[3/4] relative"
      style={{
        backgroundImage: "url(/img/cardD.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 p-9 flex flex-col justify-end">
        <p className="text-lg text-white mb-3 leading-6">
          Assista a filmes e séries sem travar e com a melhor qualidade
        </p>
        <p className="text-sm font-light text-white">
          Maratone suas séries sem interrupções. Tenha a melhor experiência sem travamentos ou queda de qualidade.
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Cards