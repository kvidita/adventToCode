const assert = require("assert");
const { describe, it } = require("node:test");
const { findWrapperArea, parseDimensions, findSurfaceArea, findSlackArea } = require("../src/gift-wrapper.js");

describe("wrapper", () => {
  describe("findWrapperArea", () => {
    it("should give the wrapper area of the right rectangular prism of sides 1foot", () => {
      assert.deepEqual(findWrapperArea("1x1x1"), 7);
    });
  });

  describe("parseDimensions", () => {
    it("should parse the raw dimensions", () => {
      assert.deepEqual(parseDimensions("1x1x1"), ["1", "1", "1"]);
    });
  });

  describe("findSurfaceArea", () => {
    it("should give the surface area of a right rectangular prism of side 1 foot each", () => {
      assert.deepEqual(findSurfaceArea([1, 1, 1]), 6);
    });
  });

  describe("findSlackArea", () => {
    it("should give the slack area required", () => {
      assert.deepEqual(findSlackArea([1, 1, 1]), 1);
    });

    it("should give the slack area for a cuboid of different dimensions", () => {
      assert.deepEqual(findSlackArea([1, 2, 3]), 2);
    });
  });
});