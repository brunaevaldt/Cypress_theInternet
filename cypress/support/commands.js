
Cypress.Commands.add("loginThroughUI", (username, password) => { 
    if(username!==""){
        cy.get("#username").type(username);
        }
        
        if(password!==""){
          cy.get("#password").type(password);
        }
        cy.get("#login").submit(); 
 });



 Cypress.Commands.add('findTableRowByText',(tableid, text)=>{
    cy.contains(`${tableid} > tbody > tr > td`, text)  // gives you the cell 
    .siblings()                                   // gives you all the other cells in the row
 })


 Cypress.Commands.add('findElementBySelectorAndText',(selector, text)=>{
   cy.get(`${selector}`).contains(text).siblings();
    
 })

 Cypress.Commands.add('elementShouldHaveClassAndText', (elementSelector, cssClass, text)=>{
    cy.get(elementSelector).should('have.class', cssClass).and('contain', text);
 })
 
 
