import React from 'react';
import Image from 'next/image';

const OutubroRosaPage = () => {
  return (
    <div className="bg-rose-50 text-slate-900 font-sans">
      {/* Header / Hero */}
      <header className="bg-gradient-to-r from-[#9c0004] via-[#e11d48] to-[#f472b6] text-white relative overflow-hidden">
        {/* Ribbon effect overlay */}
        <div className="absolute inset-0 opacity-20"
             style={{
               background: `
                 radial-gradient(circle at 20% 35%, rgba(255,255,255,.15), transparent 40%),
                 radial-gradient(circle at 80% 65%, rgba(255,255,255,.12), transparent 35%),
                 linear-gradient(120deg, rgba(255,255,255,.08), transparent 60%),
                 linear-gradient(180deg, rgba(255,255,255,.06), transparent 40%),
                 linear-gradient(90deg, rgba(255,255,255,.05), transparent 50%)
               `
             }}>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 py-6 md:py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Outubro Rosa <span className="opacity-90">— Predialnet</span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8">
              Informação salva vidas. Compartilhe, previna-se e incentive exames em dia.
            </p>
            
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
        </div>
      </header>

      {/* Números rápidos */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white rounded-2xl shadow p-6 border border-rose-100">
            <p className="text-sm uppercase tracking-wide text-[#9c0004] font-semibold">Incidência Brasil (2023–2025)</p>
            <p className="mt-2 text-4xl font-extrabold text-[#9c0004]">73.610</p>
            <p className="text-sm text-slate-600">novos casos estimados por ano de câncer de mama em mulheres (exclui pele não melanoma).</p>
            <p className="mt-3 text-xs text-slate-500">Fonte: INCA — Estimativa 2023.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border border-rose-100">
            <p className="text-sm uppercase tracking-wide text-[#9c0004] font-semibold">Mais incidente nas mulheres</p>
            <p className="mt-2 text-2xl md:text-3xl font-extrabold text-[#9c0004]">#1 no Brasil</p>
            <p className="text-sm text-slate-600">Tipo de câncer mais frequente nas mulheres (após pele não melanoma).</p>
            <p className="mt-3 text-xs text-slate-500">Fonte: INCA.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border border-rose-100">
            <p className="text-sm uppercase tracking-wide text-[#9c0004] font-semibold">Observação das mamas</p>
            <p className="mt-2 text-2xl md:text-3xl font-extrabold text-[#9c0004]">Valorize mudanças</p>
            <p className="text-sm text-slate-600">Observe e apalpe quando for confortável; dê atenção a alterações e procure serviço de saúde.</p>
            <p className="mt-3 text-xs text-slate-500">Fonte: INCA — Outubro Rosa.</p>
          </div>
        </div>
      </section>

      {/* Prevenção */}
      <section id="prevencao" className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-3xl shadow border border-rose-100">
          <div className="p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#9c0004]">Como reduzir o risco e detectar cedo</h2>
            <p className="mt-2 text-slate-700">Estilo de vida saudável reduz risco; diagnóstico precoce melhora as chances de tratamento.</p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
                <h3 className="font-bold text-[#9c0004] mb-3">Hábitos que ajudam</h3>
                <ul className="space-y-3 text-slate-800">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#9c0004]"></span>
                    Manter peso saudável e praticar atividades físicas.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#9c0004]"></span>
                    Alimentação balanceada e redução de álcool.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#9c0004]"></span>
                    Não fumar e evitar exposição a tabaco passivo.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#9c0004]"></span>
                    Conhecer histórico familiar e discutir risco com profissional de saúde.
                  </li>
                </ul>
              </div>
              
              <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
                <h3 className="font-bold text-[#9c0004] mb-3">Fique atenta a sinais de alerta</h3>
                <ul className="space-y-3 text-slate-800">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#9c0004]"></span>
                    Caroço (nódulo) fixo, geralmente indolor, na mama ou axila.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#9c0004]"></span>
                    Alterações na pele (vermelhidão, retração, "aspecto de casca de laranja").
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#9c0004]"></span>
                    Secreção papilar (principalmente com sangue) e alterações no mamilo.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 inline-block w-2.5 h-2.5 rounded-full bg-[#9c0004]"></span>
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
        <div className="bg-white rounded-3xl shadow border border-rose-100">
          <div className="p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#9c0004]">Rastreamento (mamografia preventiva)</h2>

            <div className="mt-6 grid lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-rose-100 p-6 bg-rose-50">
                <h3 className="font-bold text-[#9c0004]">Diretriz oficial do INCA</h3>
                <p className="mt-2 text-sm text-slate-800">
                  <strong>Mulheres de 50 a 69 anos:</strong> mamografia a cada <strong>2 anos</strong> (rastreamento populacional).
                  <br/>
                  <span className="text-slate-600">Para outras faixas etárias, a indicação é individualizada.</span>
                </p>
                <p className="mt-3 text-xs text-slate-500">Fontes: INCA (posicionamento oficial).</p>
              </div>

              <div className="rounded-2xl border border-rose-100 p-6">
                <h3 className="font-bold text-[#9c0004]">Acesso pelo SUS a partir dos 40</h3>
                <p className="mt-2 text-sm text-slate-800">
                  O Ministério da Saúde <strong>garantiu acesso à mamografia</strong> no SUS para mulheres de <strong>40–49 anos</strong> sem sinais/sintomas, por <strong>decisão compartilhada</strong> com profissional de saúde (benefícios e riscos devem ser explicados).
                </p>
                <p className="mt-3 text-xs text-slate-500">Fontes: Ministério da Saúde / SBM.</p>
              </div>

              <div className="rounded-2xl border border-rose-100 p-6">
                <h3 className="font-bold text-[#9c0004]">Sociedades médicas</h3>
                <p className="mt-2 text-sm text-slate-800">
                  A <strong>Sociedade Brasileira de Mastologia</strong> recomenda <strong>mamografia anual a partir dos 40</strong>, até 75 anos (ou conforme avaliação clínica).
                </p>
                <p className="mt-3 text-xs text-slate-500">Fonte: SBM (nota de esclarecimento).</p>
              </div>
            </div>

            <div className="mt-6 p-5 rounded-xl bg-rose-100/70 border border-rose-200 text-sm text-[#9c0004]">
              <strong>Atenção:</strong> recomendações podem variar conforme sua história familiar e fatores de risco. Procure sua UBS/ESF para avaliação individual.
            </div>
          </div>
        </div>
      </section>

      {/* Instituições confiáveis */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-3xl shadow border border-rose-100">
          <div className="p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#9c0004]">Instituições e conteúdos confiáveis</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <a href="https://www.gov.br/inca" target="_blank" rel="noopener" className="group rounded-2xl border p-6 hover:shadow">
                <h3 className="font-bold text-[#9c0004] group-hover:underline">INCA — Instituto Nacional de Câncer</h3>
                <p className="text-sm text-slate-700 mt-1">Campanhas, dados e diretrizes de rastreamento. Outubro Rosa e materiais oficiais.</p>
                <p className="mt-2 text-xs text-slate-500">Ex.: Outubro Rosa, posição oficial sobre mamografia.</p>
              </a>
              <a href="https://www.gov.br/saude" target="_blank" rel="noopener" className="group rounded-2xl border p-6 hover:shadow">
                <h3 className="font-bold text-[#9c0004] group-hover:underline">Ministério da Saúde / SUS</h3>
                <p className="text-sm text-slate-700 mt-1">Informes e acesso a mamografia pelo SUS, canais de atendimento e Ouvidoria (OuvSUS 136).</p>
                <p className="mt-2 text-xs text-slate-500">Acesso 40–49 anos e Disque 136.</p>
              </a>
              <a href="https://sbmastologia.com.br" target="_blank" rel="noopener" className="group rounded-2xl border p-6 hover:shadow">
                <h3 className="font-bold text-[#9c0004] group-hover:underline">Sociedade Brasileira de Mastologia (SBM)</h3>
                <p className="text-sm text-slate-700 mt-1">Conteúdo para público e profissionais; posicionamentos e campanhas.</p>
                <p className="mt-2 text-xs text-slate-500">Recomendação anual 40+.</p>
              </a>
              <a href="https://www.oncoguia.org.br" target="_blank" rel="noopener" className="group rounded-2xl border p-6 hover:shadow">
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
        <div className="bg-white rounded-3xl shadow border border-rose-100">
          <div className="p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#9c0004]">Canais de ajuda e orientação</h2>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border p-6">
                <h3 className="font-bold text-[#9c0004]">Disque Saúde — OuvSUS 136</h3>
                <p className="mt-1 text-sm text-slate-800">
                  Informações sobre o SUS, campanhas, orientações e encaminhamentos.
                </p>
                <p className="mt-2 text-xs text-slate-500">Horário de teleatendente: seg–sex 8h–20h; sáb 8h–18h. Ligue 136.</p>
              </div>

              <div className="rounded-2xl border p-6">
                <h3 className="font-bold text-[#9c0004]">Ligue Câncer — Oncoguia</h3>
                <p className="mt-1 text-sm text-slate-800">0800 773 1666 (orientação e apoio). Também atende familiares.</p>
                <p className="mt-2 text-xs text-slate-500">Segunda a sexta, das 8h às 20h.</p>
              </div>

              <div className="rounded-2xl border p-6">
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