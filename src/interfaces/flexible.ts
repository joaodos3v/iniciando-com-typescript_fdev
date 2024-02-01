interface Flexible {
  name: string;
  [atrib: string]: number | string | boolean;
  // Essa estrutura permite uma flexibilidade maior na hora de definir as propriedades, mas "retira" um pouco do controle da interface
}

const f1: Flexible = {
  name: 'Teste',
  age: 44,
  salary: 12345,
  isFlexible: true,
};

console.log(f1);

export {};
