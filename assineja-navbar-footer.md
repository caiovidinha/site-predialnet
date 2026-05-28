# Implementação: Navbar + Footer + Botão WhatsApp — Assineja

Adicionar navbar, footer e botão flutuante do WhatsApp na página `assineja` (HTML/CSS/JS puro), idênticos ao site principal predialnet.com.br.

> **Mobile não incluído** — a navbar mobile será adaptada separadamente.

---

## Imagens necessárias

- `logo.png` — logo principal Predialnet
- `anatel.png` — logo da Anatel
- `rodape.webp` — imagem lateral do rodapé
- `logo-fibra.png` — logo Predialnet Fibra (já presente)

---

## 1. CSS — adicionar no `<head>` ou arquivo de estilos

```css
/* ── Fonte ── */
.pn-nav, .pn-footer {
  font-family: 'Swis721 BT', 'Arial', sans-serif;
  letter-spacing: 0.02em;
}

/* ══════════════════════════════
   NAVBAR DESKTOP
══════════════════════════════ */
.pn-nav-desktop {
  display: flex;
  align-items: flex-end;
  gap: 24px;
  padding: 20px 12% 12px;
  background: #f3f3f3;
  font-size: 13px;
  color: #575757;
  box-sizing: border-box;
}

.pn-nav-desktop a {
  color: #575757;
  text-decoration: none;
  transition: color 0.15s ease-in;
}
.pn-nav-desktop a:hover { color: #9c0004; }

.pn-nav-logo {
  flex-shrink: 0;
  margin-right: 16px;
  padding-bottom: 2px;
}
.pn-nav-logo img {
  height: 38px;
  width: auto;
  display: block;
  transition: transform 0.1s ease-in;
}
.pn-nav-logo img:hover { transform: scale(1.01); }

.pn-nav-links {
  display: flex;
  gap: 24px;
  align-items: flex-end;
  margin-bottom: 3px;
}

.pn-nav-spacer { flex: 1; }

.pn-nav-cta {
  white-space: nowrap;
  margin-bottom: 3px;
  color: #575757;
}

.pn-nav-anatel {
  display: flex;
  align-items: center;
  gap: 6px;
  white-space: nowrap;
  margin-bottom: 3px;
  text-decoration: none;
  color: #575757;
  transition: color 0.15s;
}
.pn-nav-anatel:hover { color: #8c0005; }
.pn-nav-anatel img {
  height: 16px;
  object-fit: contain;
  margin-bottom: 5px;
  transition: opacity 0.15s;
}
.pn-nav-anatel:hover img { opacity: 0.8; }

.pn-nav-cliente {
  display: flex;
  align-items: flex-end;
  gap: 4px;
  margin-left: 8px;
  margin-bottom: 3px;
  text-decoration: none;
  color: #575757;
  transition: color 0.15s ease-in;
}
.pn-nav-cliente:hover { color: #9c0004; }
.pn-nav-cliente svg {
  width: 20px;
  height: 20px;
  margin-bottom: 1px;
  flex-shrink: 0;
  transition: color 0.15s ease-in;
  color: #575757;
}
.pn-nav-cliente:hover svg { color: #9c0004; }

/* ══════════════════════════════
   FOOTER
══════════════════════════════ */
.pn-footer {
  color: #3d3838;
}

.pn-footer-main {
  background: #f0f0f0;
  padding: 40px 12%;
  box-sizing: border-box;
}
@media (max-width: 767px) {
  .pn-footer-main { padding: 40px 6%; }
}

.pn-footer-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
}
@media (min-width: 768px) {
  .pn-footer-inner { flex-direction: row; }
}

.pn-footer-img {
  flex-shrink: 0;
  align-self: stretch;
}
@media (min-width: 768px) {
  .pn-footer-img { width: 50%; }
}
.pn-footer-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  border-radius: 6px;
}

.pn-footer-links {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
@media (min-width: 768px) {
  .pn-footer-links { flex-direction: row; }
}

.pn-footer-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
  text-align: right;
}
.pn-footer-col a {
  color: #555;
  text-decoration: none;
  transition: color 0.15s;
  line-height: 1.4;
}
.pn-footer-col a:hover { color: #9c0004; }

.pn-footer-bottom {
  background: #f0f0f0;
  padding: 0 12%;
  box-sizing: border-box;
}
@media (max-width: 767px) {
  .pn-footer-bottom { padding: 0 6%; }
}
.pn-footer-bottom hr {
  border: none;
  border-top: 1px solid #b0b0b0;
}
.pn-footer-bottom-inner {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
@media (min-width: 768px) {
  .pn-footer-bottom-inner { flex-direction: row; }
}
.pn-footer-copy {
  font-size: 12px;
  color: #555;
  line-height: 1.6;
}
.pn-footer-fibra {
  height: 32px;
  object-fit: contain;
}

/* ══════════════════════════════
   BOTÃO WHATSAPP FLUTUANTE
══════════════════════════════ */
.pn-whatsapp {
  position: fixed;
  bottom: 16px;
  right: 16px;
  padding: 12px;
  background: #00a650;
  border-radius: 9999px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: transform 0.15s;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.pn-whatsapp:hover { transform: scale(1.05); }
.pn-whatsapp svg { width: 24px; height: 24px; fill: #fff; }
```

---

## 2. HTML — Navbar (inserir no topo do `<body>`)

```html
<nav class="pn-nav pn-nav-desktop">
  <a href="https://www.predialnet.com.br/" class="pn-nav-logo">
    <img src="logo.png" alt="Predialnet" width="150" height="38" loading="eager" />
  </a>

  <div class="pn-nav-links">
    <a href="https://www.predialnet.com.br/#Plans">Internet</a>
    <a href="https://www.predialnet.com.br/#Telefone">Telefonia fixa</a>
    <a href="https://webmail.predialnet.com.br/index.php" target="_blank" rel="noopener noreferrer">Webmail</a>
  </div>

  <div class="pn-nav-spacer"></div>

  <span class="pn-nav-cta">Assine agora 21 3515-0555</span>

  <div class="pn-nav-spacer"></div>

  <a href="https://www.predialnet.com.br/anatel" class="pn-nav-anatel">
    <span>Provedor Licenciado</span>
    <img src="anatel.png" alt="Anatel" loading="eager" />
  </a>

  <a href="https://minhaconta.predialnet.com.br" target="_blank" rel="noopener noreferrer" class="pn-nav-cliente" aria-label="Acessar área do cliente">
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
    <span>Minha conta</span>
  </a>
</nav>
```

---

## 3. HTML — Footer (inserir antes do `</body>`)

```html
<footer class="pn-footer">
  <div class="pn-footer-main">
    <div class="pn-footer-inner">

      <div class="pn-footer-img">
        <img src="rodape.webp" alt="Predialnet" loading="lazy" />
      </div>

      <div class="pn-footer-links">
        <div class="pn-footer-col">
          <a href="https://minhaconta.predialnet.com.br" target="_blank" rel="noopener noreferrer">Minha conta</a>
          <a href="https://webmail.predialnet.com.br/index.php" target="_blank" rel="noopener noreferrer">Webmail</a>
          <a href="https://www.predialnet.com.br/#Plans">Planos de internet</a>
          <a href="https://www.predialnet.com.br/#Telefone">Planos de telefonia</a>
          <a href="https://www.predialnet.com.br/#App">App Minha Predialnet</a>
        </div>
        <div class="pn-footer-col">
          <a href="https://www.predialnet.com.br/politica-de-privacidade">Política de Privacidade</a>
          <a href="https://www.predialnet.com.br/relatorios">Relatórios de Transparência<br>e Igualdade Salarial</a>
          <a href="https://www.consumidor.gov.br/pages/conteudo/publico/102" target="_blank" rel="noopener noreferrer">Código de defesa do consumidor</a>
          <a href="https://www.predialnet.com.br/documentos">Regulamentos e contratos</a>
        </div>
      </div>

    </div>
  </div>

  <div class="pn-footer-bottom">
    <hr />
    <div class="pn-footer-bottom-inner">
      <div class="pn-footer-copy">
        <p>Predlink Rede de Telecomunicações Ltda. CNPJ: 05.990.171/0001-48</p>
        <p>Rua da Conceição, 188, sala 3108, Centro, Niterói - Rio de Janeiro - CEP: 24020-087</p>
        <p>Todos os direitos reservados. ©2026 &nbsp;·&nbsp; Site desenvolvido por Jump Marketing</p>
      </div>
      <img class="pn-footer-fibra" src="logo-fibra.png" alt="Predialnet Fibra" loading="lazy" />
    </div>
  </div>
</footer>
```

---

## 4. HTML — Botão WhatsApp flutuante (inserir após o footer)

```html
<a
  href="https://api.whatsapp.com/send?phone=5521977287782&text=Ol%C3%A1!%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%20da%20Predialnet."
  target="_blank"
  rel="noopener noreferrer"
  class="pn-whatsapp"
  aria-label="Conversar no WhatsApp"
>
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
</a>
```

---

## Notas para o agente

- Todo o CSS usa prefixo `pn-` para não colidir com estilos existentes da página.
- A fonte usada é `Swis721 BT` — se já estiver carregada na página, funciona automaticamente. Caso não esteja, cai para `Arial`.
- O `rodape.webp` no footer tem `height: 100%` — a altura da imagem acompanha a altura da coluna de links. Se ainda não existir, usar `background: #ddd` como placeholder na `div.pn-footer-img`.
- Os links de âncora (`/#Plans`, `/#Telefone`, etc.) apontam para o site principal com hash, funcionando como links externos normais.
