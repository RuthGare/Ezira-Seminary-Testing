describe('User Registration', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err) => {
      return false; // Prevent failure on uncaught exceptions
    });
  });

  it('should verify user registration with valid credentials and automatic login', () => {
    // Visit the registration page
    cy.visit('https://ezraseminary.org/signup');

    // Enter first name
    cy.get('input[name="firstName"]').type('test');

    // Enter last name
    cy.get('input[name="lastName"]').type('user');

    // Enter a valid email address
    cy.get('input[name="email"]').type('demo@example.com');

    // Enter a valid password
    cy.get('input[name="password"]').type('SecurePassword123!');

    // Confirm the password
    cy.get('input[name="confirmPassword"]').type('SecurePassword123!');

    // Submit the registration form
    cy.get('button[type="submit"]').click();
    cy.wait(10000); // Wait for the registration process to complete

    // Verify redirection to the home page
    cy.url().should('eq', 'https://ezraseminary.org/');
  });

  it('should denied access for existing email', () => {
    // Visit the registration page
    cy.visit('https://ezraseminary.org/signup');

    // Enter first name
    cy.get('input[name="firstName"]').type('test');

    // Enter last name
    cy.get('input[name="lastName"]').type('user');

    // Enter an existing email address
    cy.get('input[name="email"]').type('hhhvhv@example.com');

    // Enter a valid password
    cy.get('input[name="password"]').type('SecurePassword123!');

    // Confirm the password
    cy.get('input[name="confirmPassword"]').type('SecurePassword123!');

    // Submit the registration form
    cy.get('button[type="submit"]').click();

    // Verify that the URL is still the same (registration failed)
    cy.url().should('eq', 'https://ezraseminary.org/signup');
    
  });

  it('should display error for existing email', () => {
    // Visit the registration page
    cy.visit('https://ezraseminary.org/signup');

    // Enter first name
    cy.get('input[name="firstName"]').type('test');

    // Enter last name
    cy.get('input[name="lastName"]').type('user');

    // Enter an existing email address
    cy.get('input[name="email"]').type('hhhvhv@example.com');

    // Enter a valid password
    cy.get('input[name="password"]').type('SecurePassword123!');

    // Confirm the password
    cy.get('input[name="confirmPassword"]').type('SecurePassword123!');

    // Submit the registration form
    cy.get('button[type="submit"]').click();

    // Verify that the URL is still the same (registration failed)
    cy.url().should('eq', 'https://ezraseminary.org/signup');

    // Verify error message is displayed
    cy.contains('Email already in use').should('be.visible'); // Adjust based on actual error message
  });
});