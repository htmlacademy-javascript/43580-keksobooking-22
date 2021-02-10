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

// Функции для создания массива из 10 сгенерированных JS-объектов

const NUMBER_ADS = 10;

const AvatarCount = {
  MIN: 1,
  MAX: 8,
};

const PriceRange = {
  MIN: 1000,
  MAX: 800000,
};

const RoomCount = {
  MIN: 1,
  MAX: 15,
};

const GuestCount = {
  MIN: 1,
  MAX: 20,
};

const Coords = {
  MIN_X: 35.65000,
  MAX_X: 35.70000,
  MIN_Y: 139.70000,
  MAX_Y: 139.80000,
  DIGITS: 5,
};

const TITLES = [
  'Уединенное местечко близ Пика Прыжок Барда',
  'Рукой подать до Руин Бталфта (в этом городе находилась легендарная кузница этерия)',
  'Апартаменты в Солитьюде (не Поместье Высокий шпиль)',
  'Мы знаем',
  'Бюджетный вариант для любителей экстремальных ощущений с видом на Высокий Хротгар',
  'Не можете найти ночлег? Попытайте удачу у дверей Йоррваскра',
  'О цене договоримся (спрашивать Бриньольфа)',
  'Знаешь толк в магии? Коллегия Винтерхолда идеальный вариант',
];

const ACCOMMODATION_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const REGISTRATION_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Слава Ситису!',
  'Комфортное жилье в самом центре крупнейшего процветающего города, расположенного во владении Хаафингар. В пешей доступности различные лавки и таверна Смеющаяся крыса.',
  'Находится в лагере изгоев — в оплоте Потерянная Долина. Здесь имеется несколько красивых водопадов, обрушивающих свои воды вниз.',
  'Распологается на небольшой каменной площадке с парой подходов к ней. Каждый подход украшен аркой в двемерском стиле. На стене у северной арки расположен двемерский конвектор.',
  'Занимает вершину холма над древом Златолист, в центре Ветреного района. В этом помещении расположены спальни. Войдя в зал и посмотрев вперёд, можно сразу увидеть вход в общую спальню — в ней стоит восемь кроватей.',
  'Идеальный вариант расположенный на свободно стоящей скале, состоящей из льда и камня, возвышающейся над морем Призраков. Здание состоит из трёх соединённых между собой башен: Залов достижений и поддержки, Зала стихий и Арканеума — огромной библиотеки.',
  'Отличный вариант для уединённого отдыха, монастырь находится на высоте семи тысяч ступеней на склоне высочайшего пика Скайрима и всего Тамриэля — Глотки Мира.',
  'Не упускайте возможность провести незабываемый романтический уикенд. Здесь можно посетить храм Мары, богини любви. В этом достаточно известном храме проводятся обряды бракосочетания и излечения болезней, есть возможность приобрести амулеты.',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

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

const createAd = () => {
  const COORD_X = getRandomFloat(Coords.MIN_X, Coords.MAX_X, Coords.DIGITS);
  const COORD_Y = getRandomFloat(Coords.MIN_Y, Coords.MAX_Y, Coords.DIGITS);

  return {
    author: {
      avatar: `img/avatars/user0${getRandomInt(AvatarCount.MIN, AvatarCount.MAX)}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${COORD_X}, ${COORD_Y}`,
      price: getRandomInt(PriceRange.MIN, PriceRange.MAX),
      type: getRandomArrayElement(ACCOMMODATION_TYPES),
      rooms: getRandomInt(RoomCount.MIN, RoomCount.MAX),
      guests: getRandomInt(GuestCount.MIN, GuestCount.MAX),
      checkin: getRandomArrayElement(REGISTRATION_TIME),
      checkout: getRandomArrayElement(REGISTRATION_TIME),
      features: getRandomArray(FEATURES, getRandomInt(0, FEATURES.length)),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS, getRandomInt(0, PHOTOS.length)),
    },
    location: {
      x: COORD_X,
      y: COORD_Y,
    },
  }
};

// console.log(
//   getRandomArrayObjects(NUMBER_ADS, createAd)
// );

getRandomArrayObjects(NUMBER_ADS, createAd);
