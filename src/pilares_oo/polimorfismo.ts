abstract class Animal {
  abstract emitirSom(): string;
}

class Gato extends Animal {
  emitirSom(): string {
    return 'Miau';
  }
}

class Cachorro extends Animal {
  emitirSom(): string {
    return 'Au-au';
  }
}

function exibirSom(animal: Animal) {
  console.log(animal.emitirSom());
}

exibirSom(new Gato());
exibirSom(new Cachorro());

// Ou, poderia criar uma variável de forma polimórfica:

let a: Animal = new Gato();
exibirSom(a);

a = new Cachorro();
exibirSom(a);

export {};
