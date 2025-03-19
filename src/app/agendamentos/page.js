"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";
import { CalendarIcon, UploadIcon, CheckCircleIcon } from "@heroicons/react/solid";

export default function RegistrarAgendamentos() {
  const [date, setDate] = useState(""); // Sempre uma string
  const [appointments, setAppointments] = useState("0"); // Sempre uma string representando um número
  const [csvFile, setCsvFile] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bulkMode, setBulkMode] = useState(false);
  const [showModal, setShowModal] = useState(false); // Estado para controlar o modal

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    try {
      let formData;

      if (bulkMode && csvFile) {
        formData = new FormData();
        formData.append("file", csvFile);
      } else {
        formData = JSON.stringify({
          date: date || "",
          appointments: parseInt(appointments, 10) || 0,
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
          <label className="block text-gray-700">Data do Agendamento:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded mb-2"
            required={!bulkMode} // Apenas obrigatório no modo individual
          />

          <label className="block text-gray-700">Número de Agendamentos:</label>
          <input
            type="number"
            value={appointments}
            onChange={(e) => setAppointments(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            required={!bulkMode} // Apenas obrigatório no modo individual
          />
        </div>

        <div style={{ display: bulkMode ? "block" : "none" }}>
          <label className="block text-gray-700 mb-2">Upload de Planilha (.csv ou .xlsx):</label>
          <input
            type="file"
            accept=".csv, .xlsx, .xls"
            onChange={(e) => setCsvFile(e.target.files[0] || null)}
            className="w-full p-2 border rounded mb-4"
            required={bulkMode} // Apenas obrigatório no modo em massa
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#9c0004] text-white py-2 rounded hover:bg-[#7e0003]"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Registrar"}
        </button>

        {/* Switch para alternar entre os modos */}
        <div className="flex items-center justify-between mt-6">
          <span className="text-gray-700">
            {bulkMode ? "Modo: Preenchimento em Massa" : "Modo: Individual"}
          </span>
          <Switch
            checked={bulkMode}
            onChange={setBulkMode}
            className={`relative inline-flex h-6 w-11 items-center rounded-full 
              ${bulkMode ? "bg-[#9c0004]" : "bg-gray-700"}`}
          >
            <span className="sr-only">Alternar modo de agendamento</span>
            <span
              className={`flex items-center justify-center h-4 w-4 transform rounded-full bg-white transition 
                ${bulkMode ? "translate-x-6" : "translate-x-1"}`}
            >
              {bulkMode ? (
                <UploadIcon className="h-3 w-3 text-[#9c0004]" />
              ) : (
                <CalendarIcon className="h-3 w-3 text-gray-700" />
              )}
            </span>
          </Switch>
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
