// below env variable and baseUrl for all requests coming from .cypress.config.ts

const local = Cypress.env('localHostAppl');

beforeEach(() => {
  cy.visit('');
});

console.log(local)

const bUrl = Cypress.config().baseUrl;
const testName = 'Test' + String(Date.now());

describe('BASIC NAVIGATION', () => {
  describe('Top level navigation:', () => {
    it('can access the home page and has the main menus available', () => {
      local && cy.wait(300);
      cy.get('#meals-link').should('be.visible');
      cy.get('#restaurants-link').should('be.visible');
      cy.get('#planner-link').should('be.visible');
    });
    it('can access each main menu from the homepage', () => {
      local && cy.wait(300);
      cy.get('#meals-link').should('be.visible').click();
      cy.url().should('eq', `${bUrl}/meals`);
      cy.contains('All Meals').should('be.visible');
      cy.get('#home-button').should('be.visible').click();
      cy.get('#restaurants-link').should('be.visible').click();
      cy.url().should('eq', `${bUrl}/restaurants`);
      cy.contains('All Restaurants').should('be.visible');
      cy.get('#home-button').should('be.visible').click();
      cy.get('#planner-link').should('be.visible').click();
      cy.url().should('include', `${bUrl}/planner`);
      cy.contains('Calendar').should('be.visible');
    });
    it('can access the each main menu from the other main menus', () => {
      // access planner page
      local && cy.wait(300);
      cy.get('#planner-link').click();
      // check all options available and access meals page
      local && cy.wait(300);
      cy.get('#planner-link').click();
      local && cy.wait(300);
      cy.get('#restaurants-link').should('be.visible');
      cy.get('#meals-link').should('be.visible').click();
      cy.url().should('eq', `${bUrl}/meals`);
      cy.contains('All Meals').should('be.visible');
      // check all options available and access restaurants page
      local && cy.wait(300);
      cy.get('#meals-link').should('be.visible').click();
      local && cy.wait(300);
      cy.get('#planner-link').should('be.visible');
      cy.get('#restaurants-link').should('be.visible').click();
      cy.url().should('eq', `${bUrl}/restaurants`);
      cy.contains('All Restaurants').should('be.visible');
      // check all options available and access planner page
      local && cy.wait(300);
      cy.get('#restaurants-link').should('be.visible').click();
      local && cy.wait(300);
      cy.get('#meals-link').should('be.visible');
      cy.get('#planner-link').should('be.visible').click();
      cy.url().should('include', `${bUrl}/planner`);
      cy.contains('Calendar').should('be.visible');
    });
  });

  describe('Sub menu Navigation:', () => {
    it('can access all the planner sub menus', () => {
      local && cy.wait(300);
      cy.get('#planner-link').click();
      cy.get('#calendar-link').should('be.visible').click();
      cy.url().should('include', `${bUrl}/planner`);
      cy.get('#shopping-link').should('be.visible').click();
      cy.url().should('eq', `${bUrl}/planner/shopping`);
      cy.get('#notes-link').should('be.visible').click();
      cy.url().should('eq', `${bUrl}/planner/notes`);
    });
    it('can access all the meals sub menus', () => {
      local && cy.wait(300);
      cy.get('#meals-link').click();
      cy.get('#overview-link').should('be.visible').click();
      cy.url().should('eq', `${bUrl}/meals`);
      cy.get('#search-link').should('be.visible').click();
      cy.url().should('eq', `${bUrl}/meals/search`);
      cy.get('#add-link').should('be.visible').click();
      cy.url().should('eq', `${bUrl}/meals/add-new`);
    });
    it('can access all the restaurant sub menus', () => {
      local && cy.wait(300);
      cy.get('#restaurants-link').click();
      cy.get('#overview-link').should('be.visible').click();
      cy.url().should('eq', `${bUrl}/restaurants`);
      cy.get('#search-link').should('be.visible').click();
      cy.url().should('eq', `${bUrl}/restaurants/search`);
      cy.get('#add-link').should('be.visible').click();
      cy.url().should('eq', `${bUrl}/restaurants/add-new`);
    });
  });
});

describe('MEALS:', () => {
  let newMealPath = '';
  describe('Basic Model Interactions:', () => {
    it('can create new meals', () => {
      local && cy.wait(300);
      cy.get('#meals-link').click();
      cy.get('#add-link').should('be.visible').click();
      local && cy.wait(300);
      cy.get('#name').type(testName);
      cy.get('#create').click();
      local && cy.wait(300);
      cy.location().then(($loc) => {
        newMealPath = $loc.pathname;
      });
      cy.get('#overview-link').click();
      local && cy.wait(300);
      cy.contains(testName).should('exist');
    });
    it('can edit meals (or cancel editing)', () => {
      local && cy.wait(300);
      cy.get('#meals-link').click();
      local && cy.wait(300);
      cy.contains(testName).click();
      local && cy.wait(300);
      cy.get('#edit').click();
      local && cy.wait(300);
      cy.url().should('eq', bUrl + newMealPath + '/edit');
      cy.get('#edit-cancel').click();
      local && cy.wait(300);
      cy.url().should('eq', bUrl + newMealPath);
      cy.get('#edit').click();
      local && cy.wait(300);
      cy.get('#description').type('A wonderful description.')
      cy.get('#edit-confirm').click()
      local && cy.wait(300);
      cy.url().should('eq', bUrl + newMealPath);
      cy.contains('A wonderful description.').should('exist')
    });
    it('can delete meals (or cancel deletion)', () => {
      local && cy.wait(300);
      cy.get('#meals-link').click();
      local && cy.wait(300);
      cy.contains(testName).click();
      cy.url().should('eq', bUrl + newMealPath);
      local && cy.wait(300);
      cy.get('#delete').click();
      local && cy.wait(300);
      cy.get('#delete-cancel').click();
      cy.get('#delete-confirm').should('not.exist');
      cy.url().should('eq', bUrl + newMealPath);
      local && cy.wait(300);
      cy.get('#delete').click();
      local && cy.wait(300);
      cy.get('#delete-confirm').click();
      cy.url().should('eq', `${bUrl}/meals`);
      cy.contains(testName).should('not.exist');
    });
  });
});

describe('RESTAURANTS:', () => {
  let newRestPath = '';
  describe('Basic Model Interactions:', () => {
    it('can create new restaurants', () => {
      local && cy.wait(300);
      cy.get('#restaurants-link').click();
      cy.get('#add-link').should('be.visible').click();
      local && cy.wait(300);
      cy.get('#name').type(testName);
      cy.get('#create').click();
      local && cy.wait(300);
      cy.location().then(($loc) => {
        newRestPath = $loc.pathname;
      });
      cy.get('#overview-link').click();
      local && cy.wait(300);
      cy.contains(testName).should('exist');
    });
    it('can edit restaurants (or cancel editing)', () => {
      local && cy.wait(300);
      cy.get('#restaurants-link').click();
      local && cy.wait(300);
      cy.contains(testName).click();
      local && cy.wait(300);
      cy.get('#edit').click();
      local && cy.wait(300);
      cy.url().should('eq', bUrl + newRestPath + '/edit');
      cy.get('#edit-cancel').click();
      local && cy.wait(300);
      cy.url().should('eq', bUrl + newRestPath);
      cy.get('#edit').click();
      local && cy.wait(300);
      cy.get('#description').type('A wonderful description.')
      cy.get('#edit-confirm').click()
      local && cy.wait(300);
      cy.url().should('eq', bUrl + newRestPath);
      cy.contains('A wonderful description.').should('exist')
    });
    it('can delete restaurants (or cancel deletion)', () => {
      local && cy.wait(300);
      cy.get('#restaurants-link').click();
      local && cy.wait(300);
      cy.contains(testName).click();
      cy.url().should('eq', bUrl + newRestPath);
      local && cy.wait(300);
      cy.get('#delete').click();
      local && cy.wait(300);
      cy.get('#delete-cancel').click();
      cy.get('#delete-confirm').should('not.exist');
      cy.url().should('eq', bUrl + newRestPath);
      local && cy.wait(300);
      cy.get('#delete').click();
      local && cy.wait(300);
      cy.get('#delete-confirm').click();
      cy.url().should('eq', `${bUrl}/restaurants`);
      cy.contains(testName).should('not.exist');
    });
  });
});
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
