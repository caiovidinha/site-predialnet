import React, { useState, useEffect } from 'react';
import { sanitizeInput, sanitizeFormData, validateEmail, validatePhone } from '../utils/validation';
import { events } from '../utils/analytics';
import { SuccessToast } from './SpecialPlanPage';

function TelefoniaPage() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({});
  const [phone, setPhone] = useState('');
  const [missingField, setMissingField] = useState('none');
  const [invalidFieldId, setInvalidFieldId] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [cooldown, setCooldown] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const plano = params.get('plano');
    if (plano) setSelectedPlan(decodeURIComponent(plano));
  }, []);

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

  const inputClass = (id) => `w-full border ${invalidFieldId === id ? 'border-red-500' : 'border-[#dcdcdc]'} px-2 py-1.5 text-xs rounded-sm focus:outline-none focus:border-[#9c0004]`;
  const labelClass = 'block mb-0.5 text-[10px] font-normal text-[#6b6b6b]';

  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] py-10 font-sans bg-white text-[#3d3838]">
      {response === 'success' && <SuccessToast onClose={() => setResponse('')} />}

      <h1 className="text-[1.65rem] md:text-3xl leading-8 mb-2">Telefonia fixa</h1>
      <p className="text-lg font-light leading-6 mb-8">Preencha o formulário e entraremos em contato para finalizar sua solicitação.</p>

      <form onSubmit={handleSubmit} noValidate className="border border-[#dcdcdc] rounded p-6 flex flex-col gap-3 max-w-2xl">
        {missingField !== 'none' && (
          <p className="text-xs text-red-700">Por favor, preencha corretamente: {missingField}</p>
        )}
        {response === 'error' && (
          <p className="text-xs text-red-700">Erro ao enviar. Tente novamente.</p>
        )}

        <div>
          <label className={labelClass}>Nome</label>
          <input id="nome" type="text" onChange={handleInputChange} className={inputClass('nome')} />
        </div>

        <div>
          <label className={labelClass}>Selecione o plano</label>
          <select
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
            className={inputClass('plan') + ' h-[30px]'}
          >
            <option value="">Selecione</option>
            <option value="Ideal Plus">Ideal Plus</option>
            <option value="Ideal Master">Ideal Master</option>
          </select>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <label className={labelClass}>Endereço</label>
            <input id="address" type="text" onChange={handleInputChange} className={inputClass('address')} />
          </div>
          <div className="w-1/5">
            <label className={labelClass}>Número</label>
            <input id="number" type="text" onChange={handleInputChange} className={inputClass('number')} />
          </div>
          <div className="w-1/4">
            <label className={labelClass}>Complemento</label>
            <input id="complement" type="text" onChange={handleInputChange} className={inputClass('complement')} />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <label className={labelClass}>Bairro</label>
            <input id="neighborhood" type="text" onChange={handleInputChange} className={inputClass('neighborhood')} />
          </div>
          <div className="w-1/3">
            <label className={labelClass}>CEP</label>
            <input id="cep" type="text" onChange={handleInputChange} className={inputClass('cep')} />
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <label className={labelClass}>E-mail</label>
            <input id="email" type="email" onChange={handleInputChange} className={inputClass('email')} />
          </div>
          <div className="w-2/5">
            <label className={labelClass}>Telefone</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
              className={inputClass('phone')}
              maxLength={20}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 text-xs text-white bg-[#8a0005] hover:opacity-80 transition-opacity rounded-sm disabled:opacity-60 mt-2"
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </button>
      </form>

      <p className="text-[10px] w-full leading-3 mt-4 text-[#555]">
        Consulte sobre as tarifas excedentes Predialfone. Exceto para ligações Nextel SME (rádio).
        Os valores acima são promocionais e estão sujeitos a alteração.
      </p>
    </div>
  );
}

export default TelefoniaPage;
