# Requisitos da dinâmica

## 1. Crie as rotas necessárias para a aplicação
Você deve utilizar o `BrowserRouter` pra criar as rotas da sua aplicação e cada rota deverá renderizar um componente específico. Crie cada componente dentro da pasta `src/pages`, conforme o indicado abaixo:

- a rota `/` deve renderizar um componente chamado `Home`;

- a rota `/history` deve renderizar um componente chamado `History`;

- a rota `/search/:searchTerm` deve renderizar um componente chamado `Search`.


## 2. Crie um componente de navbar
Crie um componente chamado `Nav`, dentro da pasta `src/components`.

  * Crie esse componente com a tag `nav` envolvendo todo seu conteúdo;

  * Renderize o componente de navbar nas páginas das rotas `/`, `/history`, `/search/:searchTerm`;

  * Deve possuir dois links, que redirecionam para as rotas `/` e `/history`.


## 3. Crie um formulário para pesquisa
Dentro do componente `Home`, que é renderizado na rota `/`, crie um formulário para que a pessoa usuária insira o conteúdo da pesquisa.

  * Você deve criar um campo para que a pessoa usuária insira sua pesquisa;

  * Crie um botão com o texto `Pesquisar`;

  * Ao clicar no botão `Pesquisar`, você deve ser redirecionado para a rota `/search/:seachTerm`, onde `searchTerm` é o termo pesquisado.


## 4. Crie uma página que renderiza o termo pesquisado
Crie o componente `Search`, que é renderizado na rota `/search/:searchTerm`.

  * Exiba o nome do termo pesquisado na tela.


## 5. Armazene um histórico dos termos pesquisados
Armazene um array dos termos pesquisados.

  * Armaze os termos pesquisados em um array, de forma que a página `History` possa resgatar esses valores.


## 6. Crie uma página que renderiza o histórico de termos pesquisados
Crie o componente `History`, que é renderizado na rota `/history`.

  * Exiba um histórico de todos os termos pesquisados na tela.

