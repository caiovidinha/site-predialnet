/**
 * Fonte única de verdade dos dados da empresa.
 *
 * Usado por: Layout.astro (Schema.org e meta tags), Footer.astro,
 * páginas de cidade e llms.txt.
 *
 * Ao alterar qualquer dado aqui (preço, horário, telefone), o Schema.org
 * e o texto do site passam a refletir a mudança juntos — foi a divergência
 * de horário comercial entre componente e schema que motivou esta
 * centralização.
 */

export const SITE = 'https://www.predialnet.com.br';

export const EMPRESA = {
  marca: 'Predialnet',
  razaoSocial: 'Predlink Rede de Telecomunicações Ltda.',
  cnpj: '05.980.171/0001-48',
  fundacao: '1998-11-04',
  anoFundacao: 1998,
  endereco: {
    logradouro: 'Rua da Conceição, 188, sala 3108',
    bairro: 'Centro',
    cidade: 'Niterói',
    uf: 'RJ',
    cep: '24020-087',
  },
  geo: { lat: -22.8958, lng: -43.1226 },
  telefones: {
    comercial: '+55-21-3515-0555',
    suporte: '+55-21-3515-0500',
    sac: '0800 878 7319',
    whatsapp: '+55-21-97728-7782',
  },
  perfis: [
    'https://instagram.com/predialnet',
    'https://br.linkedin.com/company/predialnet',
  ],
};

/** Horários — devem espelhar o que o ClienteAtendimento.jsx mostra na tela. */
export const HORARIOS = [
  { setor: 'Horário de Atendimento', dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '09:00', fecha: '18:00' },
  { setor: 'Setor Comercial',        dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '08:00', fecha: '20:00' },
  { setor: 'Setor Comercial',        dias: ['Saturday'],                                             abre: '09:00', fecha: '15:00' },
  { setor: 'Suporte Técnico',        dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], abre: '06:00', fecha: '24:00' },
];

/** Cidades atendidas — alimenta o areaServed do Schema.org. */
export const CIDADES = ['Niterói', 'São Gonçalo', 'Rio de Janeiro', 'Itaboraí'];

export const PLANOS = [
  {
    id: '600mega',
    nome: '600 Mega',
    preco: '99.90',
    precoBR: '99,90',
    wifi: 'Super Wi-Fi Gigabit',
    descricao: 'Plano de internet 600 Mega com Super Wi-Fi Gigabit, instalação grátis e sem fidelidade.',
  },
  {
    id: '800mega',
    nome: '800 Mega',
    preco: '124.90',
    precoBR: '124,90',
    wifi: 'Super Wi-Fi 6',
    descricao: 'Plano de internet 800 Mega com Super Wi-Fi 6, instalação grátis e sem fidelidade.',
  },
  {
    id: '1giga',
    nome: '1 Giga',
    preco: '139.90',
    precoBR: '139,90',
    wifi: 'Super Wi-Fi 6',
    descricao: 'Plano de internet 1 Giga com Super Wi-Fi 6, instalação grátis e sem fidelidade.',
  },
];

export const PRECO_MIN = '99.90';
export const PRECO_MAX = '139.90';
