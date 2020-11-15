/// <reference types="cypress" />

describe('Login feature', function(){
    beforeEach(function(){
        cy.visit('/login');
    });

    it('Correct credentials', function(){
        cy.loginThroughUI("tomsmith", "SuperSecretPassword!");
        cy.elementShouldHaveClassAndText('#flash', 'success', 'You logged into a secure area!')
    });

    it('Wrong credentials', function(){
        cy.loginThroughUI("wronguser", "wrongPassword!");
        cy.elementShouldHaveClassAndText('#flash', 'error', 'Your username is invalid!')
    });

    it('Correct User, no password', function(){
        cy.loginThroughUI("tomsmith", "");
        cy.elementShouldHaveClassAndText('#flash', 'error', 'Your password is invalid!')
    });

    it('No User, Correct Password', function(){
        cy.loginThroughUI("", "SuperSecretPassword!");
        cy.elementShouldHaveClassAndText('#flash', 'error', 'Your username is invalid!')
    });
})
