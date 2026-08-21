"use client";

import { useState, useEffect, useRef } from "react";
import { sanitizeInput, validateEmail } from "../utils/validation";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  const startCooldown = () => {
    setCooldown(true);
    setTimeout(() => setCooldown(false), 3000); // 3 segundos
  };

  useEffect(() => {
    // Get email and token from URL params
    const urlParams = new URLSearchParams(window.location.search);
    setEmail(urlParams.get("email") || "");
    setToken(urlParams.get("token") || "");
  }, []);

  // zxcvbn traz ~800 KB de dicionários. Carregado sob demanda, no primeiro
  // caractere digitado, para não pesar no carregamento inicial da página.
  const zxcvbnRef = useRef(null);

  useEffect(() => {
    if (!password) {
      setPasswordStrength(0);
      return;
    }

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (cooldown) {
      setError("Aguarde alguns segundos antes de tentar novamente.");
      return;
    }
    
    setError("");
    startCooldown();
    
    // Sanitiza inputs
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedToken = sanitizeInput(token);
    const sanitizedPassword = password.trim(); // Não sanitiza senha (pode ter caracteres especiais)
    
    // Valida email
    if (!validateEmail(sanitizedEmail)) {
      setError("E-mail inválido.");
      return;
    }
    
    // Valida token
    if (!sanitizedToken || sanitizedToken.length < 10) {
      setError("Token inválido.");
      return;
    }
    
    // Valida senha
    if (sanitizedPassword.length > 128) {
      setError("Senha muito longa. Máximo 128 caracteres.");
      return;
    }

    if (sanitizedPassword !== confirmPassword.trim()) {
      setError("As senhas não coincidem.");
      return;
    }

    if (!allRequirementsMet && passwordStrength < 3) {
      setError("A senha deve ser mais forte. Inclua números, letras maiúsculas, minúsculas e caracteres especiais.");
      return;
    }

    try {
      const response = await fetch("https://appgw.predialnet.com.br/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: sanitizedEmail, 
          token: sanitizedToken, 
          newPassword: sanitizedPassword 
        }),
      });

      if (!response.ok) throw new Error("Erro ao redefinir a senha");
      setSuccess(true);
    } catch (err) {
      setError("Falha ao redefinir a senha. Tente novamente.");
    }
  };

  const passwordRequirements = [
    { label: "Pelo menos 9 caracteres", test: password.length >= 9 },
    { label: "Letra maiúscula", test: /[A-Z]/.test(password) },
    { label: "Letra minúscula", test: /[a-z]/.test(password) },
    { label: "Número", test: /\d/.test(password) },
    { label: "Caractere especial", test: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ];
  const allRequirementsMet = passwordRequirements.every(req => req.test);
  
  // SVG Icons
  const CheckCircleIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );

  const XCircleIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
    </svg>
  );
  
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white p-6">
      {/* <img src="img/logo.png" alt="Predialnet Logo" className="w-48 mb-6" /> */}
      
      {success ? (
        <p className="text-green-600">Senha redefinida com sucesso! Você já pode fazer login.</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white shadow-md p-6 rounded-lg border border-gray-200">
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <label htmlFor="newPassword" className="block text-gray-700">Insira sua nova senha:</label>
          <input
            id="newPassword"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
            aria-describedby="passwordStrength"
          />

          <label htmlFor="confirmPassword" className="block text-gray-700">Confirme sua nova senha:</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <div className="h-2 w-full bg-gray-200 rounded overflow-hidden mb-4">
            { allRequirementsMet && passwordStrength>=3 ? (<div className="h-full bg-green-500 w-full"></div>)
            : (<div className={`h-full ${["bg-red-500", "bg-orange-800", "bg-orange-500", "bg-yellow-500"][passwordStrength]} w-${(passwordStrength + 1) * 25}`}></div>)}
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#9c0004] text-white py-2 rounded hover:bg-[#7e0003] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={cooldown}
          >
            {cooldown ? "Aguarde..." : "Redefinir Senha"}
          </button>
        </form>
      )}
      
      {/* Requisitos da senha */}
      <div className="mt-4 w-full max-w-sm text-sm">
        <p className="text-gray-700 font-semibold mb-2">A senha deve conter:</p>
        {passwordRequirements.map((req, index) => (
          <div key={index} className={`flex items-center gap-2 ${req.test ? "text-green-600" : "text-red-500"}`}>
            {req.test ? <CheckCircleIcon /> : <XCircleIcon />} 
            {req.label}
          </div>
        ))}
      </div>
    </div>
  );
}
