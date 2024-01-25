const nome: string = 'João';
console.log(nome);

/*
 Não pode usar sem definir o valor antes
 Variable 'estaChovendo' is used before being assigned.
*/
let estaChovendo: boolean;
estaChovendo = true; // -> Precisa ter esse valor
console.log(estaChovendo);

/**
 * Mesmo sem declarar que é number, por ser let, faz a **inferência** e deixa claro que é number
 * Se for const, não tipa por inferência, basicamente mostra a constante (pois não muda)
 */
let idade = 27;
console.log(idade);

/**
 * O tipo any deve ser evitado quase todas as vezes. Contudo, quando estamos migrando um projeto,
 * refatorando uma função ou algo assim, ele pode ser útil para não travar o trabalho
 */
let variavel: any = 4;
variavel = 'Texto';
variavel = false;
variavel = { nome: 'João' };
console.log(variavel);

/**
 * Ao não falar o tipo e nem atribuir nenhum valor inicial, o tipo inferido é any
 */
let misterio;
misterio = 4;
misterio = 'Texto';
console.log(misterio);
