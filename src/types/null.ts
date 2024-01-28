type User2 = {
  name: string;
  email: string;
};

const users: User2[] = [
  { name: 'João Vitor', email: 'jjvvro@zmail.com' },
  { name: 'Pedro', email: 'pedro@zmail.com' },
  { name: 'Maria', email: 'maria@zmail.com' },
  { name: 'Gustavo', email: 'gustavo@zmail.com' },
  { name: 'Amanda', email: 'amanda@zmail.com' },
  { name: 'Rafaela', email: 'rafaela@zmail.com' },
];

function searchByEmail(email: string): User2 | null { // Poderia ser "undefined", se achássemos melhor
  return users.find((u) => u.email === email) ?? null;
}

console.log(searchByEmail('jjvvro@zmail.com'));
console.log(searchByEmail('mara@zmail.com'));
