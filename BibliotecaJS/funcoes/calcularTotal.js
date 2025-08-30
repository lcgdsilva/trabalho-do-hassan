function calcularTotal(biblioteca){
    let total = biblioteca.reduce((soma, livro)=>soma + livro.quantidade, 0);
    console.log(`Total de livros na biblioteca: ${total}`);
}

module.exports = calcularTotal;