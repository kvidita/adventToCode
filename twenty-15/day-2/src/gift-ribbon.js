const sortNumbers = (numbers) => numbers.sort((a, b) => a - b);

const getBoxRibbonLength = (dimensions) => {
  const [min1, min2] = sortNumbers(dimensions);
  return 2 * (min1 + min2);
};

const sum = (a, b) => a + b;

const calculateWrappingRibbonLength = (dimensions) =>
  dimensions.map(getBoxRibbonLength).reduce(sum, 0);

const getBowRibbonLength = (dimensions) => {
  const [length, bredth, height] = dimensions;
  return length * bredth * height;
};

const calculateBowRibbonLength = (dimensions) =>
  dimensions.map(getBowRibbonLength).reduce(sum, 0);

const calculateRibbonLength = (dimensions) => {
  const wrappingRibbonLength = calculateWrappingRibbonLength(dimensions);
  const bowRibbonLength = calculateBowRibbonLength(dimensions);

  return wrappingRibbonLength + bowRibbonLength;
}

module.exports = {
  calculateWrappingRibbonLength,
  getBoxRibbonLength,
  calculateBowRibbonLength,
  calculateRibbonLength
};