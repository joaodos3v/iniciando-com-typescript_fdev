class Course {
  name: string | undefined;
}

// Só por definir uma classe, já podemos usar a palavra reservada "new".
const c1 = new Course();
c1.name = 'Iniciando com TypeScript';
console.log(c1);
