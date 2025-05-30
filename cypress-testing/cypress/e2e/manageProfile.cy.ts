describe('User Profile Management', () => {
  beforeEach(() => {
    // Handle uncaught exceptions
    Cypress.on('uncaught:exception', (err) => {
      return false; // Prevent Cypress from failing the test
    });

    // Visit the login page
    cy.visit('https://ezraseminary.org/login');

    // Log in
    cy.get('input[name="email"]').type("reguyefbvhb@example.com");
    cy.get('input[name="password"]').type("SecurePassword123!");
    cy.get('button[type="submit"]').click();

    // Ensure redirection after login
    cy.url().should('eq', 'https://ezraseminary.org/');
  });

  it('should allow users to update personal information and change their password', () => {
    // Navigate to user profile
    cy.get('div.text-xs.xl\\:text-lg.font-medium.text-white.tracking-wide').click();
    cy.get('a[href="/profile"]').click();

    // Ensure we are on the profile page
    cy.url().should('eq', 'https://ezraseminary.org/profile');

    // Navigate to account settings
    cy.get('a[href="profile/settings"]').click();

    // Ensure we are on the account settings page
    cy.url().should('eq', 'https://ezraseminary.org/profile/settings');

    // Update personal information
    cy.get('input[type="email"]').clear();
    
    // Change email and password
    cy.get('input[type="email"]').type('NewPassword@gmail.com');

    // Submit the changes
    cy.get('button[type="submit"]').click();

    // Assert success message or redirection after update (adjust based on actual application behavior)
    
  });
});