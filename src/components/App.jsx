import React from 'react'
import { TfiMoney } from "react-icons/tfi";
import { GoGear } from "react-icons/go";
import { PiHeadset } from "react-icons/pi";
import { PiUserCircleLight } from "react-icons/pi";


function App() {
  return (
    <div className="px-[12%] py-10 font-sans bg-white flex flex-row justify-between">
       <div className='w-[21%]  flex flex-col justify-end mb-14'>
            <h3 className='text-[#9c0004] text-lg'>App Minha Predialnet</h3>
            <h1 className='text-3xl my-7 w-[100%]'>Acesse o<br />Minha Predialnet e gerencie seu plano na palma da mão</h1>
            <img src="img/qrcode.png" alt="" className='border-black border-2 rounded-lg border-solid w-52'/>
       </div>

       <img src="img/appbanner.png"  className="w-[45%] h-full " alt="" />

       <div className='justify-end min-h-full w-[21%] gap-3 flex flex-col mb-14'>
            <p className='text-[#6d6e70] text-xl'>Tudo que você precisa para
                gerenciar sua conta. 2ª via de
                fatura, mudança de plano,
                suporte, financeiro e muito mais.</p>
            <div className='w-full border-t-2 border-gray-400 mt-3'/>
            <p className='text-[#6d6e70] text-lg flex items-center gap-3'><PiUserCircleLight color="#9c0004" size={22}/>Perfil</p>
            <div className='w-full border-t-2 border-gray-400'/>
            <p className='text-[#6d6e70] text-lg flex items-center gap-3 '><TfiMoney color="#9c0004" size={22}/>Financeiro</p>
            <div className='w-full border-t-2 border-gray-400'/>
            <p className='text-[#6d6e70] text-lg flex items-center gap-3'><PiHeadset color="#9c0004" size={22}/>Suporte</p>
            <div className='w-full border-t-2 border-gray-400'/>
            <p className='text-[#6d6e70] text-lg flex items-center gap-3'><GoGear color="#9c0004" size={22}/>Opções</p>
            <div className='w-full border-t-2 border-gray-400'/>

            <div className='flex flex-row justify-between mt-5'>
                <img src="img/logoappstore.png" alt="" className='w-[46%] h-full cursor-pointer'/>
                <img src="img/logogoogleplay.png" alt="" className='w-[46%] h-full cursor-pointer'/>
            </div>
       </div>

    </div>
  )
}

export default App