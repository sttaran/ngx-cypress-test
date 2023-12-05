import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    retries: {openMode: 0, runMode: 1},
    baseUrl: 'https://qauto.forstudy.space/',
    specPattern: 'cypress/e2e/aqa-school/**/*.spec.{js,ts}',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
