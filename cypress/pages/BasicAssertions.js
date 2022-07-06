/// <reference types="cypress" />

export default class BasicAssertions {
  static AssertUrl(UrlAssert) {
    cy.url().should("equal", UrlAssert);
  }

  static ResponseCodeAssertion(Url, responseCode) {
    cy.request(Url).should((Response) => {
      expect(Response.status).to.eq(responseCode);
    });
  }

  static ShouldNotResponseAssertion(Url, NotResponseCode) {
    cy.request(Url).should((Response) => {
      expect(Response.status).to.not.eq(NotResponseCode);
    });
  }

  static elementVisible(element) {
    cy.get(element).should("be.visible");
  }

  static getText(element, elementText) {
    cy.get(element)
      .invoke("text")
      .then((text1) => {
        expect(text1).to.eq(elementText);
      });
  }

  static containText(element, elementText) {
    cy.get(element)
      .invoke("text")
      .should('contain.text', elementText)
  }

  static attributeValidation(element, hrefElement) {
    cy.get(element)
      .scrollIntoView()
      .should(($element) => {
        const message = $element.parent().parent().text();
        expect($element, message).to.have.attr("href", hrefElement);
      });
  }

  static conditionalSteps(){
    if (condition) {
      
    } else {
      
    }
  }

  
}
