import "cypress-xpath";
/// <reference types="Cypress"/>
import { textData,myAccountdata } from "../data/testdata";
import { GeneralPage, generalPage } from "../pages/generalpage";
import faker from "@faker-js/faker";
import { GeneralStep,generalStep } from "./general-step";
import { MyAccountPage } from "../pages/my-account-page";
import { Input } from "@material-ui/icons";

export class MyAccountStep extends GeneralStep{
    visit(){
        this.openMyAccount();
        cy.url().should("include", "settings");
    }

    signinAndOpenMyAccountWebpage(username,rememberme){
        this.openSigninPage();
        cy.signin({username,rememberme:rememberme});
        cy.intercept('GET' ,'http://localhost:3001/notifications').as('login');
        cy.wait("@login",100000).then(()=>{
            this.visit();
        })
      
        
    }

    getInputField(input){
       return cy.xpath(`//input[@id='user-settings-${input}-input']`)
    }

    checkGraphics(){
        MyAccountPage.getHeading.should('be.visible')
        .should('have.text',myAccountdata.heading);
        MyAccountPage.getImage.should('be.visible');
        MyAccountPage.getSaveButton.should('be.visible');
        myAccountdata.inputFieldsText.forEach(text=>{
            this.getInputField(text).should('be.visible');
        })
        this.checkVisibilityHeaderElements();
        this.checkFooter();
    }
}

export const myAccountStep = new MyAccountStep();