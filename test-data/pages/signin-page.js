import "cypress-xpath";
/// <reference types="Cypress"/>

export class SigninPage{

    static get getHeading(){
        return cy.xpath(`//h1`)
        .should('have.text', "Sign In")
        .should('be.visible');
    }

    static get getInputUsernameHelpertext(){
        return cy.xpath(`//p[@id='username-helper-text']`)
        ;

    }

    static get getInputPasswordHelpertext(){
        return cy.xpath(`//p[@id='password-helper-text']`)
        ;

    }

    static get getRememberMeText(){
        return cy.xpath(`//span[@data-test='signin-remember-me']/../span[2]`)
        .should('have.text', "Rememeber me")
        .should('be.visible');
    }

    static get getRememberMeCheckbox(){
        return cy.xpath(`//span[@data-test='signin-remember-me']//span/input`)
        .should('be.visible');
    }

    static get getSigninButton(){
        return cy.xpath(`//form//button[@data-test='signin-submit']`).
        should('have.text', "Sign In")
        .should('be.visible');
    }

    static get getNOSigninButton(){
        return cy.xpath(`//form//button[@data-test='signin-submit']`).
        should('have.text', "Sign In")
        .should('not.be.visible');
    }

    static get getSignUpLink(){
        return cy.xpath(`//form//a[@data-test='signup']`)
        .should('have.text', "Don't have an account? Sign Up")
        .should('be.visible');
    }

    static get getCypressText(){
        return cy.xpath(`//*[@id="root"]/div/main/div[2]/div/p/text()`)
        .should('have.text', "Built by")
        .should('be.visible');
    }

    static get getCypressLogo(){
        return cy.xpath(`(//div//a)[2]`)
        .should('be.visible')
    }

    static get getAppLogo(){
        return cy.xpath(`//div[@class='makeStyles-paper-2']/div`)
        .should('be.visible');
    }
    
    static get getUsernameOrPasswordIsInvalid(){
        return cy.xpath(`//div[@class='MuiAlert-message']`);
    }
}

export const signinPage=new SigninPage();