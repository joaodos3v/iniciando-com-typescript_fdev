/**
 * CARRO
 */
class Carro {
  private _velocidade: number = 0;

  // Nota: se tirar o valor padrão (que torna este parâmetro opcional), todas as chamadas de "super" exigiriam um valor para velocidadeMaxima
  constructor(public readonly velocidadeMaxima: number = 200) {}

  get velocidade() {
    return this._velocidade;
  }

  public acelerar() {
    this.alterarVelocidade(5);
  }

  public frear() {
    this.alterarVelocidade(-5);
  }

  protected alterarVelocidade(delta: number): void {
    const novaVelocidade: number = this._velocidade + delta;

    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
      this._velocidade = novaVelocidade;
    } else if (novaVelocidade > this.velocidadeMaxima) {
      this._velocidade = this.velocidadeMaxima;
    } else {
      this._velocidade = 0;
    }
  }
}

/**
 * FUSCA
 */
class Fusca extends Carro {
  constructor() {
    super(165);
  }
}

let c1: Carro = new Fusca();

c1.acelerar();
c1.acelerar();
c1.acelerar();

console.log(c1.velocidade);
console.log(c1.velocidadeMaxima);

/**
 * FERRARI
 */
class Ferrari extends Carro {
  constructor() {
    super(355);
  }

  public acelerar(): void {
    // Nota: esse comportamento foi herdado por herança por ser protectec, e pode ser sobrescrito dessa forma
    this.alterarVelocidade(35);
  }

  public frear(): void {
    this.alterarVelocidade(-15);
  }
}

c1 = new Ferrari();

c1.acelerar();
c1.acelerar();
c1.acelerar();

console.log(c1.velocidade);
console.log(c1.velocidadeMaxima);

export {};
