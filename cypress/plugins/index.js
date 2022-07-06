/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = (on, config) => {
  allureWriter(on, config);
  return config;
};
