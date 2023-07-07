const { toNumber } = require("../src/gift-wrapper.js");

const splitByLines = (text) => text.split("\n");

const getEachBoxDimensions = (rawDimensions) => {
  return splitByLines(rawDimensions).map((boxDimension) => boxDimension.split("x").map(toNumber));
}

exports.getEachBoxDimensions = getEachBoxDimensions;