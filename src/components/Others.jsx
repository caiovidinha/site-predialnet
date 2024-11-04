import React from 'react'


function Others() {
  return (
    <div className="px-[12%] pt-10 pb-14 font-sans bg-[#fff] text-[#231f20]">
        <div className="mt-10 flex flex-row justify-around">
            <div id="radio" className="shadow-[0px_0px_10px_10px_rgba(80,80,80,0.1)] w-[42%] rounded-3xl py-6 px-8 flex flex-col justify-around">
                <h1 className="text-2xl mb-1 text-center">Opções de planos de internet<br />VIA RÁDIO</h1>
                <button className="py-3 bg-[#9c0004] text-white w-full rounded-full text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform">
                    Conhecer ofertas
                </button>
            </div>
            <div className='min-h-full w-[3px] bg-gray-300' />
            <div id="porto" className="shadow-[0px_0px_10px_10px_rgba(80,80,80,0.1)] w-[42%] rounded-3xl py-6 px-8 flex flex-col justify-around">
                <h1 className="text-2xl mb-1 text-center">Opções de planos de internet para a região do PORTO MARAVILHA</h1>
                <button className="py-3 bg-[#9c0004] text-white w-full rounded-full text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform">
                    Conhecer ofertas
                </button>
            </div>
        </div>

        
        
    </div>
  )
}

export default Others