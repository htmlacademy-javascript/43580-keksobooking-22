'use strict';

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

const getRandomInt= (min, max) => {
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    throw new Error(`Значения min(${min}) и max(${max}) должны быть целочисленными`);
  }

  const randomNumber = getRandomNumber(min, max, 1);

  return Math.floor(randomNumber);
};

const getRandomFloat = (min, max, numberSigns = 2) => {
  const randomNumber = getRandomNumber(min, max);
  const numberRank = 10 ** numberSigns;

  return Math.floor(randomNumber * numberRank) / numberRank;
};

alert(`
  Результаты функций, которые возвращают:

  - случайное целое число из переданного диапазона включительно = ${getRandomInt(1, 10)}
  - случайное число с плавающей точкой из переданного диапазона включительно = ${getRandomFloat(1.1, 10, 3)}
`);
