import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.clearCookies();
    cy.clearLocalStorage(); 
    const screenshotDir = "cypress/screenshots";

  if (fs.existsSync(screenshotDir)) {
    fs.rmdirSync(screenshotDir, { recursive: true }); // Delete all screenshots
    console.log("Screenshots folder cleared.");
  }
});

After(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
