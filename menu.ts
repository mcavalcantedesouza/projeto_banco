import readlinesync = require('readline-sync');


/* função principal que executa o menu */
export function main() {

    let opcao: number;

    
    while (true) {

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
        console.log("             O seu dinheiro esta seguro conosco!");
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

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nSMART VAULT BANK - O seu dinheiro está seguro conosco!");
            sobre();
            process.exit(0);
        }
    
        switch (opcao) {
            case 1:
                console.log("\nCriar Conta\n");
                break;
            case 2:
                console.log("\nListar todas as Contas\n");
                break;
            case 3:
                console.log("\nBuscar Conta por Numero\n");
                break;
            case 4:
                console.log("\nAtualizar Dados da Conta\n");
                break;
            case 5:
                console.log("\nApagar Conta\n");
                break;
            case 6:
                console.log("\nSacar\n");
                break;
            case 7:
                console.log("\nDepositar\n");
                break;
            case 8:
                console.log("\nTransferir valores entre Contas\n");
                break;
            default:
                console.log("Opção inválida.");
        }
        
    }

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