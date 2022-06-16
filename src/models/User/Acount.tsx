export interface AccountEndereco {
  logradouro: string;
  bairro: string;
  localidade: string;
  numero: number;
  complemento: string;
  uf: string;
  cep: string;
}

export interface Account {
    id: string;
    email: string;
    cpf: string;
    nomeCompleto: string;
    dataNascimento: string;
    genero: string;
    numeroCelular: string;
    estadoCivil: number;
    endereco: Array<AccountEndereco>;
    isValid: boolean;
  }
