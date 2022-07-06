/// <reference types="cypress" />

describe('', () => {
    before(() => {
        cy.viewport("samsung-s10")
    });
    it('', () => {
        cy.visitMobile(Cypress.env('AutomationExerciseUrl'))
    });
});