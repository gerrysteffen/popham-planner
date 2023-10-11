describe('Top level navigation:', () => {
  it('It can access the home page and has the options available', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('Meals').should('be.visible');
    cy.contains('Restaurants').should('be.visible');
    cy.contains('Plan').should('be.visible');
  });
  it('It can access each subpage from the homepage', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('Meals').should('be.visible').click();
    cy.url().should('eq','http://localhost:5173/meals')
    cy.contains('All Meals').should('be.visible');
    cy.visit('http://localhost:5173/');
    cy.contains('Restaurants').should('be.visible').click();
    cy.url().should('eq','http://localhost:5173/restaurants')
    cy.contains('All Restaurants').should('be.visible');
    cy.visit('http://localhost:5173/');
    cy.contains('Plan').should('be.visible').click();
    cy.url().should('include','http://localhost:5173/planner')
    cy.contains('Calendar').should('be.visible');
  });
  it('It can access the each subpage from the other subpages', () => {
    // access planner page
    cy.visit('http://localhost:5173/planner');
    cy.contains('Calendar').should('be.visible');
    // chech all options available and access restaurants page
    cy.contains('Planner').should('be.visible').click();
    setTimeout(()=>{
      cy.contains('Restaurants').should('be.visible');
      cy.contains('Meals').should('be.visible').click();
      cy.contains('All Meals').should('be.visible');
      // chech all options available and access meals page
      cy.contains('Meals').should('be.visible').click();
      setTimeout(()=>{
        cy.contains('Planner').should('be.visible');
        cy.contains('Restaurants').should('be.visible').click();
        cy.contains('All Restaurants').should('be.visible');
        // chech all options available and access planner page
        cy.contains('Restaurants').should('be.visible').click();
        setTimeout(()=>{
          cy.contains('Meals').should('be.visible');
          cy.contains('Planner').should('be.visible').should('be.visible').click();
          cy.contains('Calendar').should('be.visible');
        }, 500)
      }, 500)
    }, 500)
  });
});


