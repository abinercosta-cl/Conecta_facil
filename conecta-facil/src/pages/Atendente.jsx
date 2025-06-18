import React from "react";

function Atendente({ setPagina }) {
    return (
      <div className="min-h-screen bg-[#F4F6F7] p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-[#196F3D] mb-6">Atendimento</h2>
        <form className="space-y-4 flex-grow flex flex-col">
          <input type="text" placeholder="Nome" className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#196F3D]" />
          <textarea placeholder="Explique sua dificuldade" className="w-full p-4 rounded-xl border border-gray-300 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-[#196F3D]" />
          <button type="submit" className="bg-[#196F3D] text-white text-xl py-4 rounded-2xl w-full hover:bg-[#145A32] transition">Solicitar</button>
        </form>
        <button onClick={() => setPagina("home")} className="mt-10 text-[#196F3D] underline self-start hover:text-[#145A32] transition">⬅ Voltar</button>
      </div>
    );
  }

  export default Atendente;

//Este codigo define a página de atendimento, onde o usuário pode solicitar ajuda.
// Ele inclui um formulário para inserir o nome e descrever a dificuldade.
// Após enviar o formulário, o usuário pode voltar à página inicial.