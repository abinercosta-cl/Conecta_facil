import React from "react";

function Aprender({ setPagina }) {
    return (
      <div className="min-h-screen bg-[#F4F6F7] p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-[#1B4F72] mb-6">Trilhas de Aprendizado</h2>
        <ul className="space-y-4 flex-grow">
          <li className="bg-white p-4 rounded-xl shadow flex items-center gap-3 text-lg">📱 Primeiros passos</li>
          <li className="bg-white p-4 rounded-xl shadow flex items-center gap-3 text-lg">💬 WhatsApp</li>
          <li className="bg-white p-4 rounded-xl shadow flex items-center gap-3 text-lg">🏦 Banco e Pix</li>
          <li className="bg-white p-4 rounded-xl shadow flex items-center gap-3 text-lg">🩺 SUS</li>
          <li className="bg-white p-4 rounded-xl shadow flex items-center gap-3 text-lg">🔐 Segurança</li>
        </ul>
        <button onClick={() => setPagina("home")} className="mt-10 text-[#1B4F72] underline self-start hover:text-[#154360] transition">⬅ Voltar</button>
      </div>
    );
  }

export default Aprender;

// Esse codigo define o que o usuario pode aprender para usar como auxilio.

