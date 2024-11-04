import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { FaWhatsapp, FaPhoneAlt  } from "react-icons/fa";


function Contrate() {
  return (
    <div className="bg-[#670c0c] px-[12%] py-8 font-sans">
        <div className="flex flex-row justify-between">
            <img src="img/carda.png" className='w-[51.5%] -ml-[1.5%] h-full hover:cursor-pointer hover:scale-105 transition-transform' alt="" />
            <img src="img/cardb.png" className='w-[51.5%] h-full hover:cursor-pointer hover:scale-105 transition-transform' alt="" />
        </div>
        <div className='mt-4 flex flex-row justify-between'>
          <div className='w-[33%]'>
            <h3 className='text-white text-xl mb-3'>Contrate já!</h3>
            <h2 className='text-[#ffbd17] text-3xl mb-3'>Assine do seu jeito e venha para Predialnet agora!</h2>
            <p className='text-white text-lg mb-3 '>A melhor internet fibra que vai transformar sua casa</p>
          </div>

          <div>
            <HiOutlineDesktopComputer size={60} color='#f8abad'/>
            <p className='text-white text-xl my-2 '>Assine<br /> pelo site</p>
            <button className='flex items-center gap-2 py-2 px-4 rounded-full bg-[#ffbd17] hover:scale-105 transition-transform'>
              Consultar disponibilidade <FaArrowRight />
            </button>
          </div>

          <div>
            <FaWhatsapp size={60} color='#f8abad'/>
            <p className='text-white text-xl my-2 '>Assine<br /> pelo WhatsApp</p>
            <button className='flex items-center gap-2 py-2 px-4 rounded-full bg-[#ffbd17] hover:scale-105 transition-transform'>
              Iniciar conversa <FaArrowRight />
            </button>
          </div>

          <div>
            <FaPhoneAlt size={60} color='#f8abad' className='py-3 -ml-3 '/>
            <p className='text-white text-xl my-2 '>Assine<br /> pelo telefone</p>
            <button className='flex items-center gap-2 py-2 px-4 rounded-full bg-[#ffbd17] hover:scale-105 transition-transform'>
              21 3515-0555 <FaArrowRight />
            </button> 
          </div>
          
        </div>
    </div>
  )
}

export default Contrate