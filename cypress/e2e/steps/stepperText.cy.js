describe("Steps page", () => {
  beforeEach(() => {
    cy.visit("//pages/layout/stepper")
  })

  it("should show valid title on each step", () => {
    const containerSelector = 'nb-card-body nb-stepper.horizontal[orientation="horizontal"]'

    // Step 1
    cy.get(`${containerSelector} h3`).should('have.text', "Step content #1")

    // Step 2
    cy.get(`${containerSelector}`).contains('next').click()
    cy.get(`${containerSelector} h3`).should('have.text', "Step content #2")

    // Step 3
    cy.get(`${containerSelector}`).contains('next').click()
    cy.get(`${containerSelector} h3`).should('have.text', "Step content #3")

    // Step 4
    cy.get(`${containerSelector}`).contains('next').click()
    cy.get(`${containerSelector} h3`).should('have.text', "Step content #4")

    // Verify "NEXT" button is disabled after the last step
    cy.get(`${containerSelector}`).contains('next').should('be.disabled')
  })
});



