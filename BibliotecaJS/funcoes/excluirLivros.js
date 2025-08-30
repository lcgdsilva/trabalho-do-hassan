const prompt = require('prompt-sync')();

function excluirLivro(biblioteca) {
    if (biblioteca.length === 0) {
        console.log("Não há livros para excluir.");
        return;
    }

    console.log("Livros disponíveis:");
    biblioteca.forEach((livro, index) => {
        console.log(`${index + 1} - ${livro.titulo} (${livro.autor})`);
    });

    let indice = Number(prompt("Digite o número do livro que deseja excluir: ")) - 1;

    if (indice >= 0 && indice < biblioteca.length) {
        let removido = biblioteca.splice(indice, 1)[0];
        console.log(`Livro "${removido.titulo}" removido com sucesso!`);
    } else {
        console.log("Número inválido. Nenhum livro foi removido.");
    }
}

module.exports = excluirLivro;
