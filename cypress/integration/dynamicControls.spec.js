/// <reference types="cypress" />

let toggleCheckBoxButtonLocator = '#checkbox-example > button';
let checkboxLocator = "#checkbox";

let toggleInputTextButtonLocator = '#input-example > button';
let inputTextLocator = "input[type=text]";

describe('Dynamic Controls feature', function () {
    beforeEach(function () {
        cy.visit('/dynamic_controls');
    });

   it('Remove and add CheckBox', function () {
    cy.get(toggleCheckBoxButtonLocator).click();
    cy.get(checkboxLocator).should("not.exist");
   
    cy.get(toggleCheckBoxButtonLocator).click();
    cy.get(checkboxLocator).should("exist");

    });


    it('Enable, type and Disable inputtext', function () {
        cy.get(toggleInputTextButtonLocator).click();
        cy.get(inputTextLocator).should("be.enabled");

        cy.get(inputTextLocator).type("it's enabled");
        cy.get(inputTextLocator).should("have.value", "it's enabled")

        cy.get(toggleInputTextButtonLocator).click();
        cy.get(inputTextLocator).should("be.disabled");
    });
    


});
