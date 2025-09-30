// Deve constar os seguintes dados:
// 1 - Nome do Produto
// 2 - Preço do Produto
// 3 - Data de validade do Produto

import { useState } from 'react';
import './App.css';
import CadastroProduto from './components/exercicio-01/CadastroProduto';
import CadastroAlunos from './components/exercicio-05/CadastroAlunos';
import CadastroCursos from './components/exercicio-04/CadastroCursos';
import CadastroNotas from './components/exercicio-03/CadastroNotas';
import CadastroPessoas from './components/exercicio-02/CadastroPessoas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CadastroProduto />
      <CadastroAlunos />
      <CadastroCursos />
      <CadastroNotas />
      <CadastroPessoas />
    </div>
  )
}

export default App;