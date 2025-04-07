import { Given, When } from '@badeball/cypress-cucumber-preprocessor';

Given("I visit the website with an iframe", () => {
  cy.visit("https://www.tutorialspoint.com/selenium/practice/alerts.php"); // Change this to your iframe-containing page
});

When("I navigate to another page inside the iframe", () => {
  cy.frameLoaded("#iframeID"); // Ensure the iframe is loaded
  cy.iframe("#iframeID").find("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login']").click(); // Click a link inside the iframe
});