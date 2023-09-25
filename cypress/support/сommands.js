///<reference path="../global.d.ts" />
import {specialCharacters, tex} from '../../test-data/data/testdata'
import {signinStep} from '../../../cypress-realworld-app/test-data/steps/signin-step'
Cypress.Commands.add('createUser', (userData) => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/signup', 
      body: userData,  
    });
  });

Cypress.Commands.add('getLogoImage',(num)=>{
    return cy.get(`#root > div > main > div.makeStyles-paper-2 > div > svg > g > path:nth-child(${num})`)
    .should('be.visible');
})

Cypress.Commands.add('getInputField',(num)=>{
    return cy.xpath(`//input[@id='${num}']`)
        .should('be.visible');
})

Cypress.Commands.add('generateARandomString',()=>{
    const randomAlphanumeric=Math.random().toString(36)
    .substring(1,20);
         let randomIndex;
         let randomSpecialCharacter;
        const randomNum=Cypress._.random(0, 20);
       let randomString;

        if (randomNum!=0){
            for(let i=0;i<randomNum;i++){
               randomIndex = Cypress._.random(0, 8);
               specialCharacters[randomIndex]=randomSpecialCharacter ;
                randomString+=randomSpecialCharacter; 
            }
        } else{
            randomIndex = Cypress._.random(0, 8);
            randomSpecialCharacter = specialCharacters[randomIndex];
            randomString+=randomSpecialCharacter;
            }

        randomString=randomAlphanumeric+randomString;

       return randomString;
})

Cypress.Commands.add('loginViaAPI',(username, password = Cypress.env("defaultPassword"))=>{
        return cy.request("POST", `${Cypress.env('apiUrl')}/login`, {
          username,
          password}).then((response) => {
        expect(response.status).to.eq(200);
      });
})

Cypress.Commands.add('signin',({username, password = Cypress.env("defaultPassword"),rememberme})=>{
    cy.getInputField('username').clear().type(username);
    cy.getInputField('password').type(password);
    if(rememberme){
        signinStep.checkRememberMeCheckbox();
    }
    return signinStep.clickSigninButton();
})