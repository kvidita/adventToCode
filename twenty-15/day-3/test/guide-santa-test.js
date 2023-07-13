const assert = require("assert");
const { describe, it } = require("node:test");

const { GuiderElf } = require("../src/guider-elf.js");
const { Santa } = require("../src/santa");
const { Location } = require("../src/location.js");

describe("GuiderElf", () => {
  describe("housesVisitedCount", () => {
    it("should be 1 when santa does not moves to any direction", () => {
      const location = new Location(0, 0);
      const santa = new Santa(location);
      const guiderElf = new GuiderElf(santa);

      guiderElf.guideSanta("");

      assert.strictEqual(guiderElf.housesVisitedCount, 1);
    });

    it("should be 2 when santa moves back and forth in a direction any number of times", () => {
      const location1 = new Location(0, 0);
      const santa1 = new Santa(location1);
      const guiderElf1 = new GuiderElf(santa1);

      const location2 = new Location(0, 0);
      const santa2 = new Santa(location2);
      const guiderElf2 = new GuiderElf(santa2);

      guiderElf1.guideSanta("^");
      guiderElf2.guideSanta("^v");

      assert.strictEqual(guiderElf1.housesVisitedCount, 2);
      assert.strictEqual(guiderElf2.housesVisitedCount, 2);
    });

    it("should be 3 when santa visits two distinct houses in any direction any number of time", () => {
      const location1 = new Location(0, 0);
      const santa1 = new Santa(location1);
      const guiderElf1 = new GuiderElf(santa1);

      const location2 = new Location(0, 0);
      const santa2 = new Santa(location2);
      const guiderElf2 = new GuiderElf(santa2);

      const location3 = new Location(0, 0);
      const santa3 = new Santa(location3);
      const guiderElf3 = new GuiderElf(santa3);

      guiderElf1.guideSanta("^>");
      guiderElf2.guideSanta("<>^");
      guiderElf3.guideSanta("<>^v^v<");

      assert.strictEqual(guiderElf1.housesVisitedCount, 3);
      assert.strictEqual(guiderElf2.housesVisitedCount, 3);
      assert.strictEqual(guiderElf3.housesVisitedCount, 3);
    });
  });
});