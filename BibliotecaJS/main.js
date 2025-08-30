const prompt = require('prompt-sync')();

const { carregarBiblioteca, salvarBiblioteca } = require('./funcoes/armazenamento');
const cadastrarLivros = require('./funcoes/cadastrarLivros');
const listarLivros = require('./funcoes/listarLivros');
const calcularTotal = require('./funcoes/calcularTotal');
const gerarRelatorio = require('./funcoes/gerarRelatorio');
const excluirLivro = require('./funcoes/excluirLivros');

let biblioteca = carregarBiblioteca();

function menu() {
    let opcao = -1;

    while (opcao !== 0) {
        console.log("\n==== MENU BIBLIOTECA ====");
        console.log("1 - Gerar relatório");
        console.log("2 - Cadastrar um livro");
        console.log("3 - Listar livros");
        console.log("4 - Calcular total de livros");
        console.log("5 - Excluir um livro");
        console.log("0 - Sair");

        opcao = Number(prompt("Digite sua opção: "));

        switch (opcao) {
            case 1:
                gerarRelatorio(biblioteca);
                break;
            case 2:
                cadastrarLivros(biblioteca);
                salvarBiblioteca(biblioteca);
                break;
            case 3:
                listarLivros(biblioteca);
                break;
            case 4:
                calcularTotal(biblioteca);
                break;
            case 5:
                excluirLivro(biblioteca);
                salvarBiblioteca(biblioteca);
                break;
            case 0:
                console.log("Encerrando o sistema. Até logo!");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    }
}

menu();
