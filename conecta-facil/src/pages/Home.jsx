import React from "react";

function Home({ setPagina }) {
  return (
    <div id="HOME" className="min-h-screen flex justify-center bg-[#F4F6F7]">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1B4F72] mb-8 text-center">
          Bem-vindo ao Conecta Fácil
        </h1>
        <div className="flex flex-col items-center gap-6 w-full max-w-sm">
          <button
            onClick={() => setPagina("aprender")}
            className="bg-[#1B4F72] text-white text-lg md:text-xl py-8 rounded-2xl h-72 w-72 hover:bg-[#154360] transition font-semibold shadow"
          >
            📚 Aprender
          </button>
          <button
            onClick={() => setPagina("atendente")}
            className="bg-[#196F3D] text-white text-lg md:text-xl py-9 md:py-6 rounded-2xl w-full hover:bg-[#145A32] transition font-semibold shadow"
          >
            📞 Atendimento
          </button>
          <button
            onClick={() => setPagina("servicos")}
            className="bg-[#F28E2B] text-white text-lg md:text-xl py-4 md:py-6 rounded-2xl w-full hover:bg-[#B26A1B] transition font-semibold shadow"
          >
            🌐 Meus Serviços
          </button>
        </div>
        <button
          onClick={() => setPagina("perfil")}
          className="mt-8 text-[#1B4F72] underline hover:text-[#154360] transition self-center text-base md:text-lg pt-8"
        >
          ⬅ Voltar
        </button>
      </div>
    </div>
  );
}

export default Home;

// O usuário pode escolher entre três opções: Aprender, Atendimento e Meus Serviços onde ao clicar sera redirecionado.
// Cada botão redireciona para a página correspondente ao clicar.
// O botão "Voltar" leva o usuário de volta à página de perfil.

