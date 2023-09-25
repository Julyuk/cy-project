import "cypress-xpath";
/// <reference types="Cypress"/>
import { textData } from "../data/testdata";
import { GeneralPage,generalPage } from "../pages/generalpage";

export class GeneralStep{
    openSigninPage(){
        cy.visit(textData.baseUrl)
    }
    openMyAccount(){
        cy.visit(`${textData.baseUrl}user/settings`);
    }

    checkVisibilityHeaderElements(){
       GeneralPage.getHamburgerMenuIcon.should('be.visible');
       GeneralPage.getRealWorldAppLogo.should('be.visible');
       GeneralPage.getNewButton.should('be.visible').should('include.text','New');
       GeneralPage.getNotificationsNumber.should('be.visible');
       GeneralPage.getNotificationsButton.should('be.visible');
    }

    getSidenavButtonsText(xpath){
        cy.xpath(`//a[@data-test='sidenav-${xpath}']//span']`)
    }

    getSidenavButtonsImage(xpath){
        cy.xpath(`(//a[@data-test='sidenav-${xpath}']//div)[1]`)
    }
    
    checkFooter(){
        GeneralPage.getFootertext.should('be.visible')
        .should('have.text','Built by');
        GeneralPage.getFooterLogo.then((response)=>{
            cy.wrap(response).invoke('removeAttr', 'target')
            .should('be.visible').click();
            generalPage.getHeadingCypress;
        } )
       // GeneralPage.getFooterLogo.should('be.visible').click();
       
    }
}

export const generalStep = new GeneralStep();