import * as XLSX from "xlsx";
import fs from "fs";
import path from "path";
 
export function readExcel(filePath, sheetName) {
  const absolutePath = path.resolve(filePath);
 
  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Excel file not found at path: ${absolutePath}`);
  }
 
  const fileBuffer = fs.readFileSync(absolutePath);
  const workbook = XLSX.read(fileBuffer, { type: "buffer" });
 
  const worksheet = workbook.Sheets[sheetName];
  if (!worksheet) {
    throw new Error(`Sheet '${sheetName}' not found in Excel file.`);
  }
 
  return XLSX.utils.sheet_to_json(worksheet);
}