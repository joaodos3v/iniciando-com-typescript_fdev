let note: number | string = 10;
note = 'A+';

console.log(note);

// Isso pode ser chamado de "alias": apelidamos um tipo do nosso código para facilitar sua reutilização
type NotaOuConceito = number | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

let n1: NotaOuConceito = 7;
n1 = 'C';

console.log(n1);

/**
 * Nesses casos, às vezes pode ser necessário identificar qual dos dois tipos a variável possui.
 *  Nesse caso que os tipos primitivos são diferentes, podemos usar o operador 'typeof' para distinguí-los.
 *  Contudo, se fossem iguais, teríamos que recorrer a um "instanceof", por exemplo, ou testar alguma propriedade.
 */
function imprimirNota(nota: NotaOuConceito) {
  if (typeof nota === 'number') {
    console.log(`Nota ${nota}`);
  } else {
    console.log(`Conceito ${nota}`);
  }
}

imprimirNota(n1);

console.log(('test' as any) instanceof String);
