class DesafioEstatico {
  nota: number = 1000; // não alterar esta linha

  static executar(cls: DesafioEstatico) {
    // Imprimir o valor de nota no console
    console.log(cls.nota);
  }
}

DesafioEstatico.executar(new DesafioEstatico());
