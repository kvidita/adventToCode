const { splitByBlankLines, splitByLines, toNumber, addNumbers } = require("../lib/utilities.js");

const getElfCalories = (calories) => splitByLines(calories).map(toNumber);

const getElvesCalories = (calories) => splitByBlankLines(calories).map(getElfCalories);

const getMaxCalories = (calories) => {
  const elvesCalories = getElvesCalories(calories).map(addNumbers);
  return Math.max(...elvesCalories);
};

const getMaxThreeElvesCalories = (calories) => {
  const elvesCalories = getElvesCalories(calories).map(addNumbers);
  const sortedCalories = elvesCalories.sort((a, b) => a - b);
  const maxThreeElvesCaloreis = addNumbers(sortedCalories.slice(-3));

  return maxThreeElvesCaloreis;
};

module.exports = {
  getElfCalories,
  getElvesCalories,
  getMaxCalories,
  getMaxThreeElvesCalories
};