import React from "react";

function Home({ setPagina }) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#F4F6F7] p-4">
        <h1 className="text-3xl font-bold text-[#1B4F72] mb-8 text-center">Bem-vindo ao Conecta Fácil</h1>
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <button onClick={() => setPagina("aprender")} className="bg-[#1B4F72] text-white text-xl py-6 rounded-2xl w-full hover:bg-[#154360] transition">📚 Aprender</button>
          <button onClick={() => setPagina("atendente")} className="bg-[#196F3D] text-white text-xl py-6 rounded-2xl w-full hover:bg-[#145A32] transition">📞 Atendimento</button>
          <button onClick={() => setPagina("servicos")} className="bg-[#F28E2B] text-white text-xl py-6 rounded-2xl w-full hover:bg-[#B26A1B] transition">🌐 Meus Serviços</button>
        </div>
        <button onClick={() => setPagina("perfil")} className="mt-6 text-[#1B4F72] underline self-start hover:text-[#154360] transition">⬅ Voltar</button>
      </div>
    );
  }

export default Home;

// O usuário pode escolher entre três opções: Aprender, Atendimento e Meus Serviços onde ao clicar sera redirecionado.
// Cada botão redireciona para a página correspondente ao clicar.
// O botão "Voltar" leva o usuário de volta à página de perfil.

