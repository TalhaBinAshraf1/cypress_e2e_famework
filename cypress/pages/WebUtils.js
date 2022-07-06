/// <reference types="cypress" />

export default class WebUtils {
  static sleep(second) {
    try {
      cy.wait(second * 1000);
    } catch (err) {
      cy.log("Issue on " + err);
    }
  }
}
