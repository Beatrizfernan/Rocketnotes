# **Documentação do Frontend**

## **Sobre o Projeto**

É uma aplicação que visa simplificar o processo de salvar e gerenciar links úteis. Seu frontend foi desenvolvido utilizando React, proporcionando uma experiência interativa e responsiva aos usuários.

## **Estrutura do Projeto**

O projeto é estruturado de forma organizada, com páginas e componentes desempenhando papéis específicos. Principais pontos:

- **src/pages/Details**: Exibe detalhes de uma nota específica.
    - **`index.js`**: Componente React para a página de Detalhes.
- **src/pages/Home**: Página inicial com uma lista de notas e opções de navegação.
    - **`index.jsx`**: Componente React para a página inicial.
- **src/pages/New**: Permite a criação de uma nova nota.
    - **`index.jsx`**: Componente React para a página de Nova Nota.
- **src/pages/Profile**: Gerenciamento das informações do usuário.
    - **`index.jsx`**: Componente React para a página de Perfil.
- **src/pages/SignIn**: Página de login para autenticação do usuário.
    - **`index.js`**: Componente React para a página de Login.
- **src/pages/SignUp**: Registro para criar uma nova conta de usuário.
    - **`index.jsx`**: Componente React para a página de Registro.
- **src/routes/app.routes.jsx**: Rotas para usuários autenticados usando React Router.
    - Define rotas para as páginas de Início, Nova Nota, Perfil e Detalhes.
- **src/routes/auth.routes.jsx**: Rotas para autenticação e registro usando React Router.
    - Define rotas para as páginas de Login e Registro.
- **src/routes/index.jsx**: Ponto de entrada principal para o React Router.
    - Importa **`AppRoutes`** ou **`AuthRoutes`** com base no status de autenticação.

## **Componentes Reutilizáveis**

Componentes reutilizáveis foram implementados para aumentar a modularidade do projeto. Alguns principais:

- **Header**: Cabeçalho comum usado em diferentes páginas.
- **Button**: Componente genérico para botões.
- **ButtonText**: Botão com estilização de texto, utilizado no menu de navegação.
- **Section**: Componente para organizar conteúdo com um título.
- **Tag**: Exibe tags associadas às notas.
- **Input**: Campo de entrada para dados do usuário.
- **Textarea**: Área de texto para entrada multilinha.
- **Note**: Exibe informações de notas individuais.
- **NoteItem**: Utilizado na página de Nova Nota para exibir links.

## **Utilização Local**

Para executar o projeto localmente, siga estes passos:

1. Clone o repositório
2. Navegue até o diretório do projeto: 
3. Instale as dependências: **`npm install`**
4. Execute o servidor de desenvolvimento: **`npm start`**
5. Acesse a aplicação em http://localhost:3000 no navegador.

## **Contribuições**

Se deseja contribuir para o Rocket Notes, siga estas diretrizes:

1. Faça um fork do repositório.
2. Crie um novo branch: **`git checkout -b feature/nome-da-sua-feature`**
3. Faça suas alterações e faça commit: **`git commit -m 'Adicione sua feature'`**
4. Faça push para o branch: **`git push origin feature/nome-da-sua-feature`**
5. Submeta um pull request.

Agradecemos pela sua contribuição! 🚀
