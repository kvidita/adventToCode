const { describe, it } = require("node:test");
const assert = require("assert");

const { Santa, Santas } = require("../src/santa");
const { Location } = require("../src/location");
const { SantasGuiderElf } = require("../src/santa-and-robo-santa-guider-elf.js");

describe("SantasGuiderElf", () => {
  describe("visitedHousesCount", () => {
    it("should be 1 when neither santa nor robo-santa visits any house other than initial house", () => {
      const location = new Location(0, 0);
      const santa = new Santa(location);
      const roboSanta = new Santa(location);
      const santas = new Santas(santa, roboSanta);
      const santasGuiderElf = new SantasGuiderElf(santas);

      assert.strictEqual(santasGuiderElf.visitedHousesCount, 1);
    });

    it("should be 2 when only santa visits a house other than initial house", () => {
      const location = new Location(0, 0);
      const santa = new Santa(location);
      const roboSanta = new Santa(location);
      const santas = new Santas(santa, roboSanta);
      const santasGuiderElf = new SantasGuiderElf(santas);

      santasGuiderElf.guideSantaAndRoboSanta("<");

      assert.strictEqual(santasGuiderElf.visitedHousesCount, 2);
    });

    it("should be 3 when santa and roboSanta moves back and forth in two directions respectively, any number of times", () => {
      const location = new Location(0, 0);
      const santa = new Santa(location);
      const roboSanta = new Santa(location);
      const santas = new Santas(santa, roboSanta);
      const santasGuiderElf = new SantasGuiderElf(santas);

      santasGuiderElf.guideSantaAndRoboSanta("<>");

      assert.strictEqual(santasGuiderElf.visitedHousesCount, 3);
    });
  });
});