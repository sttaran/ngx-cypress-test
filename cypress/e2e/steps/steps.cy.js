
describe("Steps page", ()=>{
beforeEach(()=>{
  cy.visit("//pages/layout/stepper")
})
  it("should show walid title on each step", ()=> {
const containerSelector = 'nb-card-body nb-stepper.horizontal[orientation="horizontal"]'
  cy.get(`${containerSelector} h3`).should('have.text', "Step content #1")
    cy.get(`${containerSelector}`).contains('next').click()
    cy.get(`${containerSelector} h3`).should('have.text', "Step content #2")
    cy.get(`${containerSelector}`).contains('next').click()
    cy.get(`${containerSelector} h3`).should('have.text', "Step content #3")
    cy.get(`${containerSelector}`).contains('next').click()
    cy.get(`${containerSelector} h3`).should('have.text', "Step content #4")
    cy.get(`${containerSelector}`).contains('next').should(`be.disabled`)
  })
});

//Alias
// it("should show walid title on each step (with aliases)", ()=> {
//   cy.get('nb-card-body nb-stepper.horizontal[orientation="horizontal"]').as(`container`)
//   cy.get('@container').find('h3').as('stepperTitle')
//   cy.get('@container').contains('next').as('nextButton')
//   cy.get('@stepperTitle').should('have.text', "Step content #1")
//   cy.get('@nextButton').click()
//   cy.get('@stepperTitle').should('have.text', "Step content #2")
//   cy.get('@nextButton').click()
//   cy.get('@stepperTitle').should('have.text', "Step content #3")
//   cy.get('@nextButton').click()
//   cy.get('@stepperTitle').should('have.text', "Step content #4")
//   cy.get('@nextButton').should(`be.disabled`)
// })

// it("should show valid title on each step (with aliases)", () => {
//   cy.get('nb-card-body nb-stepper.horizontal[orientation="horizontal"]', { timeout: 10000 }).as('container');
//   cy.get('@container').find('h3').as('stepperTitle')
//   cy.get('@container').contains('next').as('nextButton')
//
//   cy.get('@stepperTitle').should('have.text', "Step content #1")
//
//   cy.get('@nextButton').click().then(() => {
//     cy.get('@stepperTitle').should('have.text', "Step content #2")
//   })
//
//   cy.get('@nextButton').click().then(() => {
//     cy.get('@stepperTitle').should('have.text', "Step content #3")
//   })
//
//   cy.get('@nextButton').click().then(() => {
//     cy.get('@stepperTitle').should('have.text', "Step content #4")
//   })
//
//   cy.get('@nextButton').should(`be.disabled`)
// })


