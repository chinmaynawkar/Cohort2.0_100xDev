const { isUtf8 } = require("buffer");
const fs = require("fs");

const filePath =  "/Users/chinmaysmac/Desktop/100xDevCohort/assignments-masterw2/week-2/01-async-js/medium/data.txt";

const fileData = fs.readFileSync(filePath,"utf-8");

const removeSpaces = fileData.replace(/\s+/g, " "); // removes spaces

fs.writeFileSync(filePath, removeSpaces,"utf-8");
console.log("After removing the spaces the content is :", filePath);