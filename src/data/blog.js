/**
 * Ponte do site principal para o blog.
 *
 * O blog deixou de ser uma seção deste site: agora é um projeto Next separado,
 * em blog.predialnet.com.br, com publicação em tempo real. Aqui sobrou só o
 * necessário para a home mostrar os artigos mais recentes e linkar para lá.
 *
 * A busca acontece no build. Se a API não responder, a seção do blog na home
 * simplesmente não é renderizada — é preferível a um bloco vazio, e o site
 * continua sendo gerado normalmente.
 *
 * Contrato dos endpoints: ver API-BLOG.md no projeto blog-predialnet.
 */

export const API = 'https://appgw.predialnet.com.br';
export const URL_BLOG = 'https://blog.predialnet.com.br';

/** Tempo máximo esperando a API no build. */
const TIMEOUT_MS = 6000;

/**
 * @typedef {Object} ArtigoResumo
 * @property {string} slug
 * @property {string} titulo
 * @property {string} resumo
 * @property {string} categoria
 * @property {string} categoriaSlug
 * @property {{url:string,alt?:string,largura?:number,altura?:number}|null} capa
 * @property {string} publicadoEm
 * @property {number} tempoLeitura
 */

const slugify = (texto) =>
  String(texto)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** @type {ArtigoResumo[] | null} */
let _memo = null;

/**
 * Artigos mais recentes do blog, para a chamada na home.
 *
 * Pede só o necessário para os cards: sem `corpo`, a resposta é pequena e o
 * build não fica esperando o texto de todos os artigos.
 *
 * @returns {Promise<ArtigoResumo[]>}
 */
export async function carregarBlogExterno() {
  if (_memo) return _memo;

  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), TIMEOUT_MS);

  try {
    const url = new URL(API + '/blog/artigos');
    url.searchParams.set('por_pagina', '6');
    url.searchParams.set('ordem', 'recentes');

    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const dados = await res.json();

    _memo = (dados.artigos ?? []).map((a) => ({
      slug: a.slug,
      titulo: a.titulo,
      resumo: a.resumo ?? '',
      categoria: a.categoria ?? 'Geral',
      categoriaSlug: slugify(a.categoria ?? 'Geral'),
      capa: a.capa ?? null,
      publicadoEm: a.publicado_em,
      tempoLeitura: a.tempo_leitura ?? 3,
    }));

    console.log(`[blog] ${_memo.length} artigos carregados para a home`);
  } catch (erro) {
    _memo = [];
    console.warn(
      `[blog] API indisponível (${erro.message}). A seção do blog não será ` +
        `renderizada na home. O site é gerado normalmente.`
    );
  } finally {
    clearTimeout(t);
  }

  return _memo;
}

export { slugify };
