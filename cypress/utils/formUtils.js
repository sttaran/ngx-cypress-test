export function fillForm(name, email){
  cy.get('nb-card.inline-form-card').as('form')
  cy.get('@form').find('[placeholder="Jane Doe"]').as('nameInput')
  cy.get('@form').find('[placeholder="Email"]').as('emailInput')

  cy.get('@nameInput').type(name)
  cy.get('@emailInput').type(email)

  cy.get('@form').find('[type="submit"]').click()
}
