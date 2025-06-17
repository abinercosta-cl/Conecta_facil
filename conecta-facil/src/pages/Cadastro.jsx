import React from "react";

function Cadastro({ setPagina }) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#F4F6F7] p-4">
        <h2 className="text-2xl font-bold text-[#196F3D] mb-8">Cadastro</h2>
        <input type="text" placeholder="Nome completo" className="mb-4 w-full max-w-sm p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#196F3D]" />
        <input type="text" placeholder="Email" className="mb-4 w-full max-w-sm p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#196F3D]" />
        <input type="password" placeholder="Senha" className="mb-6 w-full max-w-sm p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#196F3D]" />
        <button onClick={() => setPagina("perfil")} className="bg-[#196F3D] text-white text-xl py-4 rounded-2xl w-full max-w-sm mb-4 hover:bg-[#145A32] transition">Próximo</button>
        <button onClick={() => setPagina("login")} className="text-[#1B4F72] underline text-base hover:text-[#154360] transition">Já tem conta? Faça login</button>
        <button onClick={() => setPagina("login")} className="mt-6 text-[#196F3D] underline self-start hover:text-[#145A32] transition">⬅ Voltar</button>
      </div>
    );
  }
export default Cadastro;
// Esse código define a página de cadastro, onde o usuário pode inserir seu nome completo, email e senha.
// Após preencher os dados, o usuário pode clicar no botão "Próximo" para ir para a página de perfil.