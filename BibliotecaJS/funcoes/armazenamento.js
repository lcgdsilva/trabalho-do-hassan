const fs = require('fs');
const caminho = './biblioteca.json';

function carregarBiblioteca() {
    try {
        if (!fs.existsSync(caminho)) return [];
        const dados = fs.readFileSync(caminho, 'utf8');
        return JSON.parse(dados);
    } catch (erro) {
        console.error("Erro ao carregar biblioteca:", erro);
        return [];
    }
}

function salvarBiblioteca(biblioteca) {
    try {
        fs.writeFileSync(caminho, JSON.stringify(biblioteca, null, 2));
    } catch (erro) {
        console.error("Erro ao salvar biblioteca:", erro);
    }
}

module.exports = { carregarBiblioteca, salvarBiblioteca };
