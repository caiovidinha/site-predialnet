import React from 'react'

function Cards() {
  return (
    <div className="px-[12%] py-10 font-sans bg-white text-[#231f20]">
        <h1 className="text-4xl font-semibold mb-1">Predialnet é muito mais velocidade e estabilidade</h1>
        <h2 className="text-[#808080] text-2xl">Agora sua internet vai decolar com os novos planos Wi-Fi 6</h2>
        <h2 className="text-[#808080] text-2xl -mt-1">+ Conexão | + Velocidade | + Estabilidade | + Alcance</h2>
        <div className="mt-10 flex flex-row justify-between">
        <div id="jogos"className="shadow-[0px_0px_10px_10px_rgba(80,80,80,0.1)] w-[31%] rounded-3xl">
            <div className="rounded-t-3xl border-b-0 border-gray-200 border-[2px] px-6 pt-12 pb-5">
                <h1 className="text-5xl  mb-2">500 mega</h1>
                <h2 className="text-xl ">Com Super Wi-Fi Gigabit</h2>
                <p className="text-5xl font-medium text-[#9c0004] mt-5 mb-3">R$ 99,90<span className="text-2xl font-semibold">/mês</span></p>
                <button className="py-3 bg-[#9c0004] text-white w-full rounded-full text-xl mt-2 mb-3">Aproveitar Oferta</button>
                <p className="text-lg text-[#808080] my-4">Super Wi-Fi Gigabit</p>
                <p className="text-lg text-[#808080] ">Instalação grátis | Sem fidelidade</p>
            </div>
                <div className="rounded-b-3xl border-t-0 border-gray-300 border-[2px] px-6 py-8 bg-[#f4f5f5]">
                <p className="flex flex-row items-center gap-2 text-lg text-[#5c595b]"><IoIosWifi/> 1 Ponto Wi-Fi Gigabit incluído</p>
                </div>
        </div>

        </div>
    </div>
  )
}

export default Cards