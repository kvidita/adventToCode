const splitByBlankLines = (text) => text.split("\n\n");

const splitByLines = (calories) => calories.split("\n");

const toNumber = (number) => +number;

const addNumbers = (numbers) => numbers.reduce((sum, number) => sum + number, 0);

module.exports = { splitByBlankLines, splitByLines, toNumber, addNumbers };