import {getRandomObjects} from './utils.js';
import {NUMBER_ADS, createAd} from './data.js';
import {disableFilterForm} from './filter.js';
import {disableAdForm} from './form.js';
import {initializeMap, addMapMainMarker, addMapMarkers} from './map.js';

const ads = getRandomObjects(NUMBER_ADS, createAd);

disableAdForm();
disableFilterForm();
initializeMap();
addMapMainMarker();
addMapMarkers(ads);
