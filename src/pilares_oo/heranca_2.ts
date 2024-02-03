interface Entidade {
  id: number;
}

interface Vendavel {
  nome: string;
  preco: number;
  desconto: number;
}

class Produto implements Entidade, Vendavel {
  constructor(public readonly id: number, readonly nome: string, readonly preco: number, readonly desconto: number) {}

  get precoFinal() {
    return this.preco * (1 - this.desconto);
  }
}

const p1 = new Produto(10, 'Caneta', 9.8, 0.05);

console.log(p1);
console.log(p1.precoFinal);

// Classe Servico (contém exemplo de Polimorfismo)
class Servico implements Entidade, Vendavel {
  constructor(public readonly id: number, readonly nome: string, readonly preco: number, readonly desconto: number) {}
}

let v1: Vendavel = new Produto(1, 'Caneta', 10, 0);
console.log(v1);

v1 = new Servico(2, 'Montar TV', 80, 0.1);
console.log(v1);
// É legal notar que aqui, por ser uma instância de *Vendavel*, temos acesso *apenas* aos membros *dessa* interface
//  e não podemos acessar "id", por exemplo.

export {};
