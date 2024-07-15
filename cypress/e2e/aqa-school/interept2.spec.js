import customBrands from "../../fixtures/brands/custom-brands.json";
import customModels from "../../fixtures/brands/custom-models.json";
import customBrandsLong from "../../fixtures/brands/custom-brands-long.json";


describe('Cypress network', ()=>{

  it.only('intercept', ()=>{
        cy.visit('https://qauto.forstudy.space/')

        const email = 'Stanisalv@test.com'

        cy.intercept('api/auth/signup', (req)=>{
          expect(req.body.email).to.eq(email)
          return req
        })

        cy.get('.btn-primary').click()
        cy.get('#signupName').type('Stanisalv')
        cy.get('#signupLastName').type('Taran')
        cy.get('#signupEmail').type(email)
        cy.get('#signupPassword').type('Password01')
        cy.get('#signupRepeatPassword').type('Password01')

        cy.get('.modal-footer .btn-primary').click()

        cy.get('button').contains('Add car').should('be.visible')
  })
})


describe('Cypress network 2', ()=> {
  beforeEach(() => {
    cy.visit('https://qauto.forstudy.space/')
    cy.get('button.-guest').click()
  })

  it('mock response', ()=>{

    cy.intercept("GET", "/api/cars/brands", {
      "status": "ok",
      "data": customBrands
    })

    cy.intercept("GET", "/api/cars/models?carBrandId=1", {
      "status": "ok",
      "data": customModels
    })

    cy.get('button.btn-primary').click()
    cy.get('div.modal-content').should('be.visible')
  })

  it('mock response (too long names)', ()=>{
    cy.intercept("GET", "/api/cars/brands", {
      "status": "ok",
      "data": customBrandsLong
    })
    cy.intercept("GET", "/api/cars/models?carBrandId=1", {
      "status": "ok",
      "data": customModels
    })

    cy.get('button.btn-primary').click()
    cy.get('div.modal-content').should('be.visible')
  })
})
