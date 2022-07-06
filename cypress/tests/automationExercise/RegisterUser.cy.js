/// <reference types="cypress" />
import HomePageActions from '../../pages/HomePage';
import BasicAssertion from '../../pages/BasicAssertions';
import aeLocators from '../../AutomationExercise/locators';
import urls from '../../AutomationExercise/pages/URLPage';

describe('Register User ', () => {
  it('Navigating to the Website', () => {
    HomePageActions.HomePageVisiting(Cypress.env('AutomationExerciseUrl'));
    BasicAssertion.AssertUrl(Cypress.env('AutomationExerciseUrl'));
    cy.StatusCodeAssertion(Cypress.env('AutomationExerciseUrl'), 200, 404);
    BasicAssertion.elementVisible(aeLocators.homePageSlider);
  });

  it('Navigating to the Login/Sign Up Page', () => {
    cy.conditionalSteps(aeLocators.SignUpButton);
    cy.StatusCodeAssertion(urls.loginPAgeURL, 200, 404);
  });

  /**  Test Steps
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
     */
});
