export default class Validador {
  static readonly ERRO_DESCONHECIDO = 'erro_desconhecido';

  static maiorQueZero(n: number, msgError: string) {
    if (n <= 0) throw new Error(msgError);
  }

  static tamanhoEntre(s: string, min: number, max: number, msgError: string) {
    Validador.entre(s.length, min, max, msgError);
  }

  static entre(n: number, min: number, max: number, msgError: string) {
    if (n < min || n > max) throw new Error(msgError);
  }
}
