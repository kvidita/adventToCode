const assert = require("assert");
const { describe, it } = require("node:test");

const { Santa } = require("../src/santa.js");
const { Location } = require("../src/location.js");

describe("Santa", () => {
  describe("move", () => {
    it("should be at location 0, 1, when instructed to move to North", () => {
      const location = new Location(0, 0);
      const santa = new Santa(location);

      santa.moveNorth();

      assert.deepStrictEqual(santa.location, [0, 1]);
    });

    it("should be at location 1, 0, when instructed to move to East", () => {
      const location = new Location(0, 0)
      const santa = new Santa(location);

      santa.moveEast();

      assert.deepStrictEqual(santa.location, [1, 0]);
    });

    it("should be at location 1, 1, when instructed to move to North, East", () => {
      const location = new Location(0, 0)
      const santa = new Santa(location);

      santa.moveNorth();
      santa.moveEast();

      assert.deepStrictEqual(santa.location, [1, 1]);
    });
  });
});