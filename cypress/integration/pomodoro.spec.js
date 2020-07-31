it('renders a 25 minute timer', () => {
  cy.visit('index.html')
  cy.contains('25:00')
});