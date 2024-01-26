const VendaStatus = {
  INICIADA: 'iniciada',
  CONCLUIDA: 'concluida',
  CANCELADA: 'cancelada',
};

// O problema dessa estratégia é que podemos "redeclarar" os valores do enum
VendaStatus.INICIADA = '123';

console.log(VendaStatus.INICIADA); // 123

// Para resolver essa situação nesse contexto, podemos marcar o objeto como constante, de fato:
const NovaVendaStatus = {
  INICIADA: 'iniciada',
  CONCLUIDA: 'concluida',
  CANCELADA: 'cancelada',
} as const;

// NovaVendaStatus.INICIADA = '123';
// Cannot assign to 'INICIADA' because it is a read-only property.
// Isso acontece porque marcamos todas as propriedades dentro do objeto como "readonly".

// Particularmente, não achei um bom cenário, mas: um caso "comum" em que essa estratégia pode ser
//  interessante, é quando não queremos estar "limitados" ao mapeamento de valores do enum que
//  fizemos inicialmente. Sendo assim, declarar como const nos deixa mais "livres". Exemplo:
const Erros = {
  NOME_NULO: 'nome_nulo',
  EMAIL_NAO_ENCONTRADO: 'email_nao_encontrado',
  URL_INVALIDA: 'url_invalida',
} as const;

let erro: string;
erro = Erros.NOME_NULO;
erro = 'cpf_invalido'; // Podemos fazer isso porque, no final, é simplesmente uma const com objeto de strings.

console.log(erro);
