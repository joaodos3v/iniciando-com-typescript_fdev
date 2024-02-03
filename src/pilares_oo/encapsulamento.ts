class Carro {
  private velocidadeAtual: number = 0;
  protected readonly VELOCIDADE_MAXIMA: number = 200;

  constructor(public nome: string) {}

  get velocidade() {
    return this.velocidadeAtual;
  }

  protected alterarVelocidade(delta: number): void {
    const novaVelocidade: number = this.velocidadeAtual + delta;

    if (novaVelocidade >= 0 && novaVelocidade <= this.VELOCIDADE_MAXIMA) {
      this.velocidadeAtual = novaVelocidade;
    }
  }

  acelerar() {
    this.alterarVelocidade(5);
  }
}

const c1 = new Carro('Fusca');
console.log(c1.velocidade);
console.log(c1.nome);
// c1.alterarVelocidade(15);
c1.acelerar();
console.log(c1.velocidade);

export {};
