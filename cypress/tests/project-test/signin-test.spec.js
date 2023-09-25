import { textData,users } from "../../../test-data/data/testdata";
import { generalPage,GeneralPage } from "../../../test-data/pages/generalpage";
import { signinPage,SigninPage } from "../../../test-data/pages/signin-page";
import { signinStep } from "../../../test-data/steps/signin-step";
const userWithvalidData=users[0];
const userwithInvalidUsername=users[1];
const userwithInvalidPassword=users[2];


describe('Testing the Sign In Page', () => {

  beforeEach(() => {
    signinStep.visit();
  })

  it('Testing the Cypress link', () => {
    signinStep.testCypressLink();
  })

  it('Testing the signup link', () => {
    signinStep.testSignupLink();
  })

  it('Testing the sign in function without remembering a user via GUI', () => {
    signinStep.signInWithoutRememberingAUser(userWithvalidData);
  })

  it(`Testing the sign in function with remembering a user via GUI`, () => {
    signinStep.signInWithRememberingAUser(userWithvalidData);
  })

  it(`Logging in with empty username field `, () => {
    signinStep.sendFormWith1EmptyField(userwithInvalidUsername);
  })

  it(`Logging in with empty password field `, () => {
    signinStep.sendFormWith1EmptyField(userwithInvalidPassword);
  })

  it('Testing the sign in function with form with all empty fields', () => {
    signinStep.sendTheformWithEmptyFields();
  })

  it('Logging in with random credentials as an unregistered user', () => {
    signinStep.logInWithRandomCredentials();
  })

  it('Logging in with password credentials that are less than 4 characters', () => {
    signinStep.generateRandomShortPassword();
  })

  it('Signing in using API - check the status code', () => {
    const username = 'Katharina_Bernier';
    cy.loginViaAPI(username);
     })
    })

  