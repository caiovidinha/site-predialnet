import React from 'react';
import Image from 'next/image';

const OutubroRosaPage = () => {
  return (
    <div className="bg-rose-50 text-slate-900 font-sans">
      {/* Header / Hero - Banner Image */}
      <header>
        {/* Banner Desktop */}
        <img
          src="/img/bannerOutRosa.jpg"
          alt="Banner Outubro Rosa - Predialnet"
          className="hidden md:block w-full h-full object-cover"
        />
        
        {/* Banner Mobile */}
        <img
          src="/img/bannerOutRosaMobile.jpg"
          alt="Banner Outubro Rosa Mobile - Predialnet"
          className="md:hidden w-full h-full object-cover"
        />
      </header>

      {/* Navigation buttons */}
      <section className="bg-rose-50 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#prevencao" className="inline-flex items-center rounded-full bg-white text-[#9c0004] px-6 py-3 text-sm font-semibold shadow hover:bg-rose-100 transition-colors">
              Como prevenir
            </a>
            <a href="#rastreamento" className="inline-flex items-center rounded-full bg-white text-[#9c0004] px-6 py-3 text-sm font-semibold shadow hover:bg-rose-100 transition-colors">
              Rastreamento
            </a>
            <a href="#ajuda" className="inline-flex items-center rounded-full bg-white text-[#9c0004] px-6 py-3 text-sm font-semibold shadow hover:bg-rose-100 transition-colors">
              Canais de ajuda
            </a>
          </div>
        </div>
      </section>

      {/* Números rápidos */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white rounded-2xl  p-6  ">
            <p className="text-sm uppercase tracking-wide text-[#9c0004] font-semibold">Incidência Brasil (2023–2025)</p>
            <p className="mt-2 text-4xl font-extrabold text-[#9c0004]">73.610</p>
            <p className="text-sm text-slate-600">novos casos estimados por ano de câncer de mama em mulheres.</p>
            <p className="mt-3 text-xs text-slate-500">Fonte: INCA.</p>
          </div>
          <div className="bg-white rounded-2xl  p-6 ">
            <p className="text-sm uppercase tracking-wide text-[#9c0004] font-semibold">Tipo de câncer mais letal</p>
            <p className="mt-2 text-2xl md:text-3xl font-extrabold text-[#9c0004]">Nº1 no Brasil</p>
            <p className="text-sm text-slate-600">Tipo de câncer que mais mata mulheres no Brasil.</p>
            <p className="mt-3 text-xs text-slate-500">Fonte: INCA.</p>
          </div>
          <div className="bg-white rounded-2xl  p-6  ">
            <p className="text-sm uppercase tracking-wide text-[#9c0004] font-semibold">Autoexame</p>
            <p className="mt-2 text-2xl md:text-3xl font-extrabold text-[#9c0004]">Observe mudanças</p>
            <p className="text-sm text-slate-600">Observe e apalpe as mamas. Dê atenção a alterações e procure o serviço de saúde.</p>
            <p className="mt-3 text-xs text-slate-500">Fonte: INCA.</p>
          </div>
        </div>
      </section>

      {/* Prevenção */}
      <section id="prevencao" className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-3xl   ">
          <div className="p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#9c0004]">Como reduzir o risco e detectar cedo</h2>
            <p className="mt-2 text-slate-700">Estilo de vida saudável reduz risco e o diagnóstico precoce melhora as chances de tratamento.</p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-100 rounded-2xl p-6  ">
                <h3 className="font-bold text-[#9c0004] mb-3">Hábitos que ajudam</h3>
                <ul className="space-y-3 text-slate-800">
                  <li className="flex items-start gap-3">
                    -
                    Manter estilo de vida saudável e praticar atividades físicas.
                  </li>
                  <li className="flex items-start gap-3">
                    -
                    Alimentação balanceada e redução de álcool.
                  </li>
                  <li className="flex items-start gap-3">
                    -
                    Não fumar e evitar exposição a tabaco passivo.
                  </li>
                  <li className="flex items-start gap-3">
                    -
                    Conhecer histórico familiar e discutir risco com profissional de saúde.
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-100 rounded-2xl p-6  ">
                <h3 className="font-bold text-[#9c0004] mb-3">Fique atenta a sinais de alerta</h3>
                <ul className="space-y-3 text-slate-800">
                  <li className="flex items-start gap-3">
                    -
                    Caroço (nódulo) fixo, geralmente indolor, na mama ou axila.
                  </li>
                  <li className="flex items-start gap-3">
                    -
                    Alterações na pele (vermelhidão, retração, "aspecto de casca de laranja").
                  </li>
                  <li className="flex items-start gap-3">
                    -
                    Secreção papilar (principalmente com sangue) e alterações no mamilo.
                  </li>
                  <li className="flex items-start gap-3">
                    -
                    Qualquer mudança persistente nas mamas. Procure uma UBS/SUS.
                  </li>
                </ul>
                <p className="mt-3 text-xs text-slate-500">Orientação geral baseada em materiais do INCA/Fiocruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rastreamento / Mamografia */}
      <section id="rastreamento" className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-3xl   ">
          <div className="p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#9c0004]">Rastreamento (mamografia preventiva)</h2>

            <div className="mt-6 grid lg:grid-cols-3 gap-6">
              <div className="rounded-2xl   p-6 bg-gray-100">
                <h3 className="font-bold text-[#9c0004]">Diretriz oficial do INCA</h3>
                <p className="mt-2 text-sm text-slate-800">
                  <strong>Mulheres de 50 a 69 anos:</strong> mamografia a cada <strong>2 anos</strong> (rastreamento populacional).
                  <br/>
                  <span className="text-slate-600">Para outras faixas etárias, a indicação é individualizada.</span>
                </p>
                <p className="mt-3 text-xs text-slate-500">Fontes: INCA (posicionamento oficial).</p>
              </div>

              <div className="rounded-2xl  bg-gray-100 p-6">
                <h3 className="font-bold text-[#9c0004]">Acesso pelo SUS a partir dos 40</h3>
                <p className="mt-2 text-sm text-slate-800">
                  O Ministério da Saúde <strong>garantiu acesso à mamografia</strong> no SUS para mulheres de <strong>40–49 anos</strong> sem sinais/sintomas, por <strong>decisão compartilhada</strong> com profissional de saúde (benefícios e riscos devem ser explicados).
                </p>
                <p className="mt-3 text-xs text-slate-500">Fontes: Ministério da Saúde / SBM.</p>
              </div>

              <div className="rounded-2xl  bg-gray-100 p-6">
                <h3 className="font-bold text-[#9c0004]">Sociedade médica</h3>
                <p className="mt-2 text-sm text-slate-800">
                  A <strong>Sociedade Brasileira de Mastologia</strong> recomenda <strong>mamografia anual a partir dos 40</strong>, até 75 anos (ou conforme avaliação clínica).
                </p>
                <p className="mt-3 text-xs text-slate-500">Fonte: SBM (nota de esclarecimento).</p>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-xl bg-rose-100/70  border-rose-200 text-sm text-[#9c0004]">
              <strong>Atenção:</strong> recomendações podem variar conforme sua história familiar e fatores de risco. Procure sua UBS/ESF para avaliação individual.
            </div>
          </div>
        </div>
      </section>

      {/* Instituições confiáveis */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-3xl   ">
          <div className="p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#9c0004]">Instituições e conteúdos confiáveis - clique nos links abaixo</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <a href="https://www.gov.br/inca" target="_blank" rel="noopener" className="group rounded-2xl bg-gray-100  p-6 hover:">
                <h3 className="font-bold text-[#9c0004] group-hover:underline">INCA — Instituto Nacional de Câncer</h3>
                <p className="text-sm text-slate-700 mt-1">Campanhas, dados e diretrizes de rastreamento. Outubro Rosa e materiais oficiais.</p>
                <p className="mt-2 text-xs text-slate-500">Ex.: Outubro Rosa, posição oficial sobre mamografia.</p>
              </a>
              <a href="https://www.gov.br/saude" target="_blank" rel="noopener" className="group rounded-2xl bg-gray-100  p-6 hover:">
                <h3 className="font-bold text-[#9c0004] group-hover:underline">Ministério da Saúde / SUS</h3>
                <p className="text-sm text-slate-700 mt-1">Informes e acesso a mamografia pelo SUS, canais de atendimento e Ouvidoria (OuvSUS 136).</p>
                <p className="mt-2 text-xs text-slate-500">Acesso 40–49 anos e Disque 136.</p>
              </a>
              <a href="https://sbmastologia.com.br" target="_blank" rel="noopener" className="group rounded-2xl bg-gray-100  p-6 hover:">
                <h3 className="font-bold text-[#9c0004] group-hover:underline">Sociedade Brasileira de Mastologia (SBM)</h3>
                <p className="text-sm text-slate-700 mt-1">Conteúdo para público e profissionais; posicionamentos e campanhas.</p>
                <p className="mt-2 text-xs text-slate-500">Recomendação anual 40+.</p>
              </a>
              <a href="https://www.oncoguia.org.br" target="_blank" rel="noopener" className="group rounded-2xl bg-gray-100  p-6 hover:">
                <h3 className="font-bold text-[#9c0004] group-hover:underline">Instituto Oncoguia</h3>
                <p className="text-sm text-slate-700 mt-1">Orientação sobre direitos do paciente e apoio prático (Ligue Câncer 0800 773 1666).</p>
                <p className="mt-2 text-xs text-slate-500">Programa Multicanal e telefone 0800.</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Canais de Ajuda */}
      <section id="ajuda" className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-3xl   ">
          <div className="p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#9c0004]">Canais de ajuda e orientação</h2>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-gray-100  p-6">
                <h3 className="font-bold text-[#9c0004]">Disque Saúde — OuvSUS 136</h3>
                <p className="mt-1 text-sm text-slate-800">
                  Informações sobre o SUS, campanhas, orientações e encaminhamentos.
                </p>
                <p className="mt-2 text-xs text-slate-500">Segunda a sexta das 8h às 20h. Sábado das 8h às 18h. Ligue 136.</p>
              </div>

              <div className="rounded-2xl bg-gray-100  p-6">
                <h3 className="font-bold text-[#9c0004]">Ligue Câncer — Oncoguia</h3>
                <p className="mt-1 text-sm text-slate-800">0800 773 1666 (orientação e apoio). Também atende familiares.</p>
                <p className="mt-2 text-xs text-slate-500">Segunda a sexta, das 8h às 20h.</p>
              </div>

              <div className="rounded-2xl bg-gray-100  p-6">
                <h3 className="font-bold text-[#9c0004]">Centro de Valorização da Vida (CVV)</h3>
                <p className="mt-1 text-sm text-slate-800">188 (apoio emocional gratuito, 24h). Chat online também disponível.</p>
                <p className="mt-2 text-xs text-slate-500">Apoio emocional e prevenção do suicídio.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutubroRosaPage;