import { Editora } from '../modelo/Editora';

//editoras existentes

let editoras: Editora[] = [
  new Editora(1, 'Intrínseca'),
  new Editora(2, 'Globo'),
  new Editora(3, 'Galera'),
];

export class ControleEditora {
  
  //obter o nome da editora
  
  getNomeEditora(codEditora: number) {
    const editora = editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }

  //obter a lista completa de editoras
  
  getEditoras() {
    return editoras;
  }
}
