beforeEach(() => {
  cy.viewport('iphone-7');
  cy.visit('http://localhost:5173/');
});

describe('BASIC NAVIGATION', () => {
  describe('Top level navigation:', () => {
    it('can access the home page and has the mainmenus available', () => {
      cy.get('#meals-link').should('be.visible');
      cy.get('#restaurants-link').should('be.visible');
      cy.get('#planner-link').should('be.visible');
    });
    it('can access each mainmenu from the homepage', () => {
      cy.get('#meals-link').should('be.visible').click();
      cy.url().should('eq', 'http://localhost:5173/meals');
      cy.contains('All Meals').should('be.visible');
      cy.get('#home-button').should('be.visible').click();
      cy.get('#restaurants-link').should('be.visible').click();
      cy.url().should('eq', 'http://localhost:5173/restaurants');
      cy.contains('All Restaurants').should('be.visible');
      cy.get('#home-button').should('be.visible').click();
      cy.get('#planner-link').should('be.visible').click();
      cy.url().should('include', 'http://localhost:5173/planner');
      cy.contains('Calendar').should('be.visible');
    });
    it('can access the each mainmenu from the other mainmenus', () => {
      // access planner page
      cy.get('#planner-link').click();
      // check all options available and access meals page
      cy.wait(300);
      cy.get('#planner-link').click();
      cy.get('#restaurants-link').should('be.visible');
      cy.get('#meals-link').should('be.visible').click();
      cy.url().should('eq', 'http://localhost:5173/meals');
      cy.contains('All Meals').should('be.visible');
      // check all options available and access restaurants page
      cy.wait(300);
      cy.get('#meals-link').should('be.visible').click();
      cy.get('#planner-link').should('be.visible');
      cy.get('#restaurants-link').should('be.visible').click();
      cy.url().should('eq', 'http://localhost:5173/restaurants');
      cy.contains('All Restaurants').should('be.visible');
      // check all options available and access planner page
      cy.wait(300);
      cy.get('#restaurants-link').should('be.visible').click();
      cy.get('#planner-link').should('be.visible');
      cy.get('#meals-link').should('be.visible');
      cy.get('#planner-link').should('be.visible').click();
      cy.url().should('include', 'http://localhost:5173/planner');
      cy.contains('Calendar').should('be.visible');
    });
  });

  describe('Submenu Navigation:', () => {
    it('can access all the planner submenus', () => {
      cy.get('#planner-link').click();
      cy.get('#calendar-link').should('be.visible').click();
      cy.url().should('include', 'http://localhost:5173/planner');
      cy.get('#shopping-link').should('be.visible').click();
      cy.url().should('eq', 'http://localhost:5173/planner/shopping');
      cy.get('#notes-link').should('be.visible').click();
      cy.url().should('eq', 'http://localhost:5173/planner/notes');
    });
    it('can access all the meals submenus', () => {
      cy.get('#meals-link').click();
      cy.get('#overview-link').should('be.visible').click();
      cy.url().should('eq', 'http://localhost:5173/meals');
      cy.get('#search-link').should('be.visible').click();
      cy.url().should('eq', 'http://localhost:5173/meals/search');
      cy.get('#add-link').should('be.visible').click();
      cy.url().should('eq', 'http://localhost:5173/meals/add-new');
    });
    it('can access all the restaurant submenus', () => {
      cy.get('#restaurants-link').click();
      cy.get('#overview-link').should('be.visible').click();
      cy.url().should('eq', 'http://localhost:5173/restaurants');
      cy.get('#search-link').should('be.visible').click();
      cy.url().should('eq', 'http://localhost:5173/restaurants/search');
      cy.get('#add-link').should('be.visible').click();
      cy.url().should('eq', 'http://localhost:5173/restaurants/add-new');
    });
  });
});

// describe('MEAL', () => {
//   describe('Basic Model Interactions:', () => {
//     it('can create new meals', () => {
//       cy.visit('http://localhost:5173/restaurants/add-new')
//     });
//     it('', () => {});
//     it('', () => {});
//     it('', () => {});
//     it('', () => {});
//   });
// });
// describe('', ()=>{
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
// })
// describe('', ()=>{
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
// })
// describe('', ()=>{
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
// })
// describe('', ()=>{
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
// })
// describe('', ()=>{
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
//   it('',()=>{

//   })
// })
