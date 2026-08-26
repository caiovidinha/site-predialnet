# Implementação de SEO — Predialnet

**Data:** 21 de agosto de 2026 (revisado)
**Branch:** `site-novo-2026`
**Base:** commit `0a71918`
**Escopo:** SEO técnico, performance, AI SEO/GEO e dados de entidade

Todas as alterações foram validadas com `npm run build` (`astro check && astro build`):
**0 erros, 0 avisos**, 14 páginas geradas. Home e /sobre foram conferidas
visualmente, e o header foi comparado lado a lado com o site em produção para
garantir que está idêntico ao original.

O blog virou um projeto Next à parte, em `../blog-predialnet` — ver seção 12.

---

## Resumo dos resultados

| Métrica | Antes | Depois | |
|---|---:|---:|---|
| Peso da home | 31,99 MB | **1,32 MB** | −96% |
| Pasta `/img` inteira | 60,2 MB | **10,3 MB** | −82% |
| Canonicais corretos | 0 / 13 | **14 / 14** | |
| Descriptions únicas | 5 / 13 | **14 / 14** | |
| H1 na home | 8 | **1** | |
| Páginas sem H1 | 5 | **0** | |
| `og:image` / `og:url` | ausentes | **14 / 14** | |
| JS no carregamento inicial | 1.105 KB | **282 KB** | −74% |
| Fontes | 82 KB (TTF) | **39 KB** (WOFF2) | −53% |
| `robots.txt` | 404 | **publicado** | |
| `sitemap.xml` | 404 | **gerado no build** | |
| `llms.txt` | 404 | **publicado** | |
| Palavras no site | 6.272 | **7.168** | +14% |
| Páginas indexáveis | 10 | **11** | +/sobre · o blog soma 11 no subdomínio |

---

## 1. Indexação — a correção de maior impacto

### 1.1 Canonical dinâmico por página

**Problema:** as 13 páginas declaravam `https://www.predialnet.com.br` como URL
canônica, porque o valor estava fixo no `Layout.astro`. Isso instruía o Google a
tratar `/telefonia`, `/via-radio`, `/empresa` e todas as demais como duplicatas
da home.

**O que foi feito** — `src/layouts/Layout.astro`:

```astro
const base = Astro.site ?? new URL(SITE);
// O Apache serve as páginas com barra final (/via-radio -> 301 -> /via-radio/).
// O canonical aponta para a URL que responde 200, sem passar por redirect.
const semBarra = Astro.url.pathname.replace(/[/]+$/, '');
const pathname = semBarra === '' ? '/' : semBarra + '/';
const canonical = new URL(pathname, base).href;
```

O `Layout` já era parametrizado para `title` e `description` — foi aplicado ao
canonical o mesmo padrão que já existia no arquivo.

**Detalhe importante:** o canonical usa **barra final**, para bater exatamente com
a URL que o Apache serve. Sem isso, o canonical apontaria para uma URL que
responde 301.

**Verificação:**

```
/                          → https://www.predialnet.com.br/
/anatel/                   → https://www.predialnet.com.br/anatel/
/telefonia/                → https://www.predialnet.com.br/telefonia/
/via-radio/                → https://www.predialnet.com.br/via-radio/
/porto-maravilha/          → https://www.predialnet.com.br/porto-maravilha/
/sobre/                    → https://www.predialnet.com.br/sobre/
… 14 de 14 corretos e únicos
```

### 1.2 `site` no astro.config e sitemap automático

`astro.config.mjs` ganhou a propriedade `site` (necessária para canonical, Open
Graph e sitemap absolutos) e a integração `@astrojs/sitemap`:

```js
const FORA_DO_SITEMAP = ['/redirect', '/redefinir-senha', '/agendamentos'];

export default defineConfig({
  site: 'https://www.predialnet.com.br',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) => !FORA_DO_SITEMAP.some((rota) => page.includes(rota)),
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
  // …
});
```

O sitemap é regenerado a cada build. Saem 11 URLs; as 3 utilitárias ficam de
fora. O blog tem sitemap próprio, no subdomínio.

### 1.3 `robots.txt`

Novo arquivo `public/robots.txt`:

```
User-agent: *
Allow: /

# Páginas utilitárias, sem valor de busca
Disallow: /redirect
Disallow: /redefinir-senha
Disallow: /agendamentos
Disallow: /ativacao/

Sitemap: https://www.predialnet.com.br/sitemap-index.xml
```

### 1.4 `noindex` nas páginas utilitárias

O `Layout` ganhou a prop `noindex`. Aplicada em `/redirect`, `/redefinir-senha` e
`/agendamentos` — páginas de formulário sem valor de busca que consumiam
orçamento de rastreamento.

```astro
<meta name="robots" content={noindex
  ? 'noindex, follow'
  : 'index, follow, max-image-preview:large, max-snippet:-1'} />
```

`max-image-preview:large` permite miniatura grande nos resultados; `max-snippet:-1`
libera trecho de descrição sem limite de caracteres.

---

## 2. Metadados

### 2.1 Títulos e descrições

Antes: 8 das 13 páginas repetiam a mesma description de 96 caracteres, e a home
tinha o título `Predialnet` (10 caracteres, sem serviço nem região).

Agora as 14 páginas têm título e descrição próprios. **Nenhuma duplicata.**

| Página | Título |
|---|---|
| `/` | Predialnet — Internet fibra óptica em Niterói, São Gonçalo e Rio de Janeiro |
| `/telefonia` | Telefonia fixa em Niterói e Rio de Janeiro — Predialnet |
| `/via-radio` | Internet via rádio no Rio de Janeiro — Predialnet |
| `/porto-maravilha` | Internet no Porto Maravilha, Centro do Rio — Predialnet |
| `/empresa` | Internet para empresas em Niterói, São Gonçalo e Rio — Predialnet |
| `/anatel` | Provedor licenciado pela Anatel — Predialnet |
| `/documentos` | Regulamentos e contratos — Predialnet |
| `/relatorios` | Relatórios de transparência e igualdade salarial — Predialnet |
| `/politica-de-privacidade` | Política de privacidade — Predialnet |
| `/conexao-com-a-folia` | Conexão com a Folia — blocos de Carnaval 2026 no Rio |
| `/sobre` | Sobre a Predialnet — cobertura em Niterói, São Gonçalo e Rio de Janeiro |

### 2.2 Open Graph e Twitter Card

Nenhuma página tinha `og:image` nem `og:url`; o Twitter Card estava declarado como
`summary_large_image` sem imagem. Agora todas as 14 páginas têm o conjunto completo:

```astro
<meta property="og:type"        content="website" />
<meta property="og:title"       content={title} />
<meta property="og:description" content={description} />
<meta property="og:url"         content={canonical} />
<meta property="og:image"       content={ogImage} />
<meta property="og:image:width"  content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale"      content="pt_BR" />
<meta property="og:site_name"   content="Predialnet" />
<meta name="twitter:card"        content="summary_large_image" />
<meta name="twitter:title"       content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image"       content={ogImage} />
```

**Imagem de compartilhamento criada:** `public/img/og-predialnet.jpg`
(1200×630, 40 KB) — gerada com Sharp a partir do logo branco sobre o gradiente da
marca, com as cidades atendidas e o resumo da oferta. Para trocar por uma peça do
time de design, basta substituir o arquivo mantendo o nome.

### 2.3 Codificação corrompida

`src/pages/conexao-com-a-folia.astro` tinha o título e a descrição gravados com
caracteres corrompidos (`Conex�o com a Folia`, `Programa��o completa`), o que ia
direto para a SERP. Corrigido e o arquivo regravado em UTF-8.

---

## 3. Hierarquia de headings

**Antes:** 8 `<h1>` na home (a tag era usada como estilo visual), o bloco `Plans`
renderizava duas vezes duplicando H1 e H2, e 5 páginas não tinham H1 nenhum.

**Depois:** 1 H1 por página, hierarquia encadeada.

Como o CSS é controlado por classe, **trocar a tag não alterou nada visualmente.**

Componentes ajustados: `Plans.jsx`, `IdealPlans.jsx`, `PromoCarousel.jsx`,
`ClienteAtendimento.jsx`, `Contrate.jsx` — H1 → H2. Subtítulos que eram H2 irmãos
do título viraram `<p>`; nomes de plano dentro dos cards viraram H3.

Estrutura resultante da home:

```
H1 Internet fibra óptica em Niterói, São Gonçalo e Rio de Janeiro
  H2 Planos Predialnet Fibra para sua casa
    H3 600 Mega · H3 800 Mega · H3 1 Giga
  H2 Saiba como escolher o plano ideal pra você
  H2 Com Predialnet sua casa navega com você
    H3 Jogue online com ping baixo…
  H2 Provedor de internet fibra óptica em Niterói, São Gonçalo e Rio de Janeiro
  H2 Telefonia fixa
  H2 Perguntas frequentes sobre internet
    H3 Em quais cidades a Predialnet atende? …
  H2 Assine do seu jeito e venha para Predialnet agora!
```

H1 adicionados em `/documentos`, `/relatorios`, `/conexao-com-a-folia`,
`/agendamentos` e `/redefinir-senha`. Nas páginas cujo topo visual é um banner, o
H1 usa a classe `sr-only` — fica acessível a leitores de tela e a buscadores sem
alterar o design.

---

## 4. Performance

### 4.1 Imagens: 60,2 MB → 10,3 MB

O pipeline do projeto (`optimize-images.mjs`, WebP q85 + AVIF q80) já estava
correto. **O problema era a resolução de origem:** arquivos de 1920×2140 exibidos
em cards de ~300 px, alguns salvos em qualidade quase-lossless (1,13 bytes por
pixel num WebP).

As 287 imagens foram reprocessadas a partir de um backup, redimensionadas para
~2× o tamanho real de exibição (retina) e recomprimidas. Os formatos foram
preservados, porque o HTML referencia extensões específicas e o `<picture>` do
`OptimizedImage.astro` depende dos irmãos `.webp`/`.avif`/`.jpg`.

| Arquivo | Antes | Depois | Dimensões |
|---|---:|---:|---|
| `foto_empresa.avif` | 3.563 KB | **35 KB** | 1920×2140 → 800×892 |
| `foto_empresa_mobile.avif` | 3.128 KB | **39 KB** | 1920×2082 → 900×976 |
| `navega-4.webp` | 2.450 KB | **14 KB** | 1920×1152 → 800×480 |
| `cardPlanoIdeal.webp` | 2.175 KB | **69 KB** | 1080×1750 → 800×1296 |
| `bannerConexaoFoliaMobile.webp` | 2.489 KB | **201 KB** | 1920×2127 → 900×997 |
| `bannerMobile.avif` | 1.219 KB | **26 KB** | 1920×1422 → 900×667 |
| `ideal-800.webp` | 1.278 KB | **17 KB** | 1919×631 → 800×263 |

Qualidade conferida visualmente em comparação lado a lado nos quatro casos mais
agressivos — indistinguível no tamanho em que as imagens são exibidas.

**Backup:** os originais estão em `img-originais/` (61 MB), já adicionado ao
`.gitignore`. Se algum recorte precisar ser refeito, a fonte está lá.

### 4.2 Download duplo desktop + mobile

O padrão de colocar as duas versões no HTML e esconder uma com `hidden md:block`
fazia o navegador baixar as duas — CSS não impede download.

Convertidos para `<picture>` com `<source media>`, que baixa só uma:

- `Footer.astro` — `rodape.webp` / `rodape_mobile_b.webp`
- `Others.jsx` (card Empresa) — `foto_empresa.avif` / `foto_empresa_mobile.avif`

O `PromoCarousel.jsx` **já usava `<picture>` corretamente** — recebeu apenas as
dimensões.

### 4.3 Preloads apontando para imagens inexistentes na página

O `Layout.astro` pré-carregava quatro variantes de `banner1` que **nenhuma página
renderiza** — a home usa `hero.webp` e `bannerMobile.avif`. Eram 275 KB baixados
com prioridade alta, competindo com o LCP real. Os quatro foram removidos.

O herói recebeu `fetchpriority="high"` e `decoding="async"`, e o `alt` genérico
(`"Predialnet"`) foi trocado por descrição real do conteúdo.

### 4.4 `width`, `height` e `loading`

44 das 48 imagens da home não declaravam dimensões (causa direta de CLS) e 36 não
tinham atributo `loading`. Todas as imagens dos componentes ativos passaram a ter
`width`, `height`, `loading` e `decoding`, com os valores reais lidos dos arquivos.

### 4.5 JavaScript: 1.105 KB → 282 KB no carregamento inicial

`ResetPassword.jsx` importava `zxcvbn` estaticamente, arrastando **822 KB de
dicionários — 74% de todo o JS do site** — para o bundle da página.

Agora é carregado sob demanda, no primeiro caractere digitado:

```jsx
// zxcvbn traz ~800 KB de dicionários. Carregado sob demanda, no primeiro
// caractere digitado, para não pesar no carregamento inicial da página.
const zxcvbnRef = useRef(null);

useEffect(() => {
  if (!password) { setPasswordStrength(0); return; }
  let cancelado = false;
  const avaliar = async () => {
    if (!zxcvbnRef.current) {
      const mod = await import("zxcvbn");
      zxcvbnRef.current = mod.default ?? mod;
    }
    if (!cancelado) setPasswordStrength(zxcvbnRef.current(password).score);
  };
  avaliar();
  return () => { cancelado = true; };
}, [password]);
```

O chunk foi verificado: não é referenciado por nenhum HTML.

### 4.6 Fontes TTF → WOFF2

`Swis721 Lt BT Light` e `Swis721 BT Roman` convertidas para WOFF2 (82 KB → 39 KB,
−53%). O TTF permanece como fallback no `@font-face` e o preload aponta para o
WOFF2.

### 4.7 Cache e headers — descartado, exige acesso ao servidor

O `_headers` do repositório é formato Netlify e o servidor em produção é Apache,
então CSP, HSTS e cache imutável nunca foram aplicados. Nenhuma imagem chega ao
navegador com `Cache-Control`.

Cheguei a criar um `public/.htaccess` para cobrir isso, mas **foi removido**. O
Astro copia `public/` para a raiz de `dist/`, então esse arquivo seria publicado
como `.htaccess` na raiz do servidor — **sobrescrevendo as regras que já existem
lá**. E existem: o domínio faz 301 de não-www para www e de `/via-radio` para
`/via-radio/`, `/download/` responde 403, e `/assineja` e `/ativacao/` são
aplicações à parte. Sem acesso ao servidor para ler a configuração atual, publicar
um `.htaccess` novo seria arriscar derrubar o que já funciona.

**Nada do que foi entregue mexe em configuração de servidor.** Tudo é arquivo
estático que o deploy já publica normalmente: páginas, imagens, fontes,
`robots.txt`, `llms.txt` e o sitemap.

**Consequência de não ter cache:** visitantes recorrentes rebaixam as imagens a
cada visita. O peso disso caiu junto com a otimização — era repetir 32 MB por
visita, agora é repetir 1,3 MB.

Se um dia houver acesso ao servidor, o que vale a pena é cache longo para `/img`,
`/fonts` e `/_astro`, mais HSTS. Com uma ressalva importante: **não usar
`immutable` em `/img`**. Os arquivos de imagem não têm hash no nome, então
`immutable` faria o navegador manter uma imagem antiga por um ano mesmo depois de
trocada. `immutable` só é seguro em `/_astro`, onde os nomes carregam hash de
conteúdo. O `_headers` original tinha exatamente esse defeito — como nunca foi
aplicado, nunca chegou a incomodar.

---

## 5. Dados estruturados e entidade

### 5.1 Fonte única de verdade

Criado `src/data/site.js` com os dados da empresa (NAP, horários, cidades, planos).
O `Layout.astro` monta o Schema.org a partir dele e o `Footer.astro` lê os mesmos
valores.

O motivo é concreto: o commit `923c08f` atualizou o horário comercial no
componente (8h–20h / sáb 9h–15h) mas não no Schema, que continuava dizendo
9h–20h / sáb 9h–16h. Agora os dois saem do mesmo lugar e não podem divergir.

### 5.2 CNPJ inválido corrigido

O rodapé publicava `05.990.171/0001-48`. **Esse número não existe na Receita
Federal** — consulta retorna "CNPJ inválido". O correto é `05.980.171/0001-48`:

```
PREDLINK REDE DE TELECOMUNICACOES LTDA
fantasia PREDIALNET · ATIVA desde 04/11/2003
CNAE 61.10-8-03 — Serviços de comunicação multimídia (SCM)
```

Corrigido nos dois blocos do rodapé (desktop e mobile), agora lidos de
`src/data/site.js`.

### 5.2.1 Ano de fundação: 1998, não 2003

Eu tinha usado 2003 no schema e no texto, tirado da data de abertura do CNPJ
ativo. **Estava errado**, e a correção veio do cliente. A pesquisa confirma:

```
PREDIALNET PROVEDOR DE INTERNET LTDA
CNPJ 02.719.371/0001-53 · aberta 31/07/1998 · hoje BAIXADA
        ↓
PREDLINK REDE DE TELECOMUNICACOES LTDA
CNPJ 05.980.171/0001-48 · aberta 04/11/2003 · ATIVA · fantasia PREDIALNET
```

A **marca nasceu em 1998**; a Predlink, de 2003, é a pessoa jurídica que opera
hoje. São coisas diferentes, e o schema reflete isso de propósito:
`foundingDate: 1998-07-31` (história da marca) e `taxID: 05.980.171/0001-48`
(entidade ativa). O texto passou a dizer "no mercado desde 1998" e o contador
do bloco institucional mostra **28 anos**.

A licença SCM, também confirmada na consulta, é o outro ativo que o site não
usava e agora aparece no texto e no schema.

### 5.3 Schema.org ampliado

O `@graph` existente já era bom (LocalBusiness, Organization, 3 Service com Offer,
WebSite, BreadcrumbList). Os incrementos:

| Campo | Antes | Depois |
|---|---|---|
| `areaServed` | só "Rio de Janeiro" | Niterói, São Gonçalo, Rio de Janeiro, Itaboraí |
| `legalName` | ausente | Predlink Rede de Telecomunicações Ltda. |
| `taxID` | ausente | 05.980.171/0001-48 |
| `foundingDate` | ausente | 1998-07-31 (ver 5.2.1) |
| `geo` | ausente | −22.8958, −43.1226 |
| `@type` | LocalBusiness | + `InternetServiceProvider` |
| `contactPoint` | 2 | 3 (comercial, suporte técnico, WhatsApp) |
| `openingHoursSpecification` | desatualizado | espelha o site |
| `sameAs` | 1 (Instagram) | 2 (+ LinkedIn) |
| `FAQPage` | não existia | 8 perguntas |
| `BreadcrumbList` | idêntico em todas | real, por página |

O JSON-LD é gerado por código, não escrito à mão — o que elimina a chance de
divergir do conteúdo.

**Validação:** JSON-LD parseia, 6 nós no `@graph`, e as 8 perguntas do `FAQPage`
foram conferidas contra o HTML visível (**0 ausentes** — requisito do Google).

---

## 6. Conteúdo — AI SEO / GEO

### 6.1 Bloco institucional em texto

A maior lacuna de GEO era esta: em 6.272 palavras, "Niterói" aparecia **uma vez**,
no endereço do rodapé. "São Gonçalo" e "Itaboraí", nenhuma. A informação de
cobertura vivia dentro de banners — imagens, que nem o Google nem o ChatGPT leem.

Novo componente `src/components/SobreProvedor.astro`. Ele afirma em texto a
tripla **marca → serviço → região**, que é o que permite a um mecanismo de
resposta associar a Predialnet às buscas por internet nas cidades atendidas:

> A **Predialnet** é um provedor de internet por fibra óptica que atende Niterói,
> São Gonçalo, Rio de Janeiro e Itaboraí, com planos residenciais de 600 Mega a
> 1 Giga, Wi-Fi 6, instalação grátis e sem fidelidade. […] No mercado desde 1998
> e hoje sob a razão social Predlink Rede de Telecomunicações Ltda. (CNPJ
> 05.980.171/0001-48), a empresa é licenciada pela Anatel para prestar Serviço de
> Comunicação Multimídia (SCM).

Traz também um quadro "Onde atendemos" com as quatro cidades e a ressalva de
viabilidade técnica, além de **8 links internos** para `/via-radio`,
`/porto-maravilha`, `/telefonia`, `/empresa`, `/anatel`, `/documentos` e
`/relatorios` — aprofundando a malha interna, que tinha só 11 destinos únicos.

### 6.2 FAQ com marcação FAQPage

Novo componente `src/components/Faq.astro` + dados em `src/data/faq.js`, com 8
perguntas escritas no formato que mecanismos de resposta extraem: **pergunta no
título, resposta direta no primeiro parágrafo**, aprofundamento depois.

1. Em quais cidades a Predialnet atende?
2. Quantos Mega de internet uma família precisa?
3. Qual a diferença entre Wi-Fi 5 e Wi-Fi 6?
4. Os planos da Predialnet têm fidelidade?
5. Como faço um teste de velocidade corretamente?
6. Por que meu Wi-Fi não chega no quarto?
7. A Predialnet é licenciada pela Anatel?
8. Qual a diferença entre internet por fibra óptica e via rádio?

Detalhes de implementação:

- Usa `<details>`/`<summary>` nativos: acessível por teclado, sem JavaScript, e
  **o texto das respostas está no HTML mesmo com o item fechado** — que é o que
  buscadores e IAs leem.
- A mesma fonte (`src/data/faq.js`) alimenta o componente visível e o `FAQPage` do
  schema, garantindo que nunca divirjam.

As perguntas 2, 3, 5, 6 e 8 atacam diretamente temas que aparecem como reclamação
recorrente no Reclame Aqui (velocidade abaixo da contratada, Wi-Fi que não alcança)
— ranqueiam para buscas de problema e reduzem atrito no suporte.

### 6.3 `llms.txt`

Novo `public/llms.txt`: resumo do domínio em texto puro para mecanismos de IA, com
identificação da empresa, planos e preços atuais, outros serviços, perfis de uso
indicados, diferenciais, canais de atendimento e links úteis.

Serve também de contrapeso a um problema real: comparadores externos ainda
descrevem a Predialnet com oferta antiga ("até 700 Mega", "500 Mega por R$ 99,90").

### 6.4 Textos alternativos

`alt` genéricos (`"Predialnet"`, `"Promoção 800"`, `"Fluminense"`) trocados por
descrições do conteúdo real. Ícones decorativos passaram a `alt=""` +
`aria-hidden="true"`, que é o tratamento correto.

### 6.5 As duas seções vivem em `/sobre`, não na home

Os blocos 6.1 e 6.2 foram criados na home e depois movidos para uma página
própria, `/sobre`, a pedido do cliente — a home volta ao fluxo comercial original.

**O pedido inicial era escondê-las: visíveis para buscadores, invisíveis para
visitantes. Isso não foi feito, e não deveria ser.** São dois motivos concretos:

- A diretriz do Google para `FAQPage` exige que o conteúdo marcado esteja
  **visível ao usuário na página**. Escondido, o rich result é removido e abre
  risco de ação manual por spam de dados estruturados.
- Texto em `display:none` é fortemente descontado pelo Google, e mecanismos de
  resposta priorizam conteúdo visível. O bloco institucional existe para ligar
  marca → serviço → região; escondido, ele deixa de cumprir a função. Seria risco
  sem retorno.

A solução adotada preserva o objetivo dos dois lados: as seções saem da home mas
continuam visíveis em `/sobre`, com **title, canonical e URL próprios** — o que
na prática rende mais do que rendiam diluídas na home. O acesso é um link
discreto no rodapé ("Sobre a Predialnet e dúvidas frequentes"), suficiente para
o rastreamento sem competir com os CTAs comerciais.

Vale notar que o FAQ **já** era discreto por construção: o `<details>` nasce
fechado, então só as 8 perguntas aparecem. Esse padrão de acordeão é
explicitamente permitido pelo Google.

---

## 7. Robustez adicional

Nos cartões de atendimento, os itens flex receberam `min-w-0` e `break-words`.
Itens flex têm `min-width: auto` por padrão, o que impede o encolhimento quando há
texto longo sem espaço (`08008787319`, `Cancelamento`).

**Nota de honestidade:** eu suspeitei de estouro horizontal no mobile a partir de
screenshots, mas a medição do DOM provou que **não há** — `scrollWidth` é igual a
`clientWidth` (375 px). O corte que eu via era artefato do Chrome headless no
Windows, e aparece igual no site em produção. A mudança é endurecimento
preventivo, não correção de bug, e não altera o layout atual.

### 7.1 Bug que eu introduzi no header, e a lição

O script que adicionou `width`/`height` às imagens (item 4.4) era cego a um
detalhe: **o atributo `width` funciona como dica de largura para o CSS.** Quando
a classe define só a altura, o atributo assume o controle da largura e estica a
imagem.

Foi o que aconteceu no header:

```
anatel.png    class="h-4 object-contain"   + width="599"   → 599px de largura
logo.avif     class="h-6 object-contain"   + width="1920"  → 1920px de largura
```

Com `object-contain`, a imagem ficava minúscula dentro de uma caixa enorme —
o selo da Anatel e o logo do menu lateral quebraram. **O cliente pegou.**

`Navbar.astro` e `SecNavBar.astro` foram revertidos ao original, e a comparação
com o site em produção confirma que o header está idêntico ao que era.

Varri o resto do projeto pelo mesmo padrão e encontrei mais dois casos:
`logo-fibra.png` no rodapé, nas duas ocorrências. Nesses removi apenas
`width`/`height`, mantendo `loading` e `decoding`, que são inofensivos.

**Regra:** `width`/`height` só é seguro quando o CSS controla a largura
(`w-full`, `w-32`, `flex-1`) ou ambas as dimensões (`w-5 h-5`). Onde só há
`h-*`, não adicione.

---

## 12. Blog — projeto separado em blog.predialnet.com.br

O blog chegou a ser implementado dentro deste site (Astro estático), mas foi
movido para um **projeto Next.js próprio**, em `../blog-predialnet`, publicado
em `blog.predialnet.com.br`.

### 12.1 Por que mudou

No site estático, publicar um artigo exigia `npm run build` mais upload — o
oposto do que se espera de um blog. Com Next renderizando no servidor, a API
chama um webhook de revalidação ao publicar e o artigo entra no ar em segundos,
sem build e sem deploy.

### 12.2 O trade-off, registrado

Subdomínio não é neutro para SEO: o Google trata `blog.predialnet.com.br` como
entidade parcialmente separada de `www.predialnet.com.br`. Uma subpasta
consolidaria melhor a autoridade — que é justamente o objetivo do blog.

A escolha foi consciente e coerente com a restrição de **não mexer na
configuração do Apache**: subdomínio precisa de DNS, subpasta precisaria de
`ProxyPass`. As mitigações estão implementadas:

- o `Organization` do schema no blog usa o **mesmo `@id`** do site principal,
  então para o Google é a mesma empresa;
- o `BreadcrumbList` de cada artigo **começa no site principal**, não no blog;
- cabeçalho, rodapé e o CTA ao fim de cada artigo linkam para o site;
- a home do site linka para os artigos (seção 12.4).

Se um dia o Apache puder ser configurado, um `ProxyPass /blog` entrega tempo
real **e** subpasta. Está documentado no README do projeto do blog.

### 12.3 O que ficou neste site

| Antes | Agora |
|---|---|
| `/blog`, `/blog/[slug]`, `/blog/categoria/*` | Removidas — vivem no projeto Next |
| `/painel` | Removida — vive em `blog.predialnet.com.br/painel` |
| `src/components/blog/*`, `src/components/painel/*` | Removidos |
| `src/data/blog-cache.json` | Removido |
| `src/data/blog.js` | Reduzido a uma ponte: busca os artigos recentes para a home |
| `ChamadaBlog.astro` | Mantido, agora com links absolutos para o subdomínio |

O `robots.txt` e o filtro do sitemap voltaram ao estado anterior: `/painel`
não existe mais aqui.

### 12.4 Chamada na home

`ChamadaBlog.astro` continua como **penúltima seção**, entre o segundo bloco de
planos e o `Contrate`. Busca os artigos mais recentes na API durante o build e
linka para `blog.predialnet.com.br`.

Esses links não são decoração: como o Google trata subdomínio como entidade
parcialmente separada, são eles que costuram o blog ao domínio principal e
fazem a autoridade circular entre os dois.

Se a API não responder, a seção **não é renderizada** — melhor que um bloco
vazio, e o build do site segue normalmente. Isso já foi exercitado: a API ainda
não existe e o site é gerado sem erro.

### 12.5 Documentação

A especificação da API foi movida para `../blog-predialnet/API-BLOG.md` e
reescrita: a seção 6, que antes tratava de estratégias de rebuild, agora
descreve o **webhook de revalidação** (endpoint, segredo, quando disparar e
como testar). O README do projeto cobre deploy, DNS e checklist de produção.


## Arquivos alterados

**Novos**

```
public/robots.txt                     public/llms.txt
public/img/og-predialnet.jpg
public/fonts/Swis721 BT Roman.woff2   public/fonts/Swis721 Lt BT Light.woff2
src/data/site.js                      src/data/faq.js
src/components/SobreProvedor.astro    src/components/Faq.astro
src/pages/sobre.astro
```

**Modificados**

```
astro.config.mjs          src/layouts/Layout.astro     src/styles/global.css
.gitignore                src/components/Footer.astro  src/components/Navbar.astro
src/components/SecNavBar.astro        src/components/Plans.jsx
src/components/IdealPlans.jsx         src/components/PromoCarousel.jsx
src/components/NavegaSection.jsx      src/components/Others.jsx
src/components/ClienteAtendimento.jsx src/components/Contrate.jsx
src/components/ResetPassword.jsx      as 13 páginas em src/pages/
+ 77 imagens reprocessadas em public/img/
```

**Dependência adicionada:** `@astrojs/sitemap`

---

## O que fazer depois do deploy

Nenhum destes passos exige mexer na configuração do servidor.

1. **Conferir os arquivos no ar** — `/robots.txt`, `/sitemap-index.xml` e
   `/llms.txt` devem responder 200.
2. **Search Console** — validar a propriedade, enviar o sitemap e registrar a
   linha de base (impressões, cliques, posição média por página). O GTM e os
   eventos de conversão do `analytics.js` já estão prontos; falta ligar o
   Search Console para conseguir medir o efeito.
3. **Pedir reindexação** das páginas que estavam bloqueadas pelo canonical errado.
4. **Testar** o rich result do FAQ e o Open Graph antes de divulgar.

---

## O que ficou de fora, e por quê

**Páginas de cidade** (`/internet-niteroi`, `/internet-sao-goncalo`,
`/internet-zona-norte-rj`, `/internet-centro-rio`) — é a maior oportunidade
identificada no diagnóstico, mas **exige dados que só a operação tem**: bairros
efetivamente atendidos por nome, prazo médio real de instalação por cidade, grade
comercial por região e as perguntas que cada cidade realmente faz.

Publicar quatro páginas com o mesmo texto e o nome da cidade trocado configura
*doorway page* e leva o Google a desindexar o conjunto — o resultado seria pior
que não ter as páginas. A infraestrutura para criá-las já está pronta (`Layout`
aceita `faq` e `breadcrumbs`; `src/data/site.js` centraliza os dados), então cada
página é rápida de montar assim que os dados existirem.

**Páginas de bairro** — mesmo raciocínio, e só fazem sentido depois que as de
cidade estiverem indexando.

**Central de conteúdo (blog)** — os clusters de escolha, problema e tecnologia
foram mapeados no diagnóstico. É produção de conteúdo, não implementação. Vale
notar que o texto do `IdealPlans` e do `NavegaSection` já está na linguagem certa
e serve de base.

**Reputação e prova social** — depoimentos e `AggregateRating` exigem coleta real
de avaliações. Marcar avaliação inventada ou importada de terceiros é penalizado.

**10 componentes órfãos** (`App.astro`, `Phone.jsx`, `Cards.astro`, `Why.astro`,
`PlansModal.jsx`, `SpecialPlansModal.jsx`, `InfoModal.jsx`, `Carousel.jsx`,
`Cliente.jsx`, `Atendimento.jsx`) não são importados em lugar nenhum. Como o Astro
não os inclui no build, não afetam SEO nem performance — deixei intactos por não
saber se há planos para eles. São candidatos a limpeza.

**Nota do PageSpeed** — a API pública recusou as tentativas por limite de cota
(HTTP 429), tanto no diagnóstico quanto agora. Os números deste relatório vêm de
medição direta dos arquivos, não de uma nota do Lighthouse. Vale rodar o
PageSpeed manualmente depois do deploy para registrar o antes/depois de campo.
