import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '8b7x8g',
  e2e: {
    retries: {openMode: 0, runMode: 1},

    baseUrl: 'https://jsonplaceholder.typicode.com/',
    specPattern: 'cypress/e2e/**/*.spec.{js,ts}',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
