class Course {
  private _id: number | undefined;
  name: string | undefined; // Se quisermos deixar mais claro que é um atributo público, podemos adicionar "public" antes do nome
  public email: string | undefined;

  get id() {
    return this._id;
  }

  set id(id: number | undefined) {
    if (id && id > 0) {
      this._id = id;
    }
  }
}

// Só por definir uma classe, já podemos usar a palavra reservada "new".
const c1 = new Course();
c1.id = 123;
c1.name = 'Iniciando com TypeScript';
console.log(c1.id);
console.log(c1.name);

// Nota: esse export transforma o arquivo em um módulo e dá *escopo* a ele, o que "engana" o Typescript
//  e previne que ele fique apontando erros porque estamos usando o mesmo nome de variável em diferentes arquivos.
export {};
