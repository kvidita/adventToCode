const fs = require("fs");
const { calculateWrapperArea } = require("./src/gift-wrapper");
const { calculateRibbonLength } = require("./src/gift-ribbon.js");
const { extractDimensions } = require("./src/box-dimension-converter");

const main = () => {
  const inputText = fs.readFileSync("./resources/box-dimensions.txt", "utf-8");

  const dimensions = extractDimensions(inputText);
  const totalWrapperArea = calculateWrapperArea(dimensions);
  const totalRibbonLength = calculateRibbonLength(dimensions);

  console.log("Total wrapper area required is: ", totalWrapperArea);
  console.log("Total ribbon length required is: ", totalRibbonLength);
};

main();