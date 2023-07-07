const assert = require("assert");
const { describe, it } = require("node:test");
const { calculateWrappingRibbonLength, getBoxRibbonLength, calculateBowRibbonLength } = require("../src/gift-ribbon");


describe("calculateWrappingRibbonLength", () => {
  it("should give 4 when box sides are 1 unit each", () => {
    assert.strictEqual(calculateWrappingRibbonLength([[1, 1, 1]]), 4);
  });

  it("should give 6 when box sides are 1, 2, 3 units", () => {
    assert.strictEqual(calculateWrappingRibbonLength([[1, 2, 3]]), 6);
  });

  it("should give 6 when box sides are 1, 2, 3 units", () => {
    assert.strictEqual(calculateWrappingRibbonLength([[1, 2, 3]]), 6);
  });

  it("should give 10 when boxes have sides 1, 2, 3 units and 1, 1, 1 unit", () => {
    assert.strictEqual(calculateWrappingRibbonLength([[1, 2, 3], [1, 1, 1]]), 10);
  });

  it("should give 10 when boxes have sides 1, 2, 3 units, 1, 1, 1 unit and 2x3x4", () => {
    const dimensions = [[1, 1, 1], [2, 3, 4], [1, 2, 3]];
    assert.strictEqual(calculateWrappingRibbonLength(dimensions), 20);
  });
});

describe("getBoxRibbonLength", () => {
  it("should be 4 when box dimension is 1x1x1", () => {
    assert.strictEqual(getBoxRibbonLength([1, 1, 1]), 4);
  });

  it("should be 4 when box dimension is 1x2x3", () => {
    assert.strictEqual(getBoxRibbonLength([1, 2, 3]), 6);
  });
});

describe("calculateBowRibbonLength", () => {
  it("should give 1 unit of ribbon when dimension of the box is 1x1x1", () => {
    assert.strictEqual(calculateBowRibbonLength([[1, 1, 1]]), 1);
  });

  it("should give 2 units of ribbon when dimensions of the box is 1x1x2", () => {
    assert.strictEqual(calculateBowRibbonLength([[1, 2, 3]]), 6);
  });
});