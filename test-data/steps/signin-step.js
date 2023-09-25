import "cypress-xpath";
/// <reference types="Cypress"/>
import { textData,users,specialCharacters } from "../data/testdata";
import { GeneralStep,generalStep } from "./general-step";
import { signinPage, SigninPage } from "../pages/signin-page";
import { GeneralPage, generalPage } from "../pages/generalpage";
import faker from "@faker-js/faker";


export class SigninStep extends GeneralStep{
visit(){
    this.openSigninPage();
    cy.url().should("include", "signin");
}

    fillAndVerifySigninform(user){
   
        if(user.username){
            cy.getInputField('username').clear().type(user.username);
            cy.getInputField('username')
            .should('have.value',user.username)
        }
       if(user.password){
        cy.getInputField('password').type(user.password);
        cy.getInputField('password').should('have.value',user.password)
       }
    }

    getInputTextAboveTheField(num){
        return cy.xpath(`(//fieldset/legend/span)[${num}]`);
    }

    getInputTextAboveTheFieldUsername(){
        return this.getInputTextAboveTheField(1)
    }

    getInputTextAboveTheFieldPassword(){
        return this.getInputTextAboveTheField(2)
    }

    getLabel(label){
        return cy.xpath(`//label[@id='${label}-label']`);
    }

    getUsernameLabel(){
       return this.getLabel('username')
    }

    getPasswordLabel(){
        return   this.getLabel('password')
    }
    testCypressLink(){
        signinPage.getCypressText;
        cy.xpath(`//a[@target='_blank']`).then((response)=>{
            cy.wrap(response).invoke('removeAttr', 'target')
            .should('be.visible').click();
            generalPage.getHeadingCypress;
        } )
    }
    clickSignupLink(){
        cy.xpath(`//form//a[@data-test='signup']`)
        .should('have.text', textData.SignUpNoAccount)
        .should('be.visible').click();
    }
    testSignupLink(){
       this.clickSignupLink();
        cy.url().should('include','signup');
        signinPage.getNOSigninButton;
    }

    checkRememberMeCheckbox(){
        return cy.xpath(`//span[@data-test='signin-remember-me']//input[@type='checkbox']`)
        .check()
    }

    clickSigninButton(){
        SigninPage.getSigninButton.click();
    }

    checkHead(){
        signinPage.getHeading;
        signinPage.getAppLogo;
        cy.getLogoImage(1);
        cy.getLogoImage(2);
    }

    getRememberMeCheckbox(arg){
        return cy.xpath(`//span[@data-test='signin-remember-me']//span${arg}`)
    }

    checkCheckboxGraphics(){
        signinPage.getRememberMeText;
        this.getRememberMeCheckbox(``).should('be.not.checked');
        this.getRememberMeCheckbox(`/input`).check().should('be.checked');
    }

    checkThatSendingEmptyFormIsNotAllowed(){
        SigninPage.getInputUsernameHelpertext.should('not.exist');
        SigninPage.getSigninButton.should(($button) => {
            expect($button).not.to.contain
            .class(textData.buttonDisabledClass);
        });

        this.clickSigninButton();

        SigninPage.getSigninButton.should(($button) => {
            // Used jQuery to check if the 'disabled' attribute exists
            expect($button).to.contain
            .class(textData.buttonDisabledClass);
          });
          SigninPage.getInputUsernameHelpertext.should('be.visible')
          .should('have.text', textData.UsernameIsRequired);
          this.getInputTextAboveTheFieldPassword()
          .should('not.be.visible');
          cy.getInputField('password').click().then(()=>{
              this.getInputTextAboveTheFieldPassword()
              .invoke('css', 'visibility', 'visible')
              .should('be.visible');

          })
    }

sendTheformWithEmptyFields(){
    this.checkHead();
this.checkFormGraphics();
    this.checkThatSendingEmptyFormIsNotAllowed();
    this.checkCheckboxGraphics();
}

    checkFormGraphics(){
       
        this.getUsernameLabel().should('be.visible');
        cy.getInputField('username');
        this.getInputTextAboveTheFieldUsername();
        cy.getInputField('password').should('be.visible');
        this.getPasswordLabel().should('be.visible');
       
    }
    sendFormWith1EmptyField(user){
        signinStep.fillAndVerifySigninform(user);
        SigninPage.getSigninButton.should(($button) => {
            expect($button).to.contain
            .class(textData.buttonDisabledClass);
           
          });
        signinPage.getHeading;
        if(user.username==undefined){
            SigninPage.getInputUsernameHelpertext
            .should('be.visible')
            .should('have.text', textData.UsernameIsRequired);
        }
      
}
    logInWithRandomCredentials(){
        SigninPage.getUsernameOrPasswordIsInvalid
        .should('not.exist');
          let randomString=cy.generateARandomString().then((randomString)=>{
            cy.getInputField('username').clear().type(randomString);
            cy.getInputField('username')
            .should('have.value',randomString); 
        })

            randomString=cy.generateARandomString().then((randomString)=>{
            cy.getInputField('password').type(randomString);
            cy.getInputField('password')
            .should('have.value',randomString); 
        })
            this.clickSigninButton();
            signinPage.getHeading;
            GeneralPage.getHomeLinkFromUserAccount
            .should('not.exist');
            SigninPage.getUsernameOrPasswordIsInvalid
            .should('be.visible')
            .should('have.text',textData.invalidUsernameOrPwd);
         
    }
    
    generateRandomShortPassword(){
        let randomAlphanumericPwd=cy.task('generateRandomShortPassword').then((randomAlphanumericPwd)=>{
            SigninPage.getInputPasswordHelpertext.should('not.exist');
            cy.getInputField('password').type(randomAlphanumericPwd);
            cy.getInputField('username').clear().type(randomAlphanumericPwd);
            SigninPage.getInputPasswordHelpertext.should('be.visible')
            .should('have.text',textData.passwordIsMorethan4Char);
        })
        SigninPage.getSigninButton.should(($button) => {
            expect($button).to.contain
            .class(textData.buttonDisabledClass);
          });
    }

    signInWithoutRememberingAUser(user){
        this.fillAndVerifySigninform(user);
        this.clickSigninButton({force:true});
         GeneralPage.getHomeLinkFromUserAccount
         .should('be.visible');
        this.openSigninPage();
         signinPage.getHeading;
    }
    signInWithRememberingAUser(user){
        this.fillAndVerifySigninform(user);
        this.checkRememberMeCheckbox();
        this.clickSigninButton();
        generalPage.getHomeLinkFromUserAccount;
        this.openSigninPage();
        GeneralPage.getHomeLinkFromUserAccount
        .should('be.visible');
        GeneralPage.getUsernameOnAccountPage
        .should('be.visible').
        should('contain.text',textData.KatharinaUsername);
    }
} 

export const signinStep=new SigninStep(); 
