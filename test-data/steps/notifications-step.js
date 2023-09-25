import "cypress-xpath";
import { GeneralPage } from "../pages/generalpage";
import { NotificationsPage } from "../pages/notfications-page";
import { GeneralStep } from "./general-step";
/// <reference types="Cypress"/>

export class NotificationsStep extends GeneralStep{

        //1
    getDissmissButton(num){
        return cy.xpath(`(//button/span[@class='MuiButton-label'])[${num}]`)
    }

    //1
    getNotificationIcon(num){
        return cy.xpath(`(//li/div[@class='MuiListItemIcon-root'])[${num}]`)
    }

    //1
    getNotificationText(num){
        return cy.xpath(`(//li/div[@class='MuiListItemText-root'])[${num}]`)
    }
    
}

export const notificationsStep = new NotificationsStep();