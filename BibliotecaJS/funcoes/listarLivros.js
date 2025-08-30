function listarLivros(biblioteca){
    if(biblioteca.length === 0){
        console.log("Nenhum livro cadastrado!");
        return;
    }
    console.log("Listar livros:");
    biblioteca.forEach((livro, index)=>{
        console.log(`\nLivro ${index +1}`);
        console.log(`Título: ${livro.titulo}`);
        console.log(`Autor: ${livro.autor}`);
        console.log(`Ano: ${livro.ano}`);
        console.log(`Quantidade: ${livro.quantidade}`);
    });
}

module.exports= listarLivros;