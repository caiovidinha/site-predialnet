import React from 'react'


function App() {
  return (
    <div id="App" className="px-[12%] py-10 font-sans bg-white flex flex-row justify-between">
       <div className='w-[21%]  flex flex-col justify-end mb-14'>
            <h3 className='text-[#9c0004] text-lg'>App Minha Predialnet</h3>
            <h1 className='text-3xl my-7 w-[100%]'>Acesse o<br />Minha Predialnet e gerencie seu plano na palma da mão</h1>
            <img src="img/qrcode.png" alt="" className='border-[#dbdbdb] border-2 rounded-lg border-solid w-52'/>
       </div>

       <img src="img/appbanner.png"  className="w-[45%] h-full " alt="" />

       <div className='justify-end min-h-full w-[21%] gap-3 flex flex-col mb-14'>
            <p className='text-[#9e9e9e] text-xl'>Tudo que você precisa para
                gerenciar sua conta. 2ª via de
                fatura, mudança de plano,
                suporte, financeiro e muito mais.</p>
            <div className='w-full border-t-2 border-gray-400 mt-3'/>
            <p className='text-[#9e9e9e] text-lg flex items-center gap-3'><img src="img/iconePerfil.png" alt=""  className='w-4 h-4'/>Perfil</p>
            <div className='w-full border-t-2 border-gray-400'/>
            <p className='text-[#9e9e9e] text-lg flex items-center gap-3 '><img src="img/iconeFatura.png" alt=""  className='w-4 h-4'/>Financeiro</p>
            <div className='w-full border-t-2 border-gray-400'/>
            <p className='text-[#9e9e9e] text-lg flex items-center gap-3'><img src="img/iconeAjuda.png" alt=""  className='w-4 h-4'/>Suporte</p>
            <div className='w-full border-t-2 border-gray-400'/>
            <p className='text-[#9e9e9e] text-lg flex items-center gap-3'><img src="img/iconeSuporte.png" alt=""  className='w-4 h-4'/>Opções</p>
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