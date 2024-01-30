class Course {
  constructor(readonly id: number, public name?: string) {
    if (id < 1) {
      throw new Error('Invalid ID');
    }
  }
}

const c1 = new Course(123);
c1.name = 'Iniciando com TypeScript';
console.log(c1.id);
console.log(c1.name);

const c2 = new Course(456, 'Typescript Avançado');
console.log(c2.id);
console.log(c2.name);

export {};
