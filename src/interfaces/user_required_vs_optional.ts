interface User {
  id?: number;
  name: string;
  email: string;
  pass?: string;
}

const authenticatedUser: User = {
  id: 1,
  name: 'João Vitor',
  email: 'jjvvro@zmail.com',
};

console.log(authenticatedUser);

const optionalUser: Partial<User> = {
  id: 2,
  name: 'Jaime',
  pass: '654321',
};

console.log(optionalUser);

const fullyUser: Required<User> = {
  id: 3,
  name: 'Ana',
  email: 'ana@ana.com',
  pass: '909090',
};

console.log(fullyUser);

export {};
