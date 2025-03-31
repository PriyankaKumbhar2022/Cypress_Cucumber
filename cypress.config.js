import { defineConfig } from "cypress";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import XLSX from "xlsx"; 

export default defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      on("task", {
        readExcel({ filePath, sheetName }) {
          const workbook = XLSX.readFile(filePath);
          const sheet = workbook.Sheets[sheetName];

          // Read sheet as an array (header: 1 ensures we get raw rows)
          const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

          if (sheetData.length < 2) {
            throw new Error("Excel file does not contain test data");
          }

          const headers = sheetData[0]; // Extract the first row as headers
          const dataRows = sheetData.slice(1); // Remove the first row (headers)

          // Convert data into objects using headers
          const formattedData = dataRows.map((row) => {
            const obj = {};
            headers.forEach((key, i) => {
              obj[key] = row[i] !== undefined ? row[i] : "";
            });
            return obj;
          });

          return formattedData; // ✅ Ensure only actual data is returned
        },
      });

      return config;
    },

    specPattern: "cypress/integration/features/*.feature",
    stepDefinitions: "cypress/support/step_definitions/*.steps.js",
  },
});