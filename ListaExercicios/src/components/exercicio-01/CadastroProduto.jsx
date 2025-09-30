import React, { useState } from "react";
import "./CadastroProduto.css";

function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [validade, setValidade] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Produto cadastrado:");
    console.log("Nome:", nome);
    console.log("Preço:", preco);
    console.log("Validade:", validade);
    // limpar campos se quiser:
    setNome("");
    setPreco("");
    setValidade("");
  };

  return (
    <div className="cadastro-card" role="region" aria-label="Formulário de cadastro de produto">
      <div className="cadastro-header">
        <div className="logo-dot">P</div>
        <div>
          <div className="cadastro-title">Cadastro de Produto</div>
          <div className="helper">Preencha os dados e clique em Cadastrar</div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Ex: Café Premium"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="preco">Preço do Produto</label>
          <input
            id="preco"
            type="number"
            step="0.01"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            placeholder="0.00"
            required
          />
        </div>

        <div className="form-row">
          <label htmlFor="validade">Data de Validade</label>
          <input
            id="validade"
            type="date"
            value={validade}
            onChange={(e) => setValidade(e.target.value)}
            required
          />
        </div>

        <button className="btn-cadastrar" type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroProduto;