import StepperPage from "../../pageObjects/stepperPage/StepperPage";

describe('Steps page', ()=>{
  const stepperPage = new StepperPage()
  beforeEach(()=>{
    stepperPage.visit()
  })


  it('should show valid title on each step', () => {

    const containerSelector = 'nb-card-body nb-stepper.horizontal[orientation="horizontal"]'

    cy.get(`${containerSelector} h3`).should('have.text', "Step content #1")
    cy.get(`${containerSelector}`).contains('next').click()

    cy.get(`${containerSelector} h3`).should('have.text', "Step content #2")
    cy.get(`${containerSelector}`).contains('next').click()

    cy.get(`${containerSelector} h3`).should('have.text', "Step content #3")
    cy.get(`${containerSelector}`).contains('next').click()

    cy.get(`${containerSelector} h3`).should('have.text', "Step content #4")
    cy.get(`${containerSelector}`).contains('next').should('be.disabled')
  });

  it('should show valid title on each step (with aliases)', () => {
    cy.get('nb-card-body nb-stepper.horizontal[orientation="horizontal"]').as('container')
    cy.get('@container').find('h3').as('stepperTitle')
    cy.get('@container').contains('next').as('nextButton')

    cy.get('@stepperTitle').should('have.text', "Step content #1")
    cy.get('@nextButton').click()

    cy.get('@stepperTitle').should('have.text', "Step content #2")
    cy.get('@nextButton').click()

    cy.get('@stepperTitle').should('have.text', "Step content #3")
    cy.get('@nextButton').click()

    cy.get('@stepperTitle').should('have.text', "Step content #4")
    cy.get('@nextButton').should('be.disabled')
  });

  it('should show valid title on each step (with POM)', () => {
    stepperPage.title.should('have.text', "Step content #1")
    stepperPage.nextButton.click()

    stepperPage.title.should('have.text', "Step content #2")
    stepperPage.nextButton.click()

    stepperPage.title.should('have.text', "Step content #3")
    stepperPage.nextButton.click()

    stepperPage.title.should('have.text', "Step content #4")
    stepperPage.nextButton.should('be.disabled')
  });

  it.only('should show valid title on each step (with POM 2)', () => {
    stepperPage.validateTitleValue( "Step content #1")
    stepperPage.clickNextButton()

    stepperPage.validateTitleValue( "Step content #2")
    stepperPage.clickNextButton()

    stepperPage.validateTitleValue( "Step content #3")
    stepperPage.clickNextButton()

    stepperPage.validateTitleValue( "Step content #4")
    stepperPage.nextButton.should('be.disabled')
  });
})
