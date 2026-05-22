import React, { useState } from 'react';
import { sanitizeInput, sanitizeFormData, validateEmail, validatePhone } from '../utils/validation';
import { events } from '../utils/analytics';

const SuccessToast = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
    <div className="bg-white rounded border border-[#dcdcdc] p-6 max-w-sm w-full mx-4 relative shadow-lg">
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-gray-400 text-2xl leading-none hover:text-gray-600"
        aria-label="Fechar"
      >
        &times;
      </button>
      <div className="flex items-start gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-[#00a650] flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg width="14" height="11" viewBox="0 0 14 11" fill="none" aria-hidden="true">
            <path d="M1 5.5L5 9.5L13 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[#00a650] font-medium text-sm leading-snug">Seu formulário foi enviado com sucesso!</p>
      </div>
      <p className="text-sm text-[#6b6b6b] ml-11">
        Em breve um de nossos consultores entrará em contato para finalizar sua contratação.
      </p>
    </div>
  </div>
);

const SpecialPlanPage = ({ title, subtitle, plans, type, emailTo, disclaimer }) => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({});
  const [phone, setPhone] = useState('');
  const [missingField, setMissingField] = useState('none');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const n = value.replace(/\D/g, '');
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

    const required = [
      { id: 'nome', label: 'Nome' },
      { id: 'plan', label: 'Plano' },
      { id: 'address', label: 'Endereço' },
      { id: 'number', label: 'Número' },
      { id: 'neighborhood', label: 'Bairro' },
      { id: 'cep', label: 'CEP' },
      { id: 'phone', label: 'Telefone' },
      { id: 'email', label: 'E-mail' },
    ];
    for (const f of required) {
      if (!sanitized[f.id]?.trim()) { setMissingField(f.label); return; }
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
      <h3>Solicitação de ${type}</h3>
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
      const result = await sendEmail(emailTo, `Solicitação de ${type}`, body);
      if (!result.error) {
        setSuccess(true);
        setFormData({});
        setPhone('');
        setSelectedPlan('');
        events.formSubmit(type, selectedPlan, true);
      } else {
        setMissingField('Erro ao enviar. Tente novamente.');
        events.formSubmit(type, selectedPlan, false);
      }
    } catch {
      setMissingField('Erro ao enviar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = 'w-full border border-[#dcdcdc] px-2 py-1.5 text-xs rounded-sm focus:outline-none focus:border-[#9c0004]';
  const labelClass = 'block mb-0.5 text-[10px] font-normal text-[#6b6b6b]';

  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] py-10 font-sans bg-white text-[#3d3838]">
      {success && <SuccessToast onClose={() => setSuccess(false)} />}

      <h1 className="text-3xl mb-8">{title}</h1>

      {/* Subtítulos */}
      <div className="flex flex-col md:flex-row gap-6 mb-4">
        <div className="md:w-[45%]">
          <p className="text-lg font-light leading-6">{subtitle}</p>
        </div>
   
      </div>

      {/* Cards em linha */}
      <div className="flex flex-row gap-4 mb-6">
        
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.value;
            const anySelected = selectedPlan !== '';
            return (
              <div
                key={plan.value}
                className={`flex-1 bg-white border rounded p-7 flex flex-col gap-2 transition-opacity ${
                  isSelected ? 'border-[#8a0005]' : 'border-[#dcdcdc]'
                } ${anySelected && !isSelected ? 'opacity-40' : ''}`}
              >
                <p className="text-xs text-[#555]">Navegue com até</p>
                <h3 className="text-2xl font-light" style={{ color: '#8a0005' }}>{plan.label}</h3>
                <p className="text-2xl mt-auto">{plan.price}</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPlan(plan.value);
                    document.getElementById('special-plan-form')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                  }}
                  className="block w-full text-center py-3 text-xs text-white bg-[#8a0005] hover:opacity-90 transition-opacity rounded-sm"
                >
                  {isSelected ? 'Plano escolhido' : 'Aproveitar oferta'}
                </button>
              </div>
            );
          })}
      </div>
        <div className="md:w-[45%]">
          <p className="text-lg font-light leading-6 mb-5">Preencha o formulário que entraremos em contato</p>
        </div>

      {/* Formulário em 2 cards lado a lado */}
      <form id="special-plan-form" className="flex flex-col md:flex-row gap-4" onSubmit={handleSubmit} noValidate>
        {missingField !== 'none' && (
          <p className="text-xs text-red-700 w-full">Por favor, preencha corretamente: {missingField}</p>
        )}

        {/* Card esquerdo */}
        <div className={`flex-1 border rounded p-6 flex flex-col gap-3 transition-colors ${selectedPlan ? 'border-[#8a0005]' : 'border-[#dcdcdc]'}`}>
          <div>
            <label className={labelClass}>Nome</label>
            <input id="nome" type="text" onChange={handleInputChange} className={inputClass} />
          </div>
          <div>
            <label className={labelClass}>Selecione o plano</label>
            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className={inputClass + ' h-9 cursor-pointer'}
            >
              <option value="">Selecione</option>
              {plans.map((p) => (
                <option key={p.value} value={p.value}>{p.label}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className={labelClass}>E-mail</label>
              <input id="email" type="email" onChange={handleInputChange} className={inputClass} />
            </div>
            <div className="w-2/5">
              <label className={labelClass}>Telefone</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                className={inputClass}
                maxLength={15}
              />
            </div>
          </div>
        </div>

        {/* Card direito */}
        <div className={`flex-1 border rounded p-6 flex flex-col gap-3 transition-colors ${selectedPlan ? 'border-[#8a0005]' : 'border-[#dcdcdc]'}`}>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className={labelClass}>Endereço</label>
              <input id="address" type="text" onChange={handleInputChange} className={inputClass} />
            </div>
            <div className="w-1/5">
              <label className={labelClass}>Número</label>
              <input id="number" type="text" onChange={handleInputChange} className={inputClass} />
            </div>
            <div className="w-1/4">
              <label className={labelClass}>Complemento</label>
              <input id="complement" type="text" onChange={handleInputChange} className={inputClass} />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className={labelClass}>Bairro</label>
              <input id="neighborhood" type="text" onChange={handleInputChange} className={inputClass} />
            </div>
            <div className="w-1/3">
              <label className={labelClass}>CEP</label>
              <input id="cep" type="text" onChange={handleInputChange} className={inputClass} />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 text-sm text-white bg-[#8a0005] hover:opacity-90 transition-opacity disabled:opacity-60 rounded-sm mt-auto"
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </div>
      </form>

      {disclaimer && (
        <p className="text-xs text-[#9e9e9e] mt-8">{disclaimer}</p>
      )}
    </div>
  );
};

export { SuccessToast };
export default SpecialPlanPage;
