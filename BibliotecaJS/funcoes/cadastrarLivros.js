const prompt = require('prompt-sync')();

function cadastrarLivros(biblioteca){
    let titulo = prompt("Titulo: ");
    let autor = prompt("Autor: ");
    let ano =  prompt("Ano de publicação: ");
    let quantidade = Number(prompt("Quantidade de livros: "));
    
    let livro = {
        titulo,
        autor,
        ano,
        quantidade
    }
    biblioteca.push(livro);
    console.log("Livro cadastrado com sucesso!");
    console.log(livro)
    return;
};

module.exports = cadastrarLivros;