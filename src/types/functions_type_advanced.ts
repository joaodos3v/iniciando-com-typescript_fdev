let operationAdvanced: (a: number, b: number) => number;

function sumAdvanced(n1: number, n2: number): number {
  return n1 + n2;
}

// Nós podemos fazer isso porque a função sumAdvanced é do tipo (a: number, b: number) => number,
//  ou seja, elas possuem a mesma assintura: mesmo que o nome dos parâmetros seja diferente,
//  os tipos e a quantidade são iguais.
operationAdvanced = sumAdvanced;

console.log(operationAdvanced(2, 5));

function multiplyAdvanced(n1: number, n2: number): number {
  return n1 * n2;
}

operationAdvanced = multiplyAdvanced;

console.log(operationAdvanced(2, 5));

// Também podemos definir, como se fosse um "apelido" para as tipagens, permitindo assim
//  reaproveitar o código. Exemplo:
type OperationAdvancedFn = (a: number, b: number) => number;

let operationAdvanced2: OperationAdvancedFn;
let operationAdvanced3: OperationAdvancedFn;

// Também podemos criar um tipo para mapear outros tipos:
type NumberOrText = number | string;

let valueX: NumberOrText = 5;
valueX = '5';
