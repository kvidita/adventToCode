const assert = require("assert");
const { describe, it } = require("node:test");
const { Santa } = require("../src/santa.js");
const { Location } = require("../lib/location.js");

describe("Santa", () => {
  describe("move", () => {
    it("should move to location 0, 1, when instructed to move up", () => {
      const location = new Location(0, 0);
      const santa = new Santa(location);

      santa.move("North");

      assert.deepStrictEqual(santa.location.coordinates, [0, 1]);
    });

    it("should move to location 1, 0, when instructed to move East", () => {
      const location = new Location(0, 0)
      const santa = new Santa(location);

      santa.move("East");

      assert.deepStrictEqual(santa.location.coordinates, [1, 0]);
    });

    it("should move to location 1, 1, when instruction are as up, right", () => {
      const location = new Location(0, 0)
      const santa = new Santa(location);

      santa.move("North");
      santa.move("East");

      assert.deepStrictEqual(santa.location.coordinates, [1, 1]);
    });
  });
});