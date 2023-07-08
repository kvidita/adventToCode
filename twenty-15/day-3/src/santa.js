class Santa {
  #location;

  constructor(location) {
    this.#location = location;
  };

  move(direction) {
    this.#location = this.#location[direction];
  };

  get location() {
    return this.#location;
  };
};

exports.Santa = Santa;