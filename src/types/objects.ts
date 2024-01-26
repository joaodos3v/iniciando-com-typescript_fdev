type User = {
  name: string;
  email: string;
};

let user: User = {
  name: 'João Vitor',
  email: 'jjvvro@zmail.com',
};

// user.senha = '123456'; -> Property 'senha' does not exist on type '{ name: string; email: string; }'.

console.log(user);
console.log(user.name);
console.log(user.email);

user = {
  name: 'Maria',
  email: 'mmmaria@zmail.com',
};

console.log(user);
console.log(user.name);
console.log(user.email);
