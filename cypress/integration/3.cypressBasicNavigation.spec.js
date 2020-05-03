/// <reference types="cypress" />

describe('Cypress basic', () => {
  it('Should visit a page and assert title', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
    cy.title().should('be.equal', 'Campo de Treinamento');

    cy.title()
      .should('be.equal', 'Campo de Treinamento')
      .and('have.length', 20);
  });

  it('Should find and interact with an element', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
    cy.get('#buttonSimple').should('have.value', 'Clique Me!');
    cy.get('#buttonSimple').click().should('have.value', 'Obrigado!');
  });
});
