import React, { useState } from "react";

function CadastroCursos() {
  const [escola, setEscola] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [curso, setCurso] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Cadastro de Curso:");
    console.log("Escola:", escola);
    console.log("Endereço:", endereco);
    console.log("Telefone:", telefone);
    console.log("Curso:", curso);
    console.log("Descrição:", descricao);
  };

  return (
    <div className="cadastro-card">
      <div className="cadastro-header">
        <div className="logo-dot">C</div>
        <div className="cadastro-title">Cadastro de Cursos</div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Nome da Escola</label>
          <input type="text" value={escola} onChange={(e) => setEscola(e.target.value)} required />
        </div>

        <div className="form-row">
          <label>Endereço</label>
          <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
        </div>

        <div className="form-row">
          <label>Telefone de Contato</label>
          <input type="tel" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
        </div>

        <div className="form-row">
          <label>Nome do Curso</label>
          <input type="text" value={curso} onChange={(e) => setCurso(e.target.value)} required />
        </div>

        <div className="form-row">
          <label>Descrição do Curso</label>
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        </div>

        <button className="btn-cadastrar" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroCursos;
 