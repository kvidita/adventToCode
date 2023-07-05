const fs = require("fs");

const splitByBlankLines = (text) => text.split("\n\n");

const splitByLines = (calories) => calories.split("\n");

const toNumber = (number) => +number;

const addNumbers = (numbers) => numbers.reduce((sum, number) => sum + number, 0);

const getElfCalories = (elfCalories) => splitByLines(elfCalories).map(toNumber);

const getElvesCalories = (calories) => splitByBlankLines(calories).map(getElfCalories);

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

    console.log(
      "The maximum calories among all the elves should be 1000 : ",
      getMaxCalories("1000"));
    console.log(
      "The maximum calories among all the elves should be 2000 : ",
      getMaxCalories("1000\n\n2000"));
    console.log(
      "The maximum calories among all the elves should be 3000 : ",
      getMaxCalories("2000\n\n1000\n2000\n\n"));
    console.log("The maximun calories among all the elves is : ", getMaxCalories(data));

    console.log(
      "The sum of three maximum elves calories should be 2000 : ",
      getMaxThreeElvesCalories("2000"));
    console.log(
      "The sum of three maximum elves calories should be 2000 : ",
      getMaxThreeElvesCalories("1000\n500\n500"));
    console.log(
      "The sum of three maximum elves calories should be 8400 : ",
      getMaxThreeElvesCalories("1000\n500\n500\n\n3000\n500\n2500\n\n100\n\n400"));
    console.log("The sum of three maximum elves calories is : ", getMaxThreeElvesCalories(data));
  })
}

main();

module.exports = {
  splitByBlankLines,
  splitByLines,
  toNumber,
  getElfCalories,
  getElvesCalories,
  getMaxCalories,
  getMaxThreeElvesCalories
};