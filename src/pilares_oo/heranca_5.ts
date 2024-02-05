// Nota: estamos usando a palavra-chave "abstract" para dizer que uma classe é estática, ou seja, não pode ser instanciada.
//  Além disso, garantimos que poderemos herdar as implementações concretas (exemplos de iphone e galaxy abaixo).
abstract class Celular {
  ligar() {
    console.log('Em ligação');
  }

  // Nota: assim como nas interfaces, ao definir uma função como abstrata, ela deve ser implementada nas classes concretas (obrigatoriamente).
  abstract acessarRedeMovel(): void;
}

class IPhone23Pro extends Celular {
  acessarRedeMovel(): void {
    console.log('Usando rede 7.5G com o iPhone');
  }
}

class GalaxyS57Ultra extends Celular {
  acessarRedeMovel(): void {
    console.log('Usando rede 12G com o Galaxy');
  }
}

let c1 = new IPhone23Pro();
c1.ligar();
c1.acessarRedeMovel();

c1 = new GalaxyS57Ultra();
c1.ligar();
c1.acessarRedeMovel();

export {};
