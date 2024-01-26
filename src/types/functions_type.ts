let operation: (a: number, b: number) => number;

function sum(n1: number, n2: number): number {
  return n1 + n2;
}

// Nós podemos fazer isso porque a função sum é do tipo (a: number, b: number) => number,
//  ou seja, elas possuem a mesma assintura: mesmo que o nome dos parâmetros seja diferente,
//  os tipos e a quantidade são iguais.
operation = sum;

console.log(operation(2, 5));

function multiply(n1: number, n2: number): number {
  return n1 * n2;
}

operation = multiply;

console.log(operation(2, 5));
