const toNumber = (number) => +number;

const splitByLines = (text) => text.split("\n")

const extractDimensions = (rawDimensions) => {
  return splitByLines(rawDimensions).map((boxDimension) => boxDimension.split("x").map(toNumber));
}

exports.extractDimensions = extractDimensions;