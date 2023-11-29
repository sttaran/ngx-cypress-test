describe('Modal overlay page', ()=>{
  beforeEach(()=>{
    cy.visit("/pages/modal-overlays/dialog")
  })
  it('Checking modal window',()=>{
    cy.get('nb-card-body.result-from-dialog').as('container')
    cy.get('@container').contains('Enter Name').as('enterButton')

    cy.get('@enterButton').click()

    cy.get('ngx-dialog-name-prompt.ng-star-inserted nb-card').should('be.visible').as('modal')

    cy.get('@modal').find('nb-card-header').should('be.visible').should('have.text','Enter your name')
    cy.get('@modal').find('nb-card-body input').should('have.attr','placeholder').should('contain','Name')

    cy.get('@modal').find('nb-card-footer button[status = "danger"]').should('be.visible').as('dangerButton')
    cy.get('@dangerButton').should('have.text','Cancel')

    cy.get('@modal').find('nb-card-footer button[status = "success"]').should('be.visible').as('successButton')
    cy.get('@successButton').should('have.text','Submit')
  })
  it('Typing in modal window',()=>{
    const typeText = 'Some text'

    cy.get('nb-card-body.result-from-dialog').as('container')
    cy.get('@container').contains('Enter Name').as('enterButton')

    cy.get('@enterButton').click()

    cy.get('ngx-dialog-name-prompt.ng-star-inserted nb-card').as('modal')
    cy.get('@modal').find('nb-card-body input').as('textField')
    cy.get('@modal').find('nb-card-footer button[status = "danger"]').as('dangerButton')
    cy.get('@modal').find('nb-card-footer button[status = "success"]').as('successButton')
    cy.get('@successButton').should('have.text','Submit')

    cy.get('@textField').type(typeText)
    cy.get('@textField').should('have.value',typeText)
    cy.get('@successButton').click()
    cy.get('@modal').should('not.exist')

    cy.get('nb-card-body.result-from-dialog ul li:last-child').should('contain',typeText)
  })
})
