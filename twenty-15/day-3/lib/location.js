class Location {
  #coordinateX;
  #coordinateY;

  constructor(x, y) {
    this.#coordinateX = x;
    this.#coordinateY = y;
  };

  get coordinates() {
    return [this.#coordinateX, this.#coordinateY];
  };

  get North() {
    return new Location(this.#coordinateX, ++this.#coordinateY);
  };

  get West() {
    return new Location(--this.#coordinateX, this.#coordinateY);
  };

  get South() {
    return new Location(this.#coordinateX, --this.#coordinateY);
  };

  get East() {
    return new Location(++this.#coordinateX, this.#coordinateY);
  };
};

exports.Location = Location;