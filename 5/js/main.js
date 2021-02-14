import {getRandomArrayObjects} from './utils.js';
import {NUMBER_ADS, createAd} from './data.js';
import createPropertyCard from './property-card.js';

const dataList = getRandomArrayObjects(NUMBER_ADS, createAd);
const card = createPropertyCard(dataList[0]);

const map = document.querySelector('#map-canvas');
map.append(card);
