import React from 'react'

import { IoIosWifi } from "react-icons/io";


function Plans() {
  return (
    <div id='Planos' className="px-[12%] pt-10 pb-14 font-sans bg-[#f4f5f5] text-[#231f20]">
        <h1 className="text-3xl mb-1">Predialnet é muito mais velocidade e estabilidade</h1>
        <h2 className="text-[#9e9e9e] text-xl ">Agora sua internet vai decolar com os novos planos Wi-Fi 6</h2>
        <h2 className="text-[#9e9e9e] text-xl -mt-1 ">+ Conexão | + Velocidade | + Estabilidade | + Alcance</h2>
        <div className="mt-10 flex flex-row justify-between">
        <div id="500mega"className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] w-[31%] rounded-3xl">
            <div className="rounded-t-3xl border-b-0 border-gray-200 border-[2px] px-6 pt-8 pb-3">
                <h1 className="text-4xl tracking-tight">500 mega</h1>
                <h2 className="text-lg">Com Super Wi-Fi Gigabit</h2>
                <p className="text-4xl font-medium text-[#9c0004] mt-2 mb-1">R$ 99,90<span className="text-2xl font-semibold">/mês</span></p>
                <button className="py-3 bg-[#9c0004] text-white w-full rounded-full text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform">Aproveitar oferta</button>
                <p className="text-lg text-[#9e9e9e] mt-2 ">Super Wi-Fi Gigabit</p>
                <p className="text-lg text-[#9e9e9e]  ">Instalação grátis | Sem fidelidade</p>
            </div>
                <div className="rounded-b-3xl border-t-0 border-gray-200 border-[2px] px-6 py-6 bg-[#e9e9e9b6]">
                <p className="flex flex-row items-center gap-2 text-lg text-[#5c595b]"><IoIosWifi/> 1 Ponto Wi-Fi Gigabit incluído</p>
                </div>
            </div>

            <div id="600mega"className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] w-[31%] rounded-3xl">
            <div className="rounded-t-3xl border-b-0 border-gray-200 border-[2px] px-6 pt-8 pb-3">
                <h1 className="text-4xl">600 mega</h1>
                <h2 className="text-lg">Mais alcance com <span className="text-[#008c4b]">Wi-Fi 6</span></h2>
                <p className="text-4xl font-medium text-[#9c0004] mt-2 mb-1">R$ 124,90<span className="text-2xl font-semibold">/mês</span></p>
                <button className="py-3 bg-[#9c0004] text-white w-full rounded-full text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform">Aproveitar oferta</button>
                <p className="text-lg text-[#9e9e9e] mt-2 ">Wi-Fi 6 - Mais conectividade</p>
                <p className="text-lg text-[#9e9e9e]  ">Instalação grátis | Sem fidelidade</p>
            </div>
            <div className="rounded-b-3xl border-t-0 border-gray-200 border-[2px] px-6 py-6 bg-[#e9e9e9b6]">
                <p className="flex flex-row items-center gap-2 text-lg text-[#5c595b]"><IoIosWifi/> 1 Ponto <span className="text-[#008c4b]">Wi-Fi 6</span> incluído</p>
                </div>
            </div>

            <div id="700mega"className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] w-[31%] rounded-3xl">
            <div className="rounded-t-3xl border-b-0 border-gray-200 border-[2px] px-6 pt-8 pb-3">
                <h1 className="text-4xl">700 mega</h1>
                <h2 className="text-lg ">Mais alcance com <span className="text-[#008c4b]">Wi-Fi 6</span></h2>
                <p className="text-4xl font-medium text-[#9c0004] mt-2 mb-1">R$ 139,90<span className="text-2xl font-semibold">/mês</span></p>
                <button className="py-3 bg-[#9c0004] text-white w-full rounded-full text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform">Aproveitar oferta</button>
                <p className="text-lg text-[#9e9e9e] mt-2 ">Wi-Fi 6 - Mais conectividade</p>
                <p className="text-lg text-[#9e9e9e]  ">Instalação grátis | Sem fidelidade</p>
            </div>
            <div className="rounded-b-3xl border-t-0 border-gray-200 border-[2px] px-6 py-6 bg-[#e9e9e9b6]">
                <p className="flex flex-row items-center gap-2 text-lg text-[#5c595b]"><IoIosWifi/> 1 Ponto <span className="text-[#008c4b]">Wi-Fi 6</span> incluído</p>
                </div>
            </div>
        </div>

        
        
    </div>
  )
}

export default Plans