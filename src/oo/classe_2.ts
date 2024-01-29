class Course {
  private _id: number;
  name: string | undefined;

  constructor(id: number) {
    if (id < 1) {
      throw new Error('Invalid ID');
    }

    this._id = id;
  }

  get id() {
    return this._id;
  }
}

const c1 = new Course(123);
c1.name = 'Iniciando com TypeScript';
console.log(c1.id);
console.log(c1.name);

export {};
