const assert = require("assert");
const { describe, it } = require("node:test");

const { GuiderElf } = require("../src/guide-santa");
const { Santa } = require("../src/santa");
const { Location } = require("../lib/location");

describe("GuiderElf", () => {
  describe("housesVisitedCount", () => {
    it("should be 1 when no instruction is given", () => {
      const location = new Location(0, 0);
      const santa = new Santa(location);
      const guiderElf = new GuiderElf(santa);

      guiderElf.guideSanta("");

      assert.strictEqual(guiderElf.housesVisitedCount, 1);
    });

    it("should be 2 when one instruction is given", () => {
      const location = new Location(0, 0);
      const santa = new Santa(location);
      const guiderElf = new GuiderElf(santa);

      guiderElf.guideSanta("^");

      assert.strictEqual(guiderElf.housesVisitedCount, 2);
    });

    it("should be 2 when instructions are ^v", () => {
      const location = new Location(0, 0);
      const santa = new Santa(location);
      const guiderElf = new GuiderElf(santa);

      guiderElf.guideSanta("^v");

      assert.strictEqual(guiderElf.housesVisitedCount, 2);
    });

    it("should be 2 when instructions are <><><><", () => {
      const location = new Location(0, 0);
      const santa = new Santa(location);
      const guiderElf = new GuiderElf(santa);

      guiderElf.guideSanta("<><><><");

      assert.strictEqual(guiderElf.housesVisitedCount, 2);
    });

    it("should be 3 when two instructions are given", () => {
      const location = new Location(0, 0);
      const santa = new Santa(location);
      const guiderElf = new GuiderElf(santa);

      guiderElf.guideSanta("^>");

      assert.strictEqual(guiderElf.housesVisitedCount, 3);
    });

    it("should be 3 when instructions are <>^", () => {
      const location = new Location(0, 0);
      const santa = new Santa(location);
      const guiderElf = new GuiderElf(santa);

      guiderElf.guideSanta("<>^");

      assert.strictEqual(guiderElf.housesVisitedCount, 3);
    });

    it("should be 3 when instructions are <>^v^v<", () => {
      const location = new Location(0, 0);
      const santa = new Santa(location);
      const guiderElf = new GuiderElf(santa);

      guiderElf.guideSanta("<>^v^v<");

      assert.strictEqual(guiderElf.housesVisitedCount, 3);
    });
  });
});