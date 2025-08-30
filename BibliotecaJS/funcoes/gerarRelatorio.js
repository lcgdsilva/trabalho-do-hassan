function gerarRelatorio(biblioteca) {
    if (biblioteca.length === 0) {
        console.log("Nenhum livro para gerar relatório.");
        return;
    }

    console.log("===== RELATÓRIO COMPLETO DA BIBLIOTECA =====");

    let total = 0;
    biblioteca.forEach((livro, index) => {
        console.log(`\nLivro ${index + 1}:`);
        console.log(`Título: ${livro.titulo}`);
        console.log(`Autor: ${livro.autor}`);
        console.log(`Ano: ${livro.ano}`);
        console.log(`Quantidade: ${livro.quantidade}`);
        total += livro.quantidade;
    });

    console.log(`\nTOTAL DE LIVROS: ${total}`);
    console.log("============================================");
}

module.exports = gerarRelatorio;
