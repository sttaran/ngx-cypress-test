describe("modal-overlays/dialog page", () => {
  beforeEach(() => {
    cy.visit("//pages/modal-overlays/dialog")
  })

  it("should click required 'Enter Name' button", () => {
    cy.get('nb-card.form-input-card').find('button.status-primary').each(($element)=>{
      cy.wrap($element).click()
    })

    // Перевірка, що модальне вікно показане
    cy.get('nb-card.form-input-card').should('be.visible');

    // Перевірка тексту заголовка модального вікна
    cy.get('.cdk-overlay-container nb-dialog-container nb-card-header').should('have.text', 'Enter your name');

    // Перевірка наявності інпута
    cy.get('nb-card-body input[placeholder="Name"]').should('exist');

    // Перевірка наявності кнопки 'Submit'
    cy.get('.cdk-overlay-container nb-dialog-container button.appearance-filled.size-medium.status-success.shape-rectangle.transitions')
      .should('be.visible');

    // Перевірка наявності кнопки 'Cancel'
    cy.get('.cdk-overlay-container nb-dialog-container button.cancel.appearance-filled.size-medium.status-danger.shape-rectangle.transitions')
      .should('be.visible');
  });
});

