describe("Login Functionality", () => {
  // Turn off uncaught exception handling for this test suite
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  it('should display error for incorrect email', () => {
    cy.visit('https://ezraseminary.org/login');
    cy.get('input[name="email"]').type('wronguser@example.com'); // Invalid email
    cy.get('input[name="password"]').type('SecurePassword123!');
    cy.get('button[type="submit"]').click();

    // Verify that the error message is displayed
    cy.contains('Invalid email or password. Please try again').should('be.visible');
  });

  it('should display error for incorrect password', () => {
    cy.visit('https://ezraseminary.org/login');
    cy.get('input[name="email"]').type('testuser@example.com'); // Valid email
    cy.get('input[name="password"]').type('WrongPassword!'); // Invalid password
    cy.get('button[type="submit"]').click();

    // Verify that the error message is displayed
    cy.contains('Invalid email or password. Please try again').should('be.visible');
  });

  it('should display error for empty credentials', () => {
    cy.visit('https://ezraseminary.org/login');
    cy.get('button[type="submit"]').click();

    // Verify that error messages for empty fields are displayed
    cy.contains('Email is required').should('be.visible'); // Adjust if necessary
    cy.contains('Password is required').should('be.visible'); // Adjust if necessary
  });

  it('should display error for invalid email format', () => {
    cy.visit('https://ezraseminary.org/login');
    cy.get('input[name="email"]').type('invalid-email-format');
    cy.get('input[name="password"]').type('SecurePassword123!');
    cy.get('button[type="submit"]').click();

    // Verify that an error message for invalid email format is displayed
    cy.contains('Invalid email').should('be.visible');
  });

  it("should successfully login with valid credentials", () => {
    cy.visit("https://ezraseminary.org/login/");
    cy.get('input[name="email"]').type("ruth@gmail.com");
    cy.get('input[name="password"]').type("Ruth@1234");
    cy.get('button[type="submit"]').click();
  });
});