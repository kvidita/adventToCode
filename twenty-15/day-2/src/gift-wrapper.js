const toNumber = (number) => +number;

const parseDimensions = (rawDimension) => {
  return rawDimension.split("x").map(toNumber);
};

const findSurfaceArea = (dimensions) => {
  const [l, b, h] = dimensions;
  return 2 * (l * b + b * h + h * l);
};

const findSlackArea = (dimensions) => {
  const [min1, min2] = dimensions.sort((a, b) => a - b);
  return min1 * min2;
};

const findWrapperArea = (boxDimensions) => {
  const dimensions = parseDimensions(boxDimensions);
  const boxSurfaceArea = findSurfaceArea(dimensions);
  const slack = findSlackArea(dimensions);

  return boxSurfaceArea + slack;
};

findWrapperArea("1x1x1")

module.exports = { findWrapperArea, parseDimensions, findSurfaceArea, findSlackArea };