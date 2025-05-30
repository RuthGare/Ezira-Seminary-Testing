describe('Course Enrollment', () => {
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
    cy.visit('https://ezraseminary.org/courses');

    // Wait for the courses to load
    cy.wait(10000);

    // Select and click the enroll button for the specific course
    cy.get('button[class="mt-2"]').first().click(); // Click the first "Enroll" button

    // Verify enrollment action
    cy.url().should('eq', 'https://ezraseminary.org/courses/get/681f5ce0bea357400fbf9b7c'); // Adjust based on actual URL

    // Wait for the enrollment confirmation to load
    cy.wait(10000);
    
    // Click the "Start Course" button using the anchor tag
    cy.get('a[href="/courses/get/681f5ce0bea357400fbf9b7c/chapter/681f5ce0bea357400fbf9b7d"]')
      .contains('ትምህርቱን ጀምር') // Ensure the text matches
      .click();

    // Verify course starting action
    cy.url().should('eq', 'https://ezraseminary.org/courses/get/681f5ce0bea357400fbf9b7c/chapter/681f5ce0bea357400fbf9b7d'); // Adjust based on actual URL
  });
}); 