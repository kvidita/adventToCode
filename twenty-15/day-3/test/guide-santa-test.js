const assert = require("assert");
const { describe, it } = require("node:test");
const { getTotalHousesVisitedBySanta } = require("../src/guide-santa");
const { Santa } = require("../src/santa");
const { Location } = require("../lib/location");

describe("getTotalHousesVisitedBySanta", () => {
  it("should give the no of houses visited by santa as 1", () => {
    const location = new Location(0, 0);
    const santa = new Santa(location);
    assert.deepStrictEqual(getTotalHousesVisitedBySanta("<", santa), 1);
  });

  it("should give the no of houses visited by santa as 2 for instruction <^", () => {
    const location = new Location(0, 0);
    const santa = new Santa(location);
    assert.deepStrictEqual(getTotalHousesVisitedBySanta("<^", santa), 2);
  });

  it("should give the no of houses visited by santa as 4 for instruction <^>v", () => {
    const location = new Location(0, 0);
    const santa = new Santa(location);
    assert.deepStrictEqual(getTotalHousesVisitedBySanta("<^>v", santa), 4);
  });

  it("should give the no of houses visited by santa as 2 for instruction <^v", () => {
    const location = new Location(0, 0);
    const santa = new Santa(location);
    assert.deepStrictEqual(getTotalHousesVisitedBySanta("<^v", santa), 2);
  });
});