import "cypress-xpath";
/// <reference types="Cypress"/>

export class GeneralPage{
    static get getHeadingCypress(){
        return cy.xpath(`//h1`)
        .should("have.text",'Test. Automate. Accelerate.')
        .should('be.visible');
    }

    static get getHomeLinkFromUserAccount(){
        return cy.xpath(`//div/span[contains(text(),'Home')]`);
    }

    static get getUsernameOnAccountPage(){
        return cy.xpath(`//h6[@data-test='sidenav-username']`);
    }

    static get getHamburgerMenuIcon(){
        return cy.xpath(`//button[@data-test='sidenav-toggle']`);
    }

    static get getRealWorldAppLogo(){
        return cy.xpath(`//h1/a[@href='/']`);
    }

    static get getNewButton(){
        return cy.xpath(`//a[@data-test='nav-top-new-transaction']`);
    }

    static get getNotificationsNumber(){
        return cy.xpath(`//a//span[@data-test='nav-top-notifications-count']/span`);
    }

    static get getNotificationsButton(){
        return cy.xpath(`//a[@data-test='nav-top-notifications-link']//span[@data-test]`);
    }

    static get getSideNavUserPicture(){
        return cy.xpath(`//img[@class='MuiAvatar-img']`)
    }

    static get getSideNavUserFullBame(){
        return cy.xpath(`//h6[@data-test='sidenav-user-full-name']`)
    }

    static get getSideNavUserUsername(){
        return cy.xpath(`(//h6[contains(@class,'MuiTypography-gutterBottom')])[1]`)
    }

    static get getSideNavAccountBalance(){
        return cy.xpath(`//h6[@data-test='sidenav-user-balance']`)
    }

    static get getSideNavaccountbalanceText(){
        return cy.xpath(`(//h6[contains(@class,'MuiTypography-gutterBottom')])[2]`)
    }

    static get getFootertext(){
        return cy.xpath(`//footer//p`)
    }

    static get getFooterLogo(){
        return cy.xpath(`//footer//a`)
    }
}

export const generalPage=new GeneralPage()
