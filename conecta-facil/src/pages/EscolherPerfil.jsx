import React from "react";

function EscolherPerfil({ setPagina, setPerfil }) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#F4F6F7] p-4">
        <h2 className="text-2xl font-bold text-[#1B4F72] mb-8 text-center">Quem é você?</h2>
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <button onClick={() => { setPerfil("Idoso"); setPagina("home"); }} className="bg-[#1B4F72] text-white text-xl py-6 rounded-2xl w-full hover:bg-[#154360] transition">🧓 Sou Idoso</button>
          <button onClick={() => { setPerfil("PcD"); setPagina("pcd"); }} className="bg-[#196F3D] text-white text-xl py-6 rounded-2xl w-full hover:bg-[#145A32] transition">♿ Sou Pessoa com Deficiência</button>
          <button onClick={() => { setPerfil("Baixa Escolaridade"); setPagina("home"); }} className="bg-[#F28E2B] text-white text-xl py-6 rounded-2xl w-full hover:bg-[#B26A1B] transition">📖 Tenho Baixa Escolaridade Digital</button>
        </div>
        <button onClick={() => setPagina("cadastro")} className="mt-6 text-[#1B4F72] underline self-start hover:text-[#154360] transition">⬅ Voltar</button>
      </div>
    );
  }

export default EscolherPerfil;
// Esse código define a página de escolha de perfil, onde o usuário pode selecionar se é idoso, pessoa com deficiência ou tem baixa escolaridade digital.
// Cada botão define o perfil e redireciona para a página correspondente.
// O botão "Voltar" leva o usuário de volta à página de cadastro.
// O componente recebe as funções setPagina e setPerfil como props para gerenciar o estado da aplicação.
