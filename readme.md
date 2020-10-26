# Anotações Cypress

## Links
- https://www.cypress.io/
- https://docs.cypress.io/guides/getting-started/installing-cypress.html
- https://github.com/bahmutov/cypress-angular-unit-test/blob/master/cypress/integration/spec.ts
- https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html

## Bibliotecas
- Cypress usa o mocha e chai por trás
- Para ajudar com a tipagem, é possível usar uma diretiva de barras triplas do typescript no inicio do arquivo:

```js
/// <reference types="cypress" />
```

## Métodos .skip e .only
- Posso marcar testes para serem ignorados com describe.skip e it.skip ou xdescribe e xit
- Para executar apenas um teste, posse usar o describe.only e it.only mas nao tenho a opção de fdescribe e fit como no jasmine.
- Tambem não é possível usar .only em dois testes pois o unico que será executado será o ultimo encontrado com o método .only

## Assertions
- A função expect também pode receber um segunto argumento para descrever a mensagem de erro:

```js
it('should sum 1 + 1', () => {
  expect(1 + 1, 'deveria ser 2').equals(3);
});
```

# Navegação em página com Cypress
- A execução do cypress é assincrona baseada em asserções por string ou callbacks.
- Para navegar até uma página com cypress, usa se o método `cy.visit()` informando uma url.

```js
cy.visit('https://wcaquino.me/cypress/componentes.html');
```

- As invocações no cypress devolvem um objeto do tipo `$Chainer` que podem ser encadeados para invocar outros métodos.
- As asserções com o cypres podem ser feitas utilizando strings como argumentos do método should ou um callback com asserções comuns do chai.

```js
cy.title().should('contain', 'qualquer coisa');

cy.get('input').should(([element]) => {
  expect(element.tagName).to.be.equal('INPUT');
});
```

- Com a janela do cypress aberta, é possivel usar o botão com o ícone de uma mira para selecionar elementos: Botâo (Open selector Playground)
- Quando não se sabe o que está procurando, é possível usar o método debug e o Cypress vai pausar a execução com debugger logar no console algumas informações. Também existe o comando pause para pausar a execução do teste até que eu clique no botão next da janela do cypress no navegador.
- Para procurar por elementos na página é possível usar o metodo `cy.get()` passando como argumento um seletor JQuery para busca. Também é possivel usar o `cy.contains()` passando como argumento um texto do elemento para busca.  

```js
cy.title().debug();
cy.title().pause();
```

- Exemplo

```js
it('Should visit a page, assert title and interact to button', () => {
  cy.visit('https://wcaquino.me/cypress/componentes.html');
  cy.title().should('be.equal', 'Campo de Treinamento').and('have.length', 20);

  cy.get('#buttonSimple').should('have.value', 'Clique Me!');
  cy.get('#buttonSimple').should(([button]) => expect(button).to.have.value('Clique Me!'));
  cy.contains('Clique Me!').click().should('have.value', 'Obrigado!');
});
```


- npm script para rodar teste unico gravando video
`"e2e": "cypress run --config-file=./cypress.json --spec=./cypress/integration/boletoSimples.spec.js -- --record"`