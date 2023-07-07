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

const findWrapperArea = (dimensions) => {
  const boxSurfaceArea = findSurfaceArea(dimensions);
  const slack = findSlackArea(dimensions);

  return boxSurfaceArea + slack;
};

module.exports = { findWrapperArea, parseDimensions, findSurfaceArea, findSlackArea, toNumber };