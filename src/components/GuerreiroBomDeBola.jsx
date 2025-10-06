import React, { useState } from 'react';
import Image from 'next/image';

const GuerreiroBomDeBola = () => {
  const [selectedGallery, setSelectedGallery] = useState(null);

  // Dados dos eventos passados (placeholder)
  const eventGalleries = [
    {
      id: 1,
      date: "15/09/2025",
      match: "Fluminense x Corinthians",
      result: "2x1",
      photos: [
        { id: 1, url: "/img/placeholder-event1.jpg", alt: "Evento Guerreiro Bom de Bola 1" },
        { id: 2, url: "/img/placeholder-event2.jpg", alt: "Evento Guerreiro Bom de Bola 2" },
        { id: 3, url: "/img/placeholder-event3.jpg", alt: "Evento Guerreiro Bom de Bola 3" },
      ]
    },
    {
      id: 2,
      date: "28/08/2025",
      match: "Fluminense x Palmeiras",
      result: "1x0",
      photos: [
        { id: 4, url: "/img/placeholder-event4.jpg", alt: "Evento Guerreiro Bom de Bola 4" },
        { id: 5, url: "/img/placeholder-event5.jpg", alt: "Evento Guerreiro Bom de Bola 5" },
        { id: 6, url: "/img/placeholder-event6.jpg", alt: "Evento Guerreiro Bom de Bola 6" },
      ]
    },
    {
      id: 3,
      date: "10/07/2025",
      match: "Fluminense x Flamengo",
      result: "3x2",
      photos: [
        { id: 7, url: "/img/placeholder-event7.jpg", alt: "Evento Guerreiro Bom de Bola 7" },
        { id: 8, url: "/img/placeholder-event8.jpg", alt: "Evento Guerreiro Bom de Bola 8" },
      ]
    }
  ];

  // Dados do próximo evento
  const nextEvent = {
    date: "25/10/2025",
    match: "Fluminense x Vasco",
    location: "Maracanã",
    time: "18:30h"
  };

  return (
    <div className="bg-gray-50 text-slate-900 font-sans">
      {/* Header / Hero */}
      <header className="bg-gradient-to-r bg-[#9c0004] text-white relative overflow-hidden">
        {/* Background pattern overlay */}
        {/* <div className="absolute inset-0 opacity-10"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             }}>
        </div> */}
        
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-20 relative z-10">
          <div className="text-center">
            {/* <div className="flex justify-center items-center mb-6">
              <div className="bg-white rounded-full p-4 mr-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">⚽</span>
                </div>
              </div>
              <div className="bg-white rounded-full p-4">
                <img src="/img/logo.png" alt="Predialnet" className="w-16 h-8 object-contain" />
              </div>
            </div> */}
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Guerreiro Bom de Bola
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8">
              O evento oficial da Predialnet em parceria com o Fluminense. 
              Participe, faça gols e ganhe prêmios incríveis!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#premios" className="inline-flex items-center rounded-full bg-white text-[#9c0004] px-6 py-3 text-sm font-semibold shadow hover:bg-gray-100 transition-colors">
                Ver Prêmios
              </a>
              <a href="#proximo-evento" className="inline-flex items-center rounded-full bg-green-600 text-white px-6 py-3 text-sm font-semibold shadow hover:bg-green-700 transition-colors">
                Próximo Evento
              </a>
              <a href="#galeria" className="inline-flex items-center rounded-full bg-transparent border-2 border-white text-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-[#9c0004] transition-colors">
                Ver Galeria
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Sobre o Evento */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-3xl shadow border border-gray-100">
          <div className="p-6 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#9c0004] mb-4">
                Sobre o Guerreiro Bom de Bola
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Um evento único que une a paixão pelo futebol com a tecnologia da Predialnet. 
                Como patrocinadora oficial do Fluminense, criamos esta experiência especial para nossos clientes e torcedores.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-red-50 rounded-2xl p-6 border border-green-100">
                <h3 className="font-bold text-[#9c0004] mb-4 text-xl">Como Funciona</h3>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-green-600"></span>
                    Participe do evento nos jogos do Fluminense
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-green-600"></span>
                    Demonstre suas habilidades no futebol
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-green-600"></span>
                    Ganhe prêmios de acordo com sua performance
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-green-600"></span>
                    Viva uma experiência única com o Tricolor
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-green-50 rounded-2xl p-6 border border-red-100">
                <h3 className="font-bold text-[#9c0004] mb-4 text-xl">Patrocínio Oficial</h3>
                <div className="space-y-4">
                  <p className="text-gray-800">
                    A Predialnet é orgulhosa patrocinadora oficial do <strong>Fluminense Football Club</strong>, 
                    proporcionando conexão de alta velocidade para o clube e experiências únicas para os torcedores.
                  </p>
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <img src="/img/logo.png" alt="Predialnet" className="h-12 object-contain" />
                    {/* <span className="text-2xl">🤝</span>
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">FLU</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premiação */}
      <section id="premios" className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-3xl shadow border border-gray-100">
          <div className="p-6 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#9c0004] mb-4">
                Sistema de Premiação
              </h2>
              <p className="text-lg text-gray-700">
                Quanto melhor sua performance, melhor o prêmio que você leva para casa!
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {/* Participação */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 text-center border border-gray-200">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🎗️</span>
                </div>
                <h3 className="font-bold text-gray-700 mb-2">Participação</h3>
                <p className="text-sm text-gray-600 mb-3">O importante é competir...</p>
                <div className="bg-white rounded-lg p-3 border">
                  <p className="font-semibold text-[#9c0004]">Faixa do Evento</p>
                </div>
              </div>

              {/* 1 Gol */}
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 text-center border border-yellow-200">
                <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">⚽</span>
                </div>
                <h3 className="font-bold text-yellow-700 mb-2">1 Gol</h3>
                <p className="text-sm text-yellow-600 mb-3">Primeira balançada da rede!</p>
                <div className="bg-white rounded-lg p-3 border">
                  <p className="font-semibold text-[#9c0004]">Bandeira do Flu</p>
                </div>
              </div>

              {/* 2 Gols */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center border border-orange-200">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🧢</span>
                </div>
                <h3 className="font-bold text-orange-700 mb-2">2 Gols</h3>
                <p className="text-sm text-orange-600 mb-3">Dobradinha de craque!</p>
                <div className="bg-white rounded-lg p-3 border">
                  <p className="font-semibold text-[#9c0004]">Boné Oficial</p>
                </div>
              </div>

              {/* 3+ Gols */}
              <div className="bg-gradient-to-br from-green-50 to-red-50 rounded-2xl p-6 text-center border border-green-200">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">👕</span>
                </div>
                <h3 className="font-bold text-green-700 mb-2">3 Gols</h3>
                <p className="text-sm text-green-600 mb-3">Hat-trick de artilheiro!</p>
                <div className="bg-white rounded-lg p-3 border">
                  <p className="font-semibold text-[#9c0004]">Camisa Oficial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Próximo Evento */}
      <section id="proximo-evento" className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-br from-[#9c0004] to-[#7c1158] rounded-3xl shadow text-white">
          <div className="p-6 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Próximo Evento
              </h2>
              <p className="text-xl opacity-90">
                Não perca a próxima oportunidade de participar!
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{nextEvent.match}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">📅</span>
                      <span className="text-lg">{nextEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">🕕</span>
                      <span className="text-lg">{nextEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">📍</span>
                      <span className="text-lg">{nextEvent.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white/20 rounded-xl p-6 mb-4">
                    <p className="text-sm opacity-80 mb-2">Mais informações em breve</p>
                    <p className="text-2xl font-bold">Fique ligado!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Eventos */}
      <section id="galeria" className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-3xl shadow border border-gray-100">
          <div className="p-6 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#9c0004] mb-4">
                Galeria dos Eventos
              </h2>
              <p className="text-lg text-gray-700">
                Reviva os melhores momentos dos eventos anteriores
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {eventGalleries.map((event) => (
                <div key={event.id} className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="mb-4">
                    <h3 className="font-bold text-[#9c0004] text-lg">{event.match}</h3>
                    <p className="text-sm text-gray-600">{event.date} • Resultado: {event.result}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {event.photos.slice(0, 4).map((photo, index) => (
                      <div key={photo.id} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Foto {index + 1}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => setSelectedGallery(event)}
                    className="w-full bg-[#9c0004] hover:bg-[#8c0003] text-white py-2 rounded-lg font-semibold transition-colors"
                  >
                    Ver Todas ({event.photos.length} fotos)
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal da Galeria */}
      {selectedGallery && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#9c0004]">{selectedGallery.match}</h3>
                <p className="text-gray-600">{selectedGallery.date} • {selectedGallery.result}</p>
              </div>
              <button 
                onClick={() => setSelectedGallery(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {selectedGallery.photos.map((photo) => (
                <div key={photo.id} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Foto {photo.id}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GuerreiroBomDeBola;