// Deve constar os seguintes dados:
// 1 - Nome da Pessoa
// 2 - Data de Nascimento
// 3 - Telefone
// 4 - Endereço

import { useState } from "react";
import "./CadastroPessoas.css"

function CadastroPessoas() {
    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [endereco, setEndereco] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Produto cadastrado:");
        console.log("Nome:", nome);
        console.log("Data de Nascimento:", dataNascimento);
        console.log("Telefone:", telefone);
        console.log("Endereço:", endereco);
        setNome("");
        setDataNascimento("");
        setTelefone("");
        setEndereco("");
    };

    return (
        <div className="cadastro-card" role="region" aria-label="Formulário de cadastro de produto">
            <div className="cadastro-header">
                <div className="logo-dot">P</div>
                <div>
                    <div className="cadastro-title">Cadastro de Pessoas</div>
                    <div className="helper">Preencha os dados e clique em Cadastrar</div>
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label htmlFor="nome">Nome</label>
                    <input
                        id="nome"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Ex: O cara do momento"
                        required
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                    <input
                        id="dataNascimento"
                        type="date"
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                        required
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="preco">Telefone</label>
                    <input
                        id="telefone"
                        type="text"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        placeholder="Ex: (99) 9 9999-9999"
                        required
                    />
                </div>

                <div className="form-row">
                    <label htmlFor="endereco">Endereço</label>
                    <input
                        id="endereco"
                        type="text"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                        placeholder="Ex: Rua tal, N tal"
                        required
                    />
                </div>

                <button className="btn-cadastrar" type="submit">Cadastrar</button>
            </form>
        </div>
    );
};
export default CadastroPessoas;