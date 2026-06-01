import React, { useState } from 'react';
import { sanitizeInput, sanitizeFormData, validateEmail, validatePhone } from '../utils/validation';
import { events } from '../utils/analytics';
import { SuccessToast } from './SpecialPlanPage';

function EmpresaPage() {
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

  const formatCnpj = (value) => {
    if (!value) return value;
    const n = value.replace(/\D/g, '').slice(0, 14);
    if (n.length <= 2) return n;
    if (n.length <= 5) return `${n.slice(0, 2)}.${n.slice(2)}`;
    if (n.length <= 8) return `${n.slice(0, 2)}.${n.slice(2, 5)}.${n.slice(5)}`;
    if (n.length <= 12) return `${n.slice(0, 2)}.${n.slice(2, 5)}.${n.slice(5, 8)}/${n.slice(8)}`;
    return `${n.slice(0, 2)}.${n.slice(2, 5)}.${n.slice(5, 8)}/${n.slice(8, 12)}-${n.slice(12, 14)}`;
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
    const formatted = id === 'cnpj' ? formatCnpj(value) : value;
    setFormData((prev) => ({ ...prev, [id]: formatted }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sanitized = sanitizeFormData(formData);
    sanitized.phone = phone;

    const required = [
      { id: 'companyName', label: 'Nome da empresa' },
      { id: 'cnpj', label: 'CNPJ' },
      { id: 'yourName', label: 'Seu nome' },
      { id: 'address', label: 'Endereço' },
      { id: 'number', label: 'Número' },
      { id: 'neighborhood', label: 'Bairro' },
      { id: 'cep', label: 'CEP' },
      { id: 'email', label: 'E-mail' },
      { id: 'phone', label: 'Telefone' },
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
      <h3>EMPRESA</h3>
      <p><strong>Nome da empresa:</strong> ${sanitizeInput(sanitized.companyName)}</p>
      <p><strong>CNPJ:</strong> ${sanitizeInput(sanitized.cnpj)}</p>
      <p><strong>Nome do responsável:</strong> ${sanitizeInput(sanitized.yourName)}</p>
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
      const result = await sendEmail('comercial@predialnet.com.br', 'Solicitação Internet Empresa', body);
      if (!result.error) {
        setSuccess(true);
        setFormData({});
        setPhone('');
        setInvalidFieldId('');
        events.formSubmit('empresa', 'empresa', true);
      } else {
        setMissingField('Erro ao enviar. Tente novamente.');
        events.formSubmit('empresa', 'empresa', false);
      }
    } catch {
      setMissingField('Erro ao enviar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (id) => `w-full border ${invalidFieldId === id ? 'border-red-500' : 'border-[#dcdcdc]'} px-2 py-1.5 text-xs rounded-sm focus:outline-none focus:border-[#9c0004]`;
  const labelClass = 'block mb-0.5 text-[10px] font-normal text-[#6b6b6b]';

  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] py-10 font-sans bg-white text-[#3d3838]">
      {success && <SuccessToast onClose={() => setSuccess(false)} />}

      <h1 className="text-[1.65rem] md:text-3xl leading-8 mb-2">Internet Empresa</h1>
      <p className="text-lg font-light mb-8 leading-6">Preencha o formulário e entraremos em contato para apresentar os planos disponíveis para o seu negócio.</p>

      <form onSubmit={handleSubmit} noValidate className="border border-[#dcdcdc] rounded p-6 flex flex-col gap-3 max-w-2xl">
        {missingField !== 'none' && (
          <p className="text-xs text-red-700">Por favor, preencha corretamente: {missingField}</p>
        )}

        <div className="flex gap-2 md:gap-3">
          <div className="flex-1">
            <label className={labelClass}>Nome da empresa</label>
            <input id="companyName" type="text" onChange={handleInputChange} className={inputClass('companyName')} />
          </div>
          <div className="w-1/2">
            <label className={labelClass}>CNPJ</label>
            <input id="cnpj" type="text" value={formData.cnpj || ''} onChange={handleInputChange} className={inputClass('cnpj')} />
          </div>
        </div>

        <div>
          <label className={labelClass}>Seu nome</label>
            <input id="yourName" type="text" onChange={handleInputChange} className={inputClass('yourName')} />
        </div>

        <div className="flex gap-2 md:gap-3">
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

        <div className="flex gap-2 md:gap-3">
          <div className="flex-1">
            <label className={labelClass}>Bairro</label>
              <input id="neighborhood" type="text" onChange={handleInputChange} className={inputClass('neighborhood')} />
            </div>
            <div className="w-1/3">
              <label className={labelClass}>CEP</label>
              <input id="cep" type="text" onChange={handleInputChange} className={inputClass('cep')} />
          </div>
        </div>

        <div className="flex gap-2 md:gap-3">
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
    </div>
  );
}

export default EmpresaPage;
