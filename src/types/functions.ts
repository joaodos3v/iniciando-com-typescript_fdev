export function greeting(name: string): string {
  return `Olá, ${name}! Passar bem!`;
}

export function multiply(n1: number, n2: number): number {
  return n1 * n2;
}

// multiply("a", 1);

export function dangerMultiply(n1: any, n2: any): number {
  return n1 * n2;
}

function imprimirNoConsole(): void {
  console.log('Exemplo de função');
}
imprimirNoConsole();
