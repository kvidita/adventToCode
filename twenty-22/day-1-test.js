const assert = require("assert");
const { describe, it } = require("node:test");
const { splitByBlankLines, splitByLines, toNumber } = require("./day-1");

describe("splitByBlankLines", () => {
  it("should split text through blank lines", () => {
    const text = "line seperated by\n\nblank line";
    const actual = ["line seperated by", "blank line"];
    const expected = splitByBlankLines(text);
    assert.deepStrictEqual(actual, expected);
  });

  it("should split empty text through blank lines", () => {
    const text = "\n\n";
    const actual = ["", ""];
    const expected = splitByBlankLines(text);
    assert.deepStrictEqual(actual, expected);
  });
});

describe("splitByLines", () => {
  it("should split empty text by new line character", () => {
    const text = "\n";
    const actual = ["", ""];
    const expected = splitByLines(text);
    assert.deepStrictEqual(actual, expected);
  });

  it("should split text by new line character", () => {
    const text = "text seperated by\nnew line character";
    const actual = ["text seperated by", "new line character"];
    const expected = splitByLines(text);
    assert.deepStrictEqual(actual, expected);
  });
});

describe("toNumber", () => {
  it("should convert the stringified number into number", () => {
    const stringifiedNum = "4";
    const actual = 4;
    const expected = toNumber(stringifiedNum);
    assert.deepStrictEqual(actual, expected);
  });

  it("should not convert any string not containing number", () => {
    const string = "j";
    const actual = NaN;
    const expected = toNumber(string);
    assert.deepStrictEqual(actual, expected);
  });
});
