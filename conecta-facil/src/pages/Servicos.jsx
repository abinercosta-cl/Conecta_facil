import React from "react";

function Servicos({ setPagina }) {
    return (
      <div className="min-h-screen bg-[#F4F6F7] p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-[#F28E2B] mb-6">Meus Serviços</h2>
        <ul className="space-y-4 flex-grow">
          <li className="bg-white p-4 rounded-xl shadow flex items-center gap-3 text-lg">🩺 SUS</li>
          <li className="bg-white p-4 rounded-xl shadow flex items-center gap-3 text-lg">🏦 Contas</li>
          <li className="bg-white p-4 rounded-xl shadow flex items-center gap-3 text-lg">💬 WhatsApp</li>
          <li className="bg-white p-4 rounded-xl shadow flex items-center gap-3 text-lg">🏛️ Banco</li>
        </ul>
        <button onClick={() => setPagina("home")} className="mt-10 text-[#F28E2B] underline self-start hover:text-[#B26A1B] transition">⬅ Voltar</button>
      </div>
    );
  }

export default Servicos;

// Este código define a página de serviços, onde o usuário pode ver uma lista de serviços disponíveis.
// Cada serviço é exibido como um item de lista com um ícone correspondente.
