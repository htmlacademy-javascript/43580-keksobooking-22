'use strict';

const calculateDiffMinMax = (min, max) => {
  const diff = max - min;

  if (diff <= 0) {
    throw new Error('Значение min не должно быть меньшее или равно max');
  }

  return diff;
};

const getRandomInt = (min, max) => {
  min = Math.floor(Math.abs(min));
  max = Math.floor(Math.abs(max));

  const diff = calculateDiffMinMax(min, max) + 1;

  return Math.floor(Math.random() * diff) + min;
};

const getRandomFloat = (min, max, numberSigns = 2) => {
  min = Math.abs(min);
  max = Math.abs(max);

  const diff = calculateDiffMinMax(min, max);
  const numberRank = 10 ** numberSigns;

  return Math.floor((Math.random() * diff + min) * numberRank) / numberRank;
};

alert(`
  Результаты функций, которые возвращают:

  - случайное целое число из переданного диапазона включительно = ${getRandomInt(1, 10)}
  - случайное число с плавающей точкой из переданного диапазона включительно = ${getRandomFloat(1.1, 10, 3)}
`);
