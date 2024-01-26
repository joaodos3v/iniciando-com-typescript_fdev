// Faz mais sentido deixar esse nome no singular porque, quando formos usar, usaremos apenas um valor e não todos
enum DiaSemanaNumber {
  DOMINGO,
  SEGUNDA,
  TERCA,
  QUARTA,
  QUINTA,
  SEXTA,
  SABADO,
}

console.log(DiaSemanaNumber.SABADO); // Vai mostrar o número 6 porque começa a partir do índice 0
// Podemos trocar também o valor do primeiro elemento e, a partir disso, ele iria incrementando. Por exemplo:
/**
 * enum DiaSemana {
    DOMINGO = 100,
    SEGUNDA,
    TERCA,
    QUARTA,
    QUINTA,
    SEXTA,
    SABADO
 }

 console.log(DiaSemana.SABADO); // Nesse caso, exibiria 106
 */

// Também podemos definir usando strings
enum DiaSemana {
  DOMINGO = 'domingo',
  SEGUNDA = 'segunda',
  TERCA = 'terca',
  QUARTA = 'quarta',
  QUINTA = 'quinta',
  SEXTA = 'sexta',
  SABADO = 'sabado',
}

console.log(DiaSemana.QUARTA);

let dia: DiaSemana;
dia = DiaSemana.SEGUNDA;
// dia = 'sexta'; -> Não funciona porque é string e não é um valor do enum
console.log(dia);
