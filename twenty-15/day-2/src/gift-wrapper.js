const rectangleArea = (length, height) => length * height;

const cuboidSurfaceArea = ([l, b, h]) => {
  const surfaceArea = 2 * (
    rectangleArea(l, b) +
    rectangleArea(b, h) +
    rectangleArea(h, l));
  return surfaceArea;
};

const sortNumbers = (numbers) => numbers.sort((a, b) => a - b);

const smallestFaceArea = (dimensions) => {
  const [min1, min2] = sortNumbers(dimensions);
  return min1 * min2;
};

const boxWrapperArea = (boxDimensions) => {
  const boxSurfaceArea = cuboidSurfaceArea(boxDimensions);
  const slackArea = smallestFaceArea(boxDimensions);

  return boxSurfaceArea + slackArea;
};

const calculateWrapperArea = (dimensions) => {
  const boxesWrapperArea = dimensions.map(boxWrapperArea);

  return boxesWrapperArea.reduce((total, wrapperArea) => total + wrapperArea);
};

module.exports = {
  boxWrapperArea,
  cuboidSurfaceArea,
  smallestFaceArea,
  calculateWrapperArea
};