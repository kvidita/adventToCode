const assert = require("assert");
const { describe, it } = require("node:test");
const { House } = require("../src/house.js");

describe("House", () => {
  describe("giftCount", () => {
    it("should tell the gift count as 0", () => {
      const house = new House();

      assert.strictEqual(house.giftsCount, 0);
    });

    it("should accept the gift and tell the gift count as 1", () => {
      const house = new House();

      house.acceptGift();

      assert.strictEqual(house.giftsCount, 1);
    });

    it("should accept the gift twice and tell the gift count as 2", () => {
      const house = new House();

      house.acceptGift();
      house.acceptGift();

      assert.strictEqual(house.giftsCount, 2);
    });
  });

  describe("location", () => {
    it("should give the location of the house", () => {
      const house = new House({ x: 0, y: 0 });

      assert.deepStrictEqual(house.location, { x: 0, y: 0 });
    });
  });
});