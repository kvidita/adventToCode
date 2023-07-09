const { describe, it } = require("node:test");
const assert = require("assert");

const { Location } = require("../lib/location");

describe("Location", () => {
  describe("coordinates", () => {
    it("should be 0, 0, when location is created with coordinates of 0, 0", () => {
      const location = new Location(0, 0);
      assert.deepStrictEqual(location.coordinates, [0, 0]);
    });

    it("should be 0, 1, for north location of the location having coordinates of 0, 0", () => {
      const location1 = new Location(0, 0);

      const location2 = location1.North;

      assert.deepStrictEqual(location2.coordinates, [0, 1]);
    });

    it("should be 1, 0, for east location of the location having coordinates of 0, 0", () => {
      const location1 = new Location(0, 0);

      const location2 = location1.East;

      assert.deepStrictEqual(location2.coordinates, [1, 0]);
    });

    it("should be -1, 0, for west location of the location having coordinates of 0, 0", () => {
      const location1 = new Location(0, 0);

      const location2 = location1.West;

      assert.deepStrictEqual(location2.coordinates, [-1, 0]);
    });

    it("should be 0, -1, for east location of the location having coordinates of 0, 0", () => {
      const location1 = new Location(0, 0);

      const location2 = location1.South;

      assert.deepStrictEqual(location2.coordinates, [0, -1]);
    });
  });
});