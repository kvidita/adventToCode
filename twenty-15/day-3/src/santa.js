class Santa {
  #location;

  constructor(location) {
    this.#location = location;
  };

  moveNorth() {
    this.#location = this.#location.North;
  };

  moveEast() {
    this.#location = this.#location.East;
  };

  moveWest() {
    this.#location = this.#location.West;
  };

  moveSouth() {
    this.#location = this.#location.South;
  };

  get location() {
    return this.#location.coordinates;
  };
};

class Santas {
  #santas;
  #currentSanta;

  constructor(santa1, santa2) {
    this.#santas = [santa1, santa2];
    this.#currentSanta = this.#santas[0];
  };

  get currentSantaLocation() {
    return this.#currentSanta.location;
  }

  get currentSanta() {
    return this.#currentSanta;
  }

  swapSantas() {
    [this.#currentSanta] = this.#santas.reverse();
  };
};

module.exports = { Santa, Santas };