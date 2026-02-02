"use client";

import { useState } from "react";
import { sanitizeInput } from "../utils/validation";

export default function RegistrarAgendamentos() {
  const [date, setDate] = useState(""); // Sempre uma string
  const [appointments, setAppointments] = useState("0"); // Sempre uma string representando um número
  const [csvFile, setCsvFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bulkMode, setBulkMode] = useState(false);
  const [showModal, setShowModal] = useState(false); // Estado para controlar o modal
  const [cooldown, setCooldown] = useState(false);

  const startCooldown = () => {
    setCooldown(true);
    setTimeout(() => setCooldown(false), 3000); // 3 segundos
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (cooldown) {
      setError("Aguarde alguns segundos antes de enviar novamente.");
      return;
    }
    
    setError("");
    setSuccess(false);
    setLoading(true);
    startCooldown();

    try {
      let formData;

      if (bulkMode && csvFile) {
        // Valida tipo de arquivo
        const allowedTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
        if (!allowedTypes.includes(csvFile.type)) {
          throw new Error("Tipo de arquivo inválido. Apenas CSV e XLSX são permitidos.");
        }
        
        // Valida tamanho (máximo 5MB)
        if (csvFile.size > 5 * 1024 * 1024) {
          throw new Error("Arquivo muito grande. Máximo 5MB.");
        }
        
        formData = new FormData();
        formData.append("file", csvFile);
      } else {
        // Sanitiza e valida inputs
        const sanitizedDate = sanitizeInput(date);
        const parsedAppointments = parseInt(appointments, 10);
        
        // Valida data (formato YYYY-MM-DD)
        if (!sanitizedDate || !/^\d{4}-\d{2}-\d{2}$/.test(sanitizedDate)) {
          throw new Error("Data inválida. Use o formato correto.");
        }
        
        // Valida número de agendamentos
        if (isNaN(parsedAppointments) || parsedAppointments < 0 || parsedAppointments > 1000) {
          throw new Error("Número de agendamentos inválido. Deve estar entre 0 e 1000.");
        }
        
        formData = JSON.stringify({
          date: sanitizedDate,
          appointments: parsedAppointments,
        });
      }

      const response = await fetch("https://appgw.predialnet.com.br/agendamento", {
        method: "POST",
        body: bulkMode ? formData : formData,
        headers: bulkMode
          ? {} // FormData não precisa de Content-Type
          : { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Erro ao registrar os agendamentos");
      }

      setSuccess(true);
      setCsvFile(null);
      setShowModal(true); // Abre o modal de sucesso
    } catch (err) {
      setError("Falha ao registrar os agendamentos. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // Função para fechar o modal e recarregar a página
  const closeModal = () => {
    setShowModal(false);
    window.location.reload(); // Recarregar a página
  };

  // SVG Icons
  const CalendarIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
      <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
    </svg>
  );

  const ArrowUpTrayIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06l-2.47-2.47V21a.75.75 0 01-1.5 0V4.81L8.78 7.28a.75.75 0 01-1.06-1.06l3.75-3.75zM3 15.75a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
    </svg>
  );

  const CheckCircleIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white shadow-md p-6 rounded-lg border border-gray-200"
      >
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Registrar Agendamentos</h2>
        </div>

        {/* Inputs SEMPRE presentes, mas escondidos conforme o modo */}
        <div style={{ display: bulkMode ? "none" : "block" }}>
          <label htmlFor="appointmentDate" className="block text-gray-700">Data do Agendamento:</label>
          <input
            id="appointmentDate"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required={!bulkMode} // Apenas obrigatório no modo individual
          />

          <label htmlFor="numAppointments" className="block text-gray-700">Número de Agendamentos:</label>
          <input
            id="numAppointments"
            type="number"
            value={appointments}
            onChange={(e) => setAppointments(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required={!bulkMode} // Apenas obrigatório no modo individual
          />
        </div>

        <div style={{ display: bulkMode ? "block" : "none" }}>
          <label htmlFor="csvUpload" className="block text-gray-700 mb-2">Upload de Planilha (.csv ou .xlsx):</label>
          <input
            id="csvUpload"
            type="file"
            accept=".csv, .xlsx, .xls"
            onChange={(e) => setCsvFile(e.target.files[0] || null)}
            className="w-full p-2 border rounded mb-4"
            required={bulkMode} // Apenas obrigatório no modo em massa
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#9c0004] text-white py-2 rounded hover:bg-[#7e0003] disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading || cooldown}
        >
          {loading ? "Enviando..." : cooldown ? "Aguarde..." : "Registrar"}
        </button>

        {/* Switch para alternar entre os modos */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-gray-700">
            {bulkMode ? "Modo: Preenchimento em Massa" : "Modo: Individual"}
          </span>
          <button
            type="button"
            onClick={() => setBulkMode(!bulkMode)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full 
              ${bulkMode ? "bg-[#9c0004]" : "bg-gray-700"}`}
          >
            <span className="sr-only">Alternar modo de agendamento</span>
            <span
              className={`flex items-center justify-center h-4 w-4 transform rounded-full bg-white transition 
                ${bulkMode ? "translate-x-6" : "translate-x-1"}`}
            >
              {bulkMode ? (
                <ArrowUpTrayIcon className="h-3 w-3 text-[#9c0004]" />
              ) : (
                <CalendarIcon className="h-3 w-3 text-gray-700" />
              )}
            </span>
          </button>
        </div>
      </form>

      {/* Modal de Sucesso */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm text-center">
            <CheckCircleIcon className="h-12 w-12 text-green-500 mx-auto" />
            <h3 className="text-lg font-semibold mt-4">Sucesso!</h3>
            <p className="text-gray-600">Os agendamentos foram registrados com sucesso.</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-[#9c0004] text-white px-4 py-2 rounded hover:bg-[#7e0003]"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
