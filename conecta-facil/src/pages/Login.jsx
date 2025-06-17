import React from "react";

function Login({ setPagina }) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#F4F6F7] p-4">
        <h1 className="text-3xl font-bold text-[#1B4F72] mb-8 text-center">Conecta Fácil</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">Tecnologia simples. Pessoas incluídas.</p>
        <input type="text" placeholder="Email" className="mb-4 w-full max-w-sm p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72]" />
        <input type="password" placeholder="Senha" className="mb-6 w-full max-w-sm p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1B4F72]" />
        <button onClick={() => setPagina("home")} className="bg-[#1B4F72] text-white text-xl py-4 rounded-2xl w-full max-w-sm mb-4 hover:bg-[#154360] transition">Entrar</button>
        <button onClick={() => setPagina("cadastro")} className="text-[#196F3D] underline text-base hover:text-[#145A32] transition">Não tem conta? Cadastre-se</button>
      </div>
    )
}
export default Login;
// Esse codigo define a pagina inicial de login