import React, { useState } from 'react';
import { sanitizeInput, sanitizeFormData, validateEmail, validatePhone } from '../utils/validation';
import { events } from '../utils/analytics';
import { SuccessToast } from './SpecialPlanPage';

function Others() {
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

  const inputClass = 'w-full border border-[#dcdcdc] px-3 py-1.5 text-sm rounded-sm focus:outline-none focus:border-[#8a0005] bg-white';
  const labelClass = 'block mb-1 text-xs text-[#6b6b6b]';

  return (
    <div className="px-6 sm:px-[8%] md:px-[12%] pt-10 pb-14 font-sans bg-[#fff] text-[#231f20]">
      {success && <SuccessToast onClose={() => setSuccess(false)} />}

      <div className="flex flex-col md:flex-row gap-2">
        {/* Left — Via Rádio + Porto Maravilha */}
        <div className="md:w-[48%] flex flex-col">
          <h2 className="text-3xl tracking-tight mb-1">Internet Via Rádio e Porto Maravilha</h2>
          <p className="text-base font-light mb-6">Planos residenciais</p>

          <div className="flex flex-row gap-2 flex-1">
            {[
              { label: 'Planos de internet - Via Rádio', href: '/via-radio', desc: 'Conheça os Planos de internet <strong>residencial<br>Via Rádio</strong>' },
              { label: 'Planos de internet - Porto Maravilha', href: '/porto-maravilha', desc: 'Conheça os Planos de internet <strong>residencial</strong><br>para região do <strong>Porto Maravilha</strong>' },
            ].map((item) => (
              <div key={item.href} className="bg-white border border-[#dcdcdc] rounded p-6 flex flex-col gap-4 flex-1">
                <p className="text-xs text-[#9e9e9e]">{item.label}</p>
                <p className="text-[28px] font-light leading-tighter" style={{ color: '#8a0005' }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                <div className="flex flex-col items-center gap-2 mt-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#c0c0c0] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                  <a
                    href={item.href}
                    className="w-full block text-center py-3 text-xs text-white bg-[#8a0005] hover:opacity-80 transition-opacity rounded-sm"
                  >
                    Conhecer planos
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Internet Empresa inline form */}
        <div className="md:flex-1 flex flex-col">
          <h2 className="text-3xl tracking-tight mb-1">Internet Empresa</h2>
          <p className="text-base font-light mb-6">Preencha o formulário que entraremos em contato.</p>

          <form onSubmit={handleSubmit} noValidate className="bg-[#ebebeb] border border-[#dcdcdc] rounded p-6 flex flex-col gap-3 flex-1">
            {missingField !== 'none' && (
              <p className="text-xs text-red-700">Por favor, preencha corretamente: {missingField}</p>
            )}

            <div className="flex gap-3">
              <div className="flex-1">
                <label className={labelClass}>Nome da empresa</label>
                <input id="companyName" type="text" onChange={handleInputChange} className={inputClass} />
              </div>
              <div className="w-2/5">
                <label className={labelClass}>CNPJ</label>
                <input id="cnpj" type="text" onChange={handleInputChange} className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>Seu nome</label>
              <input id="yourName" type="text" onChange={handleInputChange} className={inputClass} />
            </div>

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

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-sm text-white bg-[#8a0005] hover:opacity-90 transition-opacity rounded-sm disabled:opacity-60 mt-auto"
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Others;
