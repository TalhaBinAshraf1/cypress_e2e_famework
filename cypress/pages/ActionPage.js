/// <reference types="cypress" />

export default class ActionPage {
  static clickOnElement(element) {
    cy.get(element).click();
  }

  static showSubMenu(element, elementByText) {
    cy.get(element).realHover("mouseover")
    return cy.contains(elementByText).should("be.visible")
  }
}
