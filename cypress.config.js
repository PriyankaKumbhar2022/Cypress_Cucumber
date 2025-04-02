import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import XLSX from "xlsx"; 
import { readExcel } from "./cypress/utils/sample";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

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