import React, { useState } from 'react';
import { sanitizeInput, sanitizeFormData, validateEmail, validatePhone } from '../utils/validation';
import { events } from '../utils/analytics';

const SuccessToast = ({ onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40">
    <div className="bg-[#ddf9ed] rounded border-2 border-[#316a58] px-10 py-10 max-w-[400px] w-full mx-4 relative shadow-lg">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 hover:opacity-60 opacity-100 transition-opacity"
        aria-label="Fechar"
      >
        <img src="/img/x-form.png" alt="Fechar" className="w-4 h-4" />
      </button>
      <div className="flex items-start gap-2 ml-2 mb-3">
        <img src="/img/check-form.png" alt="" className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
        <p className="text-[#316a58] font-semibold text-sm leading-snug">Seu formulário foi enviado com sucesso!</p>
      </div>
      <p className="text-sm text-[#316a58] px-9">
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
  const [invalidFieldId, setInvalidFieldId] = useState('');
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
      if (!sanitized[f.id]?.trim()) { setMissingField(f.label); setInvalidFieldId(f.id); return; }
    }
    if (!validateEmail(sanitized.email)) { setMissingField('E-mail inválido'); setInvalidFieldId('email'); return; }
    if (!validatePhone(sanitized.phone)) { setMissingField('Telefone inválido'); setInvalidFieldId('phone'); return; }

    setMissingField('none');
    setInvalidFieldId('');

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
        setInvalidFieldId('');
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

  const inputClass = (id) => `w-full border ${invalidFieldId === id ? 'border-red-500' : 'border-[#dcdcdc]'} px-2 py-1.5 text-xs rounded-sm focus:outline-none focus:border-[#9c0004]`;
  const labelClass = 'block mb-0.5 text-[12px] font-normal text-[#6b6b6b]';

  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] py-10 font-sans bg-white text-[#3d3838]">
      {success && <SuccessToast onClose={() => setSuccess(false)} />}

      {/* Título */}
      <h1 className="text-[1.65rem] md:text-3xl leading-8 mb-2 font-light tracking-[-0.01em]">{title}</h1>

      {/* Subtítulos lado a lado, colados às caixas */}
      <div className="flex flex-col md:flex-row gap-10 mb-4">
        <div className="flex-1">
          <h2 className="text-lg font-light leading-6">{subtitle}</h2>
        </div>
        <div className="flex-1">
          <p className="text-lg font-light leading-6">Preencha o formulário que entraremos em contato</p>
        </div>
      </div>

      {/* Linha de conteúdo: planos + formulário alinhados */}
      <div className="flex flex-col md:flex-row gap-10 md:items-stretch">

        {/* Coluna esquerda: planos */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-1 gap-3">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.value;
            const anySelected = selectedPlan !== '';
            return (
              <div
                key={plan.value}
                className={`bg-white border rounded px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 transition-opacity ${
                  isSelected ? 'border-[#8a0005]' : 'border-[#dcdcdc]'
                } ${anySelected && !isSelected ? 'opacity-40' : ''}`}
              >
                <div>
                  <p className="text-xs text-[#555]">Navegue com até</p>
                  <div className="flex items-baseline gap-2 mt-0.5 flex-wrap">
                    <h3 className="text-xl font-light" style={{ color: '#3d3838' }}>{plan.label}</h3>
                    <span className="text-[#bbb] font-light hidden md:inline">|</span>
                    <p className="text-xl font-light">{plan.price}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPlan(plan.value)}
                  className="w-full md:w-auto flex-shrink-0 px-4 py-2 text-xs text-white bg-[#8a0005] hover:opacity-80 transition-opacity rounded-sm"
                >
                  {isSelected ? 'Selecionado' : 'Selecionar'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Coluna direita: formulário (mesma altura dos cards) */}
        <div className="flex-1 flex flex-col">
          <form id="special-plan-form" onSubmit={handleSubmit} noValidate className="flex flex-col flex-1">
            {missingField !== 'none' && (
              <p className="text-xs text-red-700 mb-3">Por favor, preencha corretamente: {missingField}</p>
            )}

            <div className={`border rounded p-6 flex flex-col gap-4 flex-1 transition-colors ${selectedPlan ? 'border-[#8a0005]' : 'border-[#dcdcdc]'}`}>
              <div>
                <label className={labelClass}>Nome</label>
                <input id="nome" type="text" onChange={handleInputChange} value={formData.nome || ''} className={inputClass('nome')} />
              </div>

              <div className="hidden md:block">
                <label className={labelClass}>Selecione o plano escolhido</label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className={inputClass('plan') + ' h-9 cursor-pointer'}
                >
                  <option value="">Selecione um plano</option>
                  {plans.map((p) => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <label className={labelClass}>Endereço</label>
                  <input id="address" type="text" onChange={handleInputChange} value={formData.address || ''} className={inputClass('address')} />
                </div>
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className={labelClass}>Número</label>
                    <input id="number" type="text" onChange={handleInputChange} value={formData.number || ''} className={inputClass('number')} />
                  </div>
                  <div className="flex-1">
                    <label className={labelClass}>Complemento</label>
                    <input id="complement" type="text" onChange={handleInputChange} value={formData.complement || ''} className={inputClass('complement')} />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <label className={labelClass}>Bairro</label>
                  <input id="neighborhood" type="text" onChange={handleInputChange} value={formData.neighborhood || ''} className={inputClass('neighborhood')} />
                </div>
                <div className="w-1/3">
                  <label className={labelClass}>CEP</label>
                  <input id="cep" type="text" onChange={handleInputChange} value={formData.cep || ''} className={inputClass('cep')} />
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <label className={labelClass}>E-mail</label>
                  <input id="email" type="email" onChange={handleInputChange} value={formData.email || ''} className={inputClass('email')} />
                </div>
                <div className="w-1/3">
                  <label className={labelClass}>Telefone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                    className={inputClass('phone')}
                    maxLength={15}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-sm text-white bg-[#8a0005] hover:opacity-80 transition-opacity disabled:opacity-60 rounded-sm mt-auto"
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Disclaimer abaixo de tudo */}
      {disclaimer && (
        <p className="mt-6 text-[10px] text-[#6b6b6b]">{disclaimer}</p>
      )}
    </div>
  );
};

export { SuccessToast };
export default SpecialPlanPage;
