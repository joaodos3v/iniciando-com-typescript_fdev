class DesafioEstatico {
  nota: number = 9.8; // atributo de instância!
  static notaEstatica: number = 7.9; // atributo de classe (estático)!

  // método de classe (estático)
  static executar() {
    const instancia = new DesafioEstatico();
    console.log(instancia.nota);
    console.log(DesafioEstatico.notaEstatica); // Poderia usar o "this", mas usar o próprio nome da classe deixa mais explícito
  }
}

DesafioEstatico.executar();

const outraInstancia = new DesafioEstatico();
console.log(outraInstancia.nota);

export {};
