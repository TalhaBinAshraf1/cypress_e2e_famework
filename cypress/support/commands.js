require('@4tw/cypress-drag-drop');
import 'cypress-fill-command';
import '@testing-library/cypress/add-commands';
import '@shelex/cypress-allure-plugin';

import BasicAssertion from '../pages/BasicAssertions';
import actions from '../pages/ActionPage';
import HomePageActions from '../pages/HomePage';
import webUtils from '../pages/WebUtils';

Cypress.Commands.add(
  'StatusCodeAssertion',
  (PageUrl, PositiveAssert, NegativeAssert) => {
    BasicAssertion.ResponseCodeAssertion(PageUrl, PositiveAssert);
    BasicAssertion.ShouldNotResponseAssertion(PageUrl, NegativeAssert);
  },
);

Cypress.Commands.add('conditionalSteps', (element, elementText) => {
  if (cy.get(element).should('be.visible')) {
    actions.clickOnElement(element);
  } else {
    cy.log('check issue');
  }
});
