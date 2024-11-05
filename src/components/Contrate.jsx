import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa6";
import { FaWhatsapp, FaPhoneAlt  } from "react-icons/fa";


function Contrate() {
  return (
    <div id="WiFi6" className="bg-[#670c0c] px-[12%] py-8 font-sans">
        <div className="flex flex-row justify-between">
            <img src="img/carda.png" className='w-[51.5%] -ml-[1.5%] h-full hover:cursor-pointer hover:scale-105 transition-transform' alt="" />
            <img src="img/cardb.png" className='w-[51.5%] h-full hover:cursor-pointer hover:scale-105 transition-transform' alt="" />
        </div>
        <div className='mt-4 flex flex-row justify-between'>
          <div className='w-[33%]'>
            <h3 className='text-white text-xl mb-3'>Contrate já!</h3>
            <h2 className='text-[#ffbd17] text-3xl mb-3 font-medium'>Assine do seu jeito e venha para Predialnet agora!</h2>
            <p className='text-white text-md mb-3 '>A melhor internet fibra que vai transformar sua casa</p>
          </div>

          <div>
            <img src="img/iconeDesktop.png" alt=""  className='w-10 h-10'/>
            <p className='text-white text-xl my-2 leading-6'>Assine<br /> pelo site</p>
            <a className='flex items-center gap-2 py-2 px-4 rounded-full bg-[#ffbd17] hover:scale-105 transition-transform' target="_blank" href='https://www.predialnet.com.br/assineja'>
              Consultar disponibilidade <FaArrowRight />
            </a>
          </div>

          <div>
            <img src="img/iconeWhatsapp.png" alt=""  className='w-10 h-10'/>
            <p className='text-white text-xl my-2 leading-6'>Assine<br /> pelo WhatsApp</p>
            <a className='flex items-center gap-2 py-2 px-4 rounded-full bg-[#ffbd17] hover:scale-105 transition-transform' target="_blank" href='https://api.whatsapp.com/send?phone=5521964905308&text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20da%20Predialnet.'>
              Iniciar conversa <FaArrowRight />
            </a>
          </div>

          <div>
            <img src="img/iconeTel.png" alt=""  className='w-10 h-10'/>
            <p className='text-white text-xl my-2 leading-6'>Assine<br /> pelo telefone</p>
            <a className='flex items-center gap-2 py-2 px-4 rounded-full bg-[#ffbd17] hover:scale-105 transition-transform' href="tel:2135150555">
              21 3515-0555 <FaArrowRight />
            </a> 
          </div>
          
        </div>
    </div>
  )
}

export default Contrate