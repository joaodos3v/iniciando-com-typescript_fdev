interface User {
  id: number;
  name: string;
  email: string;
  pass?: string;
  // funcao: (a: number, b: number) => boolean // Existe a possibilidade de "obrigarmos" que, na implementação, sejam criadas funções também
}

const authenticatedUser: User = {
  id: 1,
  name: 'João Vitor',
  email: 'jjvvro@zmail.com',
};

const userWithPassword: User = {
  id: 1,
  name: 'João Vitor',
  email: 'jjvvro@zmail.com',
  pass: '123456',
};

console.log(authenticatedUser.id);
console.log(authenticatedUser.name);
console.log(authenticatedUser.email);

console.log(userWithPassword.id);
console.log(userWithPassword.name);
console.log(userWithPassword.email);

export {};
