import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../page_objects/loginPage";
import * as XLSX from 'xlsx';

let testData = [];

before(function () {
    cy.task("readExcel", {
      filePath: "cypress/fixtures/LoginData.xlsx",
      sheetName: "Sheet1",
    }).then((data) => {
      if (!data || data.length === 0) {
        throw new Error("Excel file is empty or not properly loaded.");
      }
      cy.wrap(data).as("testData");
    });
  });

  
Given("I open the login page", () => {
    loginPage.navigate();
});

When(/^I enter valid username (.*) and password (.*)$/, (username, password) => {
    loginPage.enterCredentials(username, password);
});

When(/^I enter valid username (.*) and Invalid password (.*)$/, (username, password) => {
    loginPage.enterCredentials(username, password);
});

Then("I should see the dashboard", () => {
    loginPage.verifyDashboard();
    console.log("Dashboard displayed successfully..")
});

Then("I should see the error popup", () => {
    loginPage.VerifyInvalidError();
    console.log("Inavlid creadentials error is displayed..")
});
