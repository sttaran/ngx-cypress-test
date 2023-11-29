describe('Steps page', ()=>{
  beforeEach(()=>{
    cy.visit("/pages/layout/stepper")
  })
  it('First stepper horizontal',()=>{
    cy.get('nb-card-body nb-stepper.horizontal[orientation="horizontal"]').as('container')
    cy.get('@container').find('h3').as('stepperTitle')
    cy.get('@container').contains('next').as('nextButton')

    cy.get('@stepperTitle').should('have.text', 'Step content #1')
    cy.get('@nextButton').click()
    cy.get('@stepperTitle').should('have.text', 'Step content #2')
    cy.get('@nextButton').click()
    cy.get('@stepperTitle').should('have.text', 'Step content #3')
    cy.get('@nextButton').click()
    cy.get('@stepperTitle').should('have.text', 'Step content #4')
    cy.get('@nextButton').should('be.disabled')
  })

  it('Third stepper vertical',()=>{
    const textLine1 = ' Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent metus turpis, commodo vel placerat quis, lobortis in ligula. '
    const textLine2 = ' Curabitur luctus mattis risus nec condimentum. Donec at dui turpis. Sed vehicula fringilla rutrum. Nullam sed ornare magna. Mauris vitae laoreet diam. Mauris fermentum ligula at lacinia semper. Nulla placerat dui eu sapien pellentesque, eu placerat leo luctus. Cras pharetra blandit fermentum. '
    const textLine4 = ' Proin varius accumsan semper. Praesent consequat tincidunt sagittis. Curabitur egestas sem a ipsum bibendum, sit amet fringilla orci efficitur. Nam bibendum lectus ut viverra tristique. Fusce eu pulvinar magna, quis viverra ex. '

    cy.get('nb-card-body nb-stepper.vertical').as('container')
    cy.get('@container').find('h3').as('stepperTitle')
    cy.get('@container').contains('next').as('nextButton')
    cy.get('@container').find('p').as('textLine')

    cy.get('@stepperTitle').should('have.text', 'Step content #1')
    cy.get('@textLine').should('have.text', textLine1)
    cy.get('@nextButton').click()

    cy.get('@stepperTitle').should('have.text', 'Step content #2')
    cy.get('@textLine').should('have.text', textLine2)
    cy.get('@nextButton').click()

    cy.get('@stepperTitle').should('have.text', 'Step content #3')
    cy.get('@nextButton').click()

    cy.get('@stepperTitle').should('have.text', 'Step content #4')
    cy.get('@textLine').should('have.text', textLine4)
    cy.get('@nextButton').should('be.disabled')
  })
})
