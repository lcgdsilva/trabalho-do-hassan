<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4c1a8bd9-20ea-4ee1-8065-6c87f1298334" />

📚 BibliotecaJS
Sistema de gerenciamento de biblioteca desenvolvido em JavaScript para controle de acervo de livros, com interface web e versão CLI.

✨ Funcionalidades
📖 Cadastro de livros com título, autor, ano e quantidade

📋 Listagem completa do acervo

🧮 Cálculo do total de livros na biblioteca

📊 Geração de relatórios detalhados

🗑️ Exclusão de livros do sistema

💾 Armazenamento persistente (JSON e LocalStorage)

📱 Interface web responsiva

⚡ Versão CLI para uso via terminal

🛠️ Tecnologias Utilizadas
JavaScript (Node.js e Browser)

HTML5 e CSS3

LocalStorage (para versão web)

JSON (para armazenamento em arquivo)

Promp-sync (para entrada de dados no CLI)

🚀 Como executar
Versão Web (Browser)
Clone o repositório

Abra o arquivo index.html em seu navegador

Utilize a interface para gerenciar sua biblioteca

Versão CLI (Terminal)
bash
# Instale as dependências
npm install prompt-sync

# Execute o sistema
node main.js
📦 Estrutura do Projeto
text
bibliotecajs/
├── index.html          # Interface web principal
├── styles.css          # Estilos da interface
├── main.js             # Sistema principal (CLI)
├── biblioteca.json     # Armazenamento de dados
├── funcoes/
│   ├── armazenamento.js    # Funções de persistência
│   ├── cadastrarLivros.js  # Cadastro de livros
│   ├── listarLivros.js     # Listagem de livros
│   ├── calcularTotal.js    # Cálculo de totais
│   ├── gerarRelatorio.js   # Geração de relatórios
│   └── excluirLivros.js    # Exclusão de livros
└── README.md
📋 Regras de Negócio
Sistema alerta quando o total de livros excede 20 unidades

Validação de campos obrigatórios no cadastro

Impede operações em acervo vazio

Persistência automática das alterações

🎯 Objetivos de Aprendizado
Este projeto foi desenvolvido para praticar:

Funções modulares em JavaScript

Manipulação de arrays e objetos

Persistência de dados (JSON e LocalStorage)

Regras de negócio e validações

Interface com usuário (CLI e Web)

Organização e estruturação de código

👥 Público-Alvo
Sistema desenvolvido para bibliotecários e gestores de acervos que necessitam de um controle simples e eficiente de seus livros.

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

Desenvolvido como parte do curso de Desenvolvimento de Sistemas
