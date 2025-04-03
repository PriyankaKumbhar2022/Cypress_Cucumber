import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import XLSX from "xlsx"; 
import { readExcel } from "./cypress/utils/sample";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

import fs from "fs-extra";

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      allureWriter(on, config);

      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      on("task", {
        readExcelData({ filePath, sheetName }) {
          return readExcel(filePath, sheetName);
        },
      });

      on('before:run', () => {
        console.log("Deleting Allure folders before test run...");
        fs.removeSync('allure-results');
        fs.removeSync('allure-report');


        const screenshotsDir = 'cypress/screenshots';
        // Delete all screenshots before the test run
        if (fs.existsSync(screenshotsDir)) {
          fs.rmSync(screenshotsDir, { recursive: true, force: true });
        }
        console.log("Screenshots folder cleared.");
      });

      return config;
    },
    
    specPattern: "cypress/integration/features/*.feature",
    stepDefinitions: "cypress/support/step_definitions/*.steps.js",

    //reporter: "cypress-multi-reporters",
    reporterOptions: {
      reporterEnabled: "mocha-allure-reporter",
    },
    env: {
      allure: true, // Enable Allure reporting
    },
  },
});