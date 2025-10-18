const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl : 'http://localhost:4000',
    reporter: 'cypress-mochawesome-reporter'
  },
});
