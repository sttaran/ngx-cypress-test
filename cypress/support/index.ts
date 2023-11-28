declare global {
  namespace Cypress {
    interface Chainable {
      fillForm(email: string, password: string): Chainable<void>;
    }
  }
}
