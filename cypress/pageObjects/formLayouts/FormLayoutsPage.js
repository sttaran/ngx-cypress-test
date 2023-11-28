import BasePage from "../BasePage";

export default class FormLayoutsPage extends BasePage{
  _formContainerSelector = 'nb-card.inline-form-card'
  _nameInputSelector = '[placeholder="Jane Doe"]'
  _emailInputSelector = '[placeholder="Email"]'
  _submitBtnSelector = '[type="submit"]'

  constructor() {
    super('/pages/forms/layouts');
  }


  fillForm(name, email){
    // cy.get(this._formContainerSelector).as('form')
    // cy.get('@form').find(this._nameInputSelector).as('nameInput')
    // cy.get('@form').find(this._emailInputSelector).as('emailInput')
    //
    // cy.get('@nameInput').type(name)
    // cy.get('@emailInput').type(email)
    // cy.get('@form').find(this._submitBtnSelector).click()

    cy.get(`${this._formContainerSelector} ${this._nameInputSelector}`).type(name)
    cy.get(`${this._formContainerSelector} ${this._emailInputSelector}`).type(email)
    cy.get(`${this._formContainerSelector} ${this._submitBtnSelector}`).click()
  }
}
