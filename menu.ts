import readlinesync = require('readline-sync');
import { colors } from './src/util/Cores';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

/* função principal que executa o menu */
export function main() {
    
    /* Instancia da Classe ContaController */
    let contas: ContaController = new ContaController();

    /* Variaveis Auxiliares */
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];

    console.log("\nCriar Contas\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();

    

    while (true) {

        console.log(colors.fg.cyanstrong);
        console.log("=========================================================");
        console.log("=========================================================\n");
        console.log("                        SSS   M   M ");
        console.log("                       S   S  MM MM ");
        console.log("                       S      M M M ");
        console.log("                        SSS   M   M ");
        console.log("                           S  M   M ");
        console.log("                       S   S  M   M ");
        console.log("                        SSS   M   M ");
        console.log("\n\n                    SMART VAULT BANK");
        console.log("             O seu dinheiro está seguro conosco!");
        console.log("=========================================================");
        console.log("                                                       ");
        console.log("              1 - Criar Conta                          ");
        console.log("              2 - Listar todas as Contas               ");
        console.log("              3 - Buscar Conta por Numero              ");
        console.log("              4 - Atualizar Dados da Conta             ");
        console.log("              5 - Apagar Conta                         ");
        console.log("              6 - Sacar                                ");
        console.log("              7 - Depositar                            ");
        console.log("              8 - Transferir valores entre Contas      ");
        console.log("              9 - Buscar Conta por titular             ");
        console.log("              0 - Sair                                 ");
        console.log("                                                       ");
        console.log("=========================================================");
        console.log("=========================================================");
        console.log(colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log(colors.fg.greenstrong);
            console.log("\nSMART VAULT BANK - O seu dinheiro está seguro conosco!");
            sobre();
            console.log(colors.reset);
            process.exit(0);
        }
    
        switch (opcao) {
            case 1:
                console.log(`${colors.fg.whitestrong} \n\nCriar Conta\n\n ${colors.reset}`);

                console.log("Digite o Número da agência: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o Nome do Titular da conta: ");
                titular = readlinesync.question("");

                console.log("\nDigite o tipo de Conta: ");
                tipo = readlinesync.keyInSelect(tiposContas, "", {cancel: false}) + 1;

                console.log("\nDigite o Saldo da conta (R$): ");
                saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1: 
                            console.log("Digite o Limite da Conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.cadastrar(
                                new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                            break;
                        case 2: 
                                console.log("Digite o Dia do aniversário da Conta Poupança: ");
                                aniversario = readlinesync.questionInt("");
                                contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                                break;
                    }
                    
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\nListar todas as Contas\n", colors.reset);
                    contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(`${colors.fg.whitestrong}\n\nConsultar dados da Conta - por número\n\n${colors.reset}`);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");
                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
               console.log(`${colors.fg.whitestrong}\n\nAtualizar dados da Conta\n\n${colors.reset}`);

               console.log("Digite o número da Conta: ");
               numero = readlinesync.questionInt("");

               let conta = contas.buscarNoArray(numero);

               if (conta != null) {
                    console.log("Digite o Número da agência: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o Nome do Titular da Conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo

                    console.log("Digite o Saldo da conta (R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1: 
                            console.log("Digite o Limite da Conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            console.log("Digite o Dia do aniversário da Conta Poupança: ");
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));
                            break;
                    
                    }
                }

                keyPress()
                break;
            case 5:
                console.log(`${colors.fg.whitestrong} \n\nApagar uma Conta\n\n ${colors.reset}`);

                console.log("Digite o n;umero da Conta: ");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, 
                    "\nSacar\n", colors.reset);

                    console.log("Digite o numero da Conta: ");
                    numero = readlinesync.questionInt("");

                    console.log("Digite o valor do Saque: ");
                    valor = readlinesync.questionFloat("");

                    contas.sacar(numero, valor);


                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, 
                    "\nDepositar\n", colors.reset);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, 
                "\nTransferir valores entre Contas\n", colors.reset);

                console.log("Digite o numero da Conta de Origem: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o número da Conta de Destino: ");
                numeroDestino = readlinesync.questionFloat("");

                console.log("Digite o valor do Depósito: ");
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);

                keyPress()
                break;
            case 9:
                console.log(colors.fg.whitestrong, 
                    "\nConsultar conta por titular\n", colors.reset);

                    console.log("Digite o Nome do Titular: ");
                    titular = readlinesync.question("");

                    contas.procurarPorTitular(titular);

                break;

            default:
                console.log(colors.fg.whitestrong, 
                    "Opção inválida.", colors.reset);

                keyPress()
                break;
        }
        
    }

}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

/* Função com os meus dados */
export function sobre(): void {

    console.log("=========================================================");
    console.log("                                                       ");
    console.log("              Projeto desenvolvido por:                ");
    console.log("         Michel Oliveira Cavalcante de Souza           ");
    console.log("        https://github.com/mcavalcantedesouza          ");
    console.log("                                                       ");
    console.log("=========================================================");

}



main()