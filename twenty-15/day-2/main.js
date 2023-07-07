const { findWrapperArea } = require("./src/gift-wrapper");
const { addNumbers } = require("./lib/utilities.js");
const { getEachBoxDimensions } = require("./src/box-dimension-convertor.js")
const fs = require("fs");

const main = () => {
  const rawDimensions = fs.readFileSync("./resources/box-dimensions.txt", "utf-8");
  const dimensions = getEachBoxDimensions(rawDimensions);
  // const dimensions = [[1, 2, 3], [2, 3, 3]];
  const boxesWrapArea = dimensions.map(findWrapperArea);
  const totalWrapArea = addNumbers(boxesWrapArea);
  console.log("Total wrapper area required is: ", totalWrapArea);
};

main();