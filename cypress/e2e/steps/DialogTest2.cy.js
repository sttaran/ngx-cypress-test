describe("modal-overlays/dialog page", () => {
  beforeEach(() => {
    cy.visit("//pages/modal-overlays/dialog")
  })

  it("should click required 'Enter Name' button", () => {
    cy.get('nb-card.form-input-card').find('button.status-primary').each(($element)=>{
      cy.wrap($element).click()
    })
    });
  });
