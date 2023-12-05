import BasePage from "./BasePage";

export default class LoginPage extends BasePage{
  _loginContainerSelector = 'form[aria-labelledby = "title"]'
  _emailInputSelector = 'input#input-email'
  _passwordInputSelector = 'input#input-password'
  _rememberCheckboxSelector = 'span.custom-checkbox'
  _logInBtnSelector = 'button'

  constructor() {
    super('/auth');
  }

  logIn(email,password){
    cy.get(`${this._loginContainerSelector} ${this._emailInputSelector}`).type(email)
    cy.get(`${this._loginContainerSelector} ${this._passwordInputSelector}`).type(password)
    cy.get(`${this._loginContainerSelector} ${this._rememberCheckboxSelector}`).click()
    cy.get(`${this._loginContainerSelector} ${this._logInBtnSelector}`).click()
  }
}
