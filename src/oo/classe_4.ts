import Validador from './Validador';

class Produto {
  constructor(readonly id: number, readonly nome: string, readonly preco: number, readonly desc: number = 0) {
    Validador.maiorQueZero(this.id, 'ID inválido');
    Validador.maiorQueZero(this.preco, 'Preço inválido');
    Validador.tamanhoEntre(nome, 2, 250, 'Nome inválido');
    Validador.entre(this.desc, 0, 0.8, 'Desconto inválido');
  }

  get precoFinal() {
    return this.preco * (1 - this.desc);
  }
}

const p1 = new Produto(1, 'Caneta', 12.5, 0.1);
console.log(`O produto ${p1.nome} vai custar ${p1.precoFinal} reais.`);

const p2 = new Produto(2, 'Notebook', 7860.78);
console.log(`O produto ${p2.nome} vai custar ${p2.precoFinal} reais.`);

console.log(Validador.ERRO_DESCONHECIDO);

export {};
