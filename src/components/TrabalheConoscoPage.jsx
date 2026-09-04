import React, { useState, useRef, useEffect } from 'react';
import { sanitizeInput, sanitizeFormData, validateEmail, validatePhone } from '../utils/validation';
import { events } from '../utils/analytics';
import { SuccessToast } from './SpecialPlanPage';

// ATENÇÃO: confirmar com o RH antes de publicar. É este endereço que recebe as candidaturas.
const EMAIL_RH = 'rh@predialnet.com.br';

// Vagas. Para tirar uma vaga do ar, basta apagar o objeto correspondente.
export const vagas = [
  {
    id: 'tecnico-instalacao',
    titulo: 'Técnico de Instalação e Manutenção',
    area: 'Operações',
    local: 'Niterói e São Gonçalo',
    tipo: 'CLT',
    resumo:
      'Instalação, ativação e manutenção de acessos em fibra óptica na casa do cliente, com foco em deixar a conexão redonda já na primeira visita.',
    atividades: [
      'Instalar e configurar ONTs, roteadores e pontos de rede residenciais',
      'Executar fusão de fibra, certificação de potência óptica e organização de CTOs',
      'Diagnosticar e corrigir falhas de sinal na rede externa e interna',
      'Orientar o cliente sobre o uso do Wi-Fi e do aplicativo Minha Predialnet',
    ],
    requisitos: [
      'Ensino médio completo',
      'CNH categoria A ou B ativa',
      'Curso ou experiência com fusão de fibra óptica (desejável NR-35)',
      'Disponibilidade para escala com finais de semana alternados',
    ],
  },
  {
    id: 'suporte-n2',
    titulo: 'Analista de Suporte Técnico N2',
    area: 'Suporte',
    local: 'Niterói (Centro)',
    tipo: 'CLT',
    resumo:
      'Atendimento de segundo nível: assume o que o N1 não resolveu, investiga a fundo e devolve o cliente conectado.',
    atividades: [
      'Analisar chamados escalados pelo N1 e tratar incidentes recorrentes',
      'Investigar rede GPON, roteamento e qualidade de link junto ao NOC',
      'Documentar procedimentos e treinar o time de primeiro nível',
      'Acompanhar indicadores de reincidência e tempo de solução',
    ],
    requisitos: [
      'Superior cursando ou completo em TI, Redes ou Telecom',
      'Conhecimento sólido de TCP/IP, DNS, DHCP, NAT e Wi-Fi',
      'Experiência anterior com suporte a provedor de internet',
      'Desejável: Mikrotik, GPON e leitura de logs',
    ],
  },
  {
    id: 'suporte-n1',
    titulo: 'Atendente de Suporte Técnico N1',
    area: 'Suporte',
    local: 'Niterói (Centro)',
    tipo: 'CLT',
    resumo:
      'Primeiro contato do cliente quando algo não vai bem. Escuta, diagnostica o básico e resolve com clareza, sem jargão.',
    atividades: [
      'Atender clientes por telefone, chat e WhatsApp',
      'Realizar diagnósticos iniciais de conexão e Wi-Fi',
      'Abrir e acompanhar ordens de serviço',
      'Registrar cada atendimento com precisão no sistema',
    ],
    requisitos: [
      'Ensino médio completo',
      'Boa comunicação escrita e falada',
      'Noções de redes e informática',
      'Experiência com atendimento ao cliente é um diferencial',
    ],
  },
  {
    id: 'analista-redes',
    titulo: 'Analista de Redes Júnior (NOC)',
    area: 'Engenharia de Redes',
    local: 'Niterói (Centro)',
    tipo: 'CLT',
    resumo:
      'Monitoramento e sustentação da rede que atende Niterói, São Gonçalo e Rio de Janeiro, em regime de plantão.',
    atividades: [
      'Monitorar disponibilidade, latência e alarmes da rede',
      'Atuar na resposta a incidentes e na comunicação com o suporte',
      'Apoiar manutenções programadas e expansões de rede',
      'Manter a documentação de topologia atualizada',
    ],
    requisitos: [
      'Superior cursando em TI, Redes, Telecom ou Engenharia',
      'Conhecimento de roteamento, VLANs e protocolos de rede',
      'Disponibilidade para escala de plantão',
      'Desejável: Zabbix, Grafana, Linux e BGP',
    ],
  },
  {
    id: 'consultor-vendas',
    titulo: 'Consultor de Vendas Externas',
    area: 'Comercial',
    local: 'Rio de Janeiro (Zona Norte e Centro)',
    tipo: 'CLT mais comissão',
    resumo:
      'Prospecção em campo nos bairros já atendidos pela rede, com foco em condomínios residenciais e comerciais.',
    atividades: [
      'Prospectar clientes em campo e em condomínios da região',
      'Apresentar planos, negociar e fechar contratos',
      'Manter o funil de vendas atualizado no CRM',
      'Acompanhar o cliente até a instalação',
    ],
    requisitos: [
      'Ensino médio completo',
      'Experiência com vendas externas (telecom é diferencial)',
      'Perfil autônomo e orientado a meta',
      'Disponibilidade para deslocamento na região',
    ],
  },
  {
    id: 'assistente-financeiro',
    titulo: 'Assistente Financeiro',
    area: 'Financeiro',
    local: 'Niterói (Centro)',
    tipo: 'CLT',
    resumo:
      'Rotina de contas a receber, conciliação e apoio ao cliente em questões de fatura.',
    atividades: [
      'Conciliar recebimentos e emitir segunda via de faturas',
      'Tratar pendências de cobrança com clientes',
      'Apoiar o fechamento mensal e a emissão de relatórios',
      'Organizar documentos fiscais e financeiros',
    ],
    requisitos: [
      'Superior cursando em Administração, Contábeis ou Economia',
      'Excel intermediário',
      'Organização e atenção a detalhe',
      'Experiência prévia em rotina financeira é um diferencial',
    ],
  },
];

const processo = [
  { passo: '1', titulo: 'Você se candidata', texto: 'Preenche o formulário com o link do seu currículo.' },
  { passo: '2', titulo: 'Triagem', texto: 'O RH analisa o perfil e responde em até 15 dias.' },
  { passo: '3', titulo: 'Conversas', texto: 'Bate-papo com o RH e com a liderança da área.' },
  { passo: '4', titulo: 'Proposta', texto: 'Alinhamos condições e combinamos a data de início.' },
];

const BANCO_TALENTOS = 'Banco de talentos';

function TrabalheConoscoPage() {
  const [vagaAberta, setVagaAberta] = useState(null);
  const [formData, setFormData] = useState({});
  const [phone, setPhone] = useState('');
  const [vaga, setVaga] = useState('');
  const [missingField, setMissingField] = useState('none');
  const [invalidFieldId, setInvalidFieldId] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    if (!vagaAberta) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => { if (e.key === 'Escape') setVagaAberta(null); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', onKey);
    };
  }, [vagaAberta]);

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const n = value.replace(/\D/g, '');
    if (n.length > 11) {
      const ddd = n.slice(2, 4);
      const num = n.slice(4, 13);
      if (num.length === 0) return `+${n.slice(0, 2)}`;
      if (num.length <= 2) return `+${n.slice(0, 2)} (${ddd}`;
      if (num.length <= 7) return `+${n.slice(0, 2)} (${ddd}) ${num}`;
      return `+${n.slice(0, 2)} (${ddd}) ${num.slice(0, 5)}-${num.slice(5, 9)}`;
    }
    if (n.length <= 2) return `(${n}`;
    if (n.length <= 7) return `(${n.slice(0, 2)}) ${n.slice(2)}`;
    return `(${n.slice(0, 2)}) ${n.slice(2, 7)}-${n.slice(7, 11)}`;
  };

  const startCooldown = () => {
    setCooldown(true);
    setTimeout(() => setCooldown(false), 3000);
  };

  const sendEmail = async (to, subject, body) => {
    if (cooldown) return { error: 'Rate limit' };
    startCooldown();
    try {
      const res = await fetch('https://appgw.predialnet.com.br/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to, subject, content: body }),
      });
      if (!res.ok) return { error: 'Erro ao enviar' };
      return await res.json();
    } catch {
      return { error: 'Erro ao enviar' };
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const candidatarSe = (titulo) => {
    setVaga(titulo);
    setVagaAberta(null);
    events.formOpen('trabalhe-conosco', titulo);
    setTimeout(() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sanitized = sanitizeFormData(formData);
    sanitized.phone = phone;
    sanitized.vaga = vaga;

    const required = [
      { id: 'vaga', label: 'Vaga de interesse' },
      { id: 'fullName', label: 'Nome completo' },
      { id: 'email', label: 'E-mail' },
      { id: 'phone', label: 'Telefone' },
      { id: 'city', label: 'Cidade onde mora' },
      { id: 'curriculo', label: 'Link do currículo' },
    ];
    for (const f of required) {
      if (!sanitized[f.id]?.trim()) {
        setMissingField(f.label);
        setInvalidFieldId(f.id);
        return;
      }
    }
    if (!validateEmail(sanitized.email)) {
      setMissingField('E-mail inválido');
      setInvalidFieldId('email');
      return;
    }
    if (!validatePhone(sanitized.phone)) {
      setMissingField('Telefone inválido');
      setInvalidFieldId('phone');
      return;
    }
    if (!/^https?:\/\/\S+\.\S+/i.test(sanitized.curriculo.trim())) {
      setMissingField('Link do currículo (comece com https://)');
      setInvalidFieldId('curriculo');
      return;
    }

    setMissingField('none');
    setInvalidFieldId('');

    let userIp = '';
    try {
      const ipRes = await fetch('https://api.ipify.org?format=json');
      const data = await ipRes.json();
      userIp = data.ip;
    } catch {
      userIp = 'Não capturado';
    }

    const body = `
      <h3>TRABALHE CONOSCO</h3>
      <p><strong>Vaga de interesse:</strong> ${sanitizeInput(sanitized.vaga)}</p>
      <p><strong>Nome completo:</strong> ${sanitizeInput(sanitized.fullName)}</p>
      <p><strong>E-mail:</strong> ${sanitizeInput(sanitized.email)}</p>
      <p><strong>Telefone:</strong> ${sanitizeInput(sanitized.phone)}</p>
      <p><strong>Cidade onde mora:</strong> ${sanitizeInput(sanitized.city)}</p>
      <p><strong>Link do currículo:</strong> ${sanitizeInput(sanitized.curriculo)}</p>
      <p><strong>Apresentação:</strong> ${sanitizeInput(sanitized.message || '')}</p>
      <hr />
      <p><strong>IP:</strong> ${userIp}</p>
    `;

    setLoading(true);
    try {
      const result = await sendEmail(EMAIL_RH, `Candidatura: ${sanitized.vaga}`, body);
      if (!result.error) {
        setSuccess(true);
        setFormData({});
        setPhone('');
        setVaga('');
        events.formSubmit('trabalhe-conosco', sanitized.vaga, true);
      } else {
        setMissingField('Erro ao enviar. Tente novamente.');
        events.formSubmit('trabalhe-conosco', sanitized.vaga, false);
      }
    } catch {
      setMissingField('Erro ao enviar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (id) =>
    `w-full border ${invalidFieldId === id ? 'border-red-500' : 'border-[#dcdcdc]'} px-3 py-2 text-sm rounded focus:outline-none focus:border-[#9c0004]`;
  const labelClass = 'block mb-1 text-xs text-[#6b6b6b]';
  const tag = 'inline-block text-[11px] text-[#8a0005] bg-[#f6ecec] rounded-full px-2.5 py-0.5';

  return (
    <div className="font-sans text-[#3d3838]">
      {success && <SuccessToast onClose={() => setSuccess(false)} />}

      {/* Faixa de abertura */}
      <section className="relative overflow-hidden bg-[#9c0004] text-white">
        {/* Imagem de fundo. Só entra a partir do md: no mobile o recorte cortaria a pessoa. */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: "url('/img/trabalhe-conosco.webp')" }}
          aria-hidden="true"
        />
        {/* Reforça o contraste do texto sobre o vermelho da imagem. */}
        <div
          className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#8a0005] via-[#8a0005]/70 to-transparent"
          aria-hidden="true"
        />
        <div className="relative px-6 sm:px-[8%] md:px-[12%] py-12">
          <div className="max-w-xl">
          <p className="text-sm uppercase tracking-widest text-white/70 mb-3">Carreiras</p>
          <h1 className="text-[1.65rem] md:text-4xl leading-8 md:leading-[2.75rem] font-light mb-4">
            Venha fazer parte da rede que nos conecta.
          </h1>
          <p className="text-base md:text-lg font-light leading-6 md:leading-7 text-white/90">
            A Predialnet é um provedor de internet de rede própria em Niterói, São Gonçalo e
            Rio de Janeiro. Desde 1998 conectamos moradores, condomínios e empresas daqui, e
            quem faz isso acontecer é um time que conhece as ruas por onde a nossa fibra passa.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href="#vagas"
              className="text-center px-8 py-3 rounded-full bg-white text-[#9c0004] text-sm hover:scale-[1.03] active:scale-95 transition-transform"
            >
              Ver as {vagas.length} vagas abertas
            </a>
            <button
              type="button"
              onClick={() => candidatarSe(BANCO_TALENTOS)}
              className="text-center px-8 py-3 rounded-full border-2 border-white/60 text-white text-sm hover:bg-white/10 transition-colors"
            >
              Entrar no banco de talentos
            </button>
          </div>
          </div>
        </div>
      </section>

      {/* Vagas */}
      <section id="vagas" className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-14 bg-gray-200 scroll-mt-4">
        <h2 className="text-[1.65rem] md:text-3xl leading-8 mb-2">Vagas abertas</h2>
        <p className="text-sm md:text-base text-[#777] mb-8">
          Clique na vaga para ver as atividades e os requisitos completos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vagas.map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setVagaAberta(v)}
              className="text-left flex flex-col h-full rounded-2xl bg-white shadow-md border-gray-200 border-[1.5px] overflow-hidden px-6 py-5 hover:shadow-lg hover:-translate-y-0.5 transition-all group"
            >
              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className={tag}>{v.area}</span>
                <span className={tag}>{v.tipo}</span>
              </div>
              <h3 className="text-lg md:text-base leading-snug mb-1 group-hover:text-[#9c0004] transition-colors">
                {v.titulo}
              </h3>
              <p className="text-xs text-[#999] mb-3">{v.local}</p>
              <p className="text-sm md:text-xs text-[#9e9e9e] leading-relaxed flex-1">{v.resumo}</p>
              <span className="inline-flex items-center gap-1 text-xs text-[#9c0004] mt-4">
                Ver detalhes
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Como é o processo */}
      <section className="px-6 sm:px-[8%] md:px-[12%] py-12 bg-white">
        <h2 className="text-[1.65rem] md:text-3xl leading-8 mb-8">Como é o processo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {processo.map((p) => (
            <div key={p.passo}>
              <div className="w-8 h-8 rounded-full bg-[#9c0004] text-white text-sm flex items-center justify-center mb-3">
                {p.passo}
              </div>
              <p className="text-base mb-1">{p.titulo}</p>
              <p className="text-sm text-[#9e9e9e] leading-relaxed">{p.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulário */}
      <section
        id="candidatura"
        ref={formRef}
        className="px-6 sm:px-[8%] md:px-[12%] py-12 bg-gray-200 scroll-mt-4"
      >
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <div className="md:w-2/5">
            <h2 className="text-[1.65rem] md:text-3xl leading-8 mb-3">Envie sua candidatura</h2>
            <p className="text-sm md:text-base text-[#777] leading-relaxed mb-4">
              Escolha a vaga que combina com você. Se nenhuma delas for a sua cara, selecione
              banco de talentos: guardamos seu perfil para as próximas aberturas.
            </p>
            <div className="bg-white rounded-2xl border-[1.5px] border-gray-200 px-5 py-4">
              <p className="text-sm text-[#8a0005] mb-1">Sobre o currículo</p>
              <p className="text-xs text-[#9e9e9e] leading-relaxed">
                O currículo entra como link, não como anexo. Vale LinkedIn, Google Drive,
                Dropbox ou qualquer endereço público que a gente consiga abrir. Confira se o
                acesso está liberado antes de enviar.
              </p>
            </div>
          </div>

          <div className="md:w-3/5">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-2xl shadow-md border-[1.5px] border-gray-200 p-6 md:p-8 flex flex-col gap-4"
            >
              {missingField !== 'none' && (
                <p className="text-xs text-red-700">Por favor, preencha corretamente: {missingField}</p>
              )}

              <div>
                <label htmlFor="vaga" className={labelClass}>Vaga de interesse</label>
                <select
                  id="vaga"
                  value={vaga}
                  onChange={(e) => setVaga(e.target.value)}
                  className={`${inputClass('vaga')} h-[38px]`}
                >
                  <option value="">Selecione</option>
                  {vagas.map((v) => (
                    <option key={v.id} value={v.titulo}>{v.titulo}</option>
                  ))}
                  <option value={BANCO_TALENTOS}>{BANCO_TALENTOS}</option>
                </select>
              </div>

              <div>
                <label htmlFor="fullName" className={labelClass}>Nome completo</label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName || ''}
                  onChange={handleInputChange}
                  className={inputClass('fullName')}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="email" className={labelClass}>E-mail</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email || ''}
                    onChange={handleInputChange}
                    className={inputClass('email')}
                  />
                </div>
                <div className="sm:w-2/5">
                  <label htmlFor="phone" className={labelClass}>Telefone</label>
                  <input
                    id="phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                    className={inputClass('phone')}
                    maxLength={20}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="sm:w-2/5">
                  <label htmlFor="city" className={labelClass}>Cidade onde mora</label>
                  <input
                    id="city"
                    type="text"
                    value={formData.city || ''}
                    onChange={handleInputChange}
                    className={inputClass('city')}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="curriculo" className={labelClass}>Link do currículo</label>
                  <input
                    id="curriculo"
                    type="url"
                    placeholder="https://"
                    value={formData.curriculo || ''}
                    onChange={handleInputChange}
                    className={inputClass('curriculo')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Conte um pouco sobre você (opcional)</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message || ''}
                  onChange={handleInputChange}
                  className={inputClass('message')}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-white bg-[#9c0004] rounded-full text-base font-light hover:scale-[1.02] active:scale-95 transition-transform disabled:opacity-60 disabled:hover:scale-100 mt-1"
              >
                {loading ? 'Enviando...' : 'Enviar candidatura'}
              </button>

              <p className="text-[11px] text-[#9e9e9e] leading-relaxed">
                Ao enviar, você concorda que a Predialnet trate os dados acima para fins de
                recrutamento e seleção, conforme a nossa{' '}
                <a href="/politica-de-privacidade" className="underline hover:text-[#9c0004]">
                  Política de Privacidade
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Modal da vaga */}
      {vagaAberta && (
        <div
          className="fixed inset-0 bg-[#9c0004] md:bg-black md:bg-opacity-50 flex items-center justify-center z-[9999] md:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="vagaTitulo"
          onClick={(e) => { if (e.target === e.currentTarget) setVagaAberta(null); }}
        >
          <div className="bg-white md:rounded-lg shadow-lg w-full max-w-2xl h-full md:h-auto md:max-h-[90%] overflow-y-auto p-6 md:p-8 relative">
            <button
              type="button"
              onClick={() => setVagaAberta(null)}
              aria-label="Fechar detalhes da vaga"
              className="absolute top-2 right-4 text-gray-400 text-4xl font-thin leading-none"
            >
              &times;
            </button>

            <div className="flex flex-wrap gap-1.5 mb-3 pr-10">
              <span className={tag}>{vagaAberta.area}</span>
              <span className={tag}>{vagaAberta.tipo}</span>
              <span className={tag}>{vagaAberta.local}</span>
            </div>

            <h2 id="vagaTitulo" className="text-2xl md:text-3xl text-[#9c0004] font-light leading-8 mb-3 pr-8">
              {vagaAberta.titulo}
            </h2>
            <p className="text-sm md:text-base text-[#555] leading-relaxed mb-6">{vagaAberta.resumo}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <p className="text-sm text-[#8a0005] mb-2">O que você vai fazer</p>
                <ul className="text-sm text-[#555] leading-relaxed list-disc pl-4 space-y-1.5">
                  {vagaAberta.atividades.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-sm text-[#8a0005] mb-2">O que esperamos</p>
                <ul className="text-sm text-[#555] leading-relaxed list-disc pl-4 space-y-1.5">
                  {vagaAberta.requisitos.map((r) => <li key={r}>{r}</li>)}
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={() => candidatarSe(vagaAberta.titulo)}
              className="w-full md:w-auto md:px-10 py-3 mt-8 rounded-full bg-[#9c0004] text-white text-base font-light hover:scale-[1.02] active:scale-95 transition-transform"
            >
              Candidatar-se a esta vaga
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrabalheConoscoPage;
