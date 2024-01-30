class Course {
  readonly id: number; // Se um atributo não deve ser alterado, podemos declará-lo como readonly
  name: string | undefined;

  constructor(id: number) {
    if (id < 1) {
      throw new Error('Invalid ID');
    }

    this.id = id;
  }

  /**
   get id() {
      // this._id++; // Desde que nosso atributo passou a ser readonly, essa linha não funciona mais
      return this._id;
    }
    // Nota: além disso, por ser um atributo readonly que não poderá ser alterado, não precisamos mais
    //  do getter para consumí-lo e podemos buscar diretamente do objeto.
   */
}

const c1 = new Course(123);
c1.name = 'Iniciando com TypeScript';
console.log(c1.id);
console.log(c1.name);

export {};
