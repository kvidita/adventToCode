const { describe, it } = require("node:test");
const { addNumbers } = require("../lib/utilities");
const assert = require("assert");

describe("addNumbers", () => {
  it("should give the sum as 0 when no number is provided", () => {
    assert.deepStrictEqual(addNumbers([]), 0);
  });

  it("should give the sum of 0 as 0", () => {
    assert.deepStrictEqual(addNumbers([0]), 0);
  });

  it("should give the sum of 0 and 4 as 4", () => {
    assert.deepStrictEqual(addNumbers([0, 4]), 4);
  });

  it("should give the sum of 2 and 2 as 4", () => {
    assert.deepStrictEqual(addNumbers([2, 2]), 4);
  });

  it("should give the sum of 2, 3, 4, 5 as 14", () => {
    assert.deepStrictEqual(addNumbers([2, 3, 4, 5]), 14);
  });
});