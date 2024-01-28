// Definir um tipo chamado ContaCorrente (numero, saldo, movimentar)
type ContaCorrenteAnswer = {
  numero: number;
  saldo: number;
  movimentar: (valor: number) => void;
};

// Definir um tipo chamado Cliente (nome, email, contas[])
type ClienteAnswer = {
  nome: string;
  email: string;
  contas: ContaCorrenteAnswer[];
};

// [*AQUI ESTÁ O TRUQUE!!!*] O instrutor usou o "this" como parâmetro para resolver o problema da
//   função estar fora do contexto "Conta".
function movimentar(this: ContaCorrenteAnswer, valor: number) {
  this.saldo += valor;
}

const clientesAnswer: ClienteAnswer[] = [
  {
    nome: 'Ana',
    email: 'ana@zmail.com',
    contas: [
      { numero: 1234, saldo: 0, movimentar },
      { numero: 6444, saldo: 350.33, movimentar },
    ],
  },
  {
    nome: 'João',
    email: 'joao@zmail.com',
    contas: [
      { numero: 3232, saldo: 670.12, movimentar },
      { numero: 3000, saldo: 1398.89, movimentar },
    ],
  },
];

function movimentarContaAnswer(numConta: number, valor: number) {
  const conta = clientesAnswer
    .map((cliente) => cliente.contas.find((cc) => cc.numero === numConta))
    .filter((c) => c)[0];

  conta?.movimentar(valor);
}

function consultarSaldo(numConta: number): number | null {
  const conta = clientesAnswer
    .map((cliente) => cliente.contas.find((cc) => cc.numero === numConta))
    .filter((c) => c)[0];

  return conta?.saldo ?? null;
}

movimentarContaAnswer(3232, 678.9);
console.log(consultarSaldo(3232));

console.log('');

movimentarContaAnswer(3000, -398.89);
console.log(consultarSaldo(3000));
