const addNumbers = (numbers) => {
  return numbers.reduce((sum, number) => sum + number
    , 0);
};

exports.addNumbers = addNumbers;