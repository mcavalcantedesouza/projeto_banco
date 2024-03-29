import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository{

    private listaContas: Array<Conta> = new Array<Conta>();

    public numero: number = 0;

    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }
    listarTodas(): void {
        for (let conta of this.listaContas){
            conta.visualizar();
        }
    }
    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A Conta foi adicionada!");
    }
    atualizar(conta: Conta): void {
        
        
    }
    deletar(numero: number): void {
        // this.listaContas.splice(this.listaContas.indexOf(numero));
        // console.log("A Conta foi deletada!");

    }
    sacar(numero: number, valor: number): void {

        
    }
    depositar(numbero: number, valor: number): void {
        
    }
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        
    }

}