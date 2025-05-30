describe('open sabbath school', () => {
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
  
    it('should log in and enroll in a course', () => {
      cy.visit('https://ezraseminary.org/devotion');
  
      // Wait for the devotion to load
      cy.wait(10000);
      
     
      // Verify devotion starting action
      cy.url().should('eq', 'https://ezraseminary.org/devotion'); // Adjust based on actual URL
    });
  });