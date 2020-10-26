/// <reference types="cypress" />

describe('Request', () => {
  it('should make a fake request', () => {
    cy.server()
    cy.route(() => ({
      method: 'GET',
      url: '**/users/1',
      response: 'fixture:userMock'
    }))
    .as('getUser')

    cy.visit('localhost:4200')
    cy.get('[data-test=request]').click()
    cy.get('[data-test=code]').should('contain', 'Fulano')
    cy.wait('@getUser')
  })
})
