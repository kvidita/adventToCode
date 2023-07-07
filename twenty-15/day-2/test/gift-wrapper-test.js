const assert = require("assert");
const { describe, it } = require("node:test");
const { boxWrapperArea, cuboidSurfaceArea, smallestFaceArea, calculateWrapperArea } = require("../src/gift-wrapper.js");

describe("calculateWrapperArea", () => {
  it("should give 7 when raw dimensions are as 1x1x1", () => {
    assert.strictEqual(calculateWrapperArea([[1, 1, 1]]), 7);
  });

  it("should give 31 when raw dimensions are as 1x1x1\\n1x2x3", () => {
    assert.strictEqual(calculateWrapperArea([[1, 1, 1], [1, 2, 3]]), 31);
  });
});

describe("boxWrapperArea", () => {
  it("should be 7 when all sides of box is 1 unit each", () => {
    assert.strictEqual(boxWrapperArea([1, 1, 1]), 7);
  });

  it("should be 24 when box sides are 1, 2, 3", () => {
    assert.strictEqual(boxWrapperArea([1, 2, 3]), 24);
  });

  it("should be 30 when box sides are 2, 4, 1", () => {
    assert.strictEqual(boxWrapperArea([2, 4, 1]), 30);
  });
});

describe("cuboidSurfaceArea", () => {
  it("should be 6 when cuboid has sides of 1 unit each", () => {
    assert.strictEqual(cuboidSurfaceArea([1, 1, 1]), 6);
  });

  it("should be 16 when cuboid has sides of 2, 1, 2 units", () => {
    assert.strictEqual(cuboidSurfaceArea([2, 1, 2]), 16);
  });

  it("should be 32 when cuboid has sides of 2, 3, 2 units", () => {
    assert.strictEqual(cuboidSurfaceArea([2, 3, 2]), 32);
  });
});

describe("smallestFaceArea", () => {
  it("should be 1 when box has sides of 1, 1, 1 unit each", () => {
    assert.strictEqual(smallestFaceArea([1, 1, 1]), 1);
  });

  it("should be 4 when box has sides of 2, 2, 3 units", () => {
    assert.strictEqual(smallestFaceArea([2, 2, 3]), 4);
  });

  it("should be 2 when box has sides of 1, 2, 3 units", () => {
    assert.strictEqual(smallestFaceArea([1, 2, 3]), 2);
  });
});