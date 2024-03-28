import { Conta } from "../model/Conta";

export interface ContaRepository{

    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;
    atualizar(conta: Conta): void;
    deletar(numero: number): void;

    // Métodos Bancários
    sacar(numero: number, valor: number): void;
    depositar(numbero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
    

}