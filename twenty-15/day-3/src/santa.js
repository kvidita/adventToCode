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

//how santa should interact with location class. should location be a class ?

exports.Santa = Santa;