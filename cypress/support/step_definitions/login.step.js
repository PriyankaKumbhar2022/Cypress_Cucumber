import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../page_objects/loginPage";
import * as XLSX from 'xlsx';


let testData = [];

before(function () {
  const featureName = Cypress.mocha.getRunner().suite.title;
  
  cy.task("readExcelData", {
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
  LoginPage.navigate();
});

When("I enter valid username and password", () => {
  cy.get("@testData").then((testData) => {
    if (!testData || testData.length === 0) {
      throw new Error("Test Data Is Empty...!!");
    }
 
    const user = testData[0];
 
    if (!user?.username || !user?.password) {
      throw new Error("Missing username or password in test data!");
    }
 
    LoginPage.enterCredentials(user.username, user.password);
 
    if (user.ExpectedResult === "Fail") {
      LoginPage.checkForErrorMessage();
    } else {
      LoginPage.verifyDashboard();
    }
  });
});

When(/^I enter valid username (.*) and Invalid password (.*)$/, (username, password) => {
    LoginPage.enterCredentials(username, password);
});

Then("I should see the dashboard", () => {
    LoginPage.verifyDashboard();
    console.log("Dashboard displayed successfully..")
});

Then("I should see the error popup", () => {
    LoginPage.VerifyInvalidError();
    console.log("Inavlid creadentials error is displayed..")
});
