class Location {
  #coordinateX;
  #coordinateY;

  constructor(x, y) {
    this.#coordinateX = x;
    this.#coordinateY = y;
  };

  get coordinates() {
    return [this.#coordinateX, this.#coordinateY];
  }

  get North() {
    return new Location(this.#coordinateX, this.#coordinateY + 1);
  };

  get West() {
    return new Location(this.#coordinateX - 1, this.#coordinateY);
  };

  get South() {
    return new Location(this.#coordinateX, this.#coordinateY - 1);
  };

  get East() {
    return new Location(this.#coordinateX + 1, this.#coordinateY);
  };
};

exports.Location = Location;