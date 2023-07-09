class GuiderElf {
  #housesVisited;
  #santa;

  constructor(santa) {
    this.#santa = santa;
    this.#housesVisited = new Set([santa.location.toString()]);
  }

  guideSanta(instructions) {
    const DIRECTIONS = {
      "^": () => this.#santa.moveNorth(),
      "<": () => this.#santa.moveWest(),
      ">": () => this.#santa.moveEast(),
      "v": () => this.#santa.moveSouth()
    };

    [...instructions].forEach((instruction) => {
      DIRECTIONS[instruction]();
      const houseId = this.#santa.location.toString();
      this.#housesVisited.add(houseId);
    });
  };

  get housesVisitedCount() {
    return this.#housesVisited.size;
  };
};

exports.GuiderElf = GuiderElf;