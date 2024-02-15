// Importação de módulos e estilos

import React from 'react';
import { Livro } from '../classes/modelo/Livro';
import { ControleEditora } from '../classes/controle/ControleEditora';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

// Definição do componente exportável LinhaLivro

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  
  // Obtém o nome da editora com base no código da editora do livro
  
  const nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

  return (
    <tr>
      <td>
        <div>{props.livro.titulo}</div>
        <button onClick={props.excluir} className="btn btn-danger btn-excluir">Excluir</button>
      </td>
      <td>{props.livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul className="autores-list">
        {props.livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>  
          ))}
        </ul>
      </td>
    </tr>
  );
}
