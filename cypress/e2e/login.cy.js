import login from '../support/pageObjects/login.page'

describe('Validate login', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('Validate initial screen', () =>{
    login.validateVisibleElement();
  })
  it('Success login', () => {
    login.inputCredential('standard_user', 'secret_sauce');
    login.validateLogin();
  })
  it('Fail login - incorret password', () => {
    login.inputCredential('standard_user', 'secret');
    login.validateErrorMsg();
  })
})