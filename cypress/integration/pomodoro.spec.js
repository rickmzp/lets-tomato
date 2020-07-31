it('counts down a timer from 25 minutes to 0 minutes', () => {
  cy.clock()
  cy.visit('index.html')

  cy.get('#time-left').should('have.text', '25:00')

  cy.tick(1000)
  cy.get('#time-left').should('have.text', '24:59')

  cy.tick(24 * 60 * 1000)
  cy.get('#time-left').should('have.text', '0:59')

  cy.tick(59 * 1000)
  cy.get('#time-left').should('have.text', '0:00')

  cy.tick(1000)
  cy.get('#time-left').should('have.text', '0:00')
});
