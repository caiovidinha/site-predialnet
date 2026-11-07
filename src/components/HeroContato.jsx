import React, { useState } from 'react';

/* Barra sobre o rodapé do hero: consulta de CEP (leva para o assineja com o
   CEP já preenchido) e WhatsApp (mesmo link e ícone do botão flutuante).
   Metade da barra fica sobre o banner e metade sobre a seção seguinte: as
   margens negativas em cima E embaixo fazem a barra não ocupar espaço próprio
   (senão sobra uma faixa branca). A seção seguinte compensa no topo
   (Plans com afterHeroBar).

   Em desenvolvimento, PUBLIC_ASSINEJA_URL (em .env.development.local) aponta
   para o assineja local; em produção vale o endereço público. */
const ASSINEJA_URL = import.meta.env.PUBLIC_ASSINEJA_URL || 'https://www.predialnet.com.br/assineja';
const WHATSAPP_URL = 'https://api.whatsapp.com/send?phone=2135150555&text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20da%20Predialnet.';

function maskCep(value) {
  const d = value.replace(/\D/g, '').slice(0, 8);
  return d.length > 5 ? `${d.slice(0, 5)}-${d.slice(5)}` : d;
}

// Mesmo ícone do botão flutuante (Navbar.astro)
const WhatsIcon = () => (
  <span className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#00a650] flex-shrink-0" aria-hidden="true">
    <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  </span>
);

const sombra = 'shadow-[0_2px_10px_rgba(0,0,0,0.12)]';

const HeroContato = () => {
  const [cep, setCep] = useState('');
  const [erro, setErro] = useState('');

  const onSubmit = (e) => {
    if (cep.replace(/\D/g, '').length !== 8) {
      e.preventDefault();
      setErro('Informe um CEP com 8 dígitos.');
    } else {
      setErro('');
    }
  };

  return (
    <div className="relative z-20 px-6 sm:px-[8%] md:px-[12%] -mt-7 -mb-7 font-sans">
      <div className="flex items-stretch justify-center gap-4">

        {/* WhatsApp — só desktop (no mobile o botão flutuante já fica perto) */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contrate pelo WhatsApp"
          className={`hidden md:flex items-center gap-3 h-14 pl-1.5 pr-5 rounded-full bg-white border border-[#dcdcdc] ${sombra} hover:shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition-shadow`}
        >
          <WhatsIcon />
          <span className="text-[#8f8f8f] font-light text-sm leading-[1.15] text-center">Contrate pelo<br />WhatsApp</span>
        </a>

        {/* CEP */}
        <form
          action={ASSINEJA_URL}
          method="get"
          target="_blank"
          onSubmit={onSubmit}
          noValidate
          className={`relative w-full md:w-[440px] flex items-center gap-2 h-14 pl-5 pr-1.5 rounded-full bg-white border border-[#dcdcdc] ${sombra} transition-[border-color,box-shadow] focus-within:border-[#bdbdbd] focus-within:shadow-[0_4px_16px_rgba(0,0,0,0.18)]`}
        >
          <label htmlFor="hero-cep" className="sr-only">CEP</label>
          <input
            id="hero-cep"
            name="cep"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={9}
            placeholder="Digite seu CEP"
            value={cep}
            onChange={(e) => { setCep(maskCep(e.target.value)); if (erro) setErro(''); }}
            aria-invalid={erro ? 'true' : 'false'}
            aria-describedby={erro ? 'hero-cep-erro' : undefined}
            className="flex-1 min-w-0 bg-transparent outline-none focus:outline-none focus-visible:outline-none text-base font-light text-[#3d3838] placeholder:text-[#a3a3a3]"
          />
          <button
            type="submit"
            className="h-11 px-5 rounded-full bg-[#e63950] hover:bg-[#d42a41] transition-colors text-white text-sm font-light whitespace-nowrap"
          >
            {/* no celular o texto longo espremia o campo (o "Digite seu CEP" cortava) */}
            <span className="md:hidden">Consultar</span>
            <span className="hidden md:inline">Consultar disponibilidade</span>
          </button>
          {erro && (
            <p id="hero-cep-erro" role="alert" className="absolute left-5 -bottom-6 text-xs text-[#8a0005]">{erro}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default HeroContato;
