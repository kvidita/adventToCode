const fs = require("fs");

const splitByBlankLines = (text) => text.split("\n\n");

const splitByLines = (calories) => calories.split("\n");

const toNumber = (number) => +number;

const addNumbers = (numbers) => numbers.reduce((sum, number) => sum + number, 0);

const getElfCalories = (elfCalories) => splitByLines(elfCalories).map(toNumber);

const getElvesCalories = (calories) => {
  return splitByBlankLines(calories).map(getElfCalories);
}

const getMaxCalories = (calories) => {
  const elvesCalories = getElvesCalories(calories);

  return Math.max(...elvesCalories.map(addNumbers));
}

const getMaxThreeElvesCalories = (calories) => {
  const elvesCalories = getElvesCalories(calories).map(addNumbers);
  const sortedCalories = elvesCalories.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  })
  const maxThreeElvesCaloreis = addNumbers(sortedCalories.slice(-3));
  return maxThreeElvesCaloreis;
}

const main = () => {
  fs.readFile("./calories.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err)
      return;
    }

    console.log(getMaxCalories(data));
    console.log(getMaxThreeElvesCalories(data));
  })
}

main();