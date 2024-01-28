// Quando usamos esse tipo, a função simplesmente não pode "retornar" nenhum valor ou acabar.
function falhar(msg: string): never {
  throw new Error(msg);
}

falhar('Descrição muito pequena');
