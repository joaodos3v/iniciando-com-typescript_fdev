interface OperacaoMatematicaObj {
  fn: (n1: number, n2: number) => number;
}

const somaObj: OperacaoMatematicaObj = {
  fn(n1, n2) {
    return n1 + n2;
  },
};

console.log(somaObj.fn(7, 10));

// Essa estrutura define uma interface que está mapeando o tipo de uma função
interface OperacaoMatematica {
  (n1: number, n2: number): number;
}

const soma: OperacaoMatematica = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(soma(1, 8));
