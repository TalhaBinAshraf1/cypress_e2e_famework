const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      AllureWriter(on, config);
      return config;
    },
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config);
    },
    specPattern: 'cypress/tests/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    chromeWebSecurity: false,
    defaultCommandTimeout: 20000,
    execTimeout: 60000,
    pageLoadTimeout: 60000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    video: false,
    failOnStatusCode: false,
    viewportHeight: 1200,
    viewportWidth: 1920,
    "video": false,
    "screenshotOnRunFailure": true,
  },
});
