let note: number | string = 10;
note = 'A+';

console.log(note);

// Isso pode ser chamado de "alias": apelidamos um tipo do nosso código para facilitar sua reutilização
type NotaOuConceito = number | 'A' | 'B' | 'C' | 'D' | 'E' | 'F';

let n1: NotaOuConceito = 7;
n1 = 'C';

console.log(n1);
