import React, { useState } from "react";

function CadastroAlunos() {
  const [nome, setNome] = useState("");
  const [matricula, setMatricula] = useState("");
  const [telefone, setTelefone] = useState("");
  const [curso, setCurso] = useState("");
  const [notas, setNotas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cadastro de Aluno:");
    console.log("Nome:", nome);
    console.log("Matrícula:", matricula);
    console.log("Telefone:", telefone);
    console.log("Curso:", curso);
    console.log("Notas:", notas);
  };

  return (
    <div className="cadastro-card">
      <div className="cadastro-header">
        <div className="logo-dot">A</div>
        <div className="cadastro-title">Cadastro de Alunos</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Nome do Aluno</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>

        <div className="form-row">
          <label>Matrícula</label>
          <input type="text" value={matricula} onChange={(e) => setMatricula(e.target.value)} required />
        </div>

        <div className="form-row">
          <label>Telefone de Contato</label>
          <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        </div>

        <div className="form-row">
          <label>Curso</label>
          <input type="text" value={curso} onChange={(e) => setCurso(e.target.value)} />
        </div>

        <div className="form-row">
          <label>Notas</label>
          <input type="text" value={notas} onChange={(e) => setNotas(e.target.value)} />
        </div>

        <button className="btn-cadastrar" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroAlunos;