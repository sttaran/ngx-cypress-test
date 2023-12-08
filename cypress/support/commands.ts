/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
import '@bahmutov/cy-api'

declare global {
  namespace Cypress {
    interface Chainable {
      fillForm(email: string, password: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('fillForm', (name, email) => {
  cy.get('nb-card.inline-form-card').as('form');
  cy.get('@form').find('[placeholder="Jane Doe"]').as('nameInput');
  cy.get('@form').find('[placeholder="Email"]').as('emailInput');

  cy.get('@nameInput').type(name);
  cy.get('@emailInput').type(email);

  cy.get('@form').find('[type="submit"]').click();
});

Cypress.Commands.overwrite('visit', (originalVisit, url, options = {}) => {
  const auth = {
    username: 'guest',
    password: 'welcome2qauto',
  };

  options.onBeforeLoad = (contentWindow) => {
    const base64Credentials = btoa(`${auth.username}:${auth.password}`);
    contentWindow.fetch = null; // Disable fetch to prevent any unexpected behavior
    contentWindow.XMLHttpRequest.prototype.originalOpen = contentWindow.XMLHttpRequest.prototype.open;

    contentWindow.XMLHttpRequest.prototype.open = function (method, url) {
      this.originalOpen(method, url, true, auth.username, auth.password);
    };
  };

  return originalVisit(url, options);
});
