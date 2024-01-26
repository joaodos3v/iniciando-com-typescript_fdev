let hobbies: string[] = ['Cozinhar', 'Praticar Esportes']; // Aqui, iria inferir automaticamente
console.log(hobbies[0]);
console.log(typeof hobbies);

// hobbies = [100] -> Não funcionaria

let endereco: [string, number] = ['Av. Principal', 99];
console.log(endereco);
endereco = ['Rua Principal', 123];
console.log(endereco);

// endereco = [60, 'Av Norte'] -> Não funciona porque não respeita nossa declaração explícita

console.log(endereco[0]); // Ao passar o mouse em cima, ele sabe que o tipo é string e mostra, por exemplo, funções de strings
console.log(endereco[1]); // A mesma coisa para o number
