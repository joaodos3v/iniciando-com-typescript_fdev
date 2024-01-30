/**
 * Produto
 *   - id (válido)
 *   - nome (2 - 250 caracteres)
 *   - preco (> 0)
 *   - desc (> 0 && < 0.8)
 *   - precoFinal
 */
class Produto {
  constructor(readonly id: number, readonly nome: string, readonly preco: number, readonly desc: number = 0) {
    // O ideal, seria externalizar essas validações para outra classe (bem como utilizar membros estáticos)
    if (id <= 0) throw new Error('ID inválido');
    if (nome.length < 2) throw new Error('Nome pequeno');
    if (nome.length > 250) throw new Error('Nome grande');
    if (preco <= 0) throw new Error('Preço inválido');
    if (desc < 0 || desc > 0.8) throw new Error('Desconto inválido');
  }

  // É legal usar getter sempre que não precisar receber parâmetros e retorna um valor
  get precoFinal() {
    return this.preco * (1 - this.desc);
  }
}

const p1 = new Produto(1, 'Caneta', 12.5, 0.1);
console.log(`O produto ${p1.nome} vai custar ${p1.precoFinal} reais.`);

const p2 = new Produto(2, 'Notebook', 7860.78);
console.log(`O produto ${p2.nome} vai custar ${p2.precoFinal} reais.`);

export {};
