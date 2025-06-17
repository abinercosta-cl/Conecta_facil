import React from "react";

function EscolherPcd({ pcdSelecionados, togglePcd, setPagina }) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-[#F4F6F7] p-4">
        <h2 className="text-2xl font-bold text-[#196F3D] mb-6 text-center">Selecione suas dificuldades:</h2>
        <div className="flex flex-col gap-4 w-full max-w-sm">
          {['Auditiva', 'Visual', 'Motora'].map(tipo => (
            <button
              key={tipo}
              onClick={() => togglePcd(tipo)}
              className={`py-4 rounded-2xl w-full text-xl select-none ${
                pcdSelecionados.includes(tipo)
                  ? tipo === 'Auditiva'
                    ? 'bg-[#196F3D] text-white'
                    : tipo === 'Visual'
                    ? 'bg-[#1B4F72] text-white'
                    : 'bg-[#F28E2B] text-white'
                  : tipo === 'Auditiva'
                  ? 'bg-white text-[#196F3D] border border-[#196F3D]'
                  : tipo === 'Visual'
                  ? 'bg-white text-[#1B4F72] border border-[#1B4F72]'
                  : 'bg-white text-[#F28E2B] border border-[#F28E2B]'
              } hover:opacity-90 transition`}
              aria-pressed={pcdSelecionados.includes(tipo)}
            >
              {tipo === 'Auditiva' && '🔇 Deficiência Auditiva'}
              {tipo === 'Visual' && '👁️ Deficiência Visual'}
              {tipo === 'Motora' && '🦽 Deficiência Física/Motora'}
            </button>
          ))}
        </div>
        <button onClick={() => setPagina("home")} className="mt-10 bg-[#196F3D] text-white text-xl py-4 rounded-2xl w-full max-w-sm hover:bg-[#145A32] transition">Continuar</button>
        <button onClick={() => setPagina("perfil")} className="mt-6 text-[#196F3D] underline self-start hover:text-[#145A32] transition">⬅ Voltar</button>
      </div>
    );
  }

export default EscolherPcd;
// Esse código define a página de escolha de dificuldades para pessoas com deficiência (PcD).
// O usuário pode selecionar entre dificuldades auditiva, visual e motora.
