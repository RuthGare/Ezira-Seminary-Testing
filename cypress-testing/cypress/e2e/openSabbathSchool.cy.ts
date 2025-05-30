describe('Open Sabbath School', () => {
  beforeEach(() => {
    // Handle uncaught exceptions
    Cypress.on('uncaught:exception', (err) => {
      return false; // Prevent Cypress from failing the test
    });

    // Visit the login page
    cy.visit('https://ezraseminary.org/login');

    // Log in
    cy.get('input[name="email"]').type("ruth@gmail.com");
    cy.get('input[name="password"]').type("Ruth@1234");
    cy.get('button[type="submit"]').click();

    // Ensure redirection after login
    cy.url().should('eq', 'https://ezraseminary.org/');
  });

  it('should log in and open the Sabbath School lesson', () => {
    cy.visit('https://ezraseminary.org/sabbathSchool');

    // Wait for the Sabbath School to load
    cy.wait(10000);

    // Check if the element is visible before clicking
    cy.get('a[href="/sabbathSchool/2025-02/lessons/07"]')
      .should('be.visible') // Assert the element is visible
      .contains('ትምህርቱን ክፈት') // Ensure the text matches
      .click();

    // Verify course starting action
    cy.url().should('eq', 'https://ezraseminary.org/sabbathSchool/2025-02/lessons/07/days/01/read'); // Adjust based on actual URL
  });
});