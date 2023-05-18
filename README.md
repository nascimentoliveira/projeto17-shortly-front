![created date - shortly](https://img.shields.io/date/1671332400?color=007ec6&label=created&style=flat-square)
![license - shortly](https://img.shields.io/github/license/nascimentoliveira/shortly?color=007ec6&style=flat-square)
![last commit - shortly](https://img.shields.io/github/last-commit/nascimentoliveira/shortly?color=007ec6&style=flat-square)
![repo size - shortly](https://img.shields.io/github/repo-size/nascimentoliveira/shortly?color=007ec6&style=flat-square)
![files - shortly](https://img.shields.io/github/directory-file-count/nascimentoliveira/shortly?color=007ec6&style=flat-square)
![language - shortly](https://img.shields.io/github/languages/top/nascimentoliveira/shortly?color=007ec6&style=flat-square)
![stars - shortly](https://img.shields.io/github/stars/nascimentoliveira/shortly?color=007ec6&style=flat-square)
![forks - shortly](https://img.shields.io/github/forks/nascimentoliveira/shortly?color=007ec6&style=flat-square)

# Shortly

Shortly é uma aplicação web inovadora que oferece um serviço de encurtamento de links eficiente e intuitivo. Com o Shortly, os usuários podem transformar URLs longas em links curtos, tornando mais fácil e conveniente compartilhar conteúdo na web. Além disso, a plataforma apresenta recursos adicionais, como um sistema de ranqueamento dos usuários com base na popularidade dos links compartilhados.


> O código-fonte do back-end da aplicação está hospedado no GitHub em: [Shortly Back-end](https://github.com/nascimentoliveira/shortly-api)

> Shortly atualmente pode ser experimentado em: [Shortly Live Demo](https://nascimentoliveira-shortly.vercel.app)

## Funcionalidades Principais

- **Encurtamento de Links:** Os usuários podem inserir um URL longo na plataforma e receber uma nova URL curta. Isso permite que eles criem links fáceis de lembrar e mais atraentes para compartilhamento.
- **Redirecionamento:** Quando alguém acessa um link encurtado pelo Shortly, a plataforma redireciona automaticamente para a URL original, sem a necessidade de intervenção do usuário. Isso proporciona uma experiência fluida e sem complicações para quem visita os links encurtados.
- **Estatísticas de Acesso:** Shortly registra informações sobre a quantidade de acessos que cada link recebe.
- **Ranking de Usuários:** Com o objetivo de incentivar a participação ativa e recompensar os usuários mais engajados, o Shortly apresenta um sistema de ranqueamento. Os usuários são classificados com base na popularidade dos links que compartilham, criando uma competição saudável e estimulando a criação de conteúdo relevante.

## Como Usar

1. Faça login na plataforma usando suas credenciais existentes ou crie uma nova conta rapidamente.
2. Na página principal do Shortly, encontre o campo `Links que cabem no bolso`.
3. Insira a URL longa que deseja encurtar no campo designado.
4. Clique no botão `Encurtar link` e aguarde o processamento. Em segundos, o Shortly irá gerar uma nova URL curta e personalizada.
5. Copie a nova URL encurtada e compartilhe-a facilmente em redes sociais, e-mails, mensagens ou qualquer outro meio de comunicação.
6. Utilize a página `Home` para gerenciar e acompanhar o desempenho dos seus links encurtados.
7. Verifique o ranking de usuários na página `Ranking` para descobrir sua posição e comparar seu desempenho com outros usuários ativos.

## Tecnologias Utilizadas

Shortly foi desenvolvido utilizando as seguintes tecnologias:

- Linguagem de Programação: [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference).
- Banco de Dados: [PostgreSQL](https://www.postgresql.org/about/).
- Front-end
    - [React](https://react.dev/learn): Biblioteca JavaScript de código aberto para a construção de interfaces de usuário.
    - [Axios](https://axios-http.com/ptbr/docs/intro): Biblioteca JavaScript para realizar requisições HTTP.
    - [Styled Components](https://styled-components.com/): Biblioteca para escrever estilos CSS de forma dinâmica em componentes React.
    - [React Dom](https://www.npmjs.com/package/react-dom): Biblioteca para renderização de componentes React no navegador.
    - [Sweet Alert](https://sweetalert2.github.io/): Biblioteca JavaScript para exibir belas caixas de diálogo modais.
- Back-end
    - [Node.js](https://nodejs.org/en/about): Plataforma de desenvolvimento JavaScript assíncrona baseada no motor V8 do Chrome.
    - [Express](https://expressjs.com/pt-br/): Framework web rápido e minimalista para Node.js.
    - [Dotenv](https://www.npmjs.com/package/dotenv): Pacote para carregar variáveis de ambiente a partir de um arquivo .env.
    - [Bcrypt](https://www.npmjs.com/package/bcrypt): Biblioteca para criptografia de senhas.
    - [Joi](https://joi.dev/): Biblioteca para validação de dados.
    - [Nanoid](https://www.npmjs.com/package/nanoid): Pacote para a geração de identificadores únicos e aleatórios.

Essas tecnologias foram escolhidas para proporcionar uma experiência de desenvolvimento moderna, eficiente e escalável.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu computador:  
-   Node.js (versão 14 ou superior)
-   NPM (versão 7 ou superior)

## Instalação
1. Clone o repositório do projeto:
    ```bash
    git clone https://github.com/nascimentoliveira/shortly.git
    ```
2. Acesse o diretório do projeto.
   ```bash
   cd shortly-api
   ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Configure as variáveis de ambiente:  
    Antes de executar a aplicação, é necessário configurar as variáveis de ambiente corretamente. Siga os passos abaixo:
    -  Renomeie o arquivo `.env.example` para `.env`.
        ```bash
        mv .env.example .env
        ```
    - Abra o arquivo `.env` em um editor de texto.
    - Procure a variável `APP_API_BASE_URL` e defina-a com a URL base da sua API. Exemplo:  
        ```bash
        APP_API_BASE_URL=http://localhost:8000/api
        ```
    - Verifique se existem outras variáveis de ambiente necessárias para o funcionamento da aplicação e defina-as de acordo com a sua configuração.
    - Salve o arquivo `.env`.
    
    *Certifique-se de não compartilhar o arquivo `.env` contendo informações sensíveis, como senhas, chaves de API ou tokens de acesso. Mantenha-o seguro e fora do controle de versão do seu repositório.*

    Após configurar as variáveis de ambiente, a aplicação estará pronta para ser executada.

5. Execute o projeto:
    ```bash
    npm start
    ```
6. A aplicação ficará disponível em:
    ```bash
    http://localhost:3000
    ```
## Contribuição

Se você deseja contribuir para o projeto, siga os passos abaixo:

1. Faça um `fork` do repositório.
2. Crie uma nova `branch` com a sua contribuição: 
    ```bash
    git checkout -b <sua-contribuicao>
    ```
3. Faça as suas modificações  no código.
4. Faça `commit` das suas alterações:
    ```bash
    git commit -m "Sua contribuição"
    ```
5. Envie as alterações para o repositório remoto: .
    ```bash
    git push origin <sua-contribuicao>
    ```
6. Abra um `pull request` no repositório original, descrevendo as modificações realizadas.

Se te ajudei de alguma forma, ficarei feliz em saber. Se possível:  
⭐️ dê uma estrela para este projeto; e   
🪲 Encontre e relate `issues`

## Licença

Este projeto é licenciado sob a licença [MIT](https://choosealicense.com/licenses/mit/). Consulte o arquivo LICENSE para obter mais informações.

Disponibilizado por [Thiago Oliveira](https://www.linkedin.com/in/nascimentoliveira/).
