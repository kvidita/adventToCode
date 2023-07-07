const assert = require("assert");
const { describe, it } = require("node:test");
const { extractDimensions } = require("../src/box-dimension-converter");


describe("getEachBoxDimensions", () => {
  it("should transform 1x1x1 to [[1, 1, 1]]", () => {
    assert.deepStrictEqual(extractDimensions("1x1x1"), [[1, 1, 1]]);
  });

  it("should transform 1x1x1\\n1x2x3 to [[1, 1, 1], [1, 2, 3]]", () => {
    assert.deepStrictEqual(extractDimensions("1x1x1\n1x2x3"), [[1, 1, 1], [1, 2, 3]]);
  });
});