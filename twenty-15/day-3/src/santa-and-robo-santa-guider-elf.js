class SantasGuiderElf {
  #santas;
  #housesVisited;

  constructor(santas) {
    this.#santas = santas;
    this.#housesVisited = new Set(
      [santas.currentSantaLocation.toString()]
    );
  };

  #newDirection(santa, instruction) {
    const DIRECTIONS = {
      "^": () => santa.moveNorth(),
      "<": () => santa.moveWest(),
      ">": () => santa.moveEast(),
      "v": () => santa.moveSouth()
    };

    DIRECTIONS[instruction]();
  };

  guideSantaAndRoboSanta(instructions) {
    [...instructions].forEach((instruction) => {
      this.#newDirection(this.#santas.currentSanta, instruction);
      const houseId = this.#santas.currentSantaLocation.toString();
      this.#housesVisited.add(houseId);
      this.#santas.swapSantas();
    });
  };

  get visitedHousesCount() {
    return this.#housesVisited.size;
  };
};

exports.SantasGuiderElf = SantasGuiderElf;