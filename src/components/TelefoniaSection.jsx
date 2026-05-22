import React, { useState } from 'react';
import { sanitizeInput, sanitizeFormData, validateEmail, validatePhone } from '../utils/validation';
import { events } from '../utils/analytics';
import { SuccessToast } from './SpecialPlanPage';

const plans = [
  {
    id: 'Ideal Plus',
    label: 'Ideal Plus',
    price: '59,90',
    features: [
      'Suporte para portabilidade',
      'Serviço de siga-me',
      '200 minutos fixo/fixo local',
      '100 minutos para qualquer móvel local',
    ],
  },
  {
    id: 'Ideal Master',
    label: 'Ideal Master',
    price: '89,90',
    features: [
      'Suporte para portabilidade',
      'Serviço de siga-me',
      'Ilimitado fixo/fixo local',
      '200 minutos para qualquer móvel local',
    ],
  },
];

const TelefoniaSection = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({});
  const [phone, setPhone] = useState('');
  const [missingField, setMissingField] = useState('none');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [cooldown, setCooldown] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sanitized = sanitizeFormData(formData);
    sanitized.phone = phone;
    sanitized.plan = selectedPlan;

    const fields = ['nome', 'plan', 'address', 'number', 'neighborhood', 'cep', 'phone', 'email'];
    for (const f of fields) {
      if (!sanitized[f]?.trim()) {
        setMissingField(f === 'nome' ? 'Nome' : f === 'plan' ? 'Plano' : f === 'address' ? 'Endereço' : f === 'number' ? 'Número' : f === 'neighborhood' ? 'Bairro' : f === 'cep' ? 'CEP' : f === 'phone' ? 'Telefone' : 'E-mail');
        return;
      }
    }
    if (!validateEmail(sanitized.email)) { setMissingField('E-mail inválido'); return; }
    if (!validatePhone(sanitized.phone)) { setMissingField('Telefone inválido'); return; }

    setMissingField('none');

    let userIp = '';
    try {
      const ipRes = await fetch('https://api.ipify.org?format=json');
      const data = await ipRes.json();
      userIp = data.ip;
    } catch { userIp = 'Não capturado'; }

    const body = `
      <h3>TELEFONIA</h3>
      <p><strong>Nome:</strong> ${sanitizeInput(sanitized.nome)}</p>
      <p><strong>Plano:</strong> ${sanitizeInput(sanitized.plan)}</p>
      <p><strong>Endereço:</strong> ${sanitizeInput(sanitized.address)}, ${sanitizeInput(sanitized.number)}</p>
      <p><strong>Complemento:</strong> ${sanitizeInput(sanitized.complement || '')}</p>
      <p><strong>Bairro:</strong> ${sanitizeInput(sanitized.neighborhood)}</p>
      <p><strong>CEP:</strong> ${sanitizeInput(sanitized.cep)}</p>
      <p><strong>Telefone:</strong> ${sanitizeInput(sanitized.phone)}</p>
      <p><strong>E-mail:</strong> ${sanitizeInput(sanitized.email)}</p>
      <hr />
      <p><strong>IP:</strong> ${userIp}</p>
    `;

    setLoading(true);
    try {
      const result = await sendEmail('comercial@predialnet.com.br', 'Solicitação de telefonia', body);
      setResponse(result.error ? 'error' : 'success');
      events.formSubmit('telefonia', selectedPlan, !result.error);
    } catch {
      setResponse('error');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = 'w-full border border-[#dcdcdc] px-2 py-1.5 text-xs rounded-sm focus:outline-none focus:border-[#9c0004]';
  const labelClass = 'block mb-0.5 text-[12px] font-normal text-[#6b6b6b]';

  return (
    <section id='Telefone' className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-14 font-sans bg-[#fafafa] text-[#3d3838]">
      <h2 className="text-3xl mb-1">Telefonia fixa</h2>

      {/* Subtítulos */}
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        <div className="md:w-[45%]">
          <p className="text-lg font-light leading-6">
            A melhor internet fibra também é telefonia fixa
          </p>
        </div>
        <div className="md:flex-1">
          <p className="text-lg font-light leading-6">
            Preencha o formulário que entraremos em contato
          </p>
        </div>
      </div>

      {/* Cards + Formulário — mesma altura */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {/* Coluna 1 — Cards lado a lado */}
        <div className="flex flex-row gap-2 md:w-[45%]">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            const anySelected = selectedPlan !== '';
            return (
              <div key={plan.id} className={`flex-1 bg-white border rounded p-7 flex flex-col gap-3 transition-opacity ${
                isSelected ? 'border-[#8a0005]' : 'border-[#dcdcdc]'
              } ${anySelected && !isSelected ? 'opacity-40' : ''}`}>
                <p className="text-xs text-[#555]">Plano Telefonia Fixa</p>
                <h3 className="text-2xl font-light" style={{ color: '#8a0005' }}>{plan.label}</h3>
                <ul className="flex flex-col gap-2 w-full">
                  {plan.features.map((f, i) => (
                    <li key={i} className="text-xs font-light flex items-center gap-1.5">
                      <svg width="11" height="9" viewBox="0 0 12 10" fill="none" className="flex-shrink-0 text-[#8a0005]" aria-hidden="true"><path d="M1 5L4.5 8.5L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-2xl mt-auto">
                  R$ {plan.price}<span className="text-sm font-light">/mês</span>
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPlan(plan.id);
                    document.getElementById('telefonia-form')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                  }}
                  className="block w-full text-center py-3 text-xs text-white bg-[#8a0005] hover:opacity-90 transition-opacity rounded-sm"
                >
                  {isSelected ? 'Plano escolhido' : 'Aproveitar oferta'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Coluna 2 — Formulário ocupa a mesma altura dos cards */}
        <div id="telefonia-form" className={`bg-white border rounded p-7 md:flex-1 flex flex-col transition-colors ${selectedPlan ? 'border-[#8a0005]' : 'border-[#dcdcdc]'}`}>

          {response === 'success' && <SuccessToast onClose={() => setResponse('')} />}
            <form className="flex-1 flex flex-col gap-1.5" onSubmit={handleSubmit} noValidate>
              {missingField !== 'none' && (
                <p className="text-xs text-red-700">Por favor, preencha corretamente: {missingField}</p>
              )}

              <div>
                <label htmlFor="tel-nome" className={labelClass}>Nome</label>
                <input id="nome" type="text" onChange={handleInputChange} className={inputClass} />
              </div>

              <div>
                <label htmlFor="tel-plan" className={labelClass}>Selecione o plano</label>
                <select
                  id="tel-plan"
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className={inputClass + ' h-[30px]'}
                >
                  <option value="">Selecione</option>
                  <option value="Ideal Plus">Ideal Plus</option>
                  <option value="Ideal Master">Ideal Master</option>
                </select>
              </div>

              {/* Endereço + Número + Complemento */}
              <div className="flex gap-3">
                <div className="flex-1">
                  <label htmlFor="tel-address" className={labelClass}>Endereço</label>
                  <input id="address" type="text" onChange={handleInputChange} className={inputClass} />
                </div>
                <div className="w-1/5">
                  <label htmlFor="tel-number" className={labelClass}>Número</label>
                  <input id="number" type="text" onChange={handleInputChange} className={inputClass} />
                </div>
                <div className="w-1/4">
                  <label htmlFor="tel-complement" className={labelClass}>Complemento</label>
                  <input id="complement" type="text" onChange={handleInputChange} className={inputClass} />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <label htmlFor="tel-neighborhood" className={labelClass}>Bairro</label>
                  <input id="neighborhood" type="text" onChange={handleInputChange} className={inputClass} />
                </div>
                <div className="w-1/3">
                  <label htmlFor="tel-cep" className={labelClass}>CEP</label>
                  <input id="cep" type="text" onChange={handleInputChange} className={inputClass} />
                </div>
              </div>

              {/* E-mail + Telefone */}
              <div className="flex gap-3">
                <div className="flex-1">
                  <label htmlFor="tel-email" className={labelClass}>E-mail</label>
                  <input id="email" type="email" onChange={handleInputChange} className={inputClass} />
                </div>
                <div className="w-2/5">
                  <label htmlFor="tel-phone" className={labelClass}>Telefone</label>
                  <input
                    id="tel-phone"
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                    className={inputClass}
                    maxLength={20}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="block text-center py-3 text-xs text-white bg-[#8a0005] hover:opacity-90 transition-opacity disabled:opacity-60 rounded-sm mt-auto"
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
        </div>
      </div>

      <p className="text-[10px] w-full text-[#555] mt-8">
        Consulte sobre as tarifas excedentes Predialfone. Exceto para ligações Nextel SME (rádio).
        Os valores acima são promocionais e estão sujeitos a alteração.
      </p>
    </section>
  );
};

export default TelefoniaSection;
