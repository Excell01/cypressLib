const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      //defaultCommandTimeout: 8000,
      //pageLoadTimeout ; 1000
    },
  },


});
