import React from 'react'

function Phone() {
  return (
    <div id="Telefone" className="px-[12%] pt-10 pb-14 font-sans bg-[#f4f5f5] text-[#231f20]">
        <h1 className="text-3xl mb-1">Telefonia</h1>
        <h2 className="text-[#9e9e9e] text-xl">A melhor internet fibra também</h2>
        <h2 className="text-[#9e9e9e] text-xl -mt-1 ">é a melhor telefonia fixa</h2>


        <div className="mt-10 flex flex-row justify-between">
        <div id="plus" className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] w-[31%] rounded-3xl p-5 flex flex-col justify-around">
        <h1 className="text-4xl">Ideal Plus</h1>
                <h2 className="text-lg">Com serviço de siga-me</h2>
                <p className="text-4xl font-medium text-[#9c0004] mt-2 mb-1">R$ 59,90<span className="text-2xl font-semibold">/mês</span></p>
                <button className="py-3 bg-[#9c0004] text-white w-full rounded-full text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform">Aproveitar oferta</button>
                <p className="text-lg text-[#9e9e9e] mt-2">2000 minutos fixo/fixo local</p>
                <p className="text-lg text-[#9e9e9e] ">100 minutos para qualquer móvel local</p>
            </div>

            <div id="master" className="shadow-[0px_0px_7px_7px_rgba(80,80,80,0.07)] w-[31%] rounded-3xl p-5 flex flex-col justify-around">
            
                <h1 className="text-4xl">Ideal Master</h1>
                <h2 className="text-lg">Com serviço de siga-me</h2>
                <p className="text-4xl font-medium text-[#9c0004] mt-2 mb-1">R$ 89,90<span className="text-2xl font-semibold">/mês</span></p>
                <button className="py-3 bg-[#9c0004] text-white w-full rounded-full text-xl mt-2 font-light mb-1 hover:scale-105 transition-transform">Aproveitar oferta</button>
                <p className="text-lg text-[#9e9e9e] mt-2">Ilimitado fixo/fixo local</p>
                <p className="text-lg text-[#9e9e9e]">200 minutos para qualquer móvel local</p>
           
            </div>

            <img src="img/telefonia.jpg" alt="" className="shadow-[0px_0px_10px_10px_rgba(80,80,80,0.1)] w-[31%]  rounded-3xl object-cover">
               
            </img>

        
        
    </div>
    </div>
  )
}

export default Phone