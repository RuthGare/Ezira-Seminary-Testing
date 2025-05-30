describe('Template Spec', () => {
  beforeEach(() => {
    // Prevent Cypress from failing the test on uncaught exceptions
    Cypress.on('uncaught:exception', (err: Error, runnable: Mocha.Runnable) => {
      // Log the error for debugging purposes
      return false; // Prevent failure
    });
  });

  it('loads the homepage', () => {
    cy.visit('https://ezraseminary.org/');
    cy.wait(2000); // Wait for page to load
    cy.url().should('include', 'ezraseminary.org'); // Verify the URL
  });
});