it('counts down a timer from 25 minutes to 0 minutes', () => {
  cy.clock()
  cy.visit('index.html')

  cy.get('#time-left').should('have.text', '25:00')
  expectSoundToBePlaying(false);

  cy.tick(1000)
  cy.get('#time-left').should('have.text', '24:59')
  expectSoundToBePlaying(false);

  cy.tick(24 * 60 * 1000)
  cy.get('#time-left').should('have.text', '0:59')
  expectSoundToBePlaying(false);

  cy.tick(59 * 1000)
  cy.get('#time-left').should('have.text', '0:00')
  expectSoundToBePlaying(true);

  cy.tick(2 * 1000)
  cy.get('#time-left').should('have.text', '0:00')
  expectSoundToBePlaying(false);
});

function expectSoundToBePlaying(shouldBePlaying) {
  // TODO: why does this version not work?
  // cy.get('audio').should('have.property', 'paused', !shouldBePlaying);
  cy.get('audio').should(($el) => {
    expect($el).to.have.length(1);
    $el.each((index, actualTag) => {
      expect(actualTag).to.have.property('paused', !shouldBePlaying);
    })
  });
}
