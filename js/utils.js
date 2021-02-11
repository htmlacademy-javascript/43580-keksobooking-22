const getRandomNumber = (min, max, maxInclusive = 0) => {
  const diff = max - min;

  if (min < 0 || max < 0) {
    throw new Error(`Значения min(${min}) и max(${max}) не должны быть отрицательными`);
  }

  if (diff < 0) {
    throw new Error(`Значение max(${max}) не должно быть меньше min(${min})`);
  }

  return (diff === 0) ? min : Math.random() * (diff + maxInclusive) + min;
};

const getRandomInt = (min, max) => {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error(`Значения min(${min}) и max(${max}) должны быть целочисленными`);
  }

  const randomNumber = getRandomNumber(min, max, 1);

  return Math.floor(randomNumber);
};

const getRandomFloat = (min, max, digits = 2) => {
  const randomNumber = getRandomNumber(min, max);
  const numberRank = 10 ** digits;

  return Math.floor(randomNumber * numberRank) / numberRank;
};

const getRandomArrayElement = (array) => {
  const length = array.length - 1;
  const index = (length >= 0) ? getRandomInt(0, length) : 0;

  return array[index];
};

const getRandomArray = (array, amount = array.length) => {
  const length = array.length;

  if (amount > length || amount < 0) {
    throw new Error(`Значение amount(${amount}) не должно быть отрицательным и больше array.length(${length})`);
  }

  const copyArray = array.slice();
  const newArray = [];

  while (newArray.length < amount) {
    const index = getRandomInt(0, length - 1);
    const element = copyArray.splice(index, 1);

    newArray.push(...element);
  }

  return newArray;
};

const getRandomArrayObjects = (amount, generator) => [...Array(amount)].map(() => generator());

export {getRandomInt, getRandomFloat, getRandomArrayElement, getRandomArray, getRandomArrayObjects};
