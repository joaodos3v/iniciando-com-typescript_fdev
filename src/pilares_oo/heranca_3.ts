interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha?: string;
}

interface CasoDeUso {
  executar(entrada: any): any;
}

// Se quiséssemos, por exemplo, criar uma interface de entrada mais complexa para um caso de uso do sistema:
interface RegistrarUsuarioEntrada {
  usuario: Usuario;
  professores: string[];
}

class RegistrarUsuario implements CasoDeUso {
  executar(entrada: RegistrarUsuarioEntrada) {
    console.log('Executando registrar usuário: ', entrada);
  }
}

const u1: Usuario = {
  id: 123,
  nome: 'Paulo',
  email: 'paulo@me.com',
  senha: '123456',
};

const casoDeUso: CasoDeUso = new RegistrarUsuario();
casoDeUso.executar(u1);
casoDeUso.executar({ usuario: u1, professores: ['professor 1', 'professor 2'] });

export {};
