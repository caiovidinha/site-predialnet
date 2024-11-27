import React from 'react';

function App() {
  return (
    <>
      {/* Versão para Desktop */}
      <div id="App" className="hidden md:flex px-[12%] py-10 font-sans bg-white flex-row justify-between">
        <div className="w-[21%] flex flex-col justify-end mb-14">
          <h3 className="text-[#9c0004] text-lg">App Minha Predialnet</h3>
          <h1 className="text-3xl my-7 w-full">Acesse o App<br />Minha Predialnet e gerencie seu plano na palma da mão</h1>
          <img src="img/qrcode.png" alt="QR Code" className="border-[#dbdbdb] border-2 rounded-lg border-solid w-52" />
        </div>

        <img src="img/appbanner.png" className="w-[45%] h-full" alt="App Banner" />

        <div className="justify-end min-h-full w-[21%] gap-3 flex flex-col mb-14">
          <p className="text-[#9e9e9e] text-xl">
            Tudo que você precisa para gerenciar sua conta. 2ª via de fatura, mudança de plano,
            suporte, financeiro e muito mais.
          </p>
          <div className="w-full border-t-2 border-gray-400 mt-3" />
          <p className="text-[#9e9e9e] text-lg flex items-center gap-3">
            <img src="img/iconePerfil.png" alt="Perfil" className="w-4 h-4" />Perfil
          </p>
          <div className="w-full border-t-2 border-gray-400" />
          <p className="text-[#9e9e9e] text-lg flex items-center gap-3">
            <img src="img/iconeFatura.png" alt="Financeiro" className="w-4 h-4" />Financeiro
          </p>
          <div className="w-full border-t-2 border-gray-400" />
          <p className="text-[#9e9e9e] text-lg flex items-center gap-3">
            <img src="img/iconeAjuda.png" alt="Suporte" className="w-4 h-4" />Suporte
          </p>
          <div className="w-full border-t-2 border-gray-400" />
          <p className="text-[#9e9e9e] text-lg flex items-center gap-3">
            <img src="img/iconeSuporte.png" alt="Opções" className="w-4 h-4" />Opções
          </p>
          <div className="w-full border-t-2 border-gray-400" />

          <div className="flex flex-row justify-between mt-5">
            <img src="img/logoappstore.png" alt="App Store" className="w-[46%] h-full cursor-pointer" />
            <img src="img/logogoogleplay.png" alt="Google Play" className="w-[46%] h-full cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Versão para Mobile */}
      <div id="App2" className="md:hidden px-6 py-10 font-sans bg-white">
        <div className="flex flex-col items-start">
          <h3 className="text-[#9c0004] text-lg text-left">App Minha Predialnet</h3>
          <h1 className="text-3xl my-4 text-left">
            Acesse o App Minha Predialnet e gerencie seu plano na palma da mão
          </h1>
          <p className="text-[#9e9e9e] text-lg text-left mb-6 leading-6">
            Tudo que você precisa para gerenciar sua conta. 2ª via de fatura, mudança de plano,
            suporte, financeiro e muito mais.
          </p>
          <img src="img/appbanner.png" alt="App banner" className="w-full mb-6" />
          <div className="md:flex flex-col w-full gap-3 hidden">
            <div className="flex items-center justify-center gap-3 mb-3">
              <img src="img/iconePerfil.png" alt="Perfil" className="w-6 h-6" />
              <p className="text-[#9e9e9e] text-md">Perfil</p>
            </div>
            <div className="flex items-center justify-center gap-3 mb-3">
              <img src="img/iconeFatura.png" alt="Financeiro" className="w-6 h-6" />
              <p className="text-[#9e9e9e] text-md">Financeiro</p>
            </div>
            <div className="flex items-center justify-center gap-3 mb-3">
              <img src="img/iconeAjuda.png" alt="Suporte" className="w-6 h-6" />
              <p className="text-[#9e9e9e] text-md">Suporte</p>
            </div>
            <div className="flex items-center justify-center gap-3 mb-3">
              <img src="img/iconeSuporte.png" alt="Opções" className="w-6 h-6" />
              <p className="text-[#9e9e9e] text-md">Opções</p>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-3 w-full mt-2">
            <img
              src="img/logoappstore.png"
              alt="App Store"
              className="w-[40%] h-auto cursor-pointer transition-transform active:scale-95"
            />
            <img
              src="img/logogoogleplay.png"
              alt="Google Play"
              className="w-[40%] h-auto cursor-pointer transition-transform active:scale-95"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
