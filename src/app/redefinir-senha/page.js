"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import zxcvbn from "zxcvbn";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export default function ResetPassword() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setPasswordStrength(zxcvbn(password).score);
  }, [password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
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
        body: JSON.stringify({ email, token, newPassword: password }),
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
  
  
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white p-6">
      {/* <img src="img/logo.png" alt="Predialnet Logo" className="w-48 mb-6" /> */}
      
      {success ? (
        <p className="text-green-600">Senha redefinida com sucesso! Você já pode fazer login.</p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white shadow-md p-6 rounded-lg border border-gray-200">
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <label className="block text-gray-700">Insira sua nova senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required
          />

          <label className="block text-gray-700">Confirme sua nova senha:</label>
          <input
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

          <button type="submit" className="w-full bg-[#9c0004] text-white py-2 rounded hover:bg-[#7e0003]">
            Redefinir Senha
          </button>
        </form>
      )}
      
      {/* Requisitos da senha */}
      <div className="mt-4 w-full max-w-sm text-sm">
        <p className="text-gray-700 font-semibold mb-2">A senha deve conter:</p>
        {passwordRequirements.map((req, index) => (
          <div key={index} className={`flex items-center gap-2 ${req.test ? "text-green-600" : "text-red-500"}`}>
            {req.test ? <CheckCircleIcon className="w-4 h-4" /> : <XCircleIcon className="w-4 h-4" />} 
            {req.label}
          </div>
        ))}
      </div>
    </div>
  );
}
