const assert = require("assert");
const { describe, it } = require("node:test");
const { Santa } = require("../src/santa.js");
const { Location } = require("../lib/location.js");

describe("Santa", () => {
  describe("move", () => {
    it("should move to location 0, 1, when instructed to move up", () => {
      const santa = new Santa({ x: 0, y: 0 });
      const location = new Location(0, 0);

      santa.move("up");

      assert.deepStrictEqual(santa.location, { x: 0, y: 1 });
    });

    it("should move to location 1, 0, when instructed to move right", () => {
      const santa = new Santa({ x: 0, y: 0 });

      santa.move("right");

      assert.deepStrictEqual(santa.location, { x: 1, y: 0 });
    });

    it("should move to location 1, 1, when instruction are as up, right", () => {
      const santa = new Santa({ x: 0, y: 0 });

      santa.move("up");
      santa.move("right");

      assert.deepStrictEqual(santa.location, { x: 1, y: 1 });
    });
  });
});