import "cypress-xpath";
/// <reference types="Cypress"/>

export class NotificationsPage{
    static get getHeading(){
        return cy.xpath(`//h2`);
    }

}

export const notificationsPage = new NotificationsPage();