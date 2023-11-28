import {fillForm} from "../../utils/formUtils";
import FormLayoutsPage from "../../pageObjects/formLayouts/FormLayoutsPage";

describe('Forms page', ()=>{
  it('form', ()=>{
    cy.visit('/pages/forms/layouts')

    const name = 'Stanislav'
    const email = 'test@test.com'
    cy.get('nb-card.inline-form-card').as('form')
    cy.get('@form').find('[placeholder="Jane Doe"]').as('nameInput')
    cy.get('@form').find('[placeholder="Email"]').as('emailInput')

    cy.get('@nameInput').type(name)
    cy.get('@emailInput').type(email)

    cy.get('@nameInput').invoke('val').should('be.equal', name)
    cy.get('@emailInput').invoke('val').should('be.equal', email)

    cy.get('@form').find('[type="submit"]').click()
  })

  it('form (functions)', ()=>{
    cy.visit('/pages/forms/layouts')
    fillForm('Stanislav', 'test@test.com')
  })

  it('form (custom command)', () => {
    cy.visit('/pages/forms/layouts')
    cy.fillForm('Stanislav', 'test@test.com')
  })

  it('form (Page Object model)', () => {
    const formsPage = new FormLayoutsPage()
    formsPage.visit()
    formsPage.fillForm('Page Object', 'pom@test.com')
  })
})
