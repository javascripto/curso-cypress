/// <reference types="cypress" />

describe('testing basic elements', () => {
  it('Text', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
    cy.get('.facilAchar').should('contain', 'Cuidado');
    cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...');
  });

  it('Link', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');
    cy.contains('Voltar').should('have.text', 'Voltar').click();
    cy.get('#resultado').should('have.text', 'Voltou!');

    cy.reload();
    cy.get('#resultado').should('not.have.text', 'Voltou!');
  });

  it('should assert values with strings and callback', () => {
    cy.visit('https://wcaquino.me/cypress/componentes.html');

    cy.get('#buttonSimple').should('have.value', 'Clique Me!');
    cy.get('#buttonSimple').should(([button]) => expect(button).to.have.value('Clique Me!'));
  });
});
