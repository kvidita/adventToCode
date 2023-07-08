class House {
  #location;
  #totalGifts;

  constructor(location) {
    this.#location = location;
    this.#totalGifts = 0;
  };

  acceptGift() {
    this.#totalGifts++;
  };

  get location() {
    return this.#location;
  }

  get giftsCount() {
    return this.#totalGifts;
  };
};

exports.House = House;