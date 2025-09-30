import React, { useState } from "react";

function CadastroNotas() {
  const [nome, setNome] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cadastro de Notas:");
    console.log("Aluno:", nome);
    console.log("Nota 1:", nota1);
    console.log("Nota 2:", nota2);
    console.log("Nota 3:", nota3);
  };

  return (
    <div className="cadastro-card">
      <div className="cadastro-header">
        <div className="logo-dot">N</div>
        <div className="cadastro-title">Cadastro de Notas</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Nome do Aluno</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>

        <div className="form-row">
          <label>Nota 1</label>
          <input type="number" value={nota1} onChange={(e) => setNota1(e.target.value)} required />
        </div>

        <div className="form-row">
          <label>Nota 2</label>
          <input type="number" value={nota2} onChange={(e) => setNota2(e.target.value)} required />
        </div>

        <div className="form-row">
          <label>Nota 3</label>
          <input type="number" value={nota3} onChange={(e) => setNota3(e.target.value)} required />
        </div>

        <button className="btn-cadastrar" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroNotas;
