const assert = require("assert");
const { describe, it } = require("node:test");
const { findWrapperArea } = require("../src/gift-wrapper.js");

describe("findWrapperArea", () => {
  it("should give the surface area of the right rectangular prism of sides 1foot", () => {
    assert.deepEqual(2, findWrapperArea("1x1x1"));
  })
})