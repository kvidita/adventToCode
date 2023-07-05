const assert = require("assert");
const { describe, it } = require("node:test");
const { splitByBlankLines, splitByLines, toNumber, addNumbers } = require("../lib/utilities.js");

describe("splitByBlankLines", () => {
  it("should split text through blank lines", () => {
    const text = "line seperated by\n\nblank line";
    const actual = ["line seperated by", "blank line"];
    const expected = splitByBlankLines(text);
    assert.deepEqual(actual, expected);
  });

  it("should split empty text through blank lines", () => {
    const text = "\n\n";
    const actual = ["", ""];
    const expected = splitByBlankLines(text);
    assert.deepEqual(actual, expected);
  });
});

describe("splitByLines", () => {
  it("should split empty text by new line character", () => {
    const text = "\n";
    const actual = ["", ""];
    const expected = splitByLines(text);
    assert.deepEqual(actual, expected);
  });

  it("should split text by new line character", () => {
    const text = "text seperated by\nnew line character";
    const actual = ["text seperated by", "new line character"];
    const expected = splitByLines(text);
    assert.deepEqual(actual, expected);
  });
});

describe("toNumber", () => {
  it("should convert the stringified number into number", () => {
    const stringifiedNum = "4";
    const actual = 4;
    const expected = toNumber(stringifiedNum);
    assert.deepEqual(actual, expected);
  });

  it("should not convert any string not containing number", () => {
    const string = "j";
    const actual = NaN;
    const expected = toNumber(string);
    assert.deepEqual(actual, expected);
  });
});

describe("addNumbers", () => {
  it("should return the sum of numbers for empty list", () => {
    const numbers = [];
    const actual = 0;
    const expected = addNumbers(numbers);
    assert.deepEqual(actual, expected);
  });

  it("should return the sum of the numbers provided only one number", () => {
    const numbers = [2];
    const actual = 2;
    const expected = addNumbers(numbers);
    assert.deepEqual(actual, expected);
  });

  it("should return the sum of numbers", () => {
    const numbers = [1, 3, 2, 5];
    const actual = 11;
    const expected = addNumbers(numbers);
    assert.deepEqual(actual, expected);
  });
});