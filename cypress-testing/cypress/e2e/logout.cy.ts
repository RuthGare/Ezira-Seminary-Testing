describe('User Logout', () => {
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

  it('should log out the user', () => {
    // Click on the user profile element
    cy.get('div.text-xs.xl\\:text-lg.font-medium.text-white.tracking-wide').click();
    
    // Click the logout button
    cy.get('button.logout').click();

    // Ensure redirection to the login page
    cy.url().should('eq', 'https://ezraseminary.org/login');
    
   
  });
});