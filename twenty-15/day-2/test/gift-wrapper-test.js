const assert = require("assert");
const { describe, it } = require("node:test");
const { findWrapperArea, parseDimensions, findSurfaceArea, findSlackArea } = require("../src/gift-wrapper.js");

describe("wrapper", () => {
  describe("findWrapperArea", () => {
    it("should give the wrapper area of the right rectangular prism of sides 1foot", () => {
      assert.deepEqual(findWrapperArea([1, 1, 1]), 7);
      assert.deepStrictEqual(findWrapperArea([1, 2, 3]), 24);
      assert.deepStrictEqual(findWrapperArea([2, 4, 1]), 30);
    });
  });

  describe("findSurfaceArea", () => {
    it("should give the surface area of a right rectangular prism of side 1 foot each", () => {
      assert.deepEqual(findSurfaceArea([1, 1, 1]), 6);
      assert.deepEqual(findSurfaceArea([2, 1, 2]), 16);
      assert.deepEqual(findSurfaceArea([2, 3, 2]), 32);
    });
  });

  describe("findSlackArea", () => {
    it("should give the slack area required", () => {
      assert.deepEqual(findSlackArea([1, 1, 1]), 1);
      assert.deepEqual(findSlackArea([2, 2, 3]), 4);
      assert.deepEqual(findSlackArea([1, 2, 3]), 2);
    });
  });
});