import { Before, After } from "@badeball/cypress-cucumber-preprocessor";
import { beforeEach, afterEach } from "mocha";

beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    clearCookies: true
  
});

afterEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
