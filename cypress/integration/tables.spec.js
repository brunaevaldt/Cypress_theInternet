/// <reference types="cypress" />

let tableId = "#table1";
let emailClassLocator = ".email";

let email = "jsmith@gmail.com"; 

describe('Tables features', function () {
    beforeEach(function () {
        cy.visit('/tables');
    });

   it('Edits table without classes', function () {
        cy.findTableRowByText(tableId, email)
            .contains('edit').click();

        cy.url().should('contain', "edit");
    });

     it('Edits table with classes', function(){
         cy.findElementBySelectorAndText(emailClassLocator, email)
         .contains('edit').click();

         cy.url().should('contain', "edit");
     });


});
