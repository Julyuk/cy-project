import "cypress-xpath";
/// <reference types="Cypress"/>

export class MyAccountPage{
     static get getHeading(){
        return cy.xpath(`//h2`);
    }

    static get getImage(){
        return cy.xpath(`(//h2/..//div[contains(@class,'MuiGrid-item')])[1]`)
    }

    static get getSaveButton(){
        return cy.xpath(`//button[@type='submit']`)
    }
}

export const myAccountPage = new MyAccountPage();