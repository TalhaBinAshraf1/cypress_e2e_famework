/// <reference types="cypress" />
import HomePageActions from '../../pages/HomePage';
import BasicAssertion from '../../pages/BasicAssertions';
import homePageLocators from '../../locators/HomePageLocators';
import actions from '../../pages/ActionPage';
import data from '../../support/data';

describe('HomePage Validation', () => {
  it('Navigating to the webpage', () => {
    HomePageActions.HomePageVisiting(Cypress.env('AutomationPracticeUrl'));
    BasicAssertion.AssertUrl(Cypress.env('AutomationPracticeUrl'));
    cy.StatusCodeAssertion(Cypress.env('AutomationPracticeUrl'), 200, 404);
    BasicAssertion.elementVisible(homePageLocators.HomePageLogo);
    HomePageActions.signInButton(homePageLocators.SignInButton, 'login');
    BasicAssertion.getText(homePageLocators.WomenMenu, 'Women');
  });

  it('Validating Menus On Home Page', () => {
    BasicAssertion.getText(homePageLocators.WomenMenu, 'Women');
    BasicAssertion.getText(homePageLocators.DressesMenu, 'Dresses');
    BasicAssertion.getText(homePageLocators.TShirtMenu, 'T-shirts');
    actions.showSubMenu(homePageLocators.WomenMenu, 'Tops');
    actions.showSubMenu(homePageLocators.WomenMenu, 'Dresses');
    actions.showSubMenu(homePageLocators.DressesMenu, 'Casual Dresses');
    actions.showSubMenu(homePageLocators.DressesMenu, 'Evening Dresses');
    actions.showSubMenu(homePageLocators.DressesMenu, 'Summer Dresses');
  });

  it('Validating Status Response for Menus', () => {
    BasicAssertion.attributeValidation(
      homePageLocators.WomenMenu,
      data.womenMenuHref,
    );
  });
});
