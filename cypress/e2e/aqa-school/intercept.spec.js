import expectedBrands from "../../fixtures/brands/brands.json"
import customBrands from "../../fixtures/brands/custom-brands.json"
import customBrandsLong from "../../fixtures/brands/custom-brands-long.json"
import customModels from "../../fixtures/brands/custom-models.json"

describe('Cypress network', ()=>{
  beforeEach(()=>{
    cy.visit('/')
    cy.get('button.-guest').click()
  })

  it('intercept', ()=>{
      cy.intercept("GET", "/api/cars/brands").as("brands")

      cy.get('button.btn-primary').click()
      cy.get('div.modal-content').should('be.visible')

      cy.wait("@brands").its("response.body.data").should("deep.equal", expectedBrands)
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

  it.only('mock response (too long names)', ()=>{
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

  it('mock response (no brands)', ()=>{
    cy.intercept("GET", "/api/cars/brands", {
      "status": "ok",
      "data": []
    })

    cy.get('button.btn-primary').click()
    cy.get('div.modal-content').should('be.visible')
  })
})
