/**
Definir um tipo chamado ContaCorrente (numero, saldo, movimentar)
Definir um tipo chamado Cliente (nome, email, contas[])

lista clientes = [cliente1, cliente2, cliente3]

movimentarConta(numConta: number, valor: number)

=-=-=-=-=-=-=-=-=-=-=-=-
Obs1: achei a explicação um pouco ruim, pois não entendi porque eu preciso do "movimentar" na ContaCorrente se vou chamar mandando numConta
Obs2: então resolvi fazer algumas modificações
 */

type ContaCorrente = {
  numero: number;
  saldo: number;
};

type Cliente = {
  nome: string;
  email: string;
  contas: ContaCorrente[];
};

function movimentarConta(conta: ContaCorrente, valor: number) {
  conta.saldo = conta.saldo + valor;
}

const clientes: Cliente[] = [
  {
    nome: 'João',
    email: 'jjvvro@zmail.com',
    contas: [
      { numero: 1, saldo: 100 },
      { numero: 2, saldo: 10000 },
    ],
  },
  {
    nome: 'Maria',
    email: 'maria@zmail.com',
    contas: [{ numero: 3, saldo: 500 }],
  },
  {
    nome: 'Pedro',
    email: 'pedro@zmail.com',
    contas: [{ numero: 4, saldo: -500 }],
  },
];

console.log('Saldo da conta antes de depositar 100 reais: ', clientes[0].contas[0].saldo);
movimentarConta(clientes[0].contas[0], 100);
console.log('Saldo da conta ao finalizar a transação: ', clientes[0].contas[0].saldo);

console.log('');

console.log('Saldo da conta antes de retirar 100 reais: ', clientes[1].contas[0].saldo);
movimentarConta(clientes[1].contas[0], -100);
console.log('Saldo da conta ao finalizar a transação: ', clientes[1].contas[0].saldo);

console.log('');

console.log('Saldo da conta antes de retirar 200 reais: ', clientes[2].contas[0].saldo);
movimentarConta(clientes[2].contas[0], -200);
console.log('Saldo da conta ao finalizar a transação: ', clientes[2].contas[0].saldo);
