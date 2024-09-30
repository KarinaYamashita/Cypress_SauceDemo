const loginElements = require('../elements/login.elements').LOGINITEMS
const homeElements = require('../elements/home.elements').HOMEITEMS

class Login {
    validateVisibleElement(){
        cy.get(loginElements.inputUsername).should('be.visible');
        cy.get(loginElements.inputPassword).should('be.visible');
        cy.get(loginElements.submitBtn).should('be.visible');
    }
    inputCredential(userName, password){
        cy.get(loginElements.inputUsername).type(userName);
        cy.get(loginElements.inputPassword).type(password);
        cy.get(loginElements.submitBtn).click();
    }
    validateLogin(){
        cy.get(homeElements.productLabel).should('be.visible')
        .and('have.text', "Products")
        cy.get(homeElements.productBtn1).should('exist')
    }
    validateErrorMsg(){
    }
}

export default new Login();