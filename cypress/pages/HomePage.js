/// <reference types="cypress" />

export default class HomePage {
  static HomePageVisiting(url) {
    cy.visit(url);
  }

  static signInButton(element, className) {
    cy.get(element)
      .should("be.visible", { setTimeout: 4000 })
      .should("have.class", className);
  }
}
