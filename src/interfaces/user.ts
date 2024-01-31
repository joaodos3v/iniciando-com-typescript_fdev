interface User {
  id: number;
  name: string;
  email: string;
  // funcao: (a: number, b: number) => boolean // Existe a possibilidade de "obrigarmos" que, na implementação, sejam criadas funções também
}

const authenticatedUser: User = {
  id: 1,
  name: 'João Vitor',
  email: 'jjvvro@zmail.com',
};

console.log(authenticatedUser.id);
console.log(authenticatedUser.name);
console.log(authenticatedUser.email);

export {};
