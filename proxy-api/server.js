import express from "express";

const app = express();

const PORT = Number(process.env.PORT || 8080);
const APISAPO_URL = String(process.env.APISAPO_URL || "https://apisapo.intranet.com.br/v1").replace(/\/+$/, "");
const APISAPO_TOKEN = String(process.env.APISAPO_TOKEN || "");
const APISAPO_TIMEOUT_MS = Number(process.env.APISAPO_TIMEOUT_MS || 30000);
const ALLOWED_ORIGIN = String(process.env.ALLOWED_ORIGIN || "*");

app.use(express.json({ limit: "32kb" }));

app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  if (ALLOWED_ORIGIN === "*") {
    res.setHeader("Access-Control-Allow-Origin", "*");
  } else {
    res.setHeader("Access-Control-Allow-Origin", ALLOWED_ORIGIN);
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  next();
});

function sanitizeInscricao(value) {
  return String(value ?? "").replace(/\D/g, "");
}

function getMessageFromPayload(payload) {
  if (payload && typeof payload === "object" && typeof payload.message === "string" && payload.message.trim()) {
    return payload.message;
  }
  return "Erro ao consultar APISAPO.";
}

app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.post("/eh-cliente", async (req, res) => {
  const inscricao = sanitizeInscricao(req.body?.inscricao);

  if (!inscricao) {
    return res.status(400).json({ message: "Informe uma inscricao valida." });
  }

  if (inscricao.length !== 11 && inscricao.length !== 14) {
    return res.status(400).json({ message: "Inscricao deve conter 11 ou 14 digitos." });
  }

  if (!APISAPO_TOKEN) {
    return res.status(500).json({ message: "Variavel de ambiente APISAPO_TOKEN nao configurada." });
  }

  const endpoint = `${APISAPO_URL}/clientes/inscricao/${inscricao}/eh-cliente`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), APISAPO_TIMEOUT_MS);

  let upstream;

  try {
    upstream = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${APISAPO_TOKEN}`,
        Accept: "application/json",
        "X-Operador-Numero": "1",
        "X-Origem-Sistema": "Teste Site Terceirizado"
      },
      signal: controller.signal
    });
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof Error && error.name === "AbortError") {
      return res.status(504).json({ message: "Tempo limite excedido ao consultar APISAPO." });
    }

    return res.status(502).json({ message: "Erro de rede ao consultar APISAPO." });
  }

  clearTimeout(timeoutId);

  let payload = null;
  try {
    payload = await upstream.json();
  } catch {
    payload = null;
  }

  if (!upstream.ok) {
    return res.status(upstream.status).json({ message: getMessageFromPayload(payload) });
  }

  return res.status(200).json({ cliente: Boolean(payload?.data?.cliente) });
});

app.use((_req, res) => {
  res.status(404).json({ message: "Rota nao encontrada." });
});

app.listen(PORT, () => {
  console.log(`APISAPO proxy ouvindo na porta ${PORT}`);
});
