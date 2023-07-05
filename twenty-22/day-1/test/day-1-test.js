const assert = require("assert");
const { describe, it } = require("node:test");
const {
  splitByBlankLines,
  splitByLines,
  toNumber,
  getElfCalories,
  getElvesCalories,
  getMaxCalories,
  getMaxThreeElvesCalories
} = require("../src/day-1");

describe("getElfCalories", () => {
  it("should give the calories of single food for an elf", () => {
    const calories = "200";
    const actual = [200];
    const expected = getElfCalories(calories);
    assert.deepStrictEqual(actual, expected);
  });

  it("should give the calories for foods for the elf", () => {
    const calories = "200\n200";
    const actual = [200, 200];
    const expected = getElfCalories(calories);
    assert.deepStrictEqual(actual, expected);
  });

  it("should give the calories for multiple food items for the elf", () => {
    const calories = "200\n300\n100\n300";
    const actual = [200, 300, 100, 300];
    const expected = getElfCalories(calories);
    assert.deepStrictEqual(actual, expected);
  });
});

describe("getElvesCalories", () => {
  it("should give calories for single elf", () => {
    const calories = "200";
    const actual = [[200]];
    const expected = getElvesCalories(calories);
    assert.deepStrictEqual(actual, expected);
  });

  it("should give calories for multiple elves", () => {
    const calories = "200\n\n300";
    const actual = [[200], [300]];
    const expected = getElvesCalories(calories);
    assert.deepStrictEqual(actual, expected);
  });

  it("should give calories for multiple elves and multiple clories", () => {
    const calories = "200\n300\n500\n\n400\n200";
    const actual = [[200, 300, 500], [400, 200]];
    const expected = getElvesCalories(calories);
    assert.deepStrictEqual(actual, expected);
  });
});

describe("getMaxCalories", () => {
  it("should give the max calories for one elf", () => {
    const calories = "200";
    const actual = 200;
    const expected = getMaxCalories(calories);
    assert.deepStrictEqual(actual, expected);
  });

  it("should give the max calories of given elves", () => {
    const calories = "200\n\n400";
    const actual = 400;
    const expected = getMaxCalories(calories);
    assert.deepStrictEqual(actual, expected);
  });

  it("should give the max calories for multiple elves and multiple calories", () => {
    const calories = "200\n100\n\n300\n400";
    const actual = 700;
    const expected = getMaxCalories(calories);
    assert.deepStrictEqual(actual, expected);
  });
});

describe("getMaxThreeElvesCalories", () => {
  it("should give the sum of max three elves calories when provided one elf's calories", () => {
    const calories = "400";
    const actual = 400;
    const expected = getMaxThreeElvesCalories(calories);
    assert.deepStrictEqual(actual, expected);
  });

  it("should give the sum of max three elves calories when provided one elf's and multiple calories", () => {
    const calories = "200\n100\n300";
    const actual = 600;
    const expected = getMaxThreeElvesCalories(calories);
    assert.deepStrictEqual(actual, expected);
  });

  it("should give the sum of max three elves calories for a number of elves", () => {
    const calories = "200\n100\n\n300\n400\n\n900\n\n100";
    const actual = 1900;
    const expected = getMaxThreeElvesCalories(calories);
    assert.deepStrictEqual(actual, expected);
  });
});