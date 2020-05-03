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
