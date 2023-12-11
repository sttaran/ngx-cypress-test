export default class BasePage{
  constructor(url) {
    this._url = url
  }
  visit(){
    cy.visit(this._url)
  }
}
