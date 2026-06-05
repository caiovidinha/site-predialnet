module.exports = {
  apps: [
    {
      name: "predialnet-apisapo-proxy",
      script: "./server.js",
      cwd: "/var/www/site-predialnet/proxy-api",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "250M",
      env: {
        NODE_ENV: "production",
        PORT: 8080,
        APISAPO_URL: "https://apisapo.intranet.com.br/v1",
        APISAPO_TIMEOUT_MS: 30000,
        ALLOWED_ORIGIN: "https://www.predialnet.com.br"
      }
    }
  ]
};
