const assert = require("assert");
const { describe, it } = require("node:test");
const { splitByBlankLines, splitByLines } = require("./day-1");

describe("splitByBlankLines", () => {
  it("should split text through blank lines", () => {
    const text = "line seperated by\n\nblank line";
    const actual = ["line seperated by", "blank line"];
    const expected = splitByBlankLines(text);
    assert.deepStrictEqual(actual, expected);
  })

  it("should split empty text through blank lines", () => {
    const text = "\n\n";
    const actual = ["", ""];
    const expected = splitByBlankLines(text);
    assert.deepStrictEqual(actual, expected);
  })
});

describe("splitByLines", () => {
  it("should split empty text by new line character", () => {
    const text = "\n";
    const actual = ["", ""];
    const expected = splitByLines(text);
    assert.deepStrictEqual(actual, expected);
  })

  it("should split text by new line character", () => {
    const text = "text seperated by\nnew line character";
    const actual = ["text seperated by", "new line character"];
    const expected = splitByLines(text);
    assert.deepStrictEqual(actual, expected);
  })

})
