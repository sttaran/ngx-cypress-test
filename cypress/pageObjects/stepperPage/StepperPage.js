import BasePage from "../BasePage";


export default class StepperPage extends BasePage {
  _containerSelector = 'nb-card-body nb-stepper.horizontal[orientation="horizontal"]'
  _titleSelector = 'h3'
  _nextButtonsSelector = 'button:nth-of-type(2)'

  constructor() {
    super('/pages/layout/stepper');
  }

   get title(){
    return cy.get(`${this._containerSelector} ${this._titleSelector}`)
   }

  get nextButton(){
    return cy.get(`${this._containerSelector} ${this._nextButtonsSelector}`)
  }

  clickNextButton(){
    this.nextButton.click()
  }

  validateTitleValue(expectedValue){
    this.title.should('have.text', expectedValue)
  }
}
