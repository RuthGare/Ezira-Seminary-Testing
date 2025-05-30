describe('Course Enrollment', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // Ignore uncaught exceptions to prevent test failures
      return false;
    });
  });

  it('should log in and navigate to courses page', () => {
    // Log in
    cy.visit('https://ezraseminary.org/login');
    cy.get('input[name="email"]').type("ruth@gmail.com");
    cy.get('input[name="password"]').type("Ruth@1234");
    cy.get('button[type="submit"]').click();

    // Verify redirection to home page
    cy.url().should('eq', 'https://ezraseminary.org/');

    // Navigate to courses page
    cy.visit('https://ezraseminary.org/courses');

    // Verify that the courses page is visible
    cy.url().should('eq', 'https://ezraseminary.org/courses');
    cy.contains('Courses Available').should('be.visible'); // Adjust based on actual content
  });
});