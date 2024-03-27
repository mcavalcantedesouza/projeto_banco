import readlinesync = require('readline-sync');
import { Conta } from './src/model/Conta';
import { colors } from './src/util/Cores';


/* função principal que executa o menu */
export function main() {

    let opcao: number;

    let c1: Conta = new Conta(1, 123, 1, "Natasha", 1000);
    c1.visualizar();
    

    while (true) {

        console.log(colors.fg.cyanstrong)
        console.log("=========================================================");
        console.log("=========================================================\n");
        console.log("                       SSS   M   M ");
        console.log("                      S   S  MM MM ");
        console.log("                      S      M M M ");
        console.log("                       SSS   M   M ");
        console.log("                          S  M   M ");
        console.log("                      S   S  M   M ");
        console.log("                       SSS   M   M ");
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
        console.log("              9 - Sair                                 ");
        console.log("                                                       ");
        console.log("=========================================================");
        console.log("=========================================================");
        console.log(colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong)
            console.log("\nSMART VAULT BANK - O seu dinheiro está seguro conosco!");
            sobre();
            console.log(colors.reset)
            process.exit(0);
        }
    
        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\nCriar Conta\n", colors.reset);

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\nListar todas as Contas\n", colors.reset);

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\nBuscar Conta por Numero\n", colors.reset);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, 
                    "\nAtualizar Dados da Conta\n", colors.reset);

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\nApagar Conta\n", colors.reset);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, 
                    "\nSacar\n", colors.reset);

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

                keyPress()
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